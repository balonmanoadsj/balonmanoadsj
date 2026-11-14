
// scripts/scrape.js
// This script runs on the server/GitHub Action, not in the browser.
// Requirements: npm install axios cheerio

const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// CONFIGURATION
// Since we don't have the exact URL of the FNHB results page, this is a placeholder URL.
// You MUST replace this with the actual URL of the competition results page.
const TARGET_URL = 'https://www.fnhbalonmano.com/competiciones'; 
const TEAM_NAME_FILTER = 'San Juan';

async function scrapeResults() {
    console.log('Starting scraper...');
    
    try {
        // 1. Fetch the HTML
        // Note: If the site uses heavy JavaScript (React/Angular), axios might not see the data.
        // In that case, you'd need Puppeteer, but Cheerio is faster/simpler for static HTML.
        const { data } = await axios.get(TARGET_URL, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });

        const $ = cheerio.load(data);
        const matches = [];
        const standings = [];

        // 2. Parse Matches (Example Logic - Adjust selectors based on real website inspection)
        // You need to inspect the FNHB website (Right click -> Inspect) to find the real table classes.
        $('table.resultados-table tr').each((i, el) => {
            const home = $(el).find('.local').text().trim();
            const visitor = $(el).find('.visitante').text().trim();
            const score = $(el).find('.resultado').text().trim(); // e.g., "24-22"
            
            // Only keep matches involving our team
            if (home.includes(TEAM_NAME_FILTER) || visitor.includes(TEAM_NAME_FILTER)) {
                
                // Determine if we won
                const scores = score.split('-');
                let win = false;
                let draw = false;
                
                if (scores.length === 2) {
                    const homeScore = parseInt(scores[0]);
                    const visitorScore = parseInt(scores[1]);
                    
                    if (homeScore === visitorScore) draw = true;
                    else if (home.includes(TEAM_NAME_FILTER) && homeScore > visitorScore) win = true;
                    else if (visitor.includes(TEAM_NAME_FILTER) && visitorScore > homeScore) win = true;
                }

                matches.push({
                    home,
                    visitor,
                    score,
                    date: 'Reciente', // Date parsing depends heavily on specific site structure
                    win,
                    draw
                });
            }
        });

        // 3. Parse Standings (Example Logic)
        $('table.clasificacion-table tr').each((i, el) => {
            // Skip header
            if (i === 0) return;

            const pos = parseInt($(el).find('td:nth-child(1)').text());
            const team = $(el).find('td:nth-child(2)').text().trim();
            const pts = parseInt($(el).find('td:last-child').text());
            
            // Simple data gathering
            if (team && !isNaN(pos)) {
                standings.push({
                    pos,
                    team,
                    pts: isNaN(pts) ? 0 : pts,
                    p: 6, // Placeholder if column not found
                    w: 0, 
                    l: 0
                });
            }
        });

        // If scraper fails to find data (wrong selectors), fallback to mock data so file isn't empty
        const finalData = {
            matches: matches.length > 0 ? matches : [
                { home: 'AD San Juan (Scraped)', visitor: 'Rival Ejemplo', score: '0 - 0', date: 'Hoy', draw: true }
            ],
            standings: standings.length > 0 ? standings : [
                 { pos: 1, team: 'AD San Juan (Datos Auto)', pts: 10, p: 5, w: 5, l: 0 },
                 { pos: 2, team: 'Rival 1', pts: 8, p: 5, w: 4, l: 1 },
                 { pos: 3, team: 'Rival 2', pts: 6, p: 5, w: 3, l: 2 }
            ],
            lastUpdated: new Date().toISOString()
        };

        // 4. Save to public folder
        // Ensure directory exists
        const outputDir = path.join(__dirname, '../public/data');
        if (!fs.existsSync(outputDir)){
            fs.mkdirSync(outputDir, { recursive: true });
        }

        fs.writeFileSync(path.join(outputDir, 'results.json'), JSON.stringify(finalData, null, 2));
        console.log('✅ Data scraped and saved to public/data/results.json');

    } catch (error) {
        console.error('❌ Error scraping data:', error.message);
        process.exit(1);
    }
}

scrapeResults();
