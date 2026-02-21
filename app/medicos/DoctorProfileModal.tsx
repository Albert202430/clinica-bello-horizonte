"use client";
import React from "react";
import { Doctor, DoctorProfileModalProps } from "./types";

export default function DoctorProfileModal({ medico, onClose }: DoctorProfileModalProps) {
  if (!medico) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      {/* Contenedor Principal más ancho (max-w-6xl) */}
      <div className="bg-white w-full max-w-6xl rounded-lg shadow-2xl overflow-hidden flex flex-col my-auto animate-in fade-in zoom-in duration-200">
        
        {/* HEADER SIMPLE */}
        <div className="flex justify-between items-center bg-[#0173BC] px-6 py-4 border-b">
          <div className="flex items-center gap-2">
            {/*<span className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded">CV</span> */}
            <h2 className="text-white font-semibold text-lg">Perfil del Médico</h2>
          </div>
          <button 
            onClick={onClose} 
            className="text-white/80 hover:text-white text-3xl transition-transform hover:rotate-90 leading-none"
          >
            &times;
          </button>
        </div>

        {/* BODY CON 3 COLUMNAS */}
        <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* 1. COLUMNA IZQUIERDA: Foto y Botón Principal */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <div className="relative aspect-square w-full">
              <img
                src={medico.imagen}
                alt={medico.nombre}
                className="w-full h-full object-cover rounded-lg border shadow-sm"
              />
            </div>
            <button className="w-full bg-[#0173BC] text-white py-3 rounded-md font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#015a93] transition-all shadow-md active:scale-95">
              Agendar cita <span className="text-xl">📅</span>
            </button>
          </div>

          {/* 2. COLUMNA CENTRAL: Información Médica (CV) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">{medico.nombre}</h3>
              <p className="text-[#0173BC] text-xl font-semibold">{medico.especialidad}</p>
            </div>

            <section className="space-y-3">
              <div>
                <h4 className="font-bold text-gray-700 text-sm uppercase tracking-tight">Formacion Académica:</h4>
                <p className="text-gray-500 text-sm leading-snug">{medico.universidadPregrado || "Medico Cirujano, Universidad Nacional de San Agustín"}</p>
              </div>

              <div>
                <h4 className="font-bold text-gray-700 text-sm uppercase tracking-tight">Universidad (Especialidad):</h4>
                <p className="text-gray-500 text-sm leading-snug">{medico.universidadEspecialidad || "Especialista en Cardiología, Universidad Nacional Mayor de San Marcos"}</p>
              </div>

              <div>
                <h4 className="font-bold text-gray-700 text-sm uppercase tracking-tight">Maestrías y Otros Estudios:</h4>
                <p className="text-gray-500 text-sm leading-snug">{medico.maestrias || "Egresado de la Maestría en Gerencia de los Servicios de Salud"}</p>
              </div>

              <div>
                <h4 className="font-bold text-gray-700 text-sm uppercase tracking-tight">Logros y Méritos:</h4>
                <p className="text-gray-500 text-sm leading-snug">{medico.logros || "Jefe del Servicio de Hospitalización e investigación médica."}</p>
              </div>
            </section>
          </div>

          {/* 3. COLUMNA DERECHA: Horarios y Especialidad */}
          <div className="lg:col-span-4 space-y-6 border-l pl-0 lg:pl-8 border-gray-100">
            <div>
              <h4 className="text-2xl font-light text-gray-800 mb-4">Horario:</h4>
              <div className="space-y-4">
                {(medico.horarios || [
                  { dia: "MARTES", horas: "03:00 PM-07:00 PM" },
                  { dia: "MIÉRCOLES", horas: "03:00 PM-07:00 PM" },
                  { dia: "JUEVES", horas: "03:30 PM-07:30 PM" },
                  { dia: "VIERNES", horas: "03:00 PM-07:00 PM" },
                ]).map((item, index) => (
                  <div key={index} className="flex flex-col border-b border-gray-50 pb-2">
                    <span className="text-xs font-bold text-gray-400">🗓 {item.dia}</span>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm font-medium text-gray-600">{item.horas}</span>
                      <span className="bg-[#4DB8E2] text-[10px] text-white px-2 py-0.5 rounded font-bold">Horario Presencial</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h4 className="text-2xl font-light text-gray-800 mb-1">Especialidad:</h4>
              <p className="text-[#0173BC] font-medium">{medico.especialidad}</p>
            </div>
            
            <div className="pt-4">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                <span className="text-gray-400">📧</span>
                <span className="text-xs font-semibold text-gray-500 truncate">{medico.email || "contacto@clinica.com"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER SIMPLE */}
        <div className="bg-gray-50 px-8 py-4 flex justify-center lg:justify-end gap-4 border-t">
          <button 
            onClick={onClose}
            className="px-8 py-2 rounded bg-gray-200 text-gray-600 font-medium hover:bg-gray-300 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}