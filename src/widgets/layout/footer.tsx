import React from 'react';
import { personalInfo } from '../../shared/data';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const handleOpenContactModal = (): void => {
    window.dispatchEvent(new Event('open-contact-modal'));
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary-400">a</span>
              <span className="text-2xl font-bold">mufazalov</span>
            </div>
            <p className="text-gray-300 text-sm">
              Fullstack разработчик специализирующийся на создании современных веб-приложений
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Проекты
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleOpenContactModal}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Контакты
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                <a href={`mailto:${personalInfo.contact.email}`} className="hover:text-white transition-colors">
                  {personalInfo.contact.email}
                </a>
              </p>
              <p className="text-gray-300">
                <a href={`https://t.me/${personalInfo.contact.telegram.replace('@', '')}`} className="hover:text-white transition-colors">
                  Telegram: {personalInfo.contact.telegram}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} {personalInfo.name}. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}; 