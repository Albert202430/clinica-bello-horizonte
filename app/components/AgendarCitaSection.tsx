"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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

export default function AgendarCitaSection({ id }: { id?: string }) {
    const [formData, setFormData] = useState({
        dni: "",
        nombres: "",
        especialidad: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleWhatsAppClick = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.dni || !formData.nombres || !formData.especialidad) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const phoneNumber = "51947052846"; // assuming Peru country code +51 based on typical DNI usage and previous context
        const message = `Hola Clínica Bello Horizonte, quiero agendar una cita.%0A%0A*Mis datos son:*%0A- *DNI:* ${formData.dni}%0A- *Nombres y Apellidos:* ${formData.nombres}%0A- *Especialidad:* ${formData.especialidad}`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <section id={id} className="relative py-20 bg-gray-50 overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-[#10b5c5] opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#0173BC] opacity-10 blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                    {/* Lado izquierdo - Info */}
                    <div className="md:w-5/12 bg-gradient-to-br from-[#0173BC] to-[#10b5c5] p-10 text-white flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-4">Agenda tu cita rápida y fácil</h2>
                        <p className="mb-8 text-blue-50">
                            Déjanos tus datos y nos pondremos en contacto contigo de inmediato a través de WhatsApp para confirmar tu cita médica.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Atención Rápida</h4>
                                    <p className="text-sm text-blue-100">Respuesta en minutos</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Profesionales Expertos</h4>
                                    <p className="text-sm text-blue-100">Las mejores especialidades</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lado derecho - Formulario */}
                    <div className="md:w-7/12 p-10">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Completa tus datos</h3>

                        <form onSubmit={handleWhatsAppClick} className="space-y-5">
                            {/* DNI */}
                            <div>
                                <label htmlFor="dni" className="block text-sm font-medium text-gray-700 mb-1">DNI</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        id="dni"
                                        name="dni"
                                        value={formData.dni}
                                        onChange={handleChange}
                                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10b5c5] focus:border-[#10b5c5] transition-colors bg-gray-50 focus:bg-white"
                                        placeholder="Ingresa tu número de DNI"
                                        maxLength={8}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Nombres y Apellidos */}
                            <div>
                                <label htmlFor="nombres" className="block text-sm font-medium text-gray-700 mb-1">Nombres y Apellidos</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        id="nombres"
                                        name="nombres"
                                        value={formData.nombres}
                                        onChange={handleChange}
                                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10b5c5] focus:border-[#10b5c5] transition-colors bg-gray-50 focus:bg-white"
                                        placeholder="Ej. Juan Pérez"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Especialidad */}
                            <div>
                                <label htmlFor="especialidad" className="block text-sm font-medium text-gray-700 mb-1">Especialidad</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                        </svg>
                                    </div>
                                    <select
                                        id="especialidad"
                                        name="especialidad"
                                        value={formData.especialidad}
                                        onChange={handleChange}
                                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10b5c5] focus:border-[#10b5c5] transition-colors bg-gray-50 focus:bg-white appearance-none"
                                        required
                                    >
                                        <option value="" disabled>Selecciona una especialidad</option>
                                        {specialties.map((spec) => (
                                            <option key={spec} value={spec}>{spec}</option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Botón Enviar */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full mt-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-500/30"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Agendar Cita por WhatsApp
                            </motion.button>

                            <p className="text-center text-sm text-gray-500 mt-4">
                                Tus datos están seguros y serán utilizados únicamente para contactarte.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
