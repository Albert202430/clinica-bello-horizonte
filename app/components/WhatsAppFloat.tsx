'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, MessageCircle } from 'lucide-react';

const specialties = [
    "Anestesiologia",
    "Cardiología",
    "Cirugía cabeza y cuello",
    "Cirugía general",
    "Cirugía pediátrica",
    "Cirugía oncológica",
    "Cirugía de tòrax y cardiovascular",
    "Dermatología",
    "Endocrinología",
    "Gastroenterología",
    "Ginecología y obstetricia",
    "Herniología",
    "Infectología",
    "Medicina fisica y rehabilitación",
    "Medicina interna",
    "Medicina interna - UCI",
    "Nefrología",
    "Neumología",
    "Neurología",
    "Oftalmología",
    "Odontología",
    "Oncologia clinica",
    "Pediatría",
    "psicología",
    "Traumatología",
    "Urología"
];

const PHONE_NUMBER = "51947052846";

export default function WhatsAppFloat() {
    const [isOpen, setIsOpen] = useState(false);

    const handleWhatsAppClick = (specialty: string) => {
        const message = `Hola, quisiera información para agendar una cita en la especialidad de ${specialty}`;
        const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="bg-white rounded-2xl shadow-xl w-80 overflow-hidden border border-gray-100 mb-2"
                    >
                        {/* Header */}
                        <div className="bg-[#00a884] p-4 text-white relative">
                            <div className="flex items-center gap-3">
                                <div className="bg-white/20 p-2 rounded-full">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Hola! 👋</h3>
                                    <p className="text-sm text-white/90">¿En qué especialidad estás interesado?</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-2 right-2 p-1 hover:bg-white/20 rounded-full transition-colors"
                                aria-label="Cerrar chat"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Specialties List */}
                        <div className="p-2 max-h-[400px] overflow-y-auto bg-gray-50">
                            <div className="grid gap-1">
                                {specialties.map((specialty) => (
                                    <motion.button
                                        key={specialty}
                                        whileHover={{ scale: 1.02, backgroundColor: "#f0f2f5" }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleWhatsAppClick(specialty)}
                                        className="flex items-center justify-between w-full p-3 bg-white hover:bg-gray-50 rounded-xl transition-all border border-transparent hover:border-gray-200 group text-left"
                                    >
                                        <span className="text-gray-700 font-medium group-hover:text-[#00a884] transition-colors">{specialty}</span>
                                        <ChevronRight size={16} className="text-gray-400 group-hover:text-[#00a884] transition-colors" />
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        <div className="p-3 bg-gray-50 text-center text-xs text-gray-400 border-t border-gray-100">
                            Respuesta usualmente en unos minutos
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-green-500/30 transition-all duration-300 flex items-center justify-center relative group"
                aria-label="Abrir chat de WhatsApp"
            >
                {isOpen ? (
                    <X size={32} />
                ) : (
                    // WhatsApp SVG Icon
                    <svg
                        viewBox="0 0 24 24"
                        width="32"
                        height="32"
                        stroke="currentColor"
                        strokeWidth="0"
                        fill="currentColor"
                        className="fill-white"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                )}

                {/* Pulse effect when closed */}
                {!isOpen && (
                    <span className="absolute -inset-1 rounded-full bg-green-500 opacity-20 animate-ping pointer-events-none"></span>
                )}
            </motion.button>
        </div>
    );
}