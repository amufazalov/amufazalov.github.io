import React from 'react';
import { experiences } from '../../shared/data';

export const CompaniesSection: React.FC = () => {
  const companies = experiences
    .filter(exp => exp.logo && exp.url)
    .map(exp => ({
      name: exp.company,
      logo: exp.logo!,
      url: exp.url!
    }));

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Компании, с которыми я работал
          </h2>
          <p className="text-lg text-gray-600">
            Доверие ведущих компаний - это результат качественной работы
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {companies.map((company) => (
            <div key={company.name} className="flex justify-center">
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-200 group"
                title={company.name}
                aria-label={company.name}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-200"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="h-12 flex items-center justify-center text-gray-400 font-medium text-sm">
                        ${company.name}
                      </div>
                    `;
                  }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 