'use client';
import Link from "next/link";

export default function Lugar() {
  const googleMapsUrl = 'https://maps.app.goo.gl/dAc5LxK2xMLVkb4c7'; 

  return (
    <section className="relative w-full bg-white flex flex-col items-center justify-center py-16 overflow-hidden min-h-screen">
      
      {/* Bloque Superior fuera de la Card */}
      <div className="flex flex-col items-center text-center mb-8 z-10">
        {/* Ícono de Ubicación */}
        <div className="mb-2">
          <svg
            className="w-14 h-14 text-[#000a48]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </div>

        {/* Título ¿DÓNDE? */}
        <h2 className="text-3xl sm:text-4xl font-serif tracking-widest text-[#000a48] uppercase">
          ¿DÓNDE?
        </h2>
      </div>

      {/* Tarjeta con Degradado - Mantiene min-h-[75vh] */}
      <div className="relative w-full min-h-[75vh] bg-gradient-to-b from-[#fbf4e2] via-[#f7e8ca] to-[#e8d2a7] rounded-3xl pt-16 pb-12 px-6 shadow-xl text-center border border-[#e2d0ab]/50 flex flex-col items-center justify-between">
        
        {/* Adorno superior de Limones (limones3.png) */}
        <div className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 w-full max-w-[110px] pointer-events-none z-10">
          <img
            src="/limones3.png"
            alt="Adorno de limones superior"
            className="w-full h-auto object-contain drop-shadow-md"
          />
        </div>

        {/* Bloque central unificado (Texto + Botón pegados) */}
        <div className="flex flex-col items-center justify-center w-full my-auto space-y-4">
          
          {/* Contenedor de Texto compacto */}
          <div className="flex flex-col items-center space-y-1">
            <p className="text-lg sm:text-xl font-serif text-[#000a48]">
              Nombre del Salón:
            </p>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#000a48] font-semibold py-0.5">
              Simple Eventos
            </h3>
            <p className="text-base sm:text-lg font-serif text-[#000a48]">
              Chivilcoy 452, Floresta
            </p>
            <p className="text-base sm:text-lg font-serif text-[#000a48]">
              CABA
            </p>
          </div>

          {/* Botón de Ubicación en el mismo flujo */}
          <div className="w-full pt-2">
            <Link
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full max-w-[180px] bg-[#8c6d1f] hover:bg-[#283d20] text-white font-serif text-sm tracking-wider uppercase py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              Cómo llegar
            </Link>
          </div>

        </div>

        {/* Adorno inferior de Limones (limones2.png) */}
        <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 w-full max-w-[110px] pointer-events-none z-10">
          <img
            src="/limones2.png"
            alt="Adorno de limones inferior"
            className="w-full h-auto object-contain drop-shadow-md"
          />
        </div>

      </div>
    </section>
  );
}