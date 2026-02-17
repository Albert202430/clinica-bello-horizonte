"use client";
import { useState } from "react";
import medicos from "./data";
import DoctorCard from "./DoctorCard";

export default function MedicosPage() {
    const [busqueda, setBusqueda] = useState("");
    const [especialidad, setEspecialidad] = useState("Todas");
    const especialidades = [
        "Todas",
        ...Array.from(new Set(medicos.map((m) => m.especialidad))),
        ];

    const medicosFiltrados = medicos.filter((m) => {
    return (
      m.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
      (especialidad === "Todas" || m.especialidad === especialidad)
    );
    });


  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* HERO */}
      <section className="relative h-[420px] overflow-hidden flex items-center justify-center text-center">
  
        {/* Imagen de fondo */}
        <img
            src="/images/clinica1.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-110"
        />

       {/* Overlay degradado con parte superior más oscura */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0173BC]/95 via-[#0173BC]/75 to-[#10b5c5]/55"></div>

        {/* Contenido */}
        <div className="relative z-10 px-6 max-w-4xl text-white">
            <span className="relative inline-block mb-4 px-6 py-1.5 rounded-full
                bg-white/15 backdrop-blur
                border border-white/30
                shadow-[0_0_0_2px_rgba(1,115,188,0.35)]
                text-sm font-semibold tracking-wider text-white
                overflow-hidden"
                >
                STAFF MÉDICO

                {/* Luz animada */}
                <span className="absolute inset-0 bg-gradient-to-r 
                    from-transparent via-white/40 to-transparent
                    animate-shine">
                </span>
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Equipo Médico Especializado
            </h1>

            <p className="text-lg text-white/90">
            Conoce a nuestros profesionales altamente capacitados, comprometidos con tu bienestar y salud.
            </p>
        </div>

        {/* CURVA INFERIOR */}
        <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 90"
            preserveAspectRatio="none"
        >
            <path
            fill="#F9FAFB"
            d="M0,40 C240,90 480,90 720,70 960,50 1200,30 1440,40 L1440,90 L0,90 Z"
            />
        </svg>
    </section>

    <br></br>
    <br></br>
    <br></br>
    {/* BUSCADOR */}
    <section className="max-w-6xl mx-auto -mt-16 px-4 sm:px-6">
    <div className="bg-white rounded-2xl shadow-lg p-6
                  grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Buscar por nombre (Ej. Dr. Juan Pérez)"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0173BC]"
            />
           <select
                value={especialidad}
                onChange={(e) => setEspecialidad(e.target.value)}
                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0173BC]
                            w-full"
                >
                {especialidades.map((esp) => (
                    <option key={esp} value={esp}>
                    {esp}
                    </option>
                ))}
            </select>
            <button
                type="button"
                className="bg-[#0173BC] text-white rounded-lg py-3 font-semibold hover:bg-[#015c96] transition"
            >
                Buscar Médico
            </button>
        </div>
    </section>

      {/* LISTA DE MÉDICOS */}
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {medicosFiltrados.length > 0 ? (
            medicosFiltrados.map((m) => (
                <DoctorCard key={m.id} medico={m} />
            ))
            ) : (
            <p className="col-span-full text-center text-gray-500">
                No se encontraron médicos.
            </p>
            )}
        </div>
    </section>
    </main>
  );
}