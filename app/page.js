'use client';

import { useState, useRef } from 'react';
import PortadaSection from './portada/portada';
import Tiempo from './tiempo/Tiempo';
import Lugar from './lugar/Lugar';

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef(null);

  // Función para iniciar la experiencia (necesaria por políticas de autoplay con audio en móviles)
  const handleStart = () => {
    setHasStarted(true);
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Error al reproducir video:', err);
      });
    }
  };

  // Función que se ejecuta cuando termina el video
  const handleVideoEnd = () => {
    setShowMainContent(true);
  };

  // Omitir video directamente
  const skipVideo = () => {
    setShowMainContent(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {!showMainContent ? (
        /* --- PANTALLA INTRO / VIDEO --- */
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
          {/* Botón inicial (los navegadores móviles bloquean el autoplay con sonido si el usuario no interactúa) */}
          {!hasStarted && (
            <div className="absolute z-20 flex flex-col items-center justify-center p-6 text-center text-white space-y-4">
              <h1 className="text-3xl font-serif tracking-widest uppercase">Nuestra Boda</h1>
              <p className="text-sm opacity-80">Toca el botón para ver la invitación</p>
              <button
                onClick={handleStart}
                className="px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-opacity-90 transition transform active:scale-95"
              >
                Ver Invitación
              </button>
            </div>
          )}

          {/* Reproductor de Video */}
          <video
            ref={videoRef}
            src="/intro.mp4"
            playsInline
            onEnded={handleVideoEnd}
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              hasStarted ? 'opacity-100' : 'opacity-20'
            }`}
          />

          {/* Botón para saltar video */}
          {hasStarted && (
            <button
              onClick={skipVideo}
              className="absolute bottom-8 right-6 z-20 px-4 py-2 bg-black/50 text-white/80 text-xs tracking-wider uppercase rounded-full backdrop-blur-md border border-white/20 hover:bg-black/80 transition"
            >
              Saltar Intro
            </button>
          )}
        </div>
      ) : (
        /* --- LANDING PAGE PRINCIPAL (4 SECCIONES) --- */
        <div className="animate-fadeIn">
          {/* Navegación Fija Superior (Mobile First) */}


          {/* SECCIÓN 1: PORTADA */}
          <section id="portada" className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-rose-50/50">
            <PortadaSection/>
          </section>

          {/* SECCIÓN 2: DETALLES DE LA BODA */}
          <section id="detalles" className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center bg-white">
            <Tiempo/>
          </section>

          {/* SECCIÓN 3: UBICACIÓN */}
          <section id="detalles" className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center bg-white">
            <Lugar/>
          </section>

          
          {/* SECCIÓN 4: CONFIRMACIÓN (RSVP) */}
          <section id="confirmacion" className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center bg-white">
            <h2 className="text-2xl md:text-3xl font-serif text-slate-800 mb-2">Confirmar Asistencia</h2>
            <p className="text-xs text-slate-500 mb-6 max-w-xs">
              Por favor confirma tu presencia antes del 1 de Noviembre.
            </p>
            <a
              href="https://wa.me/1234567890?text=Hola!%20Quiero%20confirmar%20mi%20asistencia%20a%20la%20boda"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md py-4 bg-emerald-600 text-white rounded-2xl text-sm font-semibold shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition active:scale-98 flex items-center justify-center gap-2"
            >
              Confirmar por WhatsApp
            </a>
          </section>
        </div>
      )}
    </main>
  );
}