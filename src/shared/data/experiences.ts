import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'ТехИнновации',
    position: 'Senior Fullstack Developer',
    period: { start: '2022-01', end: null },
    description: 'Разработка и поддержка корпоративных веб-приложений на React и Laravel. Руководство командой из 3 разработчиков.',
    technologies: ['React', 'TypeScript', 'Laravel', 'PostgreSQL', 'Docker'],
    logo: '/images/companies/tech-innovations.png',
    url: 'https://tech-innovations.ru'
  },
  {
    id: '2',
    company: 'ДиджиталСофт',
    position: 'Fullstack Developer',
    period: { start: '2020-03', end: '2021-12' },
    description: 'Создание интернет-магазинов и корпоративных сайтов. Интеграция с CRM системами и платежными шлюзами.',
    technologies: ['PHP', 'JavaScript', 'MySQL', 'Magento 2', 'Bitrix'],
    logo: '/images/companies/digital-soft.png',
    url: 'https://digitalsoft.ru'
  },
  {
    id: '3',
    company: 'ВебСтудия Про',
    position: 'Frontend Developer',
    period: { start: '2019-01', end: '2020-02' },
    description: 'Разработка пользовательских интерфейсов для различных проектов. Верстка и интеграция с API.',
    technologies: ['JavaScript', 'React', 'HTML', 'CSS', 'SASS'],
    logo: '/images/companies/webstudio-pro.png',
    url: 'https://webstudio-pro.ru'
  }
]; 