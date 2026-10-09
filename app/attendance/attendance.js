'use client';

export default function Attendance() {
  const email = "camiceriani93@gmail.com";
  const subject = encodeURIComponent("Confirmación de Asistencia");
  const body = encodeURIComponent("¡Hola! Confirmo mi asistencia para la celebración.");

  return (
    <section className="relative w-full bg-white flex items-center justify-center py-12 overflow-hidden h-[110vh]">
      {/* Tarjeta con Degradado - Ancho completo */}
      <div className="relative w-full min-h-[70vh] bg-gradient-to-b from-[#fbf5e0] via-[#f7e8ca] to-[#d7bf92] rounded-3xl pt-24 pb-12 px-6 shadow-xl text-center border border-[#e2d0ab]/50 flex flex-col items-center justify-center">
        
        {/* Adorno de Limones (limones2.png) ubicado arriba al centro */}
        <div className="absolute -top-16 w-36 sm:w-44 pointer-events-none z-10">
          <img
            src="/limones2.png"
            alt="Adorno de limones"
            className="w-full h-auto object-contain drop-shadow-md"
          />
        </div>

        {/* Bloque Principal */}
        <div className="flex flex-col items-center w-full">
          {/* Título CONFIRMAR ASISTENCIA */}
          <h2 className="text-3xl sm:text-4xl font-serif tracking-widest text-[#000a48] uppercase mb-8">
            CONFIRMAR ASISTENCIA
          </h2>

          {/* Botón Asistiré */}
          <a
            href={`mailto:${email}?subject=${subject}&body=${body}`}
            className="inline-block w-full max-w-[180px] bg-[#8c6d1f] hover:bg-[#283d20] text-white font-serif tracking-wider uppercase py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            Asistiré
          </a>
        </div>
      </div>
    </section>
  );
}