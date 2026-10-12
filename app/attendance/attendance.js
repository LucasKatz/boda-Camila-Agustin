'use client';

import { useState } from 'react';

export default function Attendance() {
  const [isOpen, setIsOpen] = useState(false);

  const email = "camiceriani93@gmail.com";
  const subject = encodeURIComponent("Confirmación de Asistencia");
  const body = encodeURIComponent("¡Hola! Confirmo mi asistencia para la celebración.");

  // Enlace universal (Abre la app de correo predeterminada del celular)
  const defaultMailUrl = `mailto:${email}?subject=${subject}&body=${body}`;

  // Deep Link para la App de Gmail en móviles
  const gmailAppUrl = `googlegmail://co?to=${email}&subject=${subject}&body=${body}`;

  // Deep Link para la App de Outlook en móviles
  const outlookAppUrl = `ms-outlook://compose?to=${email}&subject=${subject}&body=${body}`;

  return (
    <section className="relative w-full bg-white flex items-center justify-center pt-12">
      {/* Tarjeta con Degradado - Ancho completo */}
      <div className="relative w-full min-h-[70vh] bg-gradient-to-b from-[#fbf5e0] via-[#f7e8ca] to-[#d7bf92] rounded-3xl pt-24 pb-12 px-6 shadow-xl text-center border border-[#e2d0ab]/50 flex flex-col items-center justify-center">
        
        {/* Adorno de Limones (limones2.png) ubicado arriba al centro */}
        <div className="absolute -top-12 sm:-top-16 left-1/2 -translate-x-1/2 w-36 sm:w-44 pointer-events-none z-20">
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

          {/* Botón que abre el modal de confirmación */}
          <button
            onClick={() => setIsOpen(true)}
            className="inline-block w-full max-w-[180px] bg-[#8c6d1f] hover:bg-[#283d20] text-white font-serif tracking-wider uppercase py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            Asistiré
          </button>
        </div>
      </div>

      {/* Modal Emergente con opciones para aplicaciones móviles */}
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
              CONFIRMAR ASISTENCIA
            </h3>
            
            <p className="text-sm font-serif text-[#000a48]/80 mb-6 leading-relaxed">
              Selecciona tu aplicación de correo para enviar la confirmación:
            </p>

            <div className="flex flex-col gap-3.5 w-full">
              {/* Opción App de Gmail */}
              <a
                href={gmailAppUrl}
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#8c6d1f] hover:bg-[#283d20] text-white font-serif tracking-wider uppercase py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                Abrir App de Gmail
              </a>

              {/* Opción App de Outlook */}
              <a
                href={outlookAppUrl}
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#8c6d1f] hover:bg-[#283d20] text-white font-serif tracking-wider uppercase py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                Abrir App de Outlook
              </a>

              {/* Opción Correo Predeterminado / Mail de iPhone */}
              <a
                href={defaultMailUrl}
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#000a48] hover:bg-[#283d20] text-white font-serif tracking-wider uppercase py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                App de Correo Predeterminada
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}