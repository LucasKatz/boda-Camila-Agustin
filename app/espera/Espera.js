'use client';

export default function Espera() {
  return (
    <section className="relative w-full bg-white flex flex-col items-center justify-center overflow-hidden text-center">

      {/* Tarjeta con Degradado - Alineación hacia arriba (justify-start) y padding superior ajustado */}
      <div className="relative w-full min-h-[90vh] bg-gradient-to-b from-[#e8d2a7] via-[#f7e8ca] to-[#fbf4e2] rounded-3xl px-6 pt-8 pb-16 shadow-xl border border-[#e2d0ab]/50 flex flex-col items-center justify-start gap-6">

        {/* Contenedor de la Imagen Centrada (placa2.png) */}
        <div className="relative w-full max-w-md mt-16">
          <img
            src="/placa2.png"
            alt="Mensaje final"
            className="w-full h-auto object-contain rounded-xl drop-shadow-sm"
          />
        </div>

        {/* Mensaje Final ubicado pegado a la imagen */}
        <div className="w-full">
          <h2 className="text-3xl sm:text-5xl font-serif text-[#000a48] italic tracking-wide mt-16">
            ¡Los esperamos!
          </h2>
        </div>

      </div>

    </section>
  );
}