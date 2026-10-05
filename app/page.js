'use client';

import { useState, useRef } from 'react';
import PortadaSection from './portada/portada';

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
          <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 py-3 px-4 flex justify-around text-xs font-medium tracking-wide text-slate-600">
            <a href="#portada" className="hover:text-amber-600 transition">Inicio</a>
            <a href="#detalles" className="hover:text-amber-600 transition">Detalles</a>
            <a href="#ubicacion" className="hover:text-amber-600 transition">Ubicación</a>
            <a href="#confirmacion" className="hover:text-amber-600 transition">Confirmar</a>
          </nav>

          {/* SECCIÓN 1: PORTADA */}
          <section id="portada" className="min-h-screen flex flex-col items-center justify-center pt-16 px-6 text-center bg-rose-50/50">
            <PortadaSection/>
          </section>

          {/* SECCIÓN 2: DETALLES DE LA BODA */}
          <section id="detalles" className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center bg-white">
            <h2 className="text-2xl md:text-3xl font-serif text-slate-800 mb-6">Detalles del Evento</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-md">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
                <div className="text-2xl mb-2">💒</div>
                <h3 className="font-semibold text-slate-700 mb-1">Ceremonia</h3>
                <p className="text-xs text-slate-500">18:00 HS</p>
                <p className="text-xs text-slate-500 mt-2">Iglesia Nuestra Señora</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
                <div className="text-2xl mb-2">🥂</div>
                <h3 className="font-semibold text-slate-700 mb-1">Fiesta</h3>
                <p className="text-xs text-slate-500">20:00 HS</p>
                <p className="text-xs text-slate-500 mt-2">Quinta Los Olivos</p>
              </div>
            </div>
            <div className="mt-8 p-4 bg-amber-50 rounded-xl text-xs text-amber-800 max-w-md">
              👗 <strong>Dress Code:</strong> Elegante / Formal
            </div>
          </section>

          {/* SECCIÓN 3: UBICACIÓN */}
          <section id="ubicacion" className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center bg-rose-50/30">
            <h2 className="text-2xl md:text-3xl font-serif text-slate-800 mb-4">¿Cómo Llegar?</h2>
            <p className="text-xs text-slate-500 mb-6 max-w-xs">
              Te dejamos la ubicación exacta del lugar del evento para que no te pierdas nada.
            </p>
            <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <p className="font-medium text-sm text-slate-700">Quinta Los Olivos</p>
              <p className="text-xs text-slate-500 mb-4">Av. Siempreviva 1234, Buenos Aires</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full py-3 bg-slate-800 text-white rounded-xl text-xs font-semibold hover:bg-slate-700 transition"
              >
                Abrir en Google Maps
              </a>
            </div>
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