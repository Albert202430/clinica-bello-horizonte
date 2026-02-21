// ServiceCard.tsx
import { Servicio } from "./types";

export default function ServiceCard({ servicio }: { servicio: Servicio }) {
  return (
    <div className="group bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center h-full">
      
      {/* Contenedor del Icono con animación de giro */}
      <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 
                    transition-all duration-500 ease-in-out
                    group-hover:bg-[#0173BC] group-hover:rotate-[360deg]">
        <span className="text-4xl transition-colors duration-500 group-hover:text-white">
          {servicio.icono}
        </span>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#0173BC] transition-colors">
        {servicio.titulo}
      </h3>
      
      <p className="text-gray-500 leading-relaxed text-sm mb-6 flex-grow">
        {servicio.descripcion}
      </p>

      <button className="font-bold text-[#0173BC] flex items-center gap-2 hover:gap-4 transition-all border-b-2 border-transparent hover:border-[#0173BC] pb-1">
        Saber más <span>→</span>
      </button>
    </div>
  );
}