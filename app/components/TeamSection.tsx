"use client";
import { motion } from "framer-motion";
import Link from "next/link";

// Datos de ejemplo (puedes importarlos desde tu archivo real)
const destacados = [
    {
        id: 1,
        nombre: "Dr. Francisco Adolfo Carrera Carrasco",
        especialidad: "Ginecología y Obstetricia",
        descripcion:
            "Médico cirujano con especialidad en Ginecología y Obstetricia, respaldado por 20 años de experiencia...",
        imagen: "../images/medicoespecializado.png",
    },
    {
        id: 2,
        nombre: "Dr. Carlos Enrique Zapata Pardo de Figueroa",
        especialidad: "Cirugía General",
        descripcion:
            "Especialista en Cirugía General, brinda una atención quirúrgica segura, confiable y orientada al...",
        imagen: "../images/medicoespecializado2.png",
    },
    {
        id: 3,
        nombre: "Dr. Víctor Jesús Bolívar Loncarich",
        especialidad: "Anestesiología",
        descripcion:
            "Médico especialista en Anestesiología, con amplia experiencia en el manejo anestésico dentro de s...",
        imagen: "/images/doctor3.jpg",
    },
];

export default function TeamSection() {
    return (
        <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 right-10 w-72 h-72 bg-[#10b5c5] rounded-full mix-blend-multiply filter blur-3xl" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#0173BC] rounded-full mix-blend-multiply filter blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#10b5c5] font-semibold tracking-wider uppercase mb-2 block">
                        Nuestro Equipo
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
                        Equipo Médico <span className="text-[#0173BC]">Especializado</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#10b5c5] to-[#0173BC] mx-auto rounded-full" />
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
                        Profesionales comprometidos con tu salud
                    </p>
                </motion.div>

                {/* Grid de tarjetas */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr">
                    {destacados.map((medico, index) => (
                        <motion.div
                            key={medico.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group h-full"
                        >
                            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#10b5c5]/30 hover:scale-[1.02] transform-gpu flex flex-col h-full">
                                {/* Imagen sin overlay ni texto superpuesto */}
                                <div className="relative h-96 overflow-hidden">
                                    <img
                                        src={medico.imagen}
                                        alt={medico.nombre}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {/* Eliminados: gradiente y etiqueta de especialidad */}
                                </div>

                                {/* Contenido */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                                        {medico.nombre}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                                        {medico.descripcion}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Botón Ver todos los médicos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <Link href="/medicos">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-[#0173BC] to-[#10b5c5] rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                        >
                            <span className="relative z-10">Ver todos los médicos</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-[#10b5c5] to-[#0173BC] opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}