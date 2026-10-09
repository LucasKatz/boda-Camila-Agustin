'use client';

import { useState, useRef } from 'react';
import PortadaSection from './portada/portada';
import Tiempo from './tiempo/Tiempo';
import Lugar from './lugar/Lugar';
import Gifts from './regalos/Gifts';
import DressCode from './vestimenta/vestimenta';
import Dreams from './sueños/sueños';
import Attendance from './attendance/attendance';
import Espera from './espera/Espera';
import Celebracion from './celebracion/Celebracion';

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  // Inicia la experiencia (Video + Música de fondo)
  const handleStart = () => {
    setHasStarted(true);
    
    // Reproducir video de intro
    if (videoRef.current) {
      videoRef.current.play().catch((err) => console.log('Error video:', err));
    }

    // Iniciar música de fondo
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlayingAudio(true))
        .catch((err) => console.log('Error al reproducir audio:', err));
    }
  };

  const handleVideoEnd = () => {
    setShowMainContent(true);
  };

  const skipVideo = () => {
    setShowMainContent(true);
  };

  // Alternar play/pause de la música manualmente
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlayingAudio) {
        audioRef.current.pause();
        setIsPlayingAudio(false);
      } else {
        audioRef.current.play();
        setIsPlayingAudio(true);
      }
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* Elemento de Audio de fondo en Loop */}
      <audio ref={audioRef} src="/song.mp3" loop />

      {!showMainContent ? (
        /* --- PANTALLA INTRO / VIDEO --- */
        <div className="fixed inset-0 z-50 bg-[#000a48] flex items-center justify-center overflow-hidden">
          {!hasStarted && (
            <div className="absolute z-20 flex flex-col items-center justify-center p-6 text-center text-white space-y-4">
              <h1 className="text-3xl text-[#b39a69] font-serif tracking-widest uppercase mb-6">Nuestra Boda</h1>
              <p className="text-sm opacity-80 mb-6">Toca el botón para ver la invitación</p>
              <button
                onClick={handleStart}
                className="px-8 py-3 bg-[#b39a69] text-[#000a48] font-semibold rounded-full shadow-lg hover:bg-opacity-90 transition transform active:scale-95"
              >
                Ver Invitación
              </button>
            </div>
          )}

          <video
            ref={videoRef}
            src="/intro.mp4"
            muted
            playsInline
            onEnded={handleVideoEnd}
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              hasStarted ? 'opacity-100' : 'opacity-20'
            }`}
          />

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
        /* --- LANDING PAGE PRINCIPAL --- */
        <div className="animate-fadeIn relative">
          
          {/* Botón flotante para pausar/activar música */}
          <button
            onClick={toggleAudio}
            className="fixed bottom-6 left-6 z-40 p-3 bg-[#000a48] text-white rounded-full shadow-xl border border-[#e2d0ab] hover:scale-105 transition"
            aria-label="Controlar Música"
          >
            {isPlayingAudio ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>

          {/* SECCIONES */}
          <section id="portada" className="min-h-screen flex flex-col items-center justify-center pt-4 px-6 text-center bg-rose-50/50">
            <PortadaSection />
          </section>

          <section id="detalles" className="min-h-screen flex flex-col items-center justify-center px-6  text-center bg-white">
            <Tiempo />
          </section>

          <section id="detalles" className="min-h-screen flex flex-col items-center justify-center px-6  text-center bg-white">
            <Lugar />
          </section>

          <section id="detalles" className="min-h-screen flex flex-col items-center justify-center px-6  text-center bg-white">
            <Gifts />
          </section>

          <section id="detalles" className="min-h-screen flex flex-col items-center justify-center px-6  text-center bg-white">
            <Celebracion />
          </section>

          <section id="detalles" className="min-h-screen flex flex-col items-center justify-center px-6  text-center bg-white">
            <DressCode />
          </section>

          <section id="detalles" className="min-h-screen flex flex-col items-center justify-center px-6  text-center bg-white">
            <Dreams />
          </section>

          <section id="detalles" className="min-h-screen flex flex-col items-center justify-center px-6  text-center bg-white">
            <Attendance />
          </section>

          <section id="detalles" className="min-h-screen flex flex-col items-center justify-center px-6  text-center bg-white">
            <Espera />
          </section>
        </div>
      )}
    </main>
  );
}