import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tomat', 
    position: 'Младший разработчик',
    period: { start: 'январь 2018', end: 'январь 2019' },
    description: 'Работа над проектами компании, которые были реализованы на <strong>MODX</strong>. Первые шаги в <strong>разработке сайтов</strong>.',
    technologies: ['MODX', 'Bitrix', 'PHP', 'JavaScript', 'ReadyScript', 'Magento 2'],
    logo: '/images/companies/tomat-logo.png',
    url: 'https://tomat.agency'
  },
  {
    id: '2',
    company: 'Magebit',
    position: 'Magento 2 Developer',
    period: { start: 'май 2021', end: 'май 2022' },
    description: 'Работа на <strong>оутсорсе</strong> через Mageinn в компании Magebit. <strong>Поддержка и доработка проектов</strong> компании исключительно на <strong>Magento 2</strong>. Среди задач было <strong>написание модулей</strong>, улучшение верстки и <strong>миграция проектов с Magento 1 на Magento 2</strong>.',
    technologies: ['Magento 1', 'Magento 2', 'PHP', 'LESS', 'KnockoutJS', 'JavaScript'],
    logo: '/images/companies/magebit-logo.svg',
    url: 'https://magebit.com'
  },
  {
    id: '3',
    company: 'Scommerce Mage',
    position: 'Magento 2 Developer',
    period: { start: 'март 2020', end: 'март 2021' },
    description: 'Работа на <strong>оутсорсе</strong> через Mageinn в компании Scommerce Mage. <strong>Поддержка и доработка проектов</strong> компании исключительно на <strong>Magento 2</strong>. Среди задач было <strong>написание модулей</strong>, улучшение верстки и <strong>миграция проектов с Magento 1 на Magento 2</strong>. Также <strong>написание модулей на продажу</strong>',
    technologies: ['PHP', 'Magento 2', 'JavaScript', 'jQuery', 'LESS', 'MySQL', 'KnockoutJS'],
    logo: '/images/companies/scommerce-logo.jpg',
    url: 'https://www.scommerce-mage.com/'
  },
  {
    id: '4',
    company: 'Mageinn',
    position: 'Старший разработчик',
    period: { start: 'февраль 2019', end: 'ноябрь 2023' },
    description: 'Работа над проектами компании Mageinn. <strong>Поддержка сайтов на Magento 2</strong>. C июня 2022 до ноября 2023 работа над проектом <strong>Starsdeluxe.net - слоты и игровое лобби</strong>. Также уже выступал в роли <strong>Тимлида</strong> и <strong>обучал новых разработчиков</strong> в рамках проекта starsdeluxe.net',
    technologies: ['NodeJS', 'Laravel 7','React', 'PHP', 'TypeScript', 'WebSockets', 'SOAP', 'C++', 'C#', 'Unity'],
    logo: '/images/companies/mageinn-logo.webp',
    url: 'https://mageinn.com'
  },
  {
    id: '5',
    company: 'Handyweb',
    position: 'Tech Lead',
    period: { start: 'Ноябрь 2023', end: (new Date().getFullYear()).toString() },
    description: 'Присоединился к молодой компании Handyweb в качестве <strong>Tech Lead</strong>. <strong>Разработка MVP веб-приложений под ключ</strong> на <strong>NestJS, React и ReactNative</strong>',
    technologies: ['NodeJS', 'React', 'TypeScript', 'ReactNative', 'NestJS', 'PostgreSQL', 'Docker', 'Kafka', 'AWS', 'CI/CD', 'Prisma'],
    logo: '/images/companies/handyweb-logo.svg',
    url: 'https://handyweb.ru'
  }
]; 