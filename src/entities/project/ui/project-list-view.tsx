import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../../shared/types';

interface ProjectListViewProps {
  project: Project;
}

export const ProjectListView: React.FC<ProjectListViewProps> = ({ project }) => {
  return (
    <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/3">
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = `
                  <div class="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center rounded-lg">
                    <div class="text-center">
                      <div class="text-3xl mb-2">🚀</div>
                      <div class="text-gray-600 font-medium text-sm">${project.title}</div>
                    </div>
                  </div>
                `;
              }}
            />
          </div>
        </div>
        
        <div className="lg:w-2/3">
          <div className="flex justify-between items-start mb-3">
            <div>
              <Link 
                to={`/projects/${project.slug}`}
                className="block cursor-pointer hover:text-primary-600 transition-colors"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {project.title}
                </h3>
              </Link>
              <p className="text-primary-600 font-semibold">{project.type}</p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap">
              {project.period.start} - {project.period.end}
            </span>
          </div>
          
          <p className="text-gray-700 mb-4 leading-relaxed">
            {project.shortDescription}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary-100 text-primary-800"
              >
                #{tech.name}
              </span>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex gap-4">
              <Link
                to={`/projects/${project.slug}`}
                className="btn-primary"
              >
                Подробнее
              </Link>
              
              {project.siteUrl && (
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Посетить сайт
                </a>
              )}
            </div>
            
            {project.company && (
              <div className="flex items-center text-sm text-gray-500">
                <img
                  src={project.company.logo}
                  alt={project.company.name}
                  className="w-6 h-6 mr-2 rounded object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <span>{project.company.name}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}; 