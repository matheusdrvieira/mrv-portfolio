import { Code, Database, Server, Terminal } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const skills = [
    {
      icon: <Server size={32} />,
      title: 'Backend',
      description: 'APIs robustas com Node.js e NestJS seguindo boas práticas.'
    },
    {
      icon: <Database size={32} />,
      title: 'Banco de Dados',
      description: 'Modelagem e otimização com PostgreSQL para aplicações escaláveis.'
    },
    {
      icon: <Code size={32} />,
      title: 'Frontend',
      description: 'Desenvolvimento de interfaces com React, Next.js e TypeScript.'
    },
    {
      icon: <Terminal size={32} />,
      title: 'DevOps',
      description: 'Containerização com Docker e testes automatizados com Jest.'
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-portfolio-black-light relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-portfolio-black-dark to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-portfolio-black-dark to-transparent"></div>

      <div className="container mx-auto px-6">
        <div
          ref={(el) => (elementsRef.current[0] = el)}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Sobre <span className="highlight">Mim</span>
          </h2>
          <p className="section-subtitle">
            Conheça mais sobre minhas habilidades e experiência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image or avatar */}
          <div
            ref={(el) => (elementsRef.current[1] = el)}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md aspect-square rounded-2xl overflow-hidden border-2 border-portfolio-yellow">
              <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-black-dark via-portfolio-black-light to-transparent z-10"></div>
              <div className="w-full h-full bg-portfolio-yellow/5 flex items-center justify-center">
                <div className="w-48 h-48 bg-portfolio-yellow rounded-full flex items-center justify-center overflow-hidden">
                  {/* This would be replaced with an actual image */}
                  <div className="text-6xl font-bold text-portfolio-black-dark">JP</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-portfolio-yellow"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-portfolio-yellow"></div>
          </div>

          {/* About content */}
          <div
            ref={(el) => (elementsRef.current[2] = el)}
            className=""
          >
            <h3 className="text-3xl font-syne font-bold mb-6">
              Desenvolvedor <span className="highlight">Full Stack</span>
            </h3>

            <p className="mb-6 text-lg opacity-80">
              Olá, meu nome é Matheus da Rocha Vieira, tenho 24 anos. Comecei minha jornada na programação no início de 2022 e, desde então, me apaixonei pela área e por sua capacidade de transformar ideias em soluções.
            </p>

            <p className="mb-8 text-lg opacity-80">
              Meu foco principal é no desenvolvimento backend, onde busco criar sistemas robustos, escaláveis e eficientes. No entanto, sempre que necessário, também coloco a mão na massa no frontend para garantir uma experiência completa e integrada para os usuários.
            </p>

            <div className="flex flex-wrap gap-3">
              {['TypeScript', 'React', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL', 'Docker', 'Jest'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-portfolio-black-dark rounded-full border border-portfolio-yellow/30 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skills section */}
        <div
          ref={(el) => (elementsRef.current[3] = el)}
          className="mt-24"
        >
          <h3 className="text-2xl font-syne font-bold mb-12 text-center">
            Minhas <span className="highlight">Especialidades</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="card group hover:translate-y-[-5px]"
              >
                <div className="text-portfolio-yellow mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-syne font-bold mb-2">{skill.title}</h4>
                <p className="opacity-70">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;