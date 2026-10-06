'use client';

export default function Tiempo() {
  return (
    <section className="relative w-full bg-white flex items-center justify-center px-4 py-12 overflow-hidden">
      {/* Tarjeta con Degradado ocupando el 100% del alto (igual a Lugar) */}
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
          {/* Ícono de Calendario */}
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
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
          </div>

          {/* Título ¿CUÁNDO? */}
          <h2 className="text-3xl sm:text-4xl font-serif tracking-widest text-[#3b571f] uppercase mb-2">
            ¿CUÁNDO?
          </h2>

          {/* Fecha y Día */}
          <div className="mb-2">
            <p className="text-2xl sm:text-3xl font-serif text-[#000a48]">
              11 de Diciembre 2026
            </p>
            <p className="text-lg font-serif text-[#000a48] mt-1 font-light italic">
              (Viernes)
            </p>
          </div>
        </div>

        {/* Bloque Inferior: Horario */}
        <div className="w-full pt-2">
          <p className="text-xl sm:text-2xl font-serif tracking-wide text-[#000a48]">
            HORARIO: <span className="font-normal">19 a 24 hs</span>
          </p>
        </div>
      </div>
    </section>
  );
}