import React from 'react';
import { personalInfo } from '../../shared/data';

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-orange-500">Я создаю решения</span>
              <br />
              <span className="text-gray-900">которые работают и вдохновляют.</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Привет! Я {personalInfo.name.split(' ')[0]}, fullstack разработчик из Набережных Челнов. 
              Создаю современные веб-приложения для растущих компаний.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                Связаться
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Смотреть проекты
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right Content - Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-500">
                        <div class="text-6xl lg:text-7xl font-bold text-white">${personalInfo.name.split(' ').map((n: string) => n[0]).join('')}</div>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Status Badge */}
        <div className="mt-16 flex justify-center lg:justify-start">
          <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
            <span className="text-sm font-medium text-green-700">
              Доступен для новых проектов
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}; 