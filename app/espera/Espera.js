'use client';

export default function Espera() {
  return (
    <section className="relative w-full bg-white flex flex-col items-center justify-center px-4 py-12 overflow-hidden text-center">
      
      {/* Contenedor de la Imagen Centrara (placa2.jpeg) */}
      <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-xl border border-[#e2d0ab]/50 mb-8">
        <img
          src="/placa2.jpeg"
          alt="Mensaje final"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Mensaje Final */}
      <h2 className="text-3xl sm:text-4xl font-serif text-[#0f172a] italic tracking-wide">
        ¡Los esperamos!
      </h2>

    </section>
  );
}