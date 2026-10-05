'use client';

export default function Gifts() {
  return (
    <section className="relative w-full bg-white flex items-center justify-center px-4 py-12 overflow-hidden">
      {/* Tarjeta con Degradado */}
      <div className="relative w-full max-w-sm min-h-[75vh] bg-gradient-to-b from-[#fbf4e2] via-[#f7e8ca] to-[#e8d2a7] rounded-3xl pt-20 pb-16 px-6 shadow-xl text-center border border-[#e2d0ab]/50 flex flex-col items-center justify-between">
        
        {/* Imagen de Limones Superior (limones4.png) sobresaliendo arriba a la izquierda */}
        <div className="absolute -top-10 -left-6 w-36 sm:w-44 pointer-events-none z-10">
          <img
            src="/limones4.png"
            alt="Adorno de limones superior"
            className="w-full h-auto object-contain drop-shadow-md"
          />
        </div>

        {/* Bloque Superior: Ícono de Regalo y Título */}
        <div className="flex flex-col items-center w-full pt-4">
          {/* Ícono de Regalo */}
          <div className="mb-3">
            <svg
              className="w-14 h-14 text-[#0f172a]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H4.5a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0v15m-8.25-15h16.5"
              />
            </svg>
          </div>

          {/* Título REGALOS */}
          <h2 className="text-3xl sm:text-4xl font-serif tracking-widest text-[#0f172a] uppercase mb-6">
            REGALOS
          </h2>

          {/* Texto del adjunto */}
          <div className="space-y-2 text-[#2a3026] font-serif italic text-lg sm:text-xl leading-snug max-w-[280px]">
            <p>Nos vamos de viaje</p>
            <p>a comenzar nuestra aventura</p>
            <p>de recién casados...</p>
            <p className="pt-2">Si quieren regalarnos algo,</p>
            <p>pueden ayudarnos</p>
            <p>a llenar la valija de recuerdos.</p>
          </div>
        </div>

        {/* Bloque Inferior: Alias */}
        <div className="w-full pt-6">
          <p className="text-xl sm:text-2xl font-serif text-[#2a3026]">
            Alias: <span className="underline font-normal">agusycamis.mp</span>
          </p>
        </div>

        {/* Imagen de Limones Inferior (limones2.png) sobresaliendo abajo */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-28 sm:w-36 pointer-events-none z-10">
          <img
            src="/limones2.png"
            alt="Adorno de limones inferior"
            className="w-full h-auto object-contain drop-shadow-md"
          />
        </div>
      </div>
    </section>
  );
}