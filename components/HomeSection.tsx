
import React, { forwardRef } from 'react';
import { NEWS_IMAGE_URL, FEES, TOURNAMENTS, CLUB_STATS, HERO_BG_URL } from '../constants';

interface HomeSectionProps {
    id: string;
}

const InfoCard: React.FC<{title: string, number: string, children: React.ReactNode, className?: string}> = ({title, number, children, className}) => (
    <div className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col h-full ${className}`}>
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 font-bold text-sm">
                {number}
            </span>
            <h3 className="text-lg font-bold text-gray-800 uppercase tracking-tight">{title}</h3>
        </div>
        <div className="text-gray-600 text-sm leading-relaxed flex-grow">{children}</div>
    </div>
);

const StatCounter: React.FC<{label: string, value: string, icon: string}> = ({label, value}) => (
    <div className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
        <p className="text-3xl md:text-5xl font-black text-white mb-1 drop-shadow-md">{value}</p>
        <p className="text-xs md:text-sm text-green-100 uppercase tracking-widest font-semibold">{label}</p>
    </div>
);

export const HomeSection = forwardRef<HTMLDivElement, HomeSectionProps>(({ id }, ref) => {
    return (
        <section ref={ref} id={id}>
            {/* Hero Section with Stats */}
            <div className="relative min-h-[85vh] flex flex-col justify-center bg-gray-900">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img src={HERO_BG_URL} alt="Balonmano Hero" className="w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-black/30"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-20">
                    <div className="max-w-4xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-green-500/90 text-white text-xs font-bold uppercase tracking-wider mb-6">
                            Temporada 2025/2026
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight leading-none mb-6">
                            Pasión por el <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                                Balonmano
                            </span>
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl font-light mb-10 leading-relaxed">
                            Más equipo, más ilusión y más deporte. Únete a la familia de la Agrupación Deportiva San Juan.
                        </p>
                    </div>

                    {/* Stats Strip */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 border-t border-white/20 pt-8">
                        {CLUB_STATS.map((stat) => (
                            <StatCounter key={stat.label} label={stat.label} value={stat.value} icon={stat.icon} />
                        ))}
                    </div>
                </div>
            </div>

            {/* News & Info Grid */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6">
                    {/* Featured News */}
                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
                        <div className="lg:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                <img src={NEWS_IMAGE_URL} alt="Equipo" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent mix-blend-overlay"></div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                                La Temporada 2025/2026 <br/>
                                <span className="text-green-600">ya está en marcha</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed text-justify">
                                Este año somos más que nunca: <strong>75 jugadores y 5 equipos</strong>. Hemos ampliado horas de entrenamiento, unificado la equipación para reforzar nuestra identidad y renovado todo el material deportivo.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed text-justify">
                                Nuestros monitores cuentan con titulaciones oficiales, asegurando la mejor formación para nuestros chicos y chicas. Empezamos este curso con más medios, más equipo humano y sobre todo, con más ilusión que nunca.
                            </p>
                        </div>
                    </div>

                    {/* Info Grid Cards */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center uppercase tracking-wide">Información Clave</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <InfoCard title="Organigrama" number="01">
                            <p>La Sección la formamos madres y padres, jugadores y personal técnico comprometidos con el proyecto deportivo.</p>
                        </InfoCard>

                        <InfoCard title="Categorías" number="02">
                            <ul className="space-y-1">
                                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Juvenil Femenino</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Infantil Femenino</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Alevín Mixto</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Benjamín Mixto A & B</li>
                            </ul>
                        </InfoCard>

                        <InfoCard title="Horarios" number="03">
                            <p>Entrenadores confirmados. Horarios presentados a la Junta. Se notificarán en cuanto sean aprobados oficialmente.</p>
                        </InfoCard>
                        
                        <InfoCard title="Equipación" number="04">
                            <p className="mb-2 font-semibold text-green-700">Pack Competición:</p>
                            <ul className="list-none text-xs space-y-1 mb-2">
                                <li>• 2 Camisetas (1ª y 2ª)</li>
                                <li>• 1 Pantaloneta</li>
                                <li>• 1 Sudadera</li>
                            </ul>
                            <p className="text-xs italic text-gray-400">Excepto Benjamín.</p>
                        </InfoCard>

                        <InfoCard title="Campeonatos" number="05">
                            <div className="flex flex-wrap gap-2">
                                {TOURNAMENTS.map(t => (
                                    <span key={t} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs border border-gray-200">{t}</span>
                                ))}
                            </div>
                        </InfoCard>
                        
                        <InfoCard title="Cuotas 25/26" number="06">
                            <div className="grid grid-cols-2 gap-2">
                                {FEES.map(fee => (
                                    <div key={fee.category} className="bg-green-50 p-2 rounded text-center">
                                        <div className="font-bold text-gray-800">{fee.category}</div>
                                        <div className="text-green-600 font-bold">{fee.price}</div>
                                    </div>
                                ))}
                            </div>
                        </InfoCard>

                        <InfoCard title="Patrocinio" number="07">
                            <p>Buscamos <strong>PATROCINADORES</strong> para apoyar el deporte base. Vuestra ayuda es fundamental para el crecimiento de la sección.</p>
                        </InfoCard>

                        <InfoCard title="Documentación" number="08">
                            <p>Asistencia sanitaria vía <strong>SNS/Osasunbidea</strong>. Registro obligatorio en plataforma <strong>iSquad</strong> de la RFNB (DNI actualizado).</p>
                        </InfoCard>
                    </div>
                </div>
            </div>
        </section>
    );
});
