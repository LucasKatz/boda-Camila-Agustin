'use client';

import { useState, useEffect } from 'react';

export default function PortadaSection() {
  // Fecha objetivo de la boda: 11 de Diciembre de 2026 a las 19:00 hs
  const targetDate = new Date('2026-12-11T19:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
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
          segundos: Math.floor((difference % (1000 * 60)) / 1000),
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
      {/* Capa de oscurecimiento suave para legibilidad */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Contenedor de la Placa (Sin fondo) */}
      <div className="relative z-10 w-full flex justify-center items-center mt-[45vh] mb-4">
        <img
          src="/placa.png"
          alt="Camila y Agustín"
          className="w-[85vw] max-w-[320px] h-auto object-contain drop-shadow-2xl transition-transform duration-300"
        />
      </div>

      {/* Tarjeta del Countdown */}
      <div className="relative z-10 w-full max-w-[340px]">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#8c821d] font-bold mb-2.5">
          Faltan muy pocos días
        </p>

        {/* Rejilla de tiempo optimizada para touch/celulares */}
        <div className="grid grid-cols-4 gap-1.5">
          <div className="flex flex-col items-center justify-center bg-white/70 py-2 rounded-xl border border-[#8c821d]/20">
            <span className="text-xl sm:text-2xl font-black text-[#8c821d] leading-none">
              {timeLeft.dias}
            </span>
            <span className="text-[9px] uppercase tracking-wider text-[#101e3d] font-semibold mt-1">
              Días
            </span>
          </div>

          <div className="flex flex-col items-center justify-center bg-white/70 py-2 rounded-xl border border-[#8c821d]/20">
            <span className="text-xl sm:text-2xl font-black text-[#8c821d] leading-none">
              {timeLeft.horas}
            </span>
            <span className="text-[9px] uppercase tracking-wider text-[#101e3d] font-semibold mt-1">
              Hs
            </span>
          </div>

          <div className="flex flex-col items-center justify-center bg-white/70 py-2 rounded-xl border border-[#8c821d]/20">
            <span className="text-xl sm:text-2xl font-black text-[#8c821d] leading-none">
              {timeLeft.minutos}
            </span>
            <span className="text-[9px] uppercase tracking-wider text-[#101e3d] font-semibold mt-1">
              Min
            </span>
          </div>

          <div className="flex flex-col items-center justify-center bg-white/70 py-2 rounded-xl border border-[#8c821d]/20">
            <span className="text-xl sm:text-2xl font-black text-[#8c821d] leading-none">
              {timeLeft.segundos}
            </span>
            <span className="text-[9px] uppercase tracking-wider text-[#101e3d] font-semibold mt-1">
              Seg
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}