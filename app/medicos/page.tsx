"use client";
import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
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
  
  // Estado para controlar el dropdown personalizado
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const especialidades = useMemo(() => {
    return ["Todas", ...Array.from(new Set(medicos.map((m) => m.especialidad)))];
  }, []);

  const medicosFiltrados = useMemo(() => {
    return medicos.filter((m) => {
      const coincideNombre = m.nombre.toLowerCase().includes(busqueda.toLowerCase());
      const coincideEspecialidad = especialidad === "Todas" || m.especialidad === especialidad;
      return coincideNombre && coincideEspecialidad;
    });
  }, [busqueda, especialidad]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO (Sin cambios) */}
      <section className="relative h-[420px] overflow-hidden flex items-center justify-center text-center">
        <img src="/images/clinica1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0173BC]/95 via-[#0173BC]/75 to-[#10b5c5]/55"></div>
        <div className="relative z-10 px-6 max-w-4xl text-white">
          <span className="inline-block mb-4 px-6 py-1.5 rounded-full bg-white/20 backdrop-blur border border-white/30 text-sm font-semibold"> STAFF MÉDICO </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4"> Equipo Médico Especializado </h1>
          <p className="text-lg text-white/90"> Conoce a nuestros profesionales altamente capacitados. </p>
        </div>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 90" preserveAspectRatio="none">
          <path fill="#F9FAFB" d="M0,40 C240,90 480,90 720,70 960,50 1200,30 1440,40 L1440,90 L0,90 Z" />
        </svg>
      </section>
      
      <div className="h-20"></div>

      {/* BUSCADOR ACTUALIZADO */}
      <section className="max-w-6xl mx-auto -mt-16 px-4 sm:px-6 relative z-30">
        <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">

          {/* Input de búsqueda */}
          <input
            type="text"
            placeholder="Buscar por nombre"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full bg-white text-gray-800 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#0173BC] outline-none"
          />

          {/* DROPDOWN PERSONALIZADO (En lugar del select) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full bg-white text-gray-800 border border-gray-300 rounded-lg px-4 py-3 flex justify-between items-center focus:ring-2 focus:ring-[#0173BC] outline-none"
            >
              <span className="truncate">{especialidad}</span>
              <svg className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-2xl max-h-60 overflow-y-auto overflow-x-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                {especialidades.map((esp) => (
                  <div
                    key={esp}
                    onClick={() => {
                      setEspecialidad(esp);
                      setIsOpen(false);
                    }}
                    className={`px-4 py-2.5 text-sm cursor-pointer transition-colors hover:bg-blue-50 hover:text-[#0173BC] ${especialidad === esp ? 'bg-blue-50 text-[#0173BC] font-bold' : 'text-gray-700'}`}
                  >
                    {esp}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* BOTÓN CONOCE A TU MÉDICO */}
          <Link href="https://aplicaciones.cmp.org.pe/conoce_a_tu_medico/" target="_blank" className="relative group inline-block w-full">
            <div className="absolute -inset-0.5 bg-[#0173BC] rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>
            <button className="relative w-full bg-[#0173BC] text-white rounded-lg py-3 px-4 font-bold flex items-center justify-center gap-2 shadow-xl hover:bg-[#005a94] transition-all">
              <span>Conoce a tu médico</span>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </Link>
        </div>
      </section>
      
      {/* SECCIÓN DE RESULTADOS*/}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => <DoctorCardSkeleton key={i} />)
          ) : medicosFiltrados.length > 0 ? (
            medicosFiltrados.map((m) => <DoctorCard key={m.id} medico={m} onVerPerfil={setMedicoActivo} />)
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500 text-xl">No se encontraron médicos.</p>
              <button onClick={() => {setBusqueda(""); setEspecialidad("Todas");}} className="mt-4 text-[#0173BC] font-semibold underline"> Limpiar filtros </button>
            </div>
          )}
        </div>
      </section>

      {medicoActivo && <DoctorProfileModal medico={medicoActivo} onClose={() => setMedicoActivo(null)} />}
    </main>
  );
}