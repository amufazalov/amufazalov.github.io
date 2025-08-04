import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../../shared/data';
import { Technology } from '../../shared/types';
import { ContactSection } from '../../widgets/contact-section'; 
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
 
export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  // Хуки должны быть здесь, до любых условий
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Проект не найден</h1>
          <p className="text-xl text-gray-600 mb-8">
            К сожалению, проект с указанным URL не существует.
          </p>
          <Link to="/projects" className="btn-primary">
            Вернуться к проектам
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600">
                  Главная
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link to="/projects" className="ml-1 text-sm font-medium text-gray-700 hover:text-primary-600 md:ml-2">
                    Проекты
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{project.title}</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Project Header */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h1>
                <p className="text-lg text-gray-600">{project.type}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {project.period.start} - {project.period.end}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-0">
                {project.siteUrl && (
                  <a
                    href={project.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary whitespace-nowrap"
                    title="Посетить сайт"
                    aria-label="Посетить сайт"
                  >
                    Посетить сайт
                  </a>
                )}
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech: Technology, index: number) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800"
                >
                  #{tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Project Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Описание проекта</h2>
                <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: project.description }}></p>
              </div>

              {/* Features */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Что было сделано</h2>
                <ul className="space-y-3">
                  {project.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gallery */}
              {project.images.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Галерея</h2>
                  <p className="text-sm text-gray-500 mb-6">Скриншоты сделаны автоматически через скрипт. Актуальный интерфейс может отличаться от представленных изображений.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.map((image: string, index: number) => (
                      <div
                        key={index}
                        className="aspect-video bg-gray-200 rounded-lg overflow-hidden"
                        onClick={() => {
                          setLightboxIndex(index);
                          setLightboxOpen(true);
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        <img
                          src={image}
                          alt={`${project.title} скриншот ${index + 1}`}
                          aria-label={`${project.title} скриншот ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                    ))}
                  </div>
                  <Lightbox
                    open={lightboxOpen}
                    close={() => setLightboxOpen(false)}
                    slides={project.images.map((image: string) => ({ 
                      src: image.replace('screenshot_764x430_', 'screenshot_full_').replace('.webp', '.png'),
                      description: `${project.title} скриншот`,
                      loading: 'lazy'
                    }))}
                    index={lightboxIndex}
                  />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Информация о проекте</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Тип проекта</dt>
                    <dd className="text-sm text-gray-900">{project.type}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Период разработки</dt>
                    <dd className="text-sm text-gray-900">{project.period.start} - {project.period.end}</dd>
                  </div>
                  {project.company && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Компания</dt>
                      <dd className="text-sm text-gray-900 flex items-center">
                        <a href={project.company.url} target="_blank" rel="noopener noreferrer">
                          <img
                            src={project.company.logo}
                            alt={project.company.name}
                            className="h-[40px] object-contain mt-2"
                          />
                        </a>
                        
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              {/* Navigation */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Навигация</h3>
                <div className="space-y-3">
                  <Link to="/projects" className="block w-full btn-secondary text-center">
                    ← Все проекты
                  </Link>
                  {project.siteUrl && (
                    <a
                      href={project.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full btn-primary text-center"
                    >
                      Посетить сайт →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}; 