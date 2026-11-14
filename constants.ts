
// Fix: Replaced placeholder content with actual constant definitions.
// Note: You can replace this URL with the specific image file path if you are hosting it locally.
export const LOGO_URL = 'https://agrupacionadsj.com/wp-content/uploads/2021/09/Logo-Solo-Escudo-Color-300x300.png';
export const NEWS_IMAGE_URL = 'https://images.unsplash.com/photo-1541252260730-0472e6b21042?q=80&w=2070&auto=format&fit=crop';
export const HERO_BG_URL = 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=2000&auto=format&fit=crop';

export const NAV_LINKS = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'equipos', label: 'Equipos' },
    { id: 'resultados', label: 'Resultados' },
    { id: 'contacto', label: 'Contacto' },
];

export const TEAMS = [
    { name: 'Juvenil Femenino', image: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?q=80&w=1974&auto=format&fit=crop' },
    { name: 'Infantil Femenino', image: 'https://images.unsplash.com/photo-1599481238640-4c1288750d7a?q=80&w=1887&auto=format&fit=crop' },
    { name: 'Alevín Mixto', image: 'https://images.unsplash.com/photo-1521223617759-4512d7c83143?q=80&w=1887&auto=format&fit=crop' },
    { name: 'Benjamín Mixto A', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Benjamín Mixto B', image: 'https://images.unsplash.com/photo-1560272564-c83b66b17485?q=80&w=1974&auto=format&fit=crop' },
];

// Add your photos here. Use local paths (e.g., '/images/photo1.jpg') or external URLs.
export const GALLERY_IMAGES = [
    { src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1936&auto=format&fit=crop', alt: 'Partido intenso' },
    { src: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop', alt: 'Entrenamiento' },
    { src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop', alt: 'Gol' },
    { src: 'https://images.unsplash.com/photo-1599586120429-48285b6a8a81?q=80&w=2070&auto=format&fit=crop', alt: 'Celebración' },
    { src: 'https://images.unsplash.com/photo-1519766304800-c9519df914ce?q=80&w=2070&auto=format&fit=crop', alt: 'Defensa' },
    { src: 'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=2128&auto=format&fit=crop', alt: 'Equipo unido' },
];

export const FEES = [
    { category: 'Juvenil', price: '30€/mes' },
    { category: 'Infantil', price: '25€/mes' },
    { category: 'Alevín', price: '20€/mes' },
    { category: 'Benjamín', price: '15€/mes' },
];

export const TOURNAMENTS = [
    "Juegos Deportivos de Navarra",
    "Torneo Interescolar",
    "Torneo de San Fermín Txikito",
    "Torneo de Navidad AD San Juan",
];

export const CONTACT_INFO = {
    address: 'Calle de San Juan, s/n, 31011 Pamplona, Navarra, España',
    email: 'balonmano@agrupacionadsj.com',
};

// New Statistical Data
export const CLUB_STATS = [
    { label: 'Jugadores Federados', value: '75+', icon: 'users' },
    { label: 'Equipos Activos', value: '5', icon: 'shield' },
    { label: 'Entrenadores Titulados', value: '8', icon: 'whistle' },
    { label: 'Años de Historia', value: '50+', icon: 'history' },
];

export const MATCH_RESULTS = [
    { home: 'AD San Juan Juv.', visitor: 'Loyola', score: '24 - 22', date: '21 Oct', win: true },
    { home: 'Lagunak', visitor: 'AD San Juan Inf.', score: '18 - 18', date: '21 Oct', draw: true },
    { home: 'AD San Juan Ale.', visitor: 'Anaitasuna', score: '15 - 20', date: '20 Oct', win: false },
    { home: 'Beti Onak', visitor: 'AD San Juan Benj. A', score: '12 - 14', date: '20 Oct', win: true },
];

export const STANDINGS = [
    { pos: 1, team: 'AD San Juan', pts: 12, p: 6, w: 6, l: 0 },
    { pos: 2, team: 'Beti Onak', pts: 10, p: 6, w: 5, l: 1 },
    { pos: 3, team: 'Anaitasuna', pts: 8, p: 6, w: 4, l: 2 },
    { pos: 4, team: 'Loyola', pts: 6, p: 6, w: 3, l: 3 },
    { pos: 5, team: 'Lagunak', pts: 4, p: 6, w: 2, l: 4 },
];
