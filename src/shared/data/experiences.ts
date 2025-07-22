import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Scommerce Mage',
    position: 'Developer',
    period: { start: 'Январь 2023', end: 'Май 2023' },
    description: 'Работа над проектами компании Scommerce Mage, включая: Magento 2 Ajax Login & Wishlist, FunkyLenses.com - Интернет-магазин контактных линз, SnaintonGolf.co.uk – оптимизация админки',
    technologies: ['PHP', 'Magento 2', 'JavaScript', 'jQuery', 'LESS', 'MySQL', 'KnockoutJS'],
    logo: '/images/companies/scommerce-logo.jpg',
    url: 'https://www.scommerce-mage.com/'
  },
  {
    id: '2',
    company: 'Tomat',
    position: 'Developer',
    period: { start: '2017', end: '2020' },
    description: 'Работа над проектами компании Tomat, включая: Kraski.ru – интернет-магазин стройматериалов, Reklab.ru – интернет-магазин и лендинги, Gippokrat.kz – миграция с Magento 2 на ReadyScript',
    technologies: ['MODX', 'Bitrix', 'PHP', 'JavaScript', 'ReadyScript', 'Magento 2'],
    logo: '/images/companies/tomat-logo.png',
    url: 'https://tomat.agency'
  },
  {
    id: '3',
    company: 'Magebit',
    position: 'Developer',
    period: { start: '2021', end: '2022' },
    description: 'Работа над проектами компании Magebit, включая: Pinecraft.com – миграция с Magento 1 на Magento 2, Grainfather.com – полная разработка на Magento 2, CrazyLenses.com – поддержка и модульная доработка, Sabon.com – поддержка и модуль Quiz, Vitajuwel.us – поддержка Magento 2, Tassenfuzzi.de – улучшение дизайна и модулей, Bakerdays.com – улучшение интерфейса и функционала',
    technologies: ['Magento 1', 'Magento 2', 'PHP', 'LESS', 'KnockoutJS', 'JavaScript'],
    logo: '/images/companies/magebit-logo.svg',
    url: 'https://magebit.com'
  },
  {
    id: '4',
    company: 'Mageinn',
    position: 'Developer',
    period: { start: 'Май 2022', end: 'Ноябрь 2023' },
    description: 'Работа над проектом компании Mageinn: Слоты и игровое лобби (2022–н.в.)',
    technologies: ['NodeJS', 'React', 'TypeScript', 'WebSockets', 'SOAP', 'C++', 'C#', 'Unity'],
    logo: '/images/companies/mageinn-logo.webp',
    url: 'https://mageinn.com'
  },
  {
    id: '5',
    company: 'Handyweb',
    position: 'Tech Lead',
    period: { start: 'Ноябрь 2023', end: 'Настоящее время' },
    description: 'Разработка MVP веб-приложений под ключ',
    technologies: ['NodeJS', 'React', 'TypeScript', 'ReactNative', 'NestJS', 'PostgreSQL', 'Docker'],
    logo: '/images/companies/handyweb-logo.svg',
    url: 'https://handyweb.ru'
  }
]; 