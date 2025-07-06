
import React, { useEffect, useRef } from 'react';
import FeatureCard from './FeatureCard';
import { MonitorSmartphone, Lightbulb, Snowflake, Coffee, MapPin, Wifi } from 'lucide-react';

const Features: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    }, { threshold: 0.1 });
    
    if (featuresRef.current) {
      const cards = featuresRef.current.querySelectorAll('.feature-card');
      cards.forEach((card, index) => {
        // Staggered animation
        setTimeout(() => {
          observer.observe(card);
        }, index * 100);
      });
    }
    
    return () => {
      if (featuresRef.current) {
        const cards = featuresRef.current.querySelectorAll('.feature-card');
        cards.forEach(card => observer.unobserve(card));
      }
    };
  }, []);

  const features = [
    {
      title: 'Smart TVs',
      description: 'Enciende y controla tus televisores inteligentes automáticamente al llegar a casa.',
      icon: MonitorSmartphone // TV inteligente
    },
    {
      title: 'Smart Lights',
      description: 'Tus luces inteligentes se activan y ajustan según tu presencia y preferencias.',
      icon: Lightbulb // Foco inteligente
    },
    {
      title: 'Aire Acondicionado',
      description: 'El sistema activa el aire acondicionado para que tu hogar esté siempre a la temperatura ideal.',
      icon: Snowflake // Aire acondicionado
    },
    {
      title: 'Máquinas de Café',
      description: 'Disfruta de tu café listo automáticamente cuando llegas a casa.',
      icon: Coffee // Café
    },
    {
      title: 'Geolocalización',
      description: 'Detecta automáticamente cuando te acercas a casa y activa los dispositivos inteligentes.',
      icon: MapPin
    },
    {
      title: 'Todo en una App',
      description: 'Controla y monitorea todos los dispositivos de tu hogar inteligente desde una sola aplicación.',
      icon: Wifi
    }
  ];

  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-techguard-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Características de <span className="text-techguard-600">GeoEntry</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Automatización inteligente que se adapta a tus necesidades
          </p>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card opacity-0">
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
