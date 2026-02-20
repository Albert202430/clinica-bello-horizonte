"use client";
import React, { useState } from "react"; // Importamos useState
import Image from "next/image";
import { Doctor } from "./types";

type DoctorCardProps = {
  medico: Doctor;
  onVerPerfil: (medico: Doctor) => void;
};

export default function DoctorCard({ medico, onVerPerfil }: DoctorCardProps) {
  // Estado local para los likes
  const [likes, setLikes] = useState(Math.floor(Math.random() * 20) + 5);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que al dar like se abra el perfil
    if (!isLiked) {
      setLikes(prev => prev + 1);
      setIsLiked(true);
    } else {
      setLikes(prev => prev - 1);
      setIsLiked(false);
    }
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 px-6 py-10 text-center flex flex-col border border-transparent hover:border-[#0173BC]/10 h-full relative">
      
      {/* Contenedor de Imagen Optimizado */}
      <div className="relative w-28 h-28 mx-auto mb-6">
        <Image
          src={medico.imagen}
          alt={`Retrato de ${medico.nombre}`}
          fill
          sizes="112px"
          className="rounded-full object-cover border-4 border-[#0173BC]/10 group-hover:border-[#0173BC]/30 transition-colors"
        />
      </div>

      {/* BOTÓN DE LIKE INTERACTIVO */}
      <div className="mb-4">
        <button 
          onClick={handleLike}
          className={`mx-auto flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all duration-300 ${
            isLiked 
            ? "bg-red-50 border-red-200 text-red-500" 
            : "bg-gray-50 border-gray-100 text-gray-400 hover:text-red-400 hover:bg-red-50"
          }`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill={isLiked ? "currentColor" : "none"} 
            stroke="currentColor" 
            className={`w-4 h-4 transition-transform ${isLiked ? "scale-110 animate-bounce" : ""}`}
            style={{ animationIterationCount: isLiked ? 1 : 0 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span className="text-xs font-bold">{likes}</span>
        </button>
      </div>

      <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#0173BC] transition-colors leading-tight">
        {medico.nombre}
      </h3>

      <p className="text-[#0173BC] text-[11px] font-bold uppercase tracking-widest mt-2 mb-4">
        {medico.especialidad}
      </p>

      <p className="text-gray-500 text-sm mb-8 flex-grow line-clamp-3 leading-relaxed">
        {medico.descripcion}
      </p>

      {/* BOTÓN ESTILO OUTLINED PRO */}
      <div className="px-2">
        <button
          onClick={() => onVerPerfil(medico)}
          className="group/btn mx-auto w-full max-w-[200px] py-2.5 px-4 rounded-full 
                     bg-white border-2 border-[#0173BC] text-[#0173BC] font-bold text-sm 
                     flex items-center justify-center gap-2
                     hover:bg-[#0173BC] hover:text-white active:scale-95 transition-all duration-300
                     shadow-sm hover:shadow-[0_8px_20px_-5px_rgba(1,115,188,0.4)]"
        >
          <span>Ver perfil</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
          >
            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}