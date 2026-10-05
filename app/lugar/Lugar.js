'use client';
import Link from "next/link";

export default function Lugar() {
  const googleMapsUrl =
    'https://maps.google.com/?q=Quinta+La+Soledad+Ezeiza'; // Reemplaza con tu URL o coordenadas de Google Maps

  return (
    <section className="relative w-full bg-white flex items-center justify-center px-4 py-12 overflow-hidden">
      {/* Tarjeta con Degradado ocupando el 95% del alto */}
      <div className="relative w-full max-w-sm min-h-[70vh] bg-gradient-to-b from-[#fbf4e2] via-[#f7e8ca] to-[#e8d2a7] rounded-3xl pt-24 pb-12 px-6 shadow-xl text-center border border-[#e2d0ab]/50 flex flex-col items-center justify-between">
        
        {/* Adorno superior de Limones (limones3.png) sobresaliendo del borde */}
        <div className="absolute -top-12 sm:-top-16 left-1/2 -translate-x-1/2 w-full max-w-[220px] pointer-events-none z-10">
          <img
            src="/limones3.png"
            alt="Adorno de limones"
            className="w-full h-auto object-contain drop-shadow-md"
          />
        </div>

        {/* Bloque Superior: Ícono y Título */}
        <div className="flex flex-col items-center w-full">
          {/* Ícono de Ubicación (Pin) */}
          <div className="mb-3 mt-4">
            <svg
              className="w-14 h-14 text-[#354f2a]"
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
          <h2 className="text-3xl sm:text-4xl font-serif tracking-widest text-[#354f2a] uppercase mb-6">
            ¿DÓNDE?
          </h2>

          {/* Nombre de la Salón / Quinta */}
          <h3 className="text-2xl sm:text-3xl font-serif text-[#2a3026] mb-2">
            Quinta "La Soledad"
          </h3>

          {/* Dirección */}
          <p className="text-base font-serif text-[#4a5244] leading-relaxed max-w-[260px]">
            Mariano Castex 3232, Canning, Provincia de Buenos Aires
          </p>
        </div>

        {/* Bloque Inferior: Botón de Ubicación (Link funcional) */}
        <div className="w-full pt-6">
          <Link
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full max-w-[260px] bg-[#354f2a] hover:bg-[#283d20] text-white font-serif text-sm tracking-wider uppercase py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            Cómo llegar
          </Link>
        </div>
      </div>
    </section>
  );
}