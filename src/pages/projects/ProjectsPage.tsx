import React, { useState } from 'react';
import { projects } from '../../shared/data';
import { ProjectCard } from '../../entities/project/ui/project-card';
import { ProjectListView } from '../../entities/project/ui/project-list-view';
import { ContactSection } from '../../widgets/contact-section';

type ViewMode = 'grid' | 'list';

export const ProjectsPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Мои Проекты</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Коллекция проектов, разработанных мною за последние годы — от интернет-магазинов до корпоративных систем.
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex justify-end mb-8">
            <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Карточки
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  viewMode === 'list'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                Список
              </button>
            </div>
          </div>

          {/* Projects */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {projects.map((project) => (
                <ProjectListView key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}; 