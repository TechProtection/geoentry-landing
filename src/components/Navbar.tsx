
import React, { useState } from 'react';
import geoentryLogo from '../assets/geoentry.png';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setIsMobileMenuOpen(false);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cambia el color de los links según la sección visible
  const [activeSection, setActiveSection] = React.useState<string>("");
  React.useEffect(() => {
    const handleScroll = () => {
      const features = document.getElementById('features');
      const contact = document.getElementById('contact');
      const scrollY = window.scrollY + 80; // Compensa el navbar fijo
      let section = "";
      if (contact && scrollY >= contact.offsetTop) {
        section = "contact";
      } else if (features && scrollY >= features.offsetTop) {
        section = "features";
      }
      setActiveSection(section);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkColor = activeSection === 'features' || activeSection === 'contact' ? 'text-black hover:text-blue-700' : 'text-white hover:text-blue-200';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-[20px] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className={`flex items-center gap-2 text-2xl font-bold logo select-none ${linkColor}`}>
            <img src={geoentryLogo} alt="GeoEntry logo" className="h-8 w-8 object-contain" />
            GeoEntry
          </a>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" onClick={e => handleNavClick(e, 'features')} className={`font-medium transition-colors ${linkColor}`}>Características</a>
            <a href="#how-it-works" onClick={e => handleNavClick(e, 'how-it-works')} className={`font-medium transition-colors ${linkColor}`}>Cómo funciona</a>
            <a href="#contact" onClick={e => handleNavClick(e, 'contact')} className={`font-medium transition-colors ${linkColor}`}>Contacto</a>
            <a href="https://geoentry-site.netlify.app/" target="_blank" rel="noopener noreferrer" className="ml-4 bg-gradient-to-r from-blue-700 to-blue-400 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:from-blue-800 hover:to-blue-600 transition-all duration-300 border-none cursor-pointer">Registrarse</a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-gradient-to-br from-[#4a90e2] via-[#357abd] to-[#2c5f94] px-4 pt-2 pb-4`}> 
        <a href="#features" onClick={e => { handleNavClick(e, 'features'); setIsMobileMenuOpen(false); }} className={`block py-2 font-medium ${linkColor}`}>Características</a>
        <a href="#how-it-works" onClick={e => { handleNavClick(e, 'how-it-works'); setIsMobileMenuOpen(false); }} className={`block py-2 font-medium ${linkColor}`}>Cómo funciona</a>
        <a href="#contact" onClick={e => { handleNavClick(e, 'contact'); setIsMobileMenuOpen(false); }} className={`block py-2 font-medium ${linkColor}`}>Contacto</a>
        <a href="https://geoentry-site.netlify.app/" target="_blank" rel="noopener noreferrer" className="block mt-3 bg-gradient-to-r from-blue-700 to-blue-400 text-white px-6 py-2 rounded-full font-semibold shadow-lg text-center hover:from-blue-800 hover:to-blue-600 transition-all duration-300 border-none cursor-pointer">Registrarse</a>
      </div>
    </nav>
  );
};

export default Navbar;
