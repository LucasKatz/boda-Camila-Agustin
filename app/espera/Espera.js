'use client';

export default function Espera() {
  return (
    <section className="relative w-full bg-white flex flex-col items-center justify-center overflow-hidden text-center">

      {/* Tarjeta con Degradado - Distribución vertical adaptativa con justify-between */}
      <div className="relative w-full min-h-[100vh] bg-gradient-to-b from-[#fbf4e2] via-[#f7e8ca] to-[#e8d2a7] rounded-3xl px-6  pb-16 shadow-xl border border-[#e2d0ab]/50 flex flex-col items-center justify-between">

        {/* Espaciador superior transparente para equilibrar la alineación si hace falta */}
        <div className="w-full h-2" />

        {/* Contenedor de la Imagen Centrada (placa2.png) */}
        <div className="relative w-full max-w-md my-auto">
          <img
            src="/placa2.png"
            alt="Mensaje final"
            className="w-full h-auto object-contain rounded-xl drop-shadow-sm"
          />
        </div>

        {/* Mensaje Final ubicado en el bloque inferior */}
        <div className="w-full pb-6">
          <h2 className="text-3xl sm:text-5xl font-serif text-[#000a48] italic tracking-wide">
            ¡Los esperamos!
          </h2>
        </div>

      </div>

    </section>
  );
}