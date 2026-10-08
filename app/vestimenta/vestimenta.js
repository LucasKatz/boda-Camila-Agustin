'use client';

export default function DressCode() {
  return (
    <section className="relative w-full bg-white flex items-center justify-center py-12 overflow-hidden">
      {/* Tarjeta con Degradado - Ancho completo */}
      <div className="relative w-full min-h-[70vh] bg-gradient-to-b from-[#fbf4e2] via-[#f7e8ca] to-[#e8d2a7] rounded-3xl pt-24 pb-12 px-6 shadow-xl text-center border border-[#e2d0ab]/50 flex flex-col items-center justify-center">
        
        {/* Adorno de Limones (limones3.png) ubicado arriba a la derecha */}
        <div className="absolute -top-8 -right-4 w-36 sm:w-44 pointer-events-none z-10 overflow-visible">
          <img
            src="/limones3.png"
            alt="Adorno de limones"
            className="w-full h-auto object-contain drop-shadow-md"
          />
        </div>

        {/* Bloque Principal: Ícono, Título y Texto */}
        <div className="flex flex-col items-center w-full">
          {/* Ícono de Diamante (orientación correcta) */}
          <div className="mb-8 mt-4">
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
                d="M6 3h12l4.5 6-10.5 12L1.5 9 6 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1.5 9h21M12 21L7.5 9 12 3l4.5 6L12 21z"
              />
            </svg>
          </div>

          {/* Título DRESS CODE */}
          <h2 className="text-3xl sm:text-4xl font-serif tracking-widest text-[#000a48] uppercase mb-12">
            DRESS CODE
          </h2>

          {/* Texto Descriptivo */}
          <div className="text-2xl sm:text-3xl font-serif text-[#000a48]">
            Elegante Sport
          </div>
          <p className="text-lg font-serif text-[#000a48] mt-2 font-light italic max-w-[240px]">
            ¡Animate a ponerte algo de color!
          </p>
        </div>
      </div>
    </section>
  );
}