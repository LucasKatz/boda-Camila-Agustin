'use client';

import { useState, useEffect } from 'react';

export default function PortadaSection() {
  // Fecha objetivo de la boda: 11 de Diciembre de 2026 a las 19:00 hs
  const targetDate = new Date('2026-12-11T19:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutos: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section
      id="portada"
      className="relative w-full min-h-[100dvh] flex flex-col items-center justify-end pb-8 px-4 text-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/fondo1.jpeg')" }}
    >
      {/* Capa de oscurecimiento suave */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Contenedor Principal con ancho exacto compartido */}
      <div className="relative z-10 w-full max-w-[320px] sm:max-w-[340px] flex flex-col items-center mt-[40vh]">
        
        {/* DIV Contenedor de la Placa ocupando el 100% del ancho */}
        <div className="w-full mb-4">
          <img
            src="/placa.png"
            alt="Camila y Agustín"
            className="w-full h-auto block object-cover drop-shadow-2xl transition-transform duration-300"
          />
        </div>

        {/* Tarjeta del Countdown */}
        <div className="w-full">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#b39a69] font-bold mb-3">
            Faltan muy pocos días
          </p>

          {/* Rejilla de 3 Columnas con mayor espaciado (gap-3) */}
          <div className="grid grid-cols-3 gap-3 w-full">
            <div className="flex flex-col items-center justify-center bg-white/75 py-2.5 rounded-xl border border-[#b39a69]/20 shadow-sm">
              <span className="text-2xl sm:text-3xl font-black text-[#b39a69] leading-none">
                {timeLeft.dias}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#101e3d] font-semibold mt-1">
                Días
              </span>
            </div>

            <div className="flex flex-col items-center justify-center bg-white/75 py-2.5 rounded-xl border border-[#b39a69]/20 shadow-sm">
              <span className="text-2xl sm:text-3xl font-black text-[#b39a69] leading-none">
                {timeLeft.horas}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#101e3d] font-semibold mt-1">
                Hs
              </span>
            </div>

            <div className="flex flex-col items-center justify-center bg-white/75 py-2.5 rounded-xl border border-[#b39a69]/20 shadow-sm">
              <span className="text-2xl sm:text-3xl font-black text-[#b39a69] leading-none">
                {timeLeft.minutos}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#101e3d] font-semibold mt-1">
                Min
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}