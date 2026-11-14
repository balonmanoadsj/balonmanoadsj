import React from 'react';
import { InstagramIcon, FacebookIcon } from './icons';
import { CONTACT_INFO } from '../constants';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto px-4 sm:px-6 text-center">
                <h3 className="text-lg font-semibold text-white">A.D. San Juan - Sección de Balonmano</h3>
                <p className="mt-2 text-sm">{CONTACT_INFO.address}</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="mt-1 text-sm text-green-400 hover:text-green-300 inline-block">{CONTACT_INFO.email}</a>
                
                <div className="flex justify-center items-center space-x-6 my-4">
                    <a href="#" aria-label="Facebook de AD San Juan Balonmano" className="text-gray-400 hover:text-white transition-colors duration-300"><FacebookIcon /></a>
                    <a href="#" aria-label="Instagram de AD San Juan Balonmano" className="text-gray-400 hover:text-white transition-colors duration-300"><InstagramIcon /></a>
                </div>
                <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} A.D. San Juan Balonmano. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};