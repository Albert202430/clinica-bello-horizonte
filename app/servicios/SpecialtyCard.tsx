import { Especialidad } from "./types";

export default function SpecialtyCard({ especialidad }: { especialidad: Especialidad }) {
  return (
    <div className="group bg-slate-50 hover:bg-white p-6 rounded-3xl border border-transparent hover:border-blue-100 hover:shadow-[0_15px_40px_rgba(1,115,188,0.1)] transition-all duration-300 flex items-center gap-6">
      <div className="w-16 h-16 shrink-0 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:bg-[#0173BC] group-hover:text-white transition-all duration-300">
        {especialidad.icono}
      </div>
      <div className="flex-grow">
        <h4 className="text-xl font-bold text-gray-800 group-hover:text-[#0173BC] transition-colors mb-1">
          {especialidad.nombre}
        </h4>
        <p className="text-sm text-gray-500 leading-snug">
          {especialidad.descripcionCorta}
        </p>
      </div>
      
    </div>
  );
}