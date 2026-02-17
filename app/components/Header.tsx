"use client"; // Necesario para manejar el estado del menú

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Función para cerrar el menú al hacer click en un enlace
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="absolute top-0 left-0 w-full z-50 flex justify-between items-center p-5 md:p-8 bg-transparent">
            {/* LOGO */}
            <div className="flex items-center z-50">
                <Link href="/" onClick={closeMenu} className="cursor-pointer hover:opacity-80 transition-opacity">
                    <img
                        src="/logo-bello-horizonte.png"
                        alt="Logo Clínica Bello Horizonte"
                        className="h-10 md:h-12 w-auto"
                    />
                </Link>
            </div>

            {/* BOTÓN HAMBURGUESA (Visible solo en móviles) */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden z-50 text-white p-2 focus:outline-none"
                aria-label="Toggle Menu"
            >
                <div className="space-y-2">
                    <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
                    <span className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
                </div>
            </button>

            {/* NAVEGACIÓN */}
            <nav className={`
                fixed inset-0 bg-zinc-900/95 backdrop-blur-md transition-transform duration-300 ease-in-out flex flex-col items-center justify-center
                md:static md:bg-transparent md:backdrop-blur-none md:flex-row md:translate-x-0 md:h-auto md:w-auto
                ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            `}>
                <ul className="flex flex-col md:flex-row gap-8 items-center text-white text-xl md:text-base font-medium">
                    <li>
                        <Link href="/" onClick={closeMenu} className="hover:text-blue-300 transition-colors">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/servicios" onClick={closeMenu} className="hover:text-blue-300 transition-colors">Servicios</Link>
                    </li>
                    <li>
                        <Link href="/medicos" onClick={closeMenu} className="hover:text-blue-300 transition-colors">Médicos</Link>
                    </li>
                    <li>
                        <Link href="/nosotros" onClick={closeMenu} className="hover:text-blue-300 transition-colors">Nosotros</Link>
                    </li>
                    <li className="mt-4 md:mt-0">
                        <Link
                            href="/cita"
                            onClick={closeMenu}
                            className="bg-blue-600 hover:bg-blue-700 md:bg-zinc-800/80 md:border md:border-zinc-600 md:hover:bg-zinc-700 px-6 py-3 md:px-4 md:py-2 rounded-lg transition-all text-center"
                        >
                            Agendar Cita
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}