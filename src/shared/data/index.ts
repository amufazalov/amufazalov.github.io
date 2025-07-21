import { PersonalInfo, Project, Skill, Experience, Certificate } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Айрат Муфазалов',
  title: 'Fullstack Разработчик',
  photo: '/images/hero/me-white_square.png',
  bio: 'Опытный fullstack разработчик с 5+ годами опыта создания современных веб-приложений. Специализируюсь на React, TypeScript, PHP, Laravel и создании масштабируемых решений.',
  yearsOfExperience: 5,
  contact: {
    email: 'contact@example.com',
    telegram: '@ayratdev',
    vk: 'https://vk.com/ayratdev',
    whatsapp: '+7-900-123-45-67'
  }
};

export const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Adobe Certified Expert - Adobe Commerce Developer',
    description: 'Профессиональная сертификация Adobe, подтверждающая экспертный уровень владения технологиями Adobe Commerce (Magento 2). Сертификат демонстрирует глубокие знания в области разработки e-commerce решений, настройки модулей, работы с API, оптимизации производительности и интеграции сторонних сервисов.',
    issuer: 'Adobe',
    issuerLogo: '/images/certificates/adobe-logo.png',
    certifiedDate: '2021-12-19',
    expiryDate: '2023-12-19',
    verificationCode: 'DN8CXWG1CB4QZWV',
    verificationUrl: 'https://www.certmetrics.com/adobe/public/verification.aspx',
    certificateImage: '/images/certificates/Magento2.png',
    credentialId: 'DN8CXWG1CB4QZWV'
  }
];

export const skills: Skill[] = [
  { name: 'React', level: 95, category: 'frontend', icon: '⚛️' },
  { name: 'TypeScript', level: 90, category: 'frontend', icon: '🔷' },
  { name: 'JavaScript', level: 95, category: 'frontend', icon: '💛' },
  { name: 'PHP', level: 85, category: 'backend', icon: '🐘' },
  { name: 'Laravel', level: 88, category: 'backend', icon: '🔴' },
  { name: 'NestJS', level: 82, category: 'backend', icon: '🦁' },
  { name: 'MySQL', level: 80, category: 'database', icon: '🐬' },
  { name: 'PostgreSQL', level: 75, category: 'database', icon: '🐘' },
  { name: 'Prisma ORM', level: 85, category: 'database', icon: '🔹' },
  { name: 'TypeORM', level: 80, category: 'database', icon: '🗄️' },
  { name: 'Python', level: 70, category: 'backend', icon: '🐍' },
  { name: 'Magento 2', level: 85, category: 'other', icon: '🛒' },
  { name: 'ReadyScript', level: 70, category: 'other', icon: '📦' },
  { name: 'Bitrix', level: 75, category: 'other', icon: '🅱️' },
  { name: 'Bitrix24', level: 72, category: 'other', icon: '📊' },
  { name: 'AmoCRM', level: 68, category: 'other', icon: '💼' }
];

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

export const projects: Project[] = [
  {
    id: '1',
    title: 'Система управления заказами',
    description: 'Комплексная система для управления заказами интернет-магазина с интеграцией CRM, складского учета и аналитики. Реализованы функции автоматизации бизнес-процессов, многоуровневая система ролей и детальная отчетность.',
    shortDescription: 'CRM система для управления заказами с интеграцией склада и аналитикой',
    type: 'CRM Система',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'NestJS', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Prisma', category: 'database' }
    ],
    image: '/images/projects/order-management-main.jpg',
    images: [
      '/images/projects/order-management-1.jpg',
      '/images/projects/order-management-2.jpg',
      '/images/projects/order-management-3.jpg'
    ],
    siteUrl: 'https://orders.example.com',
    period: { start: 'Январь 2023', end: 'Июнь 2023' },
    company: {
      name: 'ТехИнновации',
      logo: '/images/companies/tech-innovations.png',
      url: 'https://tech-innovations.ru'
    },
    features: [
      'Автоматизация обработки заказов',
      'Интеграция с AmoCRM и 1С',
      'Система уведомлений в реальном времени',
      'Детальная аналитика и отчеты',
      'Многоуровневая система ролей'
    ]
  },
  {
    id: '2',
    title: 'Интернет-магазин электроники',
    description: 'Современный интернет-магазин с каталогом более 10,000 товаров, системой фильтрации, сравнения товаров и интеграцией с платежными системами. Реализована мобильная версия и PWA.',
    shortDescription: 'Высоконагруженный интернет-магазин с современным дизайном',
    type: 'Интернет-магазин',
    technologies: [
      { name: 'PHP', category: 'backend' },
      { name: 'Laravel', category: 'backend' },
      { name: 'MySQL', category: 'database' },
      { name: 'JavaScript', category: 'frontend' },
      { name: 'Vue.js', category: 'frontend' }
    ],
    image: '/images/projects/electronics-shop-main.jpg',
    images: [
      '/images/projects/electronics-shop-1.jpg',
      '/images/projects/electronics-shop-2.jpg',
      '/images/projects/electronics-shop-3.jpg',
      '/images/projects/electronics-shop-4.jpg'
    ],
    siteUrl: 'https://electroshop.example.com',
    period: { start: 'Сентябрь 2022', end: 'Февраль 2023' },
    company: {
      name: 'ДиджиталСофт',
      logo: '/images/companies/digital-soft.png',
      url: 'https://digitalsoft.ru'
    },
    features: [
      'Каталог 10,000+ товаров',
      'Продвинутая система фильтрации',
      'Сравнение товаров',
      'Интеграция с платежными системами',
      'PWA и мобильная оптимизация'
    ]
  },
  {
    id: '3',
    title: 'Корпоративный портал',
    description: 'Внутренний портал компании для управления сотрудниками, проектами и документооборотом. Включает систему задач, календарь событий, чат и интеграцию с корпоративной почтой.',
    shortDescription: 'Внутренний портал для управления проектами и сотрудниками',
    type: 'Корпоративный портал',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Laravel', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Redis', category: 'database' }
    ],
    image: '/images/projects/corporate-portal-main.jpg',
    images: [
      '/images/projects/corporate-portal-1.jpg',
      '/images/projects/corporate-portal-2.jpg',
      '/images/projects/corporate-portal-3.jpg'
    ],
    period: { start: 'Май 2022', end: 'Август 2022' },
    company: {
      name: 'ТехИнновации',
      logo: '/images/companies/tech-innovations.png',
      url: 'https://tech-innovations.ru'
    },
    features: [
      'Управление проектами и задачами',
      'Система документооборота',
      'Внутренний чат',
      'Календарь событий',
      'Интеграция с корпоративной почтой'
    ]
  },
  {
    id: '4',
    title: 'Платформа онлайн-обучения',
    description: 'Образовательная платформа с видеоуроками, тестированием, системой прогресса и сертификатами. Поддерживает различные форматы контента и интерактивные упражнения.',
    shortDescription: 'LMS платформа с видеоуроками и системой тестирования',
    type: 'Образовательная платформа',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'NestJS', category: 'backend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'MongoDB', category: 'database' },
      { name: 'Socket.io', category: 'other' }
    ],
    image: '/images/projects/learning-platform-main.jpg',
    images: [
      '/images/projects/learning-platform-1.jpg',
      '/images/projects/learning-platform-2.jpg',
      '/images/projects/learning-platform-3.jpg'
    ],
    siteUrl: 'https://learn.example.com',
    period: { start: 'Октябрь 2021', end: 'Март 2022' },
    company: {
      name: 'ЭдуТех',
      logo: '/images/companies/edutech.png',
      url: 'https://edutech.ru'
    },
    features: [
      'Видеоуроки с прогрессом',
      'Система тестирования',
      'Интерактивные упражнения',
      'Сертификаты об окончании',
      'Форум и чат с преподавателями'
    ]
  },
  {
    id: '5',
    title: 'Система бронирования',
    description: 'Комплексная система бронирования для отелей и апартаментов с календарем доступности, онлайн-платежами и интеграцией с популярными сервисами бронирования.',
    shortDescription: 'Система бронирования отелей с календарем и платежами',
    type: 'Система бронирования',
    technologies: [
      { name: 'PHP', category: 'backend' },
      { name: 'Laravel', category: 'backend' },
      { name: 'JavaScript', category: 'frontend' },
      { name: 'MySQL', category: 'database' },
      { name: 'Stripe', category: 'other' }
    ],
    image: '/images/projects/booking-system-main.jpg',
    images: [
      '/images/projects/booking-system-1.jpg',
      '/images/projects/booking-system-2.jpg',
      '/images/projects/booking-system-3.jpg'
    ],
    siteUrl: 'https://booking.example.com',
    period: { start: 'Июнь 2021', end: 'Сентябрь 2021' },
    company: {
      name: 'ТревелТех',
      logo: '/images/companies/travel-tech.png',
      url: 'https://travel-tech.ru'
    },
    features: [
      'Календарь доступности',
      'Онлайн-платежи',
      'Управление бронированиями',
      'Интеграция с Booking.com',
      'Мобильное приложение'
    ]
  }
]; 