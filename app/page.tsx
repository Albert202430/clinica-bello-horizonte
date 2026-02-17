"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      {/* Hero Section (igual que antes) */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
          style={{
            backgroundImage: "url('/clinicabellohorizonte_local.jpg')",
            filter: "brightness(0.4)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: -40 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-4"
        >
          <motion.p
            animate={{ x: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="text-blue-400 font-medium tracking-[0.3em] uppercase mb-4 text-sm md:text-lg"
          >
            La mejor clínica de Piura
          </motion.p>
          <motion.h1
            className="text-white text-5xl md:text-8xl font-black tracking-tighter drop-shadow-2xl"
            style={{ textShadow: "0px 0px 20px rgba(255,255,255,0.3)" }}
          >
            CLINICA <br className="md:hidden" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-300">
              BELLO HORIZONTE
            </span>
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 1, duration: 0.8 }}
            className="h-1 bg-blue-500 mx-auto mt-6 rounded-full"
          />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-white/50 text-sm flex flex-col items-center"
        >
          <span>Desliza para ver más</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent mt-2" />
        </motion.div>
      </section>

      {/* ========== NUEVA SECCIÓN: NUESTROS SERVICIOS ========== */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Fondo decorativo (opcional) */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Título de la sección */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Nuestros <span className="text-blue-600">Servicios</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 mx-auto rounded-full" />
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
              Brindamos atención integral con tecnología de punta y un equipo humano de excelencia.
            </p>
          </motion.div>

          {/* Grid de servicios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300"
              >
                {/* Círculo decorativo detrás del icono */}
                <div className="absolute -top-3 -right-3 w-20 h-20 bg-blue-100 rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />

                {/* Icono (usamos emojis por simplicidad, puedes reemplazar con SVGs) */}
                <div className="text-5xl mb-4 relative z-10">{servicio.icon}</div>

                {/* Título */}
                <h3 className="text-2xl font-bold text-gray-800 mb-2 relative z-10">
                  {servicio.title}
                </h3>

                {/* Descripción corta (opcional) */}
                <p className="text-gray-600 relative z-10">
                  {servicio.description}
                </p>

                {/* Línea decorativa al hacer hover */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl" />
              </motion.div>
            ))}
          </div>

          {/* Botón Ver más (super llamativo) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10">Ver todos los servicios</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
              {/* Efecto de brillo móvil */}
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Sección blanca de prueba (scroll) */}
      <section className="h-screen bg-white" />
    </main>
  );
}

// Lista de servicios con iconos (puedes cambiar los emojis por iconos personalizados)
const servicios = [
  {
    icon: "🚑",
    title: "Emergencia 24/7",
    description: "Atención inmediata las 24 horas, los 365 días del año.",
  },
  {
    icon: "🔬",
    title: "Laboratorio Clínico",
    description: "Análisis de última generación con resultados rápidos y precisos.",
  },
  {
    icon: "💊",
    title: "Farmacia",
    description: "Medicamentos disponibles a cualquier hora para tu tratamiento.",
  },
  {
    icon: "🩸",
    title: "Banco de Sangre",
    description: "Unidad especializada en hemoterapia y donaciones seguras.",
  },
  {
    icon: "❤️",
    title: "Unidad de Cuidados Intensivos (UCI)",
    description: "Monitoreo constante y equipamiento avanzado para pacientes críticos.",
  },
  {
    icon: "🏥",
    title: "Hospitalización",
    description: "Habitaciones confortables y atención personalizada.",
  },
  {
    icon: "👩‍⚕️",
    title: "Consultas Externas",
    description: "Especialidades médicas en un solo lugar, con profesionales de prestigio.",
  },
  {
    icon: "🔪",
    title: "Centro Quirúrgico",
    description: "Quirófanos equipados con tecnología de punta para cirugías seguras.",
  },
  {
    icon: "🔬",
    title: "Centro de Endoscopia",
    description: "Procedimientos mínimamente invasivos con equipos de última generación.",
  },
];