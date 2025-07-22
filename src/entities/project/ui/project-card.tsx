import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../../shared/types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="card group hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-video bg-gray-200 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.parentElement!.innerHTML = `
              <div class="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div class="text-center">
                  <div class="text-4xl mb-2">🚀</div>
                  <div class="text-gray-600 font-medium">${project.title}</div>
                </div>
              </div>
            `;
          }}
        />
      </div>
      
      <div className="p-6">
        <span className="inline-block mb-2 text-xs font-medium px-3 py-1.5 bg-primary-50 text-primary-700 rounded-full">
          {project.type}
        </span>

        <Link 
          to={`/projects/${project.slug}`}
          className="block mb-3 cursor-pointer"
        >
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
            {project.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {project.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary-100 text-primary-800"
            >
              #{tech.name}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            Подробнее
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          {project.siteUrl && (
            <a
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
              title="Посетить сайт"
              aria-label="Посетить сайт"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}; 