
import React, { useState, useEffect } from 'react';
import { NAV_LINKS, LOGO_URL } from '../constants';
import { MenuIcon, XIcon } from './icons';

interface HeaderProps {
    activeSection: string;
}

const Logo: React.FC = () => (
    <div className="flex items-center gap-3 group">
        <div className="relative">
            <div className="absolute inset-0 bg-green-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <img src={LOGO_URL} alt="AD San Juan Logo" className="relative w-14 h-14 md:w-16 md:h-16 object-contain transition-transform duration-300 group-hover:scale-105" />
        </div>
        <div className="flex flex-col">
            <span className="font-extrabold text-xl md:text-2xl leading-none tracking-tight text-gray-800">
                AD SAN JUAN
            </span>
            <span className="text-green-600 font-bold text-sm md:text-base tracking-widest uppercase">
                Balonmano
            </span>
        </div>
    </div>
);


export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
            window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
            });
        }
        setMobileMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-md border-gray-200 py-2' : 'bg-white/50 backdrop-blur-sm border-transparent py-4'}`}>
            <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }} aria-label="Volver al inicio">
                    <Logo />
                </a>
                
                <nav className="hidden md:flex items-center space-x-1">
                    {NAV_LINKS.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                                activeSection === link.id 
                                ? 'text-white bg-green-600 shadow-md transform scale-105' 
                                : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                            }`}
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>

                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-800 rounded-md hover:bg-gray-100 focus:outline-none" aria-label="Abrir menú">
                        {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 absolute w-full left-0 shadow-lg">
                    <nav className="flex flex-col p-4 space-y-2">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                                    activeSection === link.id 
                                    ? 'bg-green-50 text-green-700 border-l-4 border-green-600' 
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-green-600'
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};
