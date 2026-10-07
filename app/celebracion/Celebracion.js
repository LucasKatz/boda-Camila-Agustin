'use client';

export default function Celebracion() {
  return (
    <section className="relative w-full bg-white flex flex-col items-center justify-center py-12 overflow-hidden">
      
      {/* Ícono de Fiesta / Lanzador de Confeti sobre el fondo blanco */}
      <div className="mb-6">
        <svg
          className="w-14 h-14 text-[#000a48]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cono del lanzador de confeti */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l4.5-12 7.5 7.5-12 4.5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 13.5l5.25 5.25"
          />
          {/* Cintas y Confeti */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6.75c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 3.75c1.5-1 3-1 4.5 0"
          />
          <circle cx="18" cy="10.5" r="0.75" fill="currentColor" />
          <circle cx="14.25" cy="2.25" r="0.75" fill="currentColor" />
          <circle cx="20.25" cy="4.5" r="0.75" fill="currentColor" />
        </svg>
      </div>

      {/* Tarjeta con Degradado - Ancho completo */}
      <div className="relative w-full bg-gradient-to-b from-[#fbf4e2] via-[#f7e8ca] to-[#e8d2a7] rounded-3xl pt-10 pb-12 px-6 shadow-xl text-center border border-[#e2d0ab]/50 flex flex-col items-center">
        
        {/* Encabezado dentro de la tarjeta */}
        <div className="mb-6">
          <p className="text-xl sm:text-2xl font-serif text-[#000a48] italic">
            Vení a celebrar
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#000a48] tracking-tight">
            nuestro amor!
          </h2>
        </div>

        {/* Contenedor de la Foto de la pareja */}
        <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-visible shadow-md border border-[#e2d0ab]/40">
          <img
            src="/PHOTO-1.jpg" 
            alt="Pareja"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Imagen de Limones Inferior (limones3.png) en la esquina inferior derecha */}
        <div className="absolute -bottom-8 -right-4 w-36 sm:w-44 pointer-events-none z-10">
          <img
            src="/limones3.png"
            alt="Adorno de limones inferior"
            className="w-full h-auto object-contain drop-shadow-md"
          />
        </div>

      </div>
    </section>
  );
}