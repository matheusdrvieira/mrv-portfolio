
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  // Sample projects data
  const projects = [
    {
      title: 'Botzito — Agendamentos por WhatsApp',
      description: 'SaaS de agendamento para barbearias, clínicas e salões com integração ao WhatsApp. Facilita a gestão de agendamentos e horários.',
      tags: ['React Native (Expo Go)', 'NodeJS', 'NestJS', 'Prisma', 'PostgreSQL', 'Docker', 'API WhatsApp'],
      imageUrl: 'botzito.png',
      projectUrl: 'https://github.com/botzito',
    },
    {
      title: 'ComprovaPix — Comprovante Instantâneo',
      description: 'O sistema busca os comprovantes e exibe o status do pagamento em tempo real, garantindo segurança e praticidade para o negócio.',
      tags: ['Next.js', 'NodeJs', 'NestJS', 'Prisma', 'PostgreSQL', 'Docker', 'Integração Bancária'],
      imageUrl: 'comprovapix.png',
      projectUrl: 'https://github.com/comprovapix',
    },
    {
      title: 'Fidelizzou — Programa de Fidelidade',
      description: 'Sistema de fidelidade para pequenos e médios negócios com pontos, cashback e painel de gestão para estabelecimentos.',
      tags: ['Next.js', 'Node.js', "NestJS", 'Prisma', 'PostgreSQL', 'Docker', 'Sistema de Fidelidade'],
      imageUrl: 'fidelizzou.png',
      projectUrl: '#fidelizzou',
    }
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-portfolio-black-dark relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Meus <span className="highlight">Projetos</span>
          </h2>
          <p className="section-subtitle">
            Uma seleção dos trabalhos mais recentes que desenvolvi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="project-card opacity-100">
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
                delay={index * 150}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="button-secondary">
            Vamos trabalhar juntos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
