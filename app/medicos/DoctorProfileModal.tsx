"use client";
import React from "react";
import { Doctor, DoctorProfileModalProps } from "./types";

export default function DoctorProfileModal({ medico, onClose }: DoctorProfileModalProps) {
  if (!medico) return null;

  // Función para manejar el agendamiento por WhatsApp
  const handleAgendarClick = () => {
    const telefono = "51947052846"; // ⬅️ REEMPLAZA CON EL NÚMERO REAL DE LA CLÍNICA (ej: 51 + número)
    const mensaje = `Hola, quiero reservar una cita con el dr. ${medico.nombre}, solicito información.`;
    
    // Codificamos el mensaje para que sea válido en una URL
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    
    // Abrimos en una pestaña nueva
    window.open(url, "_blank");
  };

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
      <div className="bg-white w-full max-w-6xl rounded-lg shadow-2xl overflow-hidden flex flex-col my-auto animate-in fade-in zoom-in duration-200">
        
        {/* HEADER SIMPLE */}
        <div className="flex justify-between items-center bg-[#0173BC] px-6 py-4 border-b">
          <div className="flex items-center gap-2">
            <h2 className="text-white font-semibold text-lg">Perfil del Médico</h2>
          </div>
          <button 
            onClick={onClose} 
            className="text-white/80 hover:text-white text-3xl transition-transform hover:rotate-90 leading-none"
          >
            &times;
          </button>
        </div>

        {/* BODY CON 3 COLUMNAS OPTIMIZADAS */}
        <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* 1. COLUMNA IZQUIERDA: Foto y Botón Agendar */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="relative aspect-square w-full">
              <img
                src={medico.imagen}
                alt={medico.nombre}
                className="w-full h-full object-cover rounded-lg border shadow-sm"
              />
            </div>
            
            {/* BOTÓN ACTUALIZADO CON FUNCIÓN WHATSAPP */}
            <button 
              onClick={handleAgendarClick}
              className="w-full bg-[#0173BC] text-white py-2.5 rounded-md font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#015a93] transition-all shadow-md active:scale-95"
            >
              Agendar <span>📅</span>
            </button>
          </div>

          {/* 2. COLUMNA CENTRAL */}
          <div className="lg:col-span-6 space-y-6 pr-2"> 
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1 leading-tight uppercase">
                {medico.nombre}
              </h3>
              <p className="text-[#0173BC] text-xl font-semibold uppercase">
                {medico.especialidad}
              </p>
            </div>

            <section className="space-y-4">
              <div className="bg-gray-50/50 p-4 rounded-lg border border-gray-100">
                <h4 className="font-bold text-gray-700 text-[10px] uppercase tracking-widest mb-2 border-b pb-1">Identificación</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[10px] text-gray-400 font-bold uppercase">CMP</span>
                    <p className="text-gray-600 font-medium text-base">{medico.cmp}</p>
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 font-bold uppercase">RNE</span>
                    <p className="text-gray-600 font-medium text-base">{medico.rne}</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                {medico.descripcion}
              </p>
            </section>
          </div>

          {/* 3. COLUMNA DERECHA */}
          <div className="lg:col-span-4 space-y-6 border-l pl-0 lg:pl-4 border-gray-100">
            <div>
              <h4 className="text-2xl font-light text-gray-800 mb-4">Horario:</h4>
              <div className="space-y-4">
                {(medico.horarios || [
                  { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
                ]).map((item, index) => (
                  <div key={index} className="flex flex-col border-b border-gray-50 pb-2">
                    <span className="text-[10px] font-bold text-[#4DB8E2] uppercase tracking-wider">🗓 {item.dia}</span>
                    <div className="flex justify-between items-center mt-1 gap-1">
                      <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{item.horas}</span>
                      <span className="bg-[#4DB8E2]/10 text-[#0173BC] text-[9px] px-1.5 py-0.5 rounded font-bold border border-[#4DB8E2]/20">
                        Presencial
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <div className="flex items-center gap-2 bg-blue-50/30 p-2 rounded-lg border border-blue-100/50 w-full overflow-hidden">
                <span className="text-base flex-shrink-0">📧</span>
                <span className="text-[10px] xl:text-[11px] font-bold text-gray-600 break-all leading-tight">
                  {medico.email || "administracion@clinicabellohorizonte.com.pe"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
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