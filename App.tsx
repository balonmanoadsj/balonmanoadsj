import React, { useState, useRef, useEffect } from 'react';
import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { NAV_LINKS } from './constants';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('inicio');

    const homeRef = useRef<HTMLDivElement>(null);
    const teamsRef = useRef<HTMLDivElement>(null);
    const resultsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const sectionRefs = [
        { id: NAV_LINKS[0].id, ref: homeRef }, // inicio
        { id: NAV_LINKS[1].id, ref: teamsRef }, // equipos
        { id: NAV_LINKS[2].id, ref: resultsRef }, // resultados
        { id: NAV_LINKS[3].id, ref: contactRef }, // contacto
    ];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-80px 0px -50% 0px', // Trigger when top of section is 80px from top of viewport
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sectionRefs.forEach(({ ref }) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            sectionRefs.forEach(({ ref }) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="bg-white">
            <Header activeSection={activeSection} />
            <main>
                <HomeSection ref={homeRef} id={NAV_LINKS[0].id} />
                <GallerySection ref={teamsRef} id={NAV_LINKS[1].id} />
                <LocationSection ref={resultsRef} id={NAV_LINKS[2].id} />
                <ContactSection ref={contactRef} id={NAV_LINKS[3].id} />
            </main>
            <Footer />
        </div>
    );
};

export default App;