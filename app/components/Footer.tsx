'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ChevronRight, Heart, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#00609C] text-white pt-32 pb-0 overflow-hidden font-sans">

            {/* White Wave Separator - Matches image curvature */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
                <svg className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#ffffff" fillOpacity="1"></path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">

                    {/* Brand Section - Spans 4 columns */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="bg-white/10 rounded-full p-1">
                                <div className="bg-white rounded-full p-2 w-16 h-16 flex items-center justify-center">
                                    <img src="/logo-bello-horizonte.png" alt="Clinica Bello Horizonte" className="h-10 w-auto object-contain" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h2 className="text-2xl font-bold tracking-wide leading-none">CLÍNICA</h2>
                                <h2 className="text-xl font-light tracking-wider text-blue-100 leading-none mt-1">BELLO HORIZONTE</h2>
                            </div>
                        </div>
                        <p className="text-blue-100 text-sm leading-relaxed max-w-sm">
                            Dedicados a brindar servicios de salud integral con los más altos estándares de calidad. Su bienestar es nuestra prioridad absoluta.
                        </p>
                    </div>

                    {/* Links - Spans 2 columns */}
                    <div className="lg:col-span-2 mt-4 lg:mt-0">
                        <h3 className="text-lg font-bold mb-6 relative">
                            Enlaces
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-cyan-400 rounded-full"></span>
                        </h3>
                        <ul className="space-y-3 text-sm">
                            {[
                                { name: 'Inicio', path: '/' },
                                { name: 'Nosotros', path: '/nosotros' },
                                { name: 'Médicos', path: '/medicos' },
                                { name: 'servicios', path: '/servicios' },

                            ].map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.path} className="group flex items-center text-blue-100 hover:text-white transition-all duration-300">
                                        <ChevronRight size={14} className="mr-2 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                                        <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services - Spans 3 columns */}
                    <div className="lg:col-span-3 mt-4 lg:mt-0">
                        <h3 className="text-lg font-bold mb-6 relative">
                            Servicios medicos
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-cyan-400 rounded-full"></span>
                        </h3>
                        <ul className="space-y-3 text-sm">
                            {['Laboratorio', 'Tomografia', 'Rayos X', 'Ecografia', 'Emergencia', 'Sala de Operación', 'Hospitalización', 'UCI', 'Farmacia', 'Banco de Sangre'].map((service, idx) => (
                                <li key={idx} className="flex items-center text-blue-100 group cursor-default">
                                    <Heart size={10} className="mr-2 text-cyan-400 fill-cyan-400" />
                                    <span className="group-hover:text-white transition-colors">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info - Spans 3 columns */}
                    <div className="lg:col-span-3 mt-4 lg:mt-0">
                        <h3 className="text-lg font-bold mb-6 relative">
                            Contáctenos
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-cyan-400 rounded-full"></span>
                        </h3>
                        <div className="space-y-3">
                            {/* Address Card */}
                            <div className="flex items-start bg-[#005082]/50 p-4 rounded-lg border border-white/5 backdrop-blur-sm group hover:bg-[#005082]/70 transition-colors">
                                <MapPin className="mr-3 mt-1 text-cyan-400 flex-shrink-0" size={18} />
                                <span className="text-blue-100 text-xs leading-relaxed">
                                    Av. Los Diamantes Cruce con Av. Ramòn Romero a Espaldas del Terminal Terreste Gechiza,<br /> Piura - Perù
                                </span>
                            </div>

                            {/* Phone Card */}
                            <div className="flex items-center bg-[#005082]/50 p-4 rounded-lg border border-white/5 backdrop-blur-sm group hover:bg-[#005082]/70 transition-colors">
                                <Phone className="mr-3 text-cyan-400 flex-shrink-0" size={18} />
                                <span className="text-white text-sm font-semibold tracking-wide">+51 947052846 <br /> +51 947052792</span>
                            </div>

                            {/* Email Card */}
                            <div className="flex items-center bg-[#005082]/50 p-4 rounded-lg border border-white/5 backdrop-blur-sm group hover:bg-[#005082]/70 transition-colors">
                                <Mail className="mr-3 text-cyan-400 flex-shrink-0" size={18} />
                                <span className="text-blue-100 text-xs">informes@clinicabellohorizonte.com.pe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Full-Width Social Bar */}
            <div className="w-full bg-[#004e80] border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Social Icons Row - Full width style */}
                        <div className="w-full flex justify-center items-center divide-x divide-white/10">
                            {[
                                { Icon: Facebook, href: "https://www.facebook.com/clinicabellohorizontepiura/" },
                                { Icon: Instagram, href: "https://www.instagram.com/clinicabellohorizonte.piura/" },
                                { Icon: Youtube, href: "https://www.youtube.com/@clinicabellohorizonte9825" },

                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="flex-1 flex justify-center items-center h-12 text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 group"
                                >
                                    <social.Icon size={28} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Minimal Copyright Bar */}
            <div className="bg-[#004570] py-2">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-blue-300/60 text-[10px]">
                        &copy; {currentYear} Clínica Bello Horizonte. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
