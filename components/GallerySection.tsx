
import React, { forwardRef } from 'react';
import { TEAMS, GALLERY_IMAGES } from '../constants';

interface TeamsSectionProps {
    id: string;
}

const TeamCard: React.FC<{ name: string; image: string; }> = ({ name, image }) => (
    <div className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[4/5] cursor-pointer">
        <img src={image} alt={name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <span className="inline-block py-1 px-2 mb-2 bg-green-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">Equipo</span>
            <h3 className="text-2xl font-black text-white uppercase leading-none">{name}</h3>
            <div className="h-1 w-12 bg-green-500 mt-3 group-hover:w-full transition-all duration-500"></div>
        </div>
    </div>
);

const PhotoGridItem: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
    <div className="relative overflow-hidden rounded-lg shadow-md group cursor-zoom-in h-64 md:h-80">
        <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
            loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
        <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-sm font-semibold drop-shadow-md">{alt}</span>
        </div>
    </div>
);

export const GallerySection = forwardRef<HTMLDivElement, TeamsSectionProps>(({ id }, ref) => {
    return (
        <section ref={ref} id={id} className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6">
                
                {/* Teams Header */}
                <div className="text-center mb-16">
                    <span className="text-green-600 font-bold tracking-wider uppercase text-sm">La Cantera</span>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2">Nuestros Equipos</h2>
                    <div className="mt-4 w-24 h-1.5 bg-green-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto font-light">
                        El futuro del balonmano navarro se forma aquí. Conoce a los protagonistas de esta temporada.
                    </p>
                </div>
                
                {/* Teams Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-24">
                    {TEAMS.map((team) => (
                        <TeamCard key={team.name} name={team.name} image={team.image} />
                    ))}
                </div>

                {/* Photo Gallery Header */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Momentos de la Temporada</h3>
                    <p className="mt-2 text-gray-500">Imágenes que capturan la pasión de nuestro club</p>
                </div>

                {/* Photo Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {GALLERY_IMAGES.map((img, index) => (
                        <PhotoGridItem key={index} src={img.src} alt={img.alt} />
                    ))}
                </div>

            </div>
        </section>
    );
});
