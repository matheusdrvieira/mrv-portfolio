import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#222222_0%,#000000_100%)] z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-portfolio-yellow/10 filter blur-3xl animate-pulse-subtle z-0"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-portfolio-yellow/10 filter blur-3xl animate-pulse-subtle z-0"></div>

      <div className="container mx-auto px-6 z-10">
        <div className="text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block py-1 px-3 mb-4 text-sm font-medium border border-portfolio-yellow text-portfolio-yellow rounded-full animate-pulse-subtle">
              Desenvolvedor Full Stack
            </span>
          </div>

          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold font-syne mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <span className="block">Soluções robustas</span>
            <span className="block text-portfolio-yellow">& escaláveis</span>
          </h1>

          <p className={`text-xl max-w-xl mx-auto mb-10 opacity-80 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-80' : 'opacity-0 translate-y-10'}`}>
            Desenvolvedor Full Stack especializado em TypeScript, Node.js, NestJS, Docker, Jest, React, Next.js e PostgreSQL.
          </p>

          <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <a href="#projects" className="button-primary">
              Ver projetos
            </a>
            <a href="#contact" className="button-secondary">
              Entre em contato
            </a>
          </div>

          {/* Social links */}
          <div className={`mt-12 flex justify-center space-x-5 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <a
              href="https://github.com/matheusdrvieira"
              className="text-white hover:text-portfolio-yellow transition-colors duration-300"
              target="_blank"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/matheusdarochavieira/"
              className="text-white hover:text-portfolio-yellow transition-colors duration-300"
              target="_blank"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=matheusrochavieira.contato@gmail.com"
              className="text-white hover:text-portfolio-yellow transition-colors duration-300"
              target="_blank"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white hover:text-portfolio-yellow transition-colors duration-300 animate-float"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;