'use client';

import React from 'react';

const NosotrosIdentidad = () => {
  return (
    <section className="relative w-full bg-white py-16 overflow-hidden">
      {/* Elementos de fondo 3D */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#0173BC]/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#10b5c5]/5 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border-2 border-[#0173BC]/10 rotate-45 transform-gpu animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-[#10b5c5]/10 rounded-full animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Grid principal: Testimonio + Texto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Lado izquierdo - Testimonio circular con imagen de fondo */}
          <div className="flex justify-center lg:justify-start perspective">
            <div className="relative w-80 h-80 rounded-full flex flex-col items-center justify-center p-10 text-center shadow-2xl transform-gpu transition-all duration-700 hover:rotate-y-12 hover:shadow-[#0173BC]/30 group overflow-hidden"
                 style={{
                   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                 }}>
              {/* Overlay adicional para mejor legibilidad (opcional) */}
              <div className="absolute inset-0 bg-black/20 rounded-full"></div>
              
              {/* Icono de chat/corazón con animación */}
              <div className="mb-4 transform-gpu transition-transform group-hover:scale-110 group-hover:-translate-y-2 duration-500 relative z-10">
                <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="drop-shadow-md"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              
              <p className="text-white text-sm leading-relaxed mb-4 italic px-4 relative z-10 drop-shadow-lg">
                <span className="absolute -left-2 -top-2 text-4xl text-white/30 font-serif">"</span>
                En Clínica Bello Horizonte, nuestro compromiso es brindar atención médica de excelencia con calidez humana. Cada paciente es parte de nuestra familia.
                <span className="absolute -right-2 -bottom-2 text-4xl text-white/30 font-serif">"</span>
              </p>
              
              <div className="w-12 h-0.5 bg-gradient-to-r from-white to-white/70 mb-3 transform-gpu group-hover:w-20 transition-all duration-700 relative z-10"></div>
              
              <h3 className="text-white text-xl font-light tracking-widest uppercase text-center leading-tight drop-shadow-lg relative z-10">
                BELLO<br/>HORIZONTE
              </h3>

              {/* Brillo sutil al hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          </div>

          {/* Lado derecho - Contenido */}
          <div className="text-gray-700 lg:pl-8 space-y-6">
            <h2 className="text-4xl md:text-5xl font-light text-[#0173BC] mb-6 leading-tight">
              Esta es <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#0173BC] to-[#10b5c5]">nuestra esencia</span>
            </h2>
            
            <p className="text-base leading-relaxed text-gray-600 border-l-4 border-[#10b5c5] pl-4 py-2">
              En Clínica Bello Horizonte, la salud y el bienestar de nuestros pacientes son el centro de todo lo que hacemos. Como líderes en atención médica integral, ofrecemos un espacio donde la tecnología de vanguardia se combina con un trato humano excepcional.
            </p>
            
            <p className="text-base leading-relaxed text-gray-600">
              Creemos que la medicina va más allá de tratar enfermedades; se trata de construir relaciones de confianza duraderas con quienes confían en nosotros. Esto nos permite acompañar a nuestros pacientes en cada etapa de su vida, promoviendo la prevención y mejorando su calidad de vida.
            </p>

            {/* Mini estadísticas con animación */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center transform-gpu hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-[#0173BC]">+30</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Años de experiencia</div>
              </div>
              <div className="text-center transform-gpu hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-[#0173BC]">+50</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Especialistas</div>
              </div>
              <div className="text-center transform-gpu hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-[#0173BC]">+10k</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Pacientes al año</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Misión, Visión y Valores con efecto 3D en tarjetas */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 perspective-container">
          {/* Misión */}
          <div className="group bg-white border-t-4 border-[#0173BC] shadow-xl rounded-lg p-8 hover:shadow-2xl transition-all duration-500 transform-gpu hover:-translate-y-2 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-[#0173BC]/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0173BC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-12 h-12 bg-[#E8F4F8] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-6 h-6 text-[#0173BC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#0173BC] mb-3">Misión</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Proveer servicios de salud integrales con excelencia médica, tecnología avanzada y calidez humana, mejorando la calidad de vida de nuestros pacientes y sus familias.
            </p>
          </div>

          {/* Visión */}
          <div className="group bg-white border-t-4 border-[#10b5c5] shadow-xl rounded-lg p-8 hover:shadow-2xl transition-all duration-500 transform-gpu hover:-translate-y-2 hover:rotate-x-2 hover:rotate-y-[-2deg] hover:shadow-[#10b5c5]/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#10b5c5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-12 h-12 bg-[#E8F4F8] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-6 h-6 text-[#10b5c5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#0173BC] mb-3">Visión</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ser la clínica líder en la región, reconocida por la excelencia en atención médica, innovación constante y compromiso absoluto con la salud y bienestar de la comunidad.
            </p>
          </div>

          {/* Valores */}
          <div className="group bg-white border-t-4 border-[#0173BC] shadow-xl rounded-lg p-8 hover:shadow-2xl transition-all duration-500 transform-gpu hover:-translate-y-2 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-[#0173BC]/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0173BC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-12 h-12 bg-[#E8F4F8] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-6 h-6 text-[#0173BC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#0173BC] mb-3">Valores</h3>
            <ul className="text-gray-600 text-sm leading-relaxed space-y-1">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#10b5c5] rounded-full"></span> Ética y responsabilidad</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#10b5c5] rounded-full"></span> Compromiso con el paciente</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#10b5c5] rounded-full"></span> Excelencia médica</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#10b5c5] rounded-full"></span> Trabajo en equipo</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#10b5c5] rounded-full"></span> Innovación continua</li>
            </ul>
          </div>
        </div>

        {/* Llamado a la acción adicional */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-[#0173BC] to-[#10b5c5] text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform-gpu hover:scale-105 transition-all duration-300 hover:rotate-1">
            Conoce a nuestro equipo médico
          </button>
        </div>
      </div>

      {/* Estilos personalizados para animaciones y 3D */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 9s ease-in-out infinite;
        }
        .perspective {
          perspective: 1200px;
        }
        .perspective-container {
          perspective: 2000px;
        }
        .hover\:rotate-y-12:hover {
          transform: rotateY(12deg) rotateX(2deg);
        }
        .group:hover .group-hover\:rotate-y-12 {
          transform: rotateY(12deg) rotateX(2deg);
        }
        .hover\:rotate-x-2:hover {
          transform: rotateX(2deg);
        }
        .hover\:rotate-y-2:hover {
          transform: rotateY(2deg);
        }
        .hover\:rotate-y-\[-2deg\]:hover {
          transform: rotateY(-2deg);
        }
      `}</style>
    </section>
  );
};

export default NosotrosIdentidad;