import React, { useState, forwardRef } from 'react';
import { CONTACT_INFO } from '../constants';
import { MailIcon, LocationMarkerIcon } from './icons';

interface ContactSectionProps {
    id: string;
}

export const ContactSection = forwardRef<HTMLDivElement, ContactSectionProps>(({ id }, ref) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        alert('Mensaje enviado. ¡Gracias por contactarnos!');
        setFormData({ name: '', email: '', message: '' });
    };
    
    return (
        <section ref={ref} id={id} className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Contacto</h2>
                    <p className="mt-2 text-lg text-gray-500">¿Tienes dudas o sugerencias? ¡Escríbenos!</p>
                    <div className="mt-4 w-24 h-1 bg-green-500 mx-auto"></div>
                </div>
                
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                    {/* Contact Info */}
                    <div className="lg:w-1/3 w-full text-gray-600 space-y-6 bg-gray-50 p-8 rounded-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Información de Contacto</h3>
                        <div className="flex items-start">
                            <LocationMarkerIcon className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                            <span>{CONTACT_INFO.address}</span>
                        </div>
                        <div className="flex items-center">
                            <MailIcon className="w-6 h-6 text-green-600 mr-4 flex-shrink-0"/>
                            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-green-600 break-all">{CONTACT_INFO.email}</a>
                        </div>
                        <p className="pt-4 border-t border-gray-200">
                           Para cualquier duda o sugerencia, no dudes en ponerte en contacto con nosotros.
                        </p>
                    </div>

                    {/* Form */}
                    <div className="lg:w-2/3 w-full">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange}
                                        className="w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange}
                                        className="w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                                <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange}
                                    className="w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"></textarea>
                            </div>
                            <div>
                                <button type="submit"
                                    className="w-full py-3 px-6 bg-green-600 text-white font-bold uppercase rounded-md hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                    Enviar Mensaje
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
});