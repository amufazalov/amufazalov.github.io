import React from 'react';
import { personalInfo } from '../../shared/data';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="block">Привет! Я</span>
              <span className="block text-primary-600">{personalInfo.name}</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              {personalInfo.title}
            </p>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl">
              {personalInfo.bio}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects" className="btn-primary">
                Посмотреть проекты
              </a>
              <a href="#contact" className="btn-secondary">
                Связаться со мной
              </a>
            </div>
            <div className="mt-8 flex justify-center lg:justify-start">
              <div className="flex items-center text-sm text-gray-600">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 font-medium">
                  🟢 Доступен для новых проектов
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full shadow-2xl overflow-hidden">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback placeholder if image doesn't load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-400 to-primary-600">
                        <div class="text-6xl font-bold text-white">${personalInfo.name.split(' ').map((n: string) => n[0]).join('')}</div>
                      </div>
                    `;
                  }}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary-200 rounded-full opacity-20"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-60 h-60 bg-purple-200 rounded-full opacity-20"></div>
    </section>
  );
}; 