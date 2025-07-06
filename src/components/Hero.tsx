

import React from "react";

const floatingIcons = [
  { icon: "📺", className: "top-[20%] left-[10%] animate-float delay-0" },
  { icon: "💡", className: "top-[15%] right-[15%] animate-float delay-2000" },
  { icon: "❄️", className: "bottom-[20%] left-[15%] animate-float delay-4000" },
  { icon: "☕", className: "bottom-[25%] right-[20%] animate-float delay-3000" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#4a90e2] via-[#357abd] to-[#2c5f94]"
    >
      {/* SVG background circles */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1000 1000\'><defs><radialGradient id=\'a\' cx=\'50%\' cy=\'50%\' r=\'50%\'><stop offset=\'0%\' style=\'stop-color:rgba(255,255,255,0.1)\'/><stop offset=\'100%\' style=\'stop-color:rgba(255,255,255,0)\'/></radialGradient></defs><circle cx=\'200\' cy=\'200\' r=\'100\' fill=\'url(%23a)\'/><circle cx=\'800\' cy=\'300\' r=\'150\' fill=\'url(%23a)\'/><circle cx=\'400\' cy=\'700\' r=\'120\' fill=\'url(%23a)\'/></svg>') center/cover no-repeat",
        }}
      />

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, i) => (
          <div
            key={i}
            className={`absolute flex items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-[10px] text-[2.5rem] md:w-20 md:h-20 w-15 h-15 ${item.className}`}
            style={{
              width: "80px",
              height: "80px",
              fontSize: "2.5rem",
              animationDelay: `${parseInt(item.className.match(/delay-(\d+)/)?.[1] || "0", 10)}ms`,
            }}
          >
            {item.icon}
          </div>
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-2xl px-4 py-8">
        <div className="inline-block mb-8 px-4 py-2 rounded-full border border-white/30 bg-white/20 backdrop-blur-[10px] text-white text-sm animate-slideInDown">
          🏠 Dispositivos IoT para mayor comodidad y modernidad
        </div>
        <h1 className="text-white font-extrabold text-4xl md:text-6xl mb-6 leading-tight animate-slideInUp [animation-delay:0.3s]">
          Transforma tu hogar con<br />
          <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">GeoEntry</span>
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed animate-slideInUp [animation-delay:0.6s]">
          Conecta todos tus dispositivos inteligentes en un ecosistema perfecto.<br />
          TV, iluminación, climatización y electrodomésticos se activan automáticamente<br />
          cuando detectan tu presencia. El futuro del hogar inteligente está aquí.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-slideInUp [animation-delay:0.9s]">
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-blue-700 to-blue-400 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:from-blue-800 hover:to-blue-600 transition-all duration-300 border-none cursor-pointer"
          >
            Solicitar Demo
          </a>
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white/10 border border-white/20 text-white px-8 py-3 rounded-full font-semibold text-lg backdrop-blur-[10px] hover:bg-white/20 transition-all duration-300"
          >
            Saber más
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-12 mt-8 animate-slideInUp [animation-delay:1.2s]">
          <div className="text-center text-white">
            <span className="block text-2xl font-bold text-blue-200">5000+</span>
            <span className="block text-sm opacity-80">Hogares conectados</span>
          </div>
          <div className="text-center text-white">
            <span className="block text-2xl font-bold text-blue-200">99.9%</span>
            <span className="block text-sm opacity-80">Tiempo de actividad</span>
          </div>
          <div className="text-center text-white">
            <span className="block text-2xl font-bold text-blue-200">24/7</span>
            <span className="block text-sm opacity-80">Soporte técnico</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white opacity-70 animate-bounce z-20">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .delay-0 { animation-delay: 0s; }
        .delay-2000 { animation-delay: 2s; }
        .delay-3000 { animation-delay: 3s; }
        .delay-4000 { animation-delay: 4s; }
        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideInDown { animation: slideInDown 1s ease-out; }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideInUp { animation: slideInUp 1s ease-out; animation-fill-mode: both; }
        @media (max-width: 768px) {
          .md\\:w-20 { width: 60px !important; height: 60px !important; font-size: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
