import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '24',
    slug: 'converta-group',
    title: 'Converta Group — fullstack-платформа автоматизации объявлений и воронки Avito',
    description: 'Разработка и развитие <strong>экосистемы Converta Group</strong>, включающей клиентское приложение, административную панель, backend API и Telegram-генератор объявлений.<br/><br/>Платформа построена на <strong>NestJS + TypeScript</strong> (сервер и бот-сервисы), <strong>React + Vite</strong> (клиент) и <strong>Next.js</strong> (админ-панель) с единой бизнес-логикой управления данными и контентом.<br/><br/>Реализованы интеграции с <strong>OpenAI</strong>, очередями задач через <strong>RabbitMQ</strong>, экспортом в CSV/Excel и инфраструктурой на <strong>PostgreSQL + Redis</strong>.',
    shortDescription: '<strong>Fullstack-платформа Converta Group</strong>: клиент, админка, API и Telegram-бот с AI-генерацией',
    type: 'AI',
    technologies: [
      { name: 'TypeScript', category: 'backend' },
      { name: 'NestJS', category: 'backend' },
      { name: 'React', category: 'frontend' },
      { name: 'Vite', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'Redux Toolkit', category: 'frontend' },
      { name: 'Prisma', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Redis', category: 'backend' },
      { name: 'RabbitMQ', category: 'backend' },
      { name: 'OpenAI API', category: 'ai' },
      { name: 'Telegram Bot API', category: 'backend' },
      { name: 'Docker', category: 'devops' }
    ],
    company: { name: 'Handyweb', logo: '/images/companies/handyweb-logo.svg', url: 'https://handyweb.org' },
    image: '/images/projects/app.converta.group/screenshot_764x430_1.webp',
    images: [
      '/images/projects/app.converta.group/screenshot_full_1.png',
      '/images/projects/app.converta.group/2.png',
      '/images/projects/app.converta.group/3.png',
    ],
    siteUrl: 'https://converta.group/',
    period: { start: 'октябрь 2025', end: 'ноябрь 2025' },
    features: [
      'Backend API на NestJS с модульной архитектурой',
      'Клиентское приложение на React + Vite (FSD-подход)',
      'Админ-панель на Next.js для управления сущностями и пользователями',
      'Telegram-бот для генерации и отправки контента',
      'AI-генерация объявлений через OpenAI',
      'Очереди задач и фоновые процессы на RabbitMQ',
      'Экспорт данных в CSV/Excel для публикаций',
      'Prisma ORM и PostgreSQL для хранения доменных данных',
      'Redis для кеша и ускорения фоновых сценариев',
    ]
  },
  {
    id: '23',
    slug: 'alifakhrmosavi-official-site',
    title: 'Ali FakhrMousavi — официальный сайт режиссера',
    description: 'Разработка и развитие <strong>fullstack-платформы для официального сайта режиссера</strong> с публичной частью на <strong>Next.js 15</strong> и серверной API-частью на <strong>NestJS + TypeScript</strong>.<br/><br/>Реализованы: <strong>админ-панель</strong> для управления статьями, пользователями и флагами, защищенная аутентификация с <strong>JWT и 2FA</strong>, а также контентные разделы сайта (фильмы, галерея, медиа, контакты).<br/><br/>Архитектура построена на модульном подходе с использованием <strong>Prisma ORM</strong>, <strong>PostgreSQL</strong> и <strong>Redis</strong>, с упором на безопасность, SEO и масштабируемость.',
    shortDescription: '<strong>Fullstack-платформа</strong>: публичный сайт на <strong>Next.js</strong> + защищенная админка и API на <strong>NestJS</strong>',
    type: 'Web',
    technologies: [
      { name: 'TypeScript', category: 'backend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'React', category: 'frontend' },
      { name: 'NestJS', category: 'backend' },
      { name: 'Prisma', category: 'backend' },
      { name: 'PostgreSQL', category: 'backend' },
      { name: 'Redis', category: 'backend' },
      { name: 'JWT', category: 'backend' },
      { name: 'Chakra UI', category: 'frontend' },
      { name: 'Vite', category: 'frontend' },
      { name: 'Docker', category: 'devops' }
    ],
    company: { name: 'Freelance', logo: '/images/companies/freelance-logo.png', url: 'https://amufazalov.ru' },
    image: '/images/projects/alifakhrmousavi.com/screenshot_764x430_8.webp',
    images: [
      '/images/projects/alifakhrmousavi.com/screenshot_764x430_1.webp',
      '/images/projects/alifakhrmousavi.com/screenshot_764x430_2.webp',
      '/images/projects/alifakhrmousavi.com/screenshot_764x430_3.webp',
      '/images/projects/alifakhrmousavi.com/screenshot_764x430_4.webp',
      '/images/projects/alifakhrmousavi.com/screenshot_764x430_5.webp',
      '/images/projects/alifakhrmousavi.com/screenshot_764x430_6.webp',
      '/images/projects/alifakhrmousavi.com/screenshot_764x430_7.webp',
      '/images/projects/alifakhrmousavi.com/screenshot_764x430_8.webp',
    ],
    siteUrl: 'https://alifakhrmousavi.com/',
    period: { start: 'август 2025', end: 'октябрь 2025' },
    features: [
      'Публичный сайт на Next.js 15 с App Router',
      'Админ-панель для управления статьями, пользователями и флагами',
      'JWT-аутентификация и защищенные роуты',
      'Двухфакторная аутентификация (2FA)',
      'NestJS API с модульной архитектурой',
      'Prisma ORM для работы с PostgreSQL',
      'Redis для хранения сессий и ускорения процессов',
      'SEO-оптимизация и семантическая структура страниц',
      'Адаптивный интерфейс для мобильных и десктопных устройств',
      'Весртка с под ключ с нуля'
    ]
  },
  {
    id: '22',
    slug: 'pick6-betting-tma',
    title: 'Pick 6 Horse Racing – MVP тотализаторной платформы для конных скачек',
    description: 'Разработка <strong>MVP современной тотализаторной платформы</strong> для организации и управления конными скачками. В основе технологического стека – <strong>TypeScript, NestJS и React</strong>.<br/><br/>Реализованы: интеграция с <strong>Telegram WebApp</strong>, система онлайн-платежей через <strong>TON криптовалюту и Telegram Stars</strong>, комплексное управление пользователями и заказами.<br/><br/>Архитектура построена на <strong>микросервисах</strong> с использованием <strong>Kafka</strong> для обработки событий, <strong>Prisma ORM</strong> для взаимодействия с базой данных и <strong>Storybook</strong> для документирования UI-компонентов.',
    shortDescription: 'Инновационная <strong>MVP платформа тотализатора</strong> для конных скачек с интеграцией <strong>Telegram WebApp</strong> и поддержкой <strong>TON</strong>',
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
    id: '21',
    slug: 'commboost',
    title: 'CommBoost — AI-платформа для анализа звонков в продажах',
    description: 'Разработка и масштабирование <strong>AI-бэкенда на NestJS и TypeScript</strong>. Интеграция <strong>OpenAI API</strong> для классификации звонков и генерации чек-листов.<br/><br/>Реализована <strong>модульная многоклиентская архитектура</strong> с <strong>RabbitMQ, Redis и PostgreSQL</strong>. Обеспечена безопасность и масштабируемость решения.',
    shortDescription: '<strong>AI-анализ звонков</strong>, интеграция <strong>LLM</strong>, <strong>NestJS</strong>, <strong>PostgreSQL</strong>',
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
      'Интеграции с Bitrix24 и AmoCRM'
    ]
  },
  {
    id: '20',
    slug: 'fantasy-horse-racing',
    title: 'Fantasy Horse Racing — мобильное фэнтези-приложение для рынка Великобритании',
    description: 'Разработка и сопровождение <strong>мобильного фэнтези-приложения</strong> с использованием <strong>React и NestJS</strong>. Работа с <strong>PostgreSQL и RabbitMQ</strong>.<br/><br/>Участие в <strong>Agile-процессах</strong> и управление контейнерами через <strong>Portainer</strong>.',
    shortDescription: '<strong>Фэнтези-спортивное приложение</strong> на <strong>ReactNative + NestJS</strong>',
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
    id: '19',
    slug: 'slot-games-platform',
    title: 'Starsdeluxe.net – Игровая платформа и адаптер для слот-игр',
    description: 'Разработка <strong>комплексной игровой платформы</strong> с универсальным адаптером для интеграции слот-игр различных провайдеров (<strong>Wazdan, Pragmatic Play, Greentube, Hacksaw Gaming, RubyPlay</strong>).<br/><br/>Проект включал <strong>реверс-инжиниринг работы игр</strong>, создание API для лобби на <strong>React</strong>, разработку <strong>Telegram-бота</strong> для управления клубами и терминалами.<br/><br/>Реализована система формирования статистики в <strong>Excel</strong>, блокировки игр/терминалов, интеграция <strong>Unity-игр</strong>. Архитектура построена на <strong>NodeJS</strong> с использованием <strong>RabbitMQ, WebSockets, REST API и SOAP</strong>.<br/><br/>Выполнял роль <strong>тимлида и техдиректора</strong>, координируя работу команды из 3 разработчиков. Платформа поддерживала <strong>более 300 игр</strong> с автоматической генерацией математики через SlotMachines.',
    shortDescription: '<strong>Игровая платформа</strong> с универсальным адаптером для интеграции <strong>слот-игр</strong>',
    type: 'Gaming Platform',
    technologies: [
      { name: 'NodeJS', category: 'backend' },
      { name: 'TypeScript', category: 'backend' },
      { name: 'React', category: 'frontend' },
      { name: 'RabbitMQ', category: 'backend' },
      { name: 'WebSockets', category: 'backend' },
      { name: 'REST API', category: 'backend' },
      { name: 'SOAP', category: 'backend' },
      { name: 'C#', category: 'backend' },
      { name: 'Unity', category: 'other' },
      { name: 'Telegram Bot API', category: 'backend' },
      { name: 'Excel Integration', category: 'backend' }
    ],
    company: { name: 'Mageinn', logo: '/images/companies/mageinn-logo.webp', url: 'https://mageinn.com' },
    image: '/images/projects/starsdeluxe.net/Picture1.png',
    images: [
      '/images/projects/starsdeluxe.net/Picture1.png',
      '/images/projects/starsdeluxe.net/Picture2.png',
      '/images/projects/starsdeluxe.net/Picture3.png',
      '/images/projects/starsdeluxe.net/Picture4.png',
      '/images/projects/starsdeluxe.net/Picture5.png',
      '/images/projects/starsdeluxe.net/Picture6.png'
    ],
    siteUrl: 'https://starsdeluxe.net/',
    period: { start: 'май 2022', end: 'ноябрь 2023' },
    features: [
      'Реверс-инжиниринг слот-игр от 5+ провайдеров',
      'Универсальный адаптер для формирования ответов',
      'API для работы с игровым лобби',
      'React-лобби с интеграцией игр',
      'Telegram-бот для управления клубами',
      'Система линковки терминалов',
      'Генерация статистики в Excel',
      'Блокировка игр и терминалов по ошибкам',
      'Контроль высокого RTP',
      'Интеграция Unity-игр в лобби',
      'Написание логики игр для фронтенда',
      'Модуль коннектора для сторонних сервисов',
      'Техническая документация для интеграций',
      'Управление командой из 3 разработчиков',
      'Поддержка более 300 слот-игр',
    ]
  },
  {
    id: '18',
    slug: 'magento2-ajax-login-wishlist',
    title: 'Magento 2 Ajax Login & Wishlist',
    description: 'Модуль для <strong>Magento 2</strong>, который значительно улучшает пользовательский опыт, добавляя современные <strong>AJAX-формы</strong> для входа, регистрации и работы со списком желаемого (wishlist) без перезагрузки страницы.<br/><br/>Реализована <strong>валидация в реальном времени</strong>, интеграция с <strong>minicart</strong> и поддержка <strong>мультиязычности</strong>.',
    shortDescription: 'Модуль для <strong>Magento 2</strong> с <strong>AJAX авторизацией</strong> и списком желаний',
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
    description: 'Разработка <strong>интернет-магазина контактных линз</strong> на платформе <strong>Magento 2</strong>. Создан <strong>полностью кастомный дизайн с нуля</strong>, реализована сложная система фильтрации и поиска товаров.<br/><br/>Интеграция с <strong>платежными системами и службами доставки</strong>. Особое внимание уделено <strong>мобильной версии и оптимизации производительности</strong>.',
    shortDescription: '<strong>Интернет-магазин контактных линз</strong> на <strong>Magento 2</strong>',
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
    description: 'Модуль для <strong>Magento 2</strong>, который автоматизирует управление остатками связанных товаров. Синхронизирует количество на складе между основным и ассоциированными товарами.<br/><br/>Поддерживает <strong>гибкую настройку ассоциаций</strong>, <strong>импорт/экспорт CSV</strong>, логирование и расширяемость.',
    shortDescription: 'Автоматизация остатков связанных товаров в <strong>Magento 2</strong>',
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
    description: 'Модуль для <strong>Magento 2</strong>, который автоматически добавляет <strong>hreflang-теги</strong> на страницы сайта для улучшения SEO мультиязычных и мультирегиональных магазинов.<br/><br/><strong>Гибкая настройка</strong>, поддержка всех типов страниц, <strong>мультистор</strong>, расширяемость.',
    shortDescription: 'Автоматизация <strong>hreflang</strong> для <strong>Magento 2</strong>',
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
    description: 'Разработка <strong>внутреннего AI-ассистента</strong> на <strong>OpenAI API</strong> для автоматизации доступа к корпоративным регламентам. Интеграция с системой <strong>1С</strong>.<br/><br/>Применение <strong>LangChain и семантического поиска с embeddings</strong> для повышения точности и релевантности.',
    shortDescription: '<strong>AI-помощник</strong> для <strong>1С</strong> на <strong>OpenAI API</strong>',
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
    description: 'Разработка <strong>новой темы с нуля</strong>, обновление <strong>Magento 2</strong>, установка, обновление и написание новых модулей.',
    shortDescription: 'Полный редизайн и обновление <strong>e-commerce</strong> на <strong>Magento 2</strong>',
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
    description: 'Проведена <strong>полная миграция интернет-магазина</strong> с <strong>Magento 1 на Magento 2</strong>. Анализ старой версии, перенос базы данных, установка и разработка модулей.<br/><br/>Создание <strong>новой темы</strong>.',
    shortDescription: 'Миграция крупного <strong>e-commerce</strong> на <strong>Magento 2</strong>',
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
    description: '<strong>Верстка главной страницы</strong>, разработка пользовательского <strong>модуля quiz</strong>, а также поддержка и расширение других компонентов сайта.',
    shortDescription: 'Модуль <strong>Quiz</strong> и поддержка сайта на <strong>Magento 2</strong>',
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
    description: '<strong>Обновление платформы Magento 2</strong>, поддержка сайта, верстка отдельных страниц, <strong>фиксы багов после обновлений</strong>.',
    shortDescription: 'Поддержка и обновление <strong>Magento 2</strong>',
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
    description: 'Поддержка сайта на <strong>Magento 2</strong>, <strong>улучшение дизайна</strong>, доработка существующих модулей и изменение верстки некоторых страниц.',
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
    description: '<strong>Расширение модулей и улучшение темы сайта</strong>. Изменения касались как внешнего вида, так и <strong>UX компонентов</strong>.',
    shortDescription: 'Поддержка и <strong>UX-улучшения Magento 2</strong>',
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
    description: 'Поддержка <strong>интернет-магазина на Magento 2</strong>. Установка необходимых модулей и мелкие правки темы.',
    shortDescription: 'Поддержка магазина на <strong>Magento 2</strong>',
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
    description: '<strong>Оптимизация административной панели</strong> магазина на <strong>Magento 2</strong>. Установка новых и настройка текущих модулей.',
    shortDescription: 'Оптимизация админки на <strong>Magento 2</strong>',
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
    description: 'Клиент потерял доступы к сайту и серверу. А доступы предыдущий разработчик предоставит только за высокую дополнительную оплату.<br/><br/>Был написан <strong>парсер на Python</strong>, который собрал все продукты, после чего был создан <strong>новый сайт на платформе ReadyScript</strong>. Использованы <strong>PHP, JavaScript, CSS, HTML5</strong> для нового сайта.',
    shortDescription: '<strong>Парсер</strong> и перенос каталога на <strong>ReadyScript</strong>',
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
    description: '<strong>Миграция крупного сайта медицины</strong> с <strong>Magento 2 на ReadyScript</strong> из-за большого количества багов.<br/><br/>Создание аналогичной темы, интеграции с <strong>1С, Bitrix24</strong> и другими API.',
    shortDescription: 'Миграция сайта с <strong>Magento 2</strong> на <strong>ReadyScript</strong>',
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
    description: 'Разработка и поддержка <strong>сайтов компании Reklab</strong> на платформе <strong>ReadyScript</strong>. Создание тем, миграция баз данных.<br/><br/>Интеграция с <strong>Bitrix24 и системами размещения рекламы</strong>.',
    shortDescription: 'Группа проектов на <strong>ReadyScript</strong> для Reklab',
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
    description: 'Поддержка сайта на <strong>MODX</strong>, оптимизация, доработка <strong>API-интеграций</strong>. Позже осуществлён <strong>перенос сайта на Bitrix</strong> с сохранением данных.<br/><br/>Также сюда были перенесены данные с сайта <strong>svetoboev.ru</strong>.',
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
    description: 'Разработка <strong>лендинга на MODX</strong> и написание модуля для админки, который генерирует <strong>QR-код с уникальной ссылкой</strong> для получения документации с сайта.<br/><br/>Реализована возможность <strong>загрузки документации через админку</strong>. Использованы <strong>PHP, JavaScript, HTML, CSS, ExtJS 3.0</strong>.',
    shortDescription: 'Лендинг на <strong>MODX</strong> и <strong>QR-модуль</strong> для админки',
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