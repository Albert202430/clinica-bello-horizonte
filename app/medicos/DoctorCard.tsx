"use client";
import Image from "next/image"; // ✅ Mejor para rendimiento
import { Doctor } from "./types"

type DoctorCardProps = {
  medico: Doctor;
  onVerPerfil: (medico: Doctor) => void;
};

export default function DoctorCard({ medico, onVerPerfil }: DoctorCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 text-center flex flex-col border border-transparent hover:border-[#0173BC]/10">
      
      {/* Contenedor de Imagen Optimizado */}
      <div className="relative w-28 h-28 mx-auto mb-4">
        <img
          src={medico.imagen}
          alt={`Retrato de ${medico.nombre}`}
          className="w-full h-full rounded-full object-cover border-4 border-[#0173BC]/10 group-hover:border-[#0173BC]/30 transition-colors"
        />
      </div>

      <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#0173BC] transition-colors">
        {medico.nombre}
      </h3>

      <p className="text-[#0173BC] text-sm font-semibold uppercase tracking-wider mb-2">
        {medico.especialidad}
      </p>

      {/* Descripción con límite de líneas (line-clamp) */}
      <p className="text-gray-500 text-sm mb-6 flex-grow line-clamp-3">
        {medico.descripcion}
      </p>

      <button
        onClick={() => onVerPerfil(medico)}
        className="mt-auto w-full py-3 rounded-xl bg-[#0173BC] text-white font-bold text-sm 
                   hover:bg-[#015a93] active:scale-95 transition-all shadow-lg shadow-[#0173BC]/20"
      >
        Ver perfil completo
      </button>
    </div>
  );
}