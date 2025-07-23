import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tomat',
    position: 'Веб-технолог',
    period: { start: 'январь 2018', end: 'декабрь 2018' },
    description: 'Работа над проектами компании, которые были реализованы на MODX. Первые шаги в разработке сайтов.',
    technologies: ['MODX', 'Bitrix', 'PHP', 'JavaScript', 'ReadyScript', 'Magento 2'],
    logo: '/images/companies/tomat-logo.png',
    url: 'https://tomat.agency'
  },
  {
    id: '3',
    company: 'Magebit',
    position: 'Magento 2 Developer',
    period: { start: 'май 2021', end: 'май 2022' },
    description: 'Работа на оутсорсе в компании Magebit. Поддержка и доработка проектов компании исключительно на Magento 2. Среди задач было написание модулей, улучшение верстки и миграция проектов с Magento 1 на Magento 2.',
    technologies: ['Magento 1', 'Magento 2', 'PHP', 'LESS', 'KnockoutJS', 'JavaScript'],
    logo: '/images/companies/magebit-logo.svg',
    url: 'https://magebit.com'
  },
  {
    id: '2',
    company: 'Scommerce Mage',
    position: 'Magento 2 Developer',
    period: { start: 'март 2020', end: 'март 2021' },
    description: 'Работа на оутсорсе в компании Scommerce Mage. Поддержка и доработка проектов компании исключительно на Magento 2. Среди задач было написание модулей, улучшение верстки и миграция проектов с Magento 1 на Magento 2. Также написание модулей на продажу',
    technologies: ['PHP', 'Magento 2', 'JavaScript', 'jQuery', 'LESS', 'MySQL', 'KnockoutJS'],
    logo: '/images/companies/scommerce-logo.jpg',
    url: 'https://www.scommerce-mage.com/'
  },
  {
    id: '4',
    company: 'Mageinn',
    position: 'Magento 2 Developer, Младший разработчик -> Старший разработчик',
    period: { start: 'январь 2019', end: 'ноябрь 2023' },
    description: 'Работа над проектами компании Mageinn. Поддержка сайтов на Magento 2. C июня 2022 до ноября 2023 работа над проектом Starsdeluxe.net - слоты и игровое лобби. Также уже выступал в роли Тимлида и обучал новых разработчиков в рамках проекта starsdeluxe.net',
    technologies: ['NodeJS', 'Laravel 7','React', 'PHP', 'TypeScript', 'WebSockets', 'SOAP', 'C++', 'C#', 'Unity'],
    logo: '/images/companies/mageinn-logo.webp',
    url: 'https://mageinn.com'
  },
  {
    id: '5',
    company: 'Handyweb',
    position: 'Tech Lead',
    period: { start: 'Ноябрь 2023', end: 'Настоящее время' },
    description: 'Присоединился к молодой компании Handyweb в качестве Tech Lead. Разработка MVP веб-приложений под ключ на NestJS, React и ReactNative',
    technologies: ['NodeJS', 'React', 'TypeScript', 'ReactNative', 'NestJS', 'PostgreSQL', 'Docker', 'Kafka', 'AWS', 'CI/CD', 'Prisma'],
    logo: '/images/companies/handyweb-logo.svg',
    url: 'https://handyweb.ru'
  }
]; 