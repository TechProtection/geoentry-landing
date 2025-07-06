
import React from 'react';
import geoentryLogo from '../assets/geoentry.png';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center">
              <img src={geoentryLogo} alt="GeoEntry logo" className="h-8 w-8 object-contain" />
              <span className="ml-2 text-xl font-bold">GeoEntry</span>
            </div>
            <p className="mt-2 text-gray-400">
              Por TechProtection - Transformando hogares con tecnología avanzada de automatización.
            </p>
            <div className="mt-4">
              <p className="text-gray-400">TechGuard © {new Date().getFullYear()}. Todos los derechos reservados.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Enlaces Rápidos</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-techguard-300">Características</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-techguard-300">Cómo Funciona</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-techguard-300">Política de Privacidad</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-techguard-300">Términos de Servicio</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Contáctanos</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-400">
                <span className="block">Correo:</span>
                <a href="mailto:info@techguard.com" className="hover:text-techguard-300">info@geoentry.com</a>
              </li>
              <li className="text-gray-400">
                <span className="block">Teléfono:</span>
                <a href="tel:+1234567890" className="hover:text-techguard-300">+51 930 251 836</a>
              </li>
              <li className="text-gray-400">
                <span className="block">Dirección:</span>
                <span>Av. Gral. Salaverry 2255, San Isidro 15076</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
