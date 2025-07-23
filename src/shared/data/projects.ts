import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '21',
    slug: 'pick6-betting-tma',
    title: 'Pick 6 Horse Racing – MVP тотализаторной платформы для конных скачек',
    description: 'Разработка MVP современной тотализаторной платформы для организации и управления конными скачками. В основе технологического стека – TypeScript, NestJS и React. Реализованы: интеграция с Telegram WebApp, система онлайн-платежей через TON криптовалюту и Telegram Stars, комплексное управление пользователями и заказами. Архитектура построена на микросервисах с использованием Kafka для обработки событий, Prisma ORM для взаимодействия с базой данных и Storybook для документирования UI-компонентов.',
    shortDescription: 'Инновационная MVP платформа тотализатора для конных скачек с интеграцией Telegram WebApp и поддержкой TON',
    type: 'Mobile',
    technologies: [
      { name: 'TypeScript', category: 'backend' },
      { name: 'NestJS', category: 'backend' },
      { name: 'Prisma', category: 'backend' },
      { name: 'Kafka', category: 'backend' },
      { name: 'React', category: 'frontend' },
      { name: 'Redux Toolkit', category: 'frontend' },
      { name: 'Storybook', category: 'frontend' },
      { name: 'Telegram WebApp', category: 'backend' },
      { name: 'Docker', category: 'devops' }
    ],
    company: { name: 'Handyweb', logo: '/images/companies/handyweb-logo.svg', url: 'https://handyweb.org' },
    image: '/images/projects/pick6/thumb.jpg',
    images: [
      '/images/projects/pick6/1.png',
      '/images/projects/pick6/2.png',
      '/images/projects/pick6/3.png',
      '/images/projects/pick6/4.png',
      '/images/projects/pick6/5.png',
      '/images/projects/pick6/6.png',
      '/images/projects/pick6/7.png',
      '/images/projects/pick6/8.png',
      '/images/projects/pick6/9.png',
    ],
    siteUrl: 'https://t.me/Pick6Fantasy_Bot',
    period: { start: 'июнь 2025', end: 'июль 2025' },
    features: [
      'Интеграция с Telegram WebApp',
      'Микросервисная архитектура на NestJS',
      'Kafka для событий и очередей',
      'Prisma ORM для работы с БД',
      'Управление встречами, заказами и пользователями',
      'Онлайн-оплата и билеты',
      'UI-документация через Storybook',
      'Docker для деплоя и разработки',
      'TON криптовалюта и Telegram Stars',
      'Автоматический возврат средств в случае отмены заказа'
    ]
  },
  {
    id: '20',
    slug: 'commboost',
    title: 'CommBoost — AI-платформа для анализа звонков в продажах',
    description: 'Разработка и масштабирование AI-бэкенда на NestJS и TypeScript. Интеграция OpenAI API для классификации звонков и генерации чек-листов. Реализована модульная многоклиентская архитектура с RabbitMQ, Redis и PostgreSQL. Обеспечена безопасность и масштабируемость решения.',
    shortDescription: 'AI-анализ звонков, интеграция LLM, NestJS, PostgreSQL',
    type: 'AI',
    technologies: [
      { name: 'TypeScript', category: 'backend' },
      { name: 'NestJS', category: 'backend' },
      { name: 'PostgreSQL', category: 'backend' },
      { name: 'Prisma', category: 'backend' },
      { name: 'Redis', category: 'backend' },
      { name: 'RabbitMQ', category: 'backend' },
      { name: 'Docker', category: 'devops' },
      { name: 'AWS S3', category: 'devops' },
      { name: 'Swagger', category: 'backend' },
      { name: 'JWT', category: 'backend' },
      { name: 'OpenAI API', category: 'ai' }
    ],
    company: { name: 'Handyweb', logo: '/images/companies/handyweb-logo.svg', url: 'https://handyweb.org' },
    image: '/images/projects/commboost.ru/screenshot_764x430_1.webp',
    images: [
      '/images/projects/commboost.ru/screenshot_764x430_1.webp',
      '/images/projects/commboost.ru/screenshot_764x430_2.webp',
      '/images/projects/commboost.ru/screenshot_764x430_3.png',
      '/images/projects/commboost.ru/screenshot_764x430_4.png',
      '/images/projects/commboost.ru/screenshot_764x430_5.png',
      '/images/projects/commboost.ru/screenshot_764x430_6.png',
      '/images/projects/commboost.ru/screenshot_764x430_7.png',
    ],
    siteUrl: 'https://commboost.ru/',
    period: { start: 'декабрь 2024', end: 'июнь 2025' },
    features: [
      'Партнерская система',
      'Отдельная панель администратора',
      'Система ролей и прав доступа',
      'Бэкенд на NestJS и TypeScript',
      'Интеграция OpenAI API',
      'Многоклиентская архитектура',
      'Асинхронные потоки с RabbitMQ',
      'Интеграции с Bitrix24 и AmoCRM',
      'Обратная связь для LLM-модели'
    ]
  },
  {
    id: '19',
    slug: 'fantasy-horse-racing',
    title: 'Fantasy Horse Racing — мобильное фэнтези-приложение для рынка Великобритании',
    description: 'Разработка и сопровождение мобильного фэнтези-приложения с использованием React и NestJS. Работа с PostgreSQL и RabbitMQ. Участие в Agile-процессах и управление контейнерами через Portainer.',
    shortDescription: 'Фэнтези-спортивное приложение на ReactNative + NestJS',
    type: 'Mobile',
    technologies: [
      { name: 'ReactNative', category: 'frontend' },
      { name: 'NestJS', category: 'backend' },
      { name: 'TypeScript', category: 'backend' },
      { name: 'PostgreSQL', category: 'backend' },
      { name: 'RabbitMQ', category: 'backend' },
      { name: 'GraphQL', category: 'backend' },
    ],
    company: { name: 'Handyweb', logo: '/images/companies/handyweb-logo.svg', url: 'https://handyweb.org' },
    image: '/images/projects/fhr1/thumb.png',
    images: [
      '/images/projects/fhr1/2.jpg',
      '/images/projects/fhr1/3.jpg',
      '/images/projects/fhr1/4.jpg',
      '/images/projects/fhr1/5.jpg',
      '/images/projects/fhr1/6.jpg',
      '/images/projects/fhr1/7.png',
      '/images/projects/fhr1/8.jpg',
    ],
    siteUrl: 'https://www.fantasyhorserace.com/',
    period: { start: 'февраль 2024', end: 'май 2024' },
    features: [
      'Клиентская часть на ReactNative',
      'Бэкенд на NestJS',
      'GraphQL API',
      'Микросервисная архитектура',
      'Firebase для уведомлений',
      'Интеграция RabbitMQ',
      'Поддержка PostgreSQL',
      'DevOps-управление через Portainer',
      'Участие в Scrum-процессах'
    ]
  },
  {
    id: '18',
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
    image: '/images/magento2-module.jpeg',
    images: [],
    siteUrl: 'https://docs.scommerce-mage.com/magento-2-extensions/user-experience-extensions/magento-2-ajax-login-and-add-to-wishlist',
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
    id: '17',
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
    id: '16',
    slug: 'magento-2-associated-products-stock-update',
    title: 'Magento 2 Associated Products Stock Update',
    description: 'Модуль для Magento 2, который автоматизирует управление остатками связанных товаров. Синхронизирует количество на складе между основным и ассоциированными товарами, поддерживает гибкую настройку ассоциаций, импорт/экспорт CSV, логирование и расширяемость.',
    shortDescription: 'Автоматизация остатков связанных товаров в Magento 2',
    type: 'Magento 2 Module',
    technologies: [
      { name: 'Magento 2', category: 'backend' },
      { name: 'PHP', category: 'backend' },
    ],
    company: { name: 'Scommerce Mage', logo: '/images/companies/scommerce-logo.jpg', url: 'https://www.scommerce-mage.com/' },
    image: '/images/magento2-module.jpeg',
    images: [],
    siteUrl: 'https://docs.scommerce-mage.com/magento-2-extensions/admin-extensions/magento-2-associated-or-linked-product-stock-update',
    period: { start: '2023', end: '2023' },
    features: [
      'Автоматическое обновление остатков при отгрузках и возвратах',
      'Гибкая настройка ассоциаций товаров',
      'UI-компонент для управления ассоциациями',
      'Импорт и экспорт ассоциаций через CSV',
      'Логирование операций',
      'Расширяемость и интеграция с другими модулями'
    ]
  },
  {
    id: '15',
    slug: 'magento-2-seo-hreflang',
    title: 'Magento 2 SEO Hreflang',
    description: 'Модуль для Magento 2, который автоматически добавляет hreflang-теги на страницы сайта для улучшения SEO мультиязычных и мультирегиональных магазинов. Гибкая настройка, поддержка всех типов страниц, мультистор, расширяемость.',
    shortDescription: 'Автоматизация hreflang для Magento 2',
    type: 'Magento 2 Module',
    technologies: [
      { name: 'Magento 2', category: 'backend' },
      { name: 'PHP', category: 'backend' },
      { name: 'DI', category: 'backend' },
      { name: 'Layout', category: 'frontend' },
      { name: 'Template', category: 'frontend' }
    ],
    company: { name: 'Scommerce Mage', logo: '/images/companies/scommerce-logo.jpg', url: 'https://www.scommerce-mage.com/' },
    image: '/images/magento2-module.jpeg',
    images: [],
    siteUrl: undefined,
    period: { start: '2023', end: '2023' },
    features: [
      'Автоматическая генерация hreflang-тегов',
      'Поддержка категорий, товаров и CMS-страниц',
      'Гибкая настройка через админ-панель',
      'Совместимость с мультистор-структурой',
      'Расширяемость через интерфейсы',
      'Улучшение SEO для мультиязычных сайтов'
    ]
  },
  {
    id: '14',
    slug: 'maksoft-ai-assistant',
    title: 'AI-ассистент для внутренних процессов – MaksoftOptima',
    description: 'Разработка внутреннего AI-ассистента на OpenAI API для автоматизации доступа к корпоративным регламентам. Интеграция с системой 1С. Применение LangChain и семантического поиска с embeddings для повышения точности и релевантности.',
    shortDescription: 'AI-помощник для 1С на OpenAI API',
    type: 'Telegram Bot',
    technologies: [
      { name: 'TypeScript', category: 'backend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'OpenAI API', category: 'ai' },
      { name: 'LangChain', category: 'ai' }
    ],
    company: { name: 'Handyweb', logo: '/images/companies/handyweb-logo.svg', url: 'https://handyweb.org' },
    image: '/images/ai-assistant.jpg',
    images: [],
    siteUrl: '',
    period: { start: '2023', end: '2023' },
    features: [
      'Интеграция OpenAI API с 1С',
      'Семантический поиск через embeddings',
      'Использование LangChain',
      'Ассистент на основе GPT для автоматизации',
      'Обратная связь для повышения качества ответов'
    ]
  },
  {
    id: '13',
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
    period: { start: 'май 2021', end: 'май 2022' },
    features: [
      'Создание новой темы',
      'Обновление Magento',
      'Разработка и обновление модулей'
    ]
  },
  {
    id: '12',
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
    period: { start: 'май 2021', end: 'май 2022' },
    features: [
      'Анализ и миграция с Magento 1',
      'Создание новой темы',
      'Установка и разработка модулей'
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
    period: { start: 'май 2021', end: 'май 2022' },
    features: [
      'Модуль Quiz',
      'Верстка главной',
      'Поддержка модулей'
    ]
  },
  {
    id: '10',
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
    period: { start: 'май 2021', end: 'май 2022' },
    features: [
      'Верстка отдельных страниц',
      'Обновление платформы',
      'Фиксы багов'
    ]
  },
  {
    id: '9',
    slug: 'tassenfuzzi',
    title: 'Tassenfuzzi.de – улучшение дизайна и модулей',
    description: 'Поддержка сайта на Magento 2, улучшение дизайна, доработка существующих модулей и изменение верстки некоторых страниц.',
    shortDescription: 'Поддержка сайта и улучшение верстки',
    type: 'E-commerce',
    technologies: [
      { name: 'Magento 2', category: 'backend' },
      { name: 'PHP', category: 'backend' },
      { name: 'LESS', category: 'frontend' },
      { name: 'Knockout.js', category: 'frontend' }
    ],
    company: { name: 'Magebit', logo: '/images/companies/magebit-logo.svg', url: 'https://magebit.com' },
    image: '/images/projects/tassenfuzzi.de/screenshot_764x430_1.webp',
    images: [
      '/images/projects/tassenfuzzi.de/screenshot_764x430_1.webp',
      '/images/projects/tassenfuzzi.de/screenshot_764x430_2.webp',
      '/images/projects/tassenfuzzi.de/screenshot_764x430_3.webp'
    ],
    siteUrl: 'https://www.tassenfuzzi.de/',
    period: { start: 'май 2021', end: 'май 2022' },
    features: [
      'Улучшение темы',
      'Доработка модулей',
      'Изменение верстки страниц'
    ]
  },
  {
  id: '8',
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
    period: { start: 'май 2021', end: 'май 2022' },
    features: [
      'Редизайн отдельных страниц',
      'Расширение текущих модулей',
      'UX-оптимизация'
    ]
  },
  {
    id: '7',
    slug: 'crazylenses',
    title: 'CrazyLenses.com – поддержка и модульная доработка',
    description: 'Поддержка интернет-магазина на Magento 2. Установка необходимых модулей и мелкие правки темы.',
    shortDescription: 'Поддержка магазина на Magento 2',
    type: 'E-commerce',
    technologies: [
      { name: 'Magento 2', category: 'backend' },
      { name: 'PHP', category: 'backend' }
    ],
    company: { name: 'Scommerce Mage', logo: '/images/companies/scommerce-logo.jpg', url: 'https://www.scommerce-mage.com/' },
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
    id: '6',
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
    id: '5',
    slug: 'p-metr',
    title: 'P-metr.ru – парсер продуктов со старого сайта и перенос каталога',
    description: 'Клиент потерял доступы к сайту и серверу. А доступы предыдущий разработчик предоставит только за высокую дополнительную оплату. Был написан парсер на Python, который собрал все продукты, после чего был создан новый сайт на платформе ReadyScript. Использованы PHP, JavaScript, CSS, HTML5 для нового сайта.',
    shortDescription: 'Парсер и перенос каталога на ReadyScript',
    type: 'E-commerce',
    technologies: [
      { name: 'Python', category: 'backend' },
      { name: 'ReadyScript', category: 'backend' },
      { name: 'PHP', category: 'backend' },
      { name: 'JavaScript', category: 'frontend' },
      { name: 'CSS', category: 'frontend' },
      { name: 'HTML5', category: 'frontend' }
    ],
    company: { name: 'Freelance', logo: '/images/companies/freelance-logo.png', url: 'https://amufazalov.ru' },
    image: '/images/projects/p-metr.ru/screenshot_764x430_1.webp',
    images: [
      '/images/projects/p-metr.ru/screenshot_764x430_1.webp',
      '/images/projects/p-metr.ru/screenshot_764x430_2.webp',
      '/images/projects/p-metr.ru/screenshot_764x430_3.webp',
      '/images/projects/p-metr.ru/screenshot_764x430_4.webp',
      '/images/projects/p-metr.ru/screenshot_764x430_5.webp',
      '/images/projects/p-metr.ru/screenshot_764x430_6.webp',
    ],
    siteUrl: 'https://p-metr.ru/',
    period: { start: '2021', end: '2021' },
    features: [
      'Парсер каталога на Python',
      'Полный перенос каталога на ReadyScript',
      'Разработка нового сайта',
      'Полноценный перенос вёрстки',
      'Создание новой темы для платформы ReadyScript',
      'Написание модуля калькулятора для расчёта стоимости работ'
    ]
  },
  {
    id: '4',
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
    id: '3',
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
    id: '2', 
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
    id: '1',
    slug: 'landing-systema-a',
    title: 'Systema-a.com – лендинг и модуль QR для админки',
    description: 'Разработка лендинга на MODX и написание модуля для админки, который генерирует QR-код с уникальной ссылкой для получения документации с сайта. Реализована возможность загрузки документации через админку. Использованы PHP, JavaScript, HTML, CSS, ExtJS 3.0.',
    shortDescription: 'Лендинг на MODX и QR-модуль для админки',
    type: 'Landing',
    technologies: [
      { name: 'MODX', category: 'backend' },
      { name: 'PHP', category: 'backend' },
      { name: 'JavaScript', category: 'frontend' },
      { name: 'HTML', category: 'frontend' },
      { name: 'CSS', category: 'frontend' },
      { name: 'ExtJS 3.0', category: 'frontend' }
    ],
    company: { name: 'Freelance', logo: '/images/companies/freelance-logo.png', url: 'https://amufazalov.ru' },
    image: '/images/projects/systema-a.com/screenshot_764x430_1.webp',
    images: [
      '/images/projects/systema-a.com/screenshot_764x430_1.webp',
      '/images/projects/systema-a.com/screenshot_764x430_2.webp',
      '/images/projects/systema-a.com/screenshot_764x430_3.webp',
    ],
    siteUrl: 'https://systema-a.com/',
    period: { start: '2020', end: '2020' },
    features: [
      'Лендинг на MODX',
      'Модуль для админки с генерацией QR-кода',
      'Генерация уникальных ссылок для документации',
      'Загрузка документации через админку',
      'ExtJS 3.0 для интерфейса админки'
    ]
  },
];