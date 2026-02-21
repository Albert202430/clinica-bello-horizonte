"use client";
import { motion } from "framer-motion";
import Header from "@/app/components/Header";
import ServiciosFlip from "@/app/components/ServiciosFlip";
import Estadisticas from "@/app/components/Estadisticas";
import DoctorsSection from "@/app/components/DoctorsSection";
import TeamSection from "@/app/components/TeamSection";
import AgendarCitaSection from "@/app/components/AgendarCitaSection";
export default function Home() {
  return (
    <main>
      {/* Header */}
      <Header />

      {/* Hero Section */}
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
            Primera clínica del sector oeste
          </motion.p>

          {/* Título con gradiente animado */}
          <motion.h1
            className="text-5xl md:text-8xl font-black tracking-tighter"
            style={{
              backgroundImage: "linear-gradient(90deg, #27d2e3, white, #27d2e3)",
              backgroundSize: "200% auto",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              textShadow: "0px 0px 20px rgba(255,255,255,0.3)",
            }}
            animate={{ backgroundPosition: ["0% center", "100% center", "0% center"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            CLINICA <br className="md:hidden" /> BELLO HORIZONTE
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

      {/* Sección de Estadísticas */}
      <Estadisticas />

      {/* Sección de Servicios */}
      <ServiciosFlip />
      <TeamSection />
      {/* Banner de Doctores Destacados */}
      <DoctorsSection />

      {/* Sección Agendar Cita */}
      <AgendarCitaSection id="agendar-cita" />
    </main>
  );
}