'use client';

export default function Espera() {
  return (
    <section className="relative w-full bg-white flex flex-col items-center justify-center py-12 overflow-hidden text-center">

      {/* Tarjeta con Degradado - Mismo ancho que Attendance */}
      <div className="relative w-full min-h-[50vh] bg-gradient-to-b from-[#fbf4e2] via-[#f7e8ca] to-[#e8d2a7] rounded-3xl py-12 px-6 shadow-xl border border-[#e2d0ab]/50 flex flex-col items-center justify-center">

        {/* Contenedor de la Imagen Centrada (placa2.png) */}
        <div className="relative w-full mb-6">
          <img
            src="/placa2.png"
            alt="Mensaje final"
            className="w-full h-auto object-contain rounded-xl"
          />
        </div>

        {/* Mensaje Final */}
        <h2 className="text-3xl sm:text-4xl font-serif text-[#000a48] italic tracking-wide">
          ¡Los esperamos!
        </h2>

      </div>

    </section>
  );
}