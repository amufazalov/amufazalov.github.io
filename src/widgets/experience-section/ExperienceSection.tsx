import React from 'react';
import { experiences, personalInfo } from '../../shared/data';

export const ExperienceSection: React.FC = () => {
  const formatPeriod = (start: string, end: string | null) => {
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date();
    
    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                  (endDate.getMonth() - startDate.getMonth());
    
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    let duration = '';
    if (years > 0) {
      duration += `${years} ${years === 1 ? 'год' : years < 5 ? 'года' : 'лет'}`;
    }
    if (remainingMonths > 0) {
      if (duration) duration += ' ';
      duration += `${remainingMonths} ${remainingMonths === 1 ? 'месяц' : remainingMonths < 5 ? 'месяца' : 'месяцев'}`;
    }
    
    return duration;
  };

  return (
    <section className="py-20 bg-white" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Опыт работы</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {personalInfo.yearsOfExperience}+ лет в разработке современных веб-решений
          </p>
        </div>

        <div className="relative w-full">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>
          
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative flex items-center mb-12">
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>
              
              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'ml-auto pl-12'}`}>
                <div className="card p-6">
                  <div className="flex items-center mb-3 justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {experience.position}
                      </h3>
                      <p className="text-primary-600 font-semibold">
                        {experience.company}
                      </p>
                    </div>
                    {experience.logo && (
                      <img
                        src={experience.logo}
                        alt={experience.company}
                        className="w-12 h-12 rounded-lg object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    )}
                  </div>
                  
                  <div className="text-sm text-gray-500 mb-3">
                    <span className="font-medium">
                      {new Date(experience.period.start).toLocaleDateString('ru-RU', { 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </span>
                    {' - '}
                    <span className="font-medium">
                      {experience.period.end 
                        ? new Date(experience.period.end).toLocaleDateString('ru-RU', { 
                            month: 'long', 
                            year: 'numeric' 
                          })
                        : 'настоящее время'
                      }
                    </span>
                    <span className="block text-gray-400">
                      {formatPeriod(experience.period.start, experience.period.end)}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    {experience.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 