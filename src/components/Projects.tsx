
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  // Sample projects data
  const projects = [
    {
      title: 'Plataforma E-commerce',
      description: 'Design e desenvolvimento de uma plataforma de comércio eletrônico completa com painel administrativo.',
      tags: ['React', 'Node.js', 'MongoDB', 'UI/UX'],
      imageUrl: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
      projectUrl: '#'
    },
    {
      title: 'Aplicação Mobile',
      description: 'Aplicativo de gestão financeira pessoal com funcionalidades de rastreamento de despesas e visualização de relatórios.',
      tags: ['React Native', 'Firebase', 'Design', 'Mobile'],
      imageUrl: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1010&q=80',
      projectUrl: '#'
    },
    {
      title: 'Website Corporativo',
      description: 'Site institucional para uma empresa de tecnologia, com foco em performance e conversão de clientes.',
      tags: ['JavaScript', 'SCSS', 'WordPress', 'SEO'],
      imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1072&q=80',
      projectUrl: '#'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Painel de visualização de dados com gráficos interativos e relatórios personalizados.',
      tags: ['TypeScript', 'D3.js', 'API', 'Data Viz'],
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      projectUrl: '#'
    },
    {
      title: 'Aplicação SaaS',
      description: 'Sistema de gerenciamento de projetos com funcionalidades colaborativas para equipes.',
      tags: ['React', 'Node.js', 'GraphQL', 'SaaS'],
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80',
      projectUrl: '#'
    },
    {
      title: 'Redesign UI/UX',
      description: 'Reformulação completa da interface e experiência do usuário para uma plataforma educacional.',
      tags: ['Figma', 'UI/UX', 'Prototyping', 'Research'],
      imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      projectUrl: '#'
    },
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
