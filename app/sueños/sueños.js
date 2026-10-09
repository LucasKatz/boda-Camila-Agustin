'use client';

export default function Dreams() {
  return (
    <section className="relative w-full bg-white flex flex-col items-center justify-center  overflow-hidden ">
      {/* Texto superior sobre el fondo blanco */}
      <div className="max-w-md text-center mb-10 px-2">
        <p className="text-xl sm:text-2xl font-serif text-[#000a48] leading-relaxed italic mb-8">
          "Los sueños se cumplen mejor <br></br> cuando se comparten. <br></br>Te espero para crear recuerdos<br></br> inolvidables juntos."
        </p>
      </div>

      {/* Tarjeta con Degradado de 70vh - Ancho completo */}
      <div className="relative w-full h-[100vh] bg-gradient-to-b from-[#fbf4e2] via-[#f7e8ca] to-[#e8d2a7] rounded-3xl pt-20 pb-8 px-6 shadow-xl text-center border border-[#e2d0ab]/50 flex flex-col items-center justify-center">
        
        {/* Adorno superior de Limones (limones3.png) centrado sobresaliendo */}
        <div className="absolute -top-12 sm:-top-16 left-1/2 -translate-x-1/2 w-full max-w-[220px] pointer-events-none z-10">
          <img
            src="/limones3.png"
            alt="Adorno de limones"
            className="w-full h-auto object-contain drop-shadow-md"
          />
        </div>

        {/* Imagen centrada dentro de la tarjeta */}
        <div className="relative w-full h-full max-h-[85%] rounded-2xl overflow-hidden shadow-md border border-[#e2d0ab]/40">
          <img
            src="/PHOTO-2.jpg" 
            alt="Imagen centrada"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}