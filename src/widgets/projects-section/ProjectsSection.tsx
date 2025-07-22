import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../shared/data';
import { ProjectCard } from '../../entities/project/ui/project-card';

export const ProjectsSection: React.FC = () => {
  const latestProjects = projects.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Link to="/projects" className="inline-block cursor-pointer hover:text-primary-600 transition-colors">
            <h2 className="section-title">Последние проекты</h2>
          </Link>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Посмотрите на некоторые из моих последних работ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/projects" className="btn-primary">
            Посмотреть все проекты ({projects.length})
          </Link>
        </div>
      </div>
    </section>
  );
}; 