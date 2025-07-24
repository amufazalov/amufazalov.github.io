import React from 'react';
import { experiences } from '../../shared/data';

export const ExperienceSection: React.FC = () => {
  const russianMonths: { [key: string]: number } = {
    'январь': 0, 'февраль': 1, 'март': 2, 'апрель': 3, 'май': 4, 'июнь': 5,
    'июль': 6, 'август': 7, 'сентябрь': 8, 'октябрь': 9, 'ноябрь': 10, 'декабрь': 11
  };

  const parseRussianDate = (dateString: string): Date => {
    const parts = dateString.toLowerCase().split(' ');
    if (parts.length !== 2) {
      return new Date();
    }
    
    const month = russianMonths[parts[0]];
    const year = parseInt(parts[1]);
    
    if (month === undefined || isNaN(year)) {
      return new Date();
    }
    
    return new Date(year, month);
  };

  const calculateTotalExperience = (): string => {
    // Находим самую раннюю дату начала работы
    const earliestStart = experiences.reduce((earliest, experience) => {
      const currentStart = parseRussianDate(experience.period.start);
      const earliestStart = parseRussianDate(earliest);
      return currentStart < earliestStart ? experience.period.start : earliest;
    }, experiences[0]?.period.start || '');

    // Рассчитываем опыт от самой ранней даты до текущего момента
    const startDate = parseRussianDate(earliestStart);
    const endDate = new Date();
    
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

  const formatPeriod = (start: string, end: string | null) => {
    const startDate = parseRussianDate(start);
    const endDate = end ? parseRussianDate(end) : new Date();
    
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

  const formatDisplayDate = (dateString: string): string => {
    const date = parseRussianDate(dateString);
    return date.toLocaleDateString('ru-RU', { 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-white" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Опыт работы</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {calculateTotalExperience()} в разработке современных веб-решений
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
                      <a href={experience.url} target="_blank" rel="noopener noreferrer" title={experience.company} aria-label={experience.company}>
                        <img
                          src={experience.logo}
                          alt={experience.company}
                          className="rounded-lg object-contain w-[140px]"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </a>
                    )}
                  </div>
                  
                  <div className="text-sm text-gray-500 mb-3">
                    <span className="font-medium">
                      {formatDisplayDate(experience.period.start)}
                    </span>
                    {' - '}
                    <span className="font-medium">
                      {experience.period.end 
                        ? formatDisplayDate(experience.period.end)
                        : 'настоящее время'
                      }
                    </span>
                    <span className="block text-gray-400">
                      {formatPeriod(experience.period.start, experience.period.end)}
                    </span>
                  </div>
                  
                  <p 
                    className="text-gray-700 mb-4"
                    dangerouslySetInnerHTML={{ __html: experience.description }}
                  />
                  
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