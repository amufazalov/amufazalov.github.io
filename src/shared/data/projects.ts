import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'magento2-ajax-login-wishlist',
    title: 'Magento 2 Ajax Login & Wishlist',
    description: 'Модуль для Magento 2, который значительно улучшает пользовательский опыт, добавляя современные AJAX-формы для входа, регистрации и работы со списком желаемого (wishlist) без перезагрузки страницы. Реализована валидация в реальном времени, интеграция с minicart и поддержка мультиязычности.',
    shortDescription: 'Модуль для Magento 2 с AJAX авторизацией и списком желаний',
    type: 'Magento 2 Module',
    technologies: [
      { name: 'PHP', category: 'backend' },
      { name: 'Magento 2', category: 'backend' },
      { name: 'JavaScript', category: 'frontend' },
      { name: 'jQuery', category: 'frontend' },
      { name: 'LESS', category: 'frontend' }
    ],
    company: { name: 'Scommerce Mage', logo: '/images/companies/scommerce-logo.jpg', url: 'https://www.scommerce-mage.com/' },
    image: '',
    images: [],
    period: { start: 'Март 2023', end: 'Апрель 2023' },
    features: [
      'AJAX авторизация через модальное окно',
      'AJAX регистрация с валидацией',
      'Управление wishlist без перезагрузки',
      'Интеграция с minicart',
      'Поддержка мультиязычности (i18n)'
    ]
  },
  {
    id: '2',
    slug: 'funkylenses',
    title: 'FunkyLenses.com - Интернет-магазин контактных линз',
    description: 'Разработка интернет-магазина контактных линз на платформе Magento 2. Создан полностью кастомный дизайн с нуля, реализована сложная система фильтрации и поиска товаров, интеграция с платежными системами и службами доставки. Особое внимание уделено мобильной версии и оптимизации производительности.',
    shortDescription: 'Интернет-магазин контактных линз на Magento 2',
    type: 'E-commerce',
    technologies: [
      { name: 'Magento 2', category: 'backend' },
      { name: 'PHP', category: 'backend' },
      { name: 'MySQL', category: 'database' },
      { name: 'JavaScript', category: 'frontend' },
      { name: 'LESS', category: 'frontend' }
    ],
    company: { name: 'Scommerce Mage', logo: '/images/companies/scommerce-logo.jpg', url: 'https://www.scommerce-mage.com/' },
    image: '/images/projects/funkylenses.com/screenshot_764x430_1.webp',
    images: [
      '/images/projects/funkylenses.com/screenshot_764x430_1.webp',
      '/images/projects/funkylenses.com/screenshot_764x430_2.webp',
      '/images/projects/funkylenses.com/screenshot_764x430_4.webp',
      '/images/projects/funkylenses.com/screenshot_764x430_5.webp'
    ],
    siteUrl: 'https://funkylenses.com',
    period: { start: 'Январь 2023', end: 'Май 2023' },
    features: [
      'Кастомный адаптивный дизайн',
      'Сложная система фильтрации',
      'Интеграция с платежными системами',
      'Оптимизация производительности',
      'Мультиязычность и мультивалютность'
    ]
  },
  {
    id: '3',
    slug: 'kraski',
    title: 'Kraski.ru – интернет-магазин стройматериалов',
    description: 'Поддержка сайта на MODX, оптимизация, доработка API-интеграций. Позже осуществлён перенос сайта на Bitrix с сохранением данных. Также сюда были перенесены данные с сайта svetoboev.ru.',
    shortDescription: 'Поддержка и миграция сайта стройматериалов',
    type: 'E-commerce',
    technologies: [
      { name: 'MODX', category: 'backend' },
      { name: 'Bitrix', category: 'backend' },
      { name: 'PHP', category: 'backend' },
      { name: 'JavaScript', category: 'frontend' }
    ],
    company: { name: 'Tomat', logo: '/images/companies/tomat-logo.png', url: 'https://tomat.agency' },
    image: '/images/projects/kraski.ru/screenshot_764x430_1.webp',
    images: [
      '/images/projects/kraski.ru/screenshot_764x430_1.webp',
      '/images/projects/kraski.ru/screenshot_764x430_2.webp',
      '/images/projects/kraski.ru/screenshot_764x430_3.webp',
      '/images/projects/kraski.ru/screenshot_764x430_4.webp',
      '/images/projects/kraski.ru/screenshot_764x430_5.webp',
      '/images/projects/kraski.ru/screenshot_764x430_6.webp'
    ],
    siteUrl: 'https://kraski.ru/',
    period: { start: '2017', end: '2018' },
    features: [
      'Поддержка сайта на MODX',
      'Оптимизация кода и API-интеграций',
      'Миграция на Bitrix',
      'Слияние с другим проектом (Svetoboev.ru)'
    ]
  },
  {
    id: '4',
    slug: 'reklab',
    title: 'Reklab.ru – интернет-магазин и лендинги',
    description: 'Разработка и поддержка сайтов компании Reklab на платформе ReadyScript. Создание тем, миграция баз данных, интеграция с Bitrix24 и системами размещения рекламы.',
    shortDescription: 'Группа проектов на ReadyScript для Reklab',
    type: 'E-commerce',
    technologies: [
      { name: 'ReadyScript', category: 'backend' },
      { name: 'PHP', category: 'backend' },
      { name: 'JavaScript', category: 'frontend' }
    ],
    company: { name: 'Tomat', logo: '/images/companies/tomat-logo.png', url: 'https://tomat.agency' },
    image: '/images/projects/reklab.ru/screenshot_764x430_1.webp',
    images: [
      '/images/projects/reklab.ru/screenshot_764x430_1.webp',
      '/images/projects/reklab.ru/screenshot_764x430_2.webp',
      '/images/projects/reklab.ru/screenshot_764x430_3.webp',
      '/images/projects/reklab.ru/screenshot_764x430_4.webp',
      '/images/projects/reklab.ru/screenshot_764x430_5.webp',
      '/images/projects/reklab.ru/screenshot_764x430_6.webp'
    ],
    siteUrl: 'https://reklab.ru/',
    period: { start: '2018', end: '2019' },
    features: [
      'Миграция данных с самописного движка',
      'Разработка тем оформления',
      'Интеграция с Bitrix24 и CRM',
      'Создание рекламных модулей'
    ]
  },
  {
    id: '5',
    slug: 'gippokrat',
    title: 'Gippokrat.kz – миграция с Magento 2 на ReadyScript',
    description: 'Миграция крупного сайта медицины с Magento 2 на ReadyScript из-за большого количества багов. Создание аналогичной темы, интеграции с 1С, Bitrix24 и другими API.',
    shortDescription: 'Миграция сайта с Magento 2 на ReadyScript',
    type: 'E-commerce',
    technologies: [
      { name: 'Magento 2', category: 'backend' },
      { name: 'ReadyScript', category: 'backend' },
      { name: 'PHP', category: 'backend' },
      { name: 'JavaScript', category: 'frontend' }
    ],
    company: { name: 'Tomat', logo: '/images/companies/tomat-logo.png', url: 'https://tomat.agency' },
    image: '/images/projects/gippokrat.kz/screenshot_764x430_1.webp',
    images: [
      '/images/projects/gippokrat.kz/screenshot_764x430_1.webp',
      '/images/projects/gippokrat.kz/screenshot_764x430_2.webp',
      '/images/projects/gippokrat.kz/screenshot_764x430_3.webp',
      '/images/projects/gippokrat.kz/screenshot_764x430_4.webp',
      '/images/projects/gippokrat.kz/screenshot_764x430_5.webp',
      '/images/projects/gippokrat.kz/screenshot_764x430_6.webp'
    ],
    siteUrl: 'https://gippokrat.kz/',
    period: { start: '2019', end: '2020' },
    features: [
      'Полная миграция сайта и темы',
      'Интеграция с 1С и Bitrix24',
      'Разработка модулей для отчётности',
      'Устранение багов Magento 2'
    ]
  },
  {
    id: '6',
    slug: 'pinecraft',
    title: 'Pinecraft.com – миграция с Magento 1 на Magento 2',
    description: 'Проведена полная миграция интернет-магазина с Magento 1 на Magento 2. Анализ старой версии, перенос базы данных, установка и разработка модулей, создание новой темы.',
    shortDescription: 'Миграция крупного e-commerce на Magento 2',
    type: 'E-commerce',
    technologies: [
      { name: 'Magento 1', category: 'backend' },
      { name: 'Magento 2', category: 'backend' },
      { name: 'PHP', category: 'backend' }
    ],
    company: { name: 'Magebit', logo: '/images/companies/magebit-logo.svg', url: 'https://magebit.com' },
    image: '/images/projects/pinecraft.com/screenshot_764x430_1.webp',
    images: [
      '/images/projects/pinecraft.com/screenshot_764x430_1.webp',
      '/images/projects/pinecraft.com/screenshot_764x430_2.webp',
      '/images/projects/pinecraft.com/screenshot_764x430_3.webp'
    ],
    siteUrl: 'https://www.pinecraft.com/',
    period: { start: '2021', end: '2022' },
    features: [
      'Анализ и миграция с Magento 1',
      'Создание новой темы',
      'Установка и разработка модулей'
    ]
  },
  {
    id: '7',
    slug: 'grainfather',
    title: 'Grainfather.com – полная разработка на Magento 2',
    description: 'Разработка новой темы с нуля, обновление Magento 2, установка, обновление и написание новых модулей.',
    shortDescription: 'Полный редизайн и обновление e-commerce на Magento 2',
    type: 'E-commerce',
    technologies: [
      { name: 'Magento 2', category: 'backend' },
      { name: 'PHP', category: 'backend' },
      { name: 'LESS', category: 'frontend' }
    ],
    company: { name: 'Magebit', logo: '/images/companies/magebit-logo.svg', url: 'https://magebit.com' },
    image: '/images/projects/eu.grainfather.com/screenshot_764x430_1.webp',
    images: [
      '/images/projects/eu.grainfather.com/screenshot_764x430_1.webp',
      '/images/projects/eu.grainfather.com/screenshot_764x430_2.webp',
      '/images/projects/eu.grainfather.com/screenshot_764x430_3.webp',
      '/images/projects/eu.grainfather.com/screenshot_764x430_4.webp',
      '/images/projects/eu.grainfather.com/screenshot_764x430_5.webp'
    ],
    siteUrl: 'https://grainfather.com/',
    period: { start: '2021', end: '2022' },
    features: [
      'Создание новой темы',
      'Обновление Magento',
      'Разработка и обновление модулей'
    ]
  },
  {
    id: '8',
    slug: 'slots-and-game-lobby',
    title: 'Слоты и игровое лобби (2022–н.в.)',
    description: 'Разработка платформы для онлайн-слотов: реверс-инжиниринг слотов (Wazdan, Pragmatic, Greentube и др.), написание универсального адаптера, API и лобби на React. Создание Telegram-бота для статистики и управления. Интеграция с Unity и сторонними слотами. Работа в роли тимлида.',
    shortDescription: 'Игровая платформа: Node.js, React, адаптеры и слоты',
    type: 'Game Platform',
    technologies: [
      { name: 'NodeJS', category: 'backend' },
      { name: 'React', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'WebSockets', category: 'backend' },
      { name: 'SOAP', category: 'backend' },
      { name: 'C++', category: 'backend' },
      { name: 'C#', category: 'backend' },
      { name: 'Unity', category: 'frontend' }
    ],
    company: { name: 'Mageinn', logo: '/images/companies/mageinn-logo.webp', url: 'https://mageinn.com' },
    image: '',
    images: [],
    siteUrl: 'null',
    period: { start: 'Май 2022', end: 'Ноябрь 2023' },
    features: [
      'Реверс-инжиниринг игровых слотов',
      'Универсальный адаптер для движка',
      'Создание лобби на React',
      'Telegram-бот для статистики',
      'Интеграция сторонних игр',
      'Тимлидство и обучение джунов'
    ]
  },
  {
    id: '9',
    slug: 'crazylenses',
    title: 'CrazyLenses.com – поддержка и модульная доработка',
    description: 'Поддержка интернет-магазина на Magento 2. Установка необходимых модулей и мелкие правки темы.',
    shortDescription: 'Поддержка магазина на Magento 2',
    type: 'E-commerce',
    technologies: [
      { name: 'Magento 2', category: 'backend' },
      { name: 'PHP', category: 'backend' }
    ],
    company: { name: 'Magebit', logo: '/images/companies/magebit-logo.svg', url: 'https://magebit.com' },
    image: '/images/projects/crazylenses.com/screenshot_764x430_1.webp',
    images: [
      '/images/projects/crazylenses.com/screenshot_764x430_1.webp',
      '/images/projects/crazylenses.com/screenshot_764x430_2.webp'
    ],
    siteUrl: 'https://www.crazylenses.com/',
    period: { start: 'Февраль 2021', end: 'Апрель 2021' },
    features: [
      'Установка модулей',
      'Правки в теме оформления'
    ]
  },
  {
    id: '10',
    slug: 'snaintongolf',
    title: 'SnaintonGolf.co.uk – оптимизация админки',
    description: 'Оптимизация административной панели магазина на Magento 2. Установка новых и настройка текущих модулей.',
    shortDescription: 'Оптимизация админки на Magento 2',
    type: 'E-commerce',
    technologies: [
      { name: 'Magento 2', category: 'backend' },
      { name: 'PHP', category: 'backend' }
    ],
    company: { name: 'Scommerce Mage', logo: '/images/companies/scommerce-logo.jpg', url: 'https://www.scommerce-mage.com/' },
    image: '/images/projects/snaintongolf.co.uk/screenshot_764x430_1.webp',
    images: [
      '/images/projects/snaintongolf.co.uk/screenshot_764x430_1.webp',
      '/images/projects/snaintongolf.co.uk/screenshot_764x430_2.webp',
      '/images/projects/snaintongolf.co.uk/screenshot_764x430_3.webp',
      '/images/projects/snaintongolf.co.uk/screenshot_764x430_4.webp'
    ],
    siteUrl: 'https://www.snaintongolf.co.uk/',
    period: { start: 'Февраль 2021', end: 'Апрель 2021' },
    features: [
      'Оптимизация панели администратора',
      'Установка/настройка модулей'
    ]
  },
  {
    id: '11',
    slug: 'sabon',
    title: 'Sabon.com – поддержка и модуль Quiz',
    description: 'Верстка главной страницы, разработка пользовательского модуля quiz, а также поддержка и расширение других компонентов сайта.',
    shortDescription: 'Модуль Quiz и поддержка сайта на Magento 2',
    type: 'E-commerce',
    technologies: [
      { name: 'Magento 2', category: 'backend' },
      { name: 'PHP', category: 'backend' },
      { name: 'LESS', category: 'frontend' }
    ],
    company: { name: 'Magebit', logo: '/images/companies/magebit-logo.svg', url: 'https://magebit.com' },
    image: '/images/projects/us.sabon.com/screenshot_764x430_1.webp',
    images: [
      '/images/projects/us.sabon.com/screenshot_764x430_1.webp',
      '/images/projects/us.sabon.com/screenshot_764x430_2.webp',
      '/images/projects/us.sabon.com/screenshot_764x430_3.webp',
      '/images/projects/us.sabon.com/screenshot_764x430_4.webp'
    ],
    siteUrl: 'https://us.sabon.com/',
    period: { start: '2021', end: '2022' },
    features: [
      'Модуль Quiz',
      'Верстка главной',
      'Поддержка модулей'
    ]
  },
  {
    id: '12',
    slug: 'vitajuwel',
    title: 'Vitajuwel.us – поддержка Magento 2',
    description: 'Обновление платформы Magento 2, поддержка сайта, верстка отдельных страниц, фиксы багов после обновлений.',
    shortDescription: 'Поддержка и обновление Magento 2',
    type: 'E-commerce',
    technologies: [
      { name: 'Magento 2', category: 'backend' },
      { name: 'PHP', category: 'backend' },
      { name: 'LESS', category: 'frontend' }
    ],
    company: { name: 'Magebit', logo: '/images/companies/magebit-logo.svg', url: 'https://magebit.com' },
    image: '/images/projects/vitajuwel.com/screenshot_764x430_1.webp',
    images: [
      '/images/projects/vitajuwel.com/screenshot_764x430_1.webp',
      '/images/projects/vitajuwel.com/screenshot_764x430_2.webp',
      '/images/projects/vitajuwel.com/screenshot_764x430_3.webp',
      '/images/projects/vitajuwel.com/screenshot_764x430_4.webp'
    ],
    siteUrl: 'https://www.vitajuwel.us/',
    period: { start: '2021', end: '2022' },
    features: [
      'Верстка отдельных страниц',
      'Обновление платформы',
      'Фиксы багов'
    ]
  },
  {
    id: '13',
    slug: 'tassenfuzzi',
    title: 'Tassenfuzzi.de – улучшение дизайна и модулей',
    description: 'Поддержка сайта на Magento 2, улучшение дизайна, доработка существующих модулей и изменение верстки некоторых страниц.',
    shortDescription: 'Поддержка сайта и улучшение верстки',
    type: 'E-commerce',
    technologies: [
      { name: 'Magento 2', category: 'backend' },
      { name: 'PHP', category: 'backend' },
      { name: 'LESS', category: 'frontend' }
    ],
    company: { name: 'Magebit', logo: '/images/companies/magebit-logo.svg', url: 'https://magebit.com' },
    image: '/images/projects/tassenfuzzi.de/screenshot_764x430_1.webp',
    images: [
      '/images/projects/tassenfuzzi.de/screenshot_764x430_1.webp',
      '/images/projects/tassenfuzzi.de/screenshot_764x430_2.webp',
      '/images/projects/tassenfuzzi.de/screenshot_764x430_3.webp'
    ],
    siteUrl: 'https://www.tassenfuzzi.de/',
    period: { start: '2021', end: '2022' },
    features: [
      'Улучшение темы',
      'Доработка модулей',
      'Изменение верстки страниц'
    ]
  },
  {
    id: '14',
    slug: 'bakerdays',
    title: 'Bakerdays.com – улучшение интерфейса и функционала',
    description: 'Расширение модулей и улучшение темы сайта. Изменения касались как внешнего вида, так и UX компонентов.',
    shortDescription: 'Поддержка и UX-улучшения Magento 2',
    type: 'E-commerce',
    technologies: [
      { name: 'Magento 2', category: 'backend' },
      { name: 'PHP', category: 'backend' },
      { name: 'LESS', category: 'frontend' }
    ],
    company: { name: 'Magebit', logo: '/images/companies/magebit-logo.svg', url: 'https://magebit.com' },
    image: '/images/projects/bakerdays.com/screenshot_764x430_1.webp',
    images: [
      '/images/projects/bakerdays.com/screenshot_764x430_1.webp',
      '/images/projects/bakerdays.com/screenshot_764x430_2.webp',
      '/images/projects/bakerdays.com/screenshot_764x430_3.webp',
      '/images/projects/bakerdays.com/screenshot_764x430_4.webp',
      '/images/projects/bakerdays.com/screenshot_764x430_5.webp',
      '/images/projects/bakerdays.com/screenshot_764x430_6.webp'
    ],
    siteUrl: 'https://www.bakerdays.com/',
    period: { start: '2021', end: '2022' },
    features: [
      'Редизайн отдельных страниц',
      'Расширение текущих модулей',
      'UX-оптимизация'
    ]
  }
];