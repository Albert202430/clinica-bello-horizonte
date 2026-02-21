// servicios/page.tsx
"use client";
import ServiceCard from "./ServiceCard";
import servicios from "./data"; 

export default function ServiciosPage() {
  return (
    <section className="relative bg-white pb-24">
      
      {/* ENCABEZADO AZUL */}
      <div className="w-full h-[250px] bg-[#0173BC] flex flex-col justify-center items-center px-4">
        <h2 className="text-blue-100/90 uppercase font-bold tracking-[0.3em] text-xs md:text-sm mb-3">
          Nuestras Especialidades
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight text-center">
          Servicios Médicos
        </h1>
        <div className="w-16 h-1.5 bg-[#4DB8E2] mt-6 rounded-full"></div>
      </div>

      {/* ONDA DIVISORA */}
      <div className="w-full overflow-hidden leading-[0] bg-white">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[60px] fill-[#0173BC]">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>

      {/* GRID CON EFECTO CASCADA */}
      <div className="max-w-7xl mx-auto px-6 pt-12"> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicios.map((servicio, index) => (
            <div 
              key={servicio.id} 
              className="opacity-0 animate-cascade" // <--- Nuestra nueva clase CSS
              style={{ animationDelay: `${index * 150}ms` }}
            >
               <ServiceCard servicio={servicio} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}