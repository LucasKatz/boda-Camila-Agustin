'use client';

import { useState } from 'react';

export default function Attendance() {
  const [isOpen, setIsOpen] = useState(false);

  const email = "camiceriani93@gmail.com";
  const subject = "Confirmación de Asistencia";
  const body = "¡Hola! Confirmo mi asistencia para la celebración.";

  // URL para Gmail Web
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // URL para Outlook Web / Hotmail
  const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section className="relative w-full bg-white flex items-center justify-center   ">
      {/* Tarjeta con Degradado - Ancho completo */}
      <div className="relative w-full min-h-[70vh] bg-gradient-to-b from-[#fbf5e0] via-[#f7e8ca] to-[#d7bf92] rounded-3xl pt-24 pb-12 px-6 shadow-xl text-center border border-[#e2d0ab]/50 flex flex-col items-center justify-center">
        
        {/* Adorno de Limones (limones2.png) ubicado arriba al centro */}
        <div className="absolute -top-12 w-36 sm:w-44 pointer-events-none z-10 overflow-visible">
          <img
            src="/limones2.png"
            alt="Adorno de limones"
            className="w-full h-auto object-contain drop-shadow-md"
          />
        </div>

        {/* Bloque Principal */}
        <div className="flex flex-col items-center w-full">
          {/* Título CONFIRMAR ASISTENCIA */}
          <h2 className="text-3xl sm:text-4xl font-serif tracking-widest text-[#000a48] uppercase mb-8">
            CONFIRMAR ASISTENCIA
          </h2>

          {/* Botón que abre el selector de correo */}
          <button
            onClick={() => setIsOpen(true)}
            className="inline-block w-full max-w-[180px] bg-[#8c6d1f] hover:bg-[#283d20] text-white font-serif tracking-wider uppercase py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            Asistiré
          </button>
        </div>
      </div>

      {/* Modal Emergente con las Opciones estilizadas */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000a48]/30 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-sm bg-gradient-to-b from-[#fbf5e0] via-[#f7e8ca] to-[#d7bf92] rounded-3xl p-8 shadow-2xl border border-[#e2d0ab] text-center flex flex-col items-center">
            
            {/* Botón para cerrar (X) */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-5 text-[#000a48]/60 hover:text-[#000a48] text-2xl font-serif transition-colors"
            >
              &times;
            </button>

            <h3 className="text-xl font-serif text-[#000a48] uppercase tracking-widest mb-3">
              SELECCIONA TU CORREO
            </h3>
            
            <p className="text-sm font-serif text-[#000a48]/80 mb-6 leading-relaxed">
              ¿Desde qué plataforma deseas enviarnos la confirmación?
            </p>

            <div className="flex flex-col gap-3.5 w-full">
              {/* Opción Gmail */}
              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#8c6d1f] hover:bg-[#283d20] text-white font-serif tracking-wider uppercase py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                Abrir en Gmail
              </a>

              {/* Opción Outlook */}
              <a
                href={outlookUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#8c6d1f] hover:bg-[#283d20] text-white font-serif tracking-wider uppercase py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                Abrir en Outlook
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}