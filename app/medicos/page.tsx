"use client";
import { useState, useEffect, useMemo } from "react";
import medicos from "./data";
import DoctorCard from "./DoctorCard";
import DoctorCardSkeleton from "./DoctorCardSkeleton";
import DoctorProfileModal from "./DoctorProfileModal";
import { Doctor } from "./types";

export default function MedicosPage() {
  const [busqueda, setBusqueda] = useState("");
  const [especialidad, setEspecialidad] = useState("Todas");
  const [loading, setLoading] = useState(true);
  const [medicoActivo, setMedicoActivo] = useState<Doctor | null>(null);

  //Simulación de carga
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  //Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = medicoActivo ? 'hidden' : 'unset';
  }, [medicoActivo]);

  //Memorizamos las especialidades para que no se generen en cada render
  const especialidades = useMemo(() => {
    return ["Todas", ...Array.from(new Set(medicos.map((m) => m.especialidad)))];
  }, []);

  //Memorizamos el filtrado (Esto resuelve tu error)
  const medicosFiltrados = useMemo(() => {
    return medicos.filter((m) => {
      const coincideNombre = m.nombre.toLowerCase().includes(busqueda.toLowerCase());
      const coincideEspecialidad = especialidad === "Todas" || m.especialidad === especialidad;
      return coincideNombre && coincideEspecialidad;
    });
  }, [busqueda, especialidad]);

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="relative h-[420px] overflow-hidden flex items-center justify-center text-center">
        <img
          src="/images/clinica1.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0173BC]/95 via-[#0173BC]/75 to-[#10b5c5]/55"></div>

        <div className="relative z-10 px-6 max-w-4xl text-white">
          <span className="inline-block mb-4 px-6 py-1.5 rounded-full bg-white/20 backdrop-blur border border-white/30 text-sm font-semibold">
            STAFF MÉDICO
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Equipo Médico Especializado
          </h1>

          <p className="text-lg text-white/90">
            Conoce a nuestros profesionales altamente capacitados.
          </p>
        </div>

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

      {/* BUSCADOR */}
      <section className="max-w-6xl mx-auto -mt-16 px-4 sm:px-6 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-4">

          <input
            type="text"
            placeholder="Buscar por nombre "
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full bg-white text-gray-800 placeholder-gray-400
                       border border-gray-300 rounded-lg px-4 py-3
                       focus:outline-none focus:ring-2 focus:ring-[#0173BC]"
          />

          <select
            value={especialidad}
            onChange={(e) => setEspecialidad(e.target.value)}
            className="w-full bg-white text-gray-800
                       border border-gray-300 rounded-lg px-4 py-3
                       focus:outline-none focus:ring-2 focus:ring-[#0173BC]"
          >
            {especialidades.map((esp) => (
              <option key={esp} value={esp}>
                {esp}
              </option>
            ))}
          </select>

          <button
            type="button"
            className="bg-[#0173BC] text-white rounded-lg py-3 font-semibold
                       hover:bg-[#015c96] transition"
          >
            Buscar Médico
          </button>
        </div>
      </section>
{/* SECCIÓN DE RESULTADOS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <DoctorCardSkeleton key={i} />
            ))
          ) : medicosFiltrados.length > 0 ? (
            medicosFiltrados.map((m) => (
              <DoctorCard 
                key={m.id} 
                medico={m} 
                onVerPerfil={setMedicoActivo} 
              />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500 text-xl">No se encontraron médicos.</p>
              <button 
                onClick={() => {setBusqueda(""); setEspecialidad("Todas");}}
                className="mt-4 text-[#0173BC] font-semibold underline"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {medicoActivo && (
        <DoctorProfileModal
          medico={medicoActivo}
          onClose={() => setMedicoActivo(null)}
        />
      )}
    </main>
  );
}