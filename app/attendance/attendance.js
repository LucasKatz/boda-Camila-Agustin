'use client';

export default function Attendance() {
  return (
    <section className="relative w-full bg-white flex items-center justify-center px-4 py-12 overflow-hidden h-[110vh]">
      {/* Tarjeta con Degradado */}
      <div className="relative w-full max-w-sm min-h-[70vh] bg-gradient-to-b from-[#fbf4e2] via-[#f7e8ca] to-[#e8d2a7] rounded-3xl pt-24 pb-12 px-6 shadow-xl text-center border border-[#e2d0ab]/50 flex flex-col items-center justify-center">
        
        {/* Adorno de Limones (limones3.png) ubicado arriba a la derecha */}
        <div className="absolute -top-16  w-36 sm:w-44 pointer-events-none z-10">
          <img
            src="/limones2.png"
            alt="Adorno de limones"
            className="w-full h-auto object-contain drop-shadow-md"
          />
        </div>

        {/* Bloque Principal: Ícono, Título y Texto */}
        <div className="flex flex-col items-center w-full">
         

          {/* Título DRESS CODE */}
          <h2 className="text-3xl sm:text-4xl font-serif tracking-widest text-[#354f2a] uppercase mb-6">
            CONFIRMAR ASISTENCIA
          </h2>

          
        </div>
      </div>
    </section>
  );
}