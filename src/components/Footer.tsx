
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 bg-portfolio-black-dark border-t border-portfolio-yellow/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and tagline */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <a
              href="#home"
              className="text-2xl font-syne font-bold tracking-tighter inline-block mb-3"
            >
              Port<span className="text-portfolio-yellow">fólio</span>
            </a>
            <p className="opacity-70 max-w-xs">
              Design e desenvolvimento de experiências digitais únicas e memoráveis.
            </p>
          </div>

          {/* Navigation */}
          <div className="mb-8 md:mb-0">
            <ul className="flex justify-center space-x-6">
              <li>
                <a
                  href="#home"
                  className="opacity-70 hover:opacity-100 hover:text-portfolio-yellow transition-all duration-300"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="opacity-70 hover:opacity-100 hover:text-portfolio-yellow transition-all duration-300"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="opacity-70 hover:opacity-100 hover:text-portfolio-yellow transition-all duration-300"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="opacity-70 hover:opacity-100 hover:text-portfolio-yellow transition-all duration-300"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/matheusdrvieira"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-portfolio-yellow hover:text-portfolio-yellow transition-all duration-300"
              aria-label="GitHub"
              target="_blank"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/matheusdarochavieira/"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-portfolio-yellow hover:text-portfolio-yellow transition-all duration-300"
              aria-label="LinkedIn"
              target="_blank"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=matheusrochavieira.contato@gmail.com"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-portfolio-yellow hover:text-portfolio-yellow transition-all duration-300"
              aria-label="Email"
              target="_blank"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Matheus da Rocha Vieira. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-full border border-white/20 flex items-center space-x-2 hover:border-portfolio-yellow hover:text-portfolio-yellow transition-all duration-300"
            aria-label="Voltar ao topo"
          >
            <span>Topo</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
