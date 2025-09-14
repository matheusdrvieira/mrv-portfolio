
import { ExternalLink, Eye } from 'lucide-react';
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
  delay = 0
}) => {
  return (
    <div
      className="group overflow-hidden transition-all duration-500"
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      <div className="relative rounded-xl overflow-hidden bg-portfolio-black-light border border-portfolio-black-light group-hover:border-portfolio-yellow/30 transition-all duration-500">
        {/* Project image with overlay */}
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-portfolio-black-dark/60 group-hover:bg-portfolio-black-dark/40 transition-all duration-500 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>

          {/* Hover actions */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-portfolio-yellow flex items-center justify-center text-portfolio-black-dark transform transition-all duration-500 hover:scale-110"
            >
              <Eye size={20} />
            </a>
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-portfolio-black-dark transform transition-all duration-500 hover:scale-110"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        {/* Project info */}
        <div className="p-6">
          <h3 className="text-xl font-syne font-bold mb-2 group-hover:text-portfolio-yellow transition-colors duration-300">
            {title}
          </h3>
          <p className="text-white/70 mb-4 line-clamp-3">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-portfolio-black-dark text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
