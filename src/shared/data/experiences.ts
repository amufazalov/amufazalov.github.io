import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tomat', 
    position: 'Младший разработчик',
    period: { start: 'январь 2018', end: 'январь 2019' },
    description: 'Работа над проектами компании, которые были реализованы на <strong>MODX</strong> и <strong>WordPress</strong>. Первые шаги в <strong>разработке сайтов</strong>.',
    technologies: ['MODX', 'Bitrix', 'PHP', 'JavaScript', 'ReadyScript', 'Magento 2'],
    logo: '/images/companies/tomat-logo.png',
    url: 'https://tomat.agency'
  },
  {
    id: '2',
    company: 'Magebit', 
    position: 'Magento 2 Developer',
    period: { start: 'май 2021', end: 'май 2022' },
    description: `Опыт работы на <strong>аутсорсе</strong> через компанию Mageinn для Magebit. <br/><br/> Занимался <strong>поддержкой</strong> и <strong>доработкой</strong> проектов компании на платформе <strong>Magento 2</strong>. В обязанности входила <strong>разработка кастомных модулей</strong>, улучшение фронтенда, а также <strong>миграция проектов</strong> с Magento 1 на Magento 2.`,
    technologies: ['Magento 1', 'Magento 2', 'PHP', 'LESS', 'KnockoutJS', 'JavaScript'],
    logo: '/images/companies/magebit-logo.svg',
    url: 'https://magebit.com'
  },
  {
    id: '3',
    company: 'Scommerce Mage',
    position: 'Magento 2 Developer',
    period: { start: 'март 2020', end: 'март 2021' },
    description: `Опыт работы на <strong>аутсорсе</strong> через компанию Mageinn для Scommerce. <br/><br/> Занимался <strong>поддержкой</strong> и <strong>доработкой</strong> проектов компании на платформе <strong>Magento 2</strong>. В обязанности входила <strong>разработка кастомных модулей</strong>, улучшение фронтенда, а также <strong>миграция проектов</strong> с Magento 1 на Magento 2. <strong>Создание модулей</strong> для коммерческой продажи.`,
    technologies: ['PHP', 'Magento 2', 'JavaScript', 'jQuery', 'LESS', 'MySQL', 'KnockoutJS'],
    logo: '/images/companies/scommerce-logo.jpg',
    url: 'https://www.scommerce-mage.com/'
  },
  {
    id: '4',
    company: 'Mageinn',
    position: 'Старший разработчик',
    period: { start: 'февраль 2019', end: 'ноябрь 2023' },
    description: `Работа над проектами компании Mageinn. <strong>Поддержка сайтов</strong> на <strong>Magento 2</strong>. <br/><br/>С июня 2022 по ноябрь 2023 — работа над проектом <strong>Starsdeluxe.net</strong> (слоты и игровое лобби). <br/><br/>Также выполнял функции <strong>тимлида</strong> и <strong>обучал новых разработчиков</strong> в рамках проекта Starsdeluxe.net.`,
    technologies: ['NodeJS', 'Laravel 7','React', 'PHP', 'TypeScript', 'WebSockets', 'SOAP', 'C++', 'C#', 'Unity'],
    logo: '/images/companies/mageinn-logo.webp',
    url: 'https://mageinn.com'
  },
  {
    id: '5',
    company: 'Handyweb',
    position: 'Tech Lead',
    period: { start: 'Ноябрь 2023', end: (new Date().getFullYear()).toString() },
    description: 'Присоединился к молодой компании Handyweb в роли <strong>Tech Lead</strong>. Занимался <strong>разработкой MVP веб-приложений</strong> под ключ с использованием <strong>NestJS</strong>, <strong>React</strong> и <strong>React Native</strong>.',
    technologies: ['NodeJS', 'React', 'TypeScript', 'ReactNative', 'NestJS', 'PostgreSQL', 'Docker', 'Kafka', 'AWS', 'CI/CD', 'Prisma'],
    logo: '/images/companies/handyweb-logo.svg',
    url: 'https://handyweb.ru'
  }
]; 