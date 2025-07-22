import React from 'react';
import { skills } from '../../shared/data';
import { Skill } from '../../shared/types';

export const SkillsSection: React.FC = () => {
  const categories = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Базы данных',
    other: 'Другие технологии'
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section className="py-20 bg-white" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Мои навыки</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Технологии и инструменты, с которыми я работаю ежедневно
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-3 h-3 bg-primary-500 rounded-full mr-3"></span>
                {categories[category as keyof typeof categories]}
              </h3>
              <div className="space-y-4">
                {categorySkills.map((skill: Skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-900 flex items-center">
                        <span className="mr-2">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">
            И это только начало! Постоянно изучаю новые технологии и подходы к разработке.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Docker', 'AWS', 'Git', 'Linux', 'REST API', 'GraphQL', 'WebSocket', 'Redis'].map((tech: string) => (
              <span
                key={tech}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 