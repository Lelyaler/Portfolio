const translations = {
  ru: {
    meta: {
      title: "Валерия Чернявская - WordPress & Frontend Developer Portfolio",
      description: "Портфолио WordPress & Frontend-разработчика Валерии Чернявской. Кастомные темы и плагины на PHP, блоки Gutenberg, WooCommerce, Core Web Vitals и интерактивный фронтенд.",
      ogTitle: "Валерия Чернявская - WordPress & Frontend Developer Portfolio",
      ogDesc: "Портфолио WordPress & Frontend-разработчика. Разработка кастомных тем и плагинов на PHP, Gutenberg, WooCommerce, Core Web Vitals и интерактивные интерфейсы.",
      twitterTitle: "Валерия Чернявская - WordPress & Frontend Developer Portfolio",
      twitterDesc: "Портфолио WordPress & Frontend-разработчика. Разработка кастомных тем и плагинов на PHP, Gutenberg, WooCommerce, Core Web Vitals и интерактивные интерфейсы."
    },
    nav: {
      about: "Обо мне",
      skills: "Навыки",
      projects: "Проекты",
      contacts: "Контакты",
      resume: "Резюме"
    },
    hero: {
      title: "Привет, меня зовут Лера",
      subtitlePrefix: "Я -",
      roles: [
        "WordPress & PHP разработчик",
        "Frontend разработчик"
      ],
      projectsBtn: "Проекты",
      contactsBtn: "Контакты"
    },
    about: {
      title: "Обо мне",
      p1: "WordPress & Frontend Developer с 4+ годами опыта в веб-разработке (2 года в iGaming и клиентские проекты). Разрабатываю кастомные темы и плагины на PHP, интернет-магазины на WooCommerce и блоки Gutenberg. Проектирую интерфейсы с упором на производительность: сокращаю LCP, устраняю сдвиги вёрстки (CLS) и оптимизирую Core Web Vitals.",
      p2: "Работала в <strong>MaxBitSolution (iGaming, резидент ПВТ Беларуси)</strong> в тесной связке с SEO-отделом. Разрабатывала кастомные темы на PHP, создавала блоки Gutenberg на ACF Pro и специализированные плагины под бизнес-задачи. Внедряла семантическую микроразметку Schema.org (JSON-LD) и оптимизировала техническое SEO страниц.",
      p3: "Параллельно разрабатываю клиентские проекты: от промо-лендингов до интернет-магазинов на WooCommerce. Реализую полный цикл запуска под ключ: проектирование удобных интерфейсов, сборка через Vite и Webpack, контейнеризация в Docker, деплой на VPS (Linux/SSH), управление DNS и SSL-сертификатами.",
      comp1Title: "Кастомный WordPress & PHP",
      comp1Desc: "Разработка тем и плагинов с нуля на PHP, использование хуков и фильтров, кастомные REST API эндпоинты.",
      comp2Title: "Gutenberg & Админка",
      comp2Desc: "Создание кастомных блоков и паттернов Gutenberg на ACF Pro. Настройка удобного и интуитивного интерфейса редактирования для контент-менеджеров без участия разработчика.",
      comp3Title: "Mobile-First & Вёрстка",
      comp3Desc: "Адаптивная семантическая вёрстка под мобильный трафик (90%+). Отдаю предпочтение чистому CSS3 и нативному JS для максимальной скорости и отсутствия лишнего оверхеда, а при необходимости под требования проекта использую SCSS, Tailwind CSS и методологию БЭМ.",
      comp4Title: "Деплой, Хостинг & SEO",
      comp4Desc: "Подбор и управление DNS, SSL-сертификаты, деплой на VPS (Linux/SSH), контейнеризация в Docker, техническое SEO и микроразметка Schema.org."
    },
    skills: {
      title: "Навыки",
      groupWp: "WordPress & Backend",
      groupFrontend: "Frontend & Интерфейсы",
      groupTooling: "Инструменты & Деплой"
    },
    projects: {
      title: "Проекты",
      tabsAria: "Категории проектов",
      filterWordpress: "WordPress (Темы & Плагины)",
      filterThemes: "Темы WordPress",
      filterPlugins: "Плагины WordPress",
      filterFrontend: "Фронтенд & Интерфейсы",
      visitBtn: "Live Demo",
      githubBtn: "GitHub",
      expandOpen: "Свернуть",
      expandClosed: (count) => `Показать все проекты (ещё ${count})`,
      cards: {
        cyberpunkTheme: {
          badge: "Кастомная тема",
          title: "Cyberpunk Promo Theme",
          desc: "Кастомная тема WordPress с чистой архитектурой шаблонов на PHP без конструкторов (Elementor). Кастомайзер темы (WP Theme Customizer) для изменения цветов из админки, гибкие поля ACF Pro с автосинхронизацией Local JSON и 98+ PageSpeed.",
          tech: "WordPress, PHP, ACF Pro, Customizer API, WebP"
        },
        sneakmaxTheme: {
          badge: "WooCommerce",
          title: "Sneakmax WooCommerce Theme",
          desc: "Полнофункциональная кастомная тема для WooCommerce на чистом PHP без Elementor. Поддержка High-Performance Order Storage (HPOS), динамический AJAX-каталог товаров с фильтрацией цен на лету и модальный просмотр.",
          tech: "WordPress, WooCommerce, HPOS Ready, AJAX Catalog, PHP"
        },
        legalTheme: {
          badge: "Gutenberg Тема",
          title: "Legal Corporate Theme",
          desc: "Корпоративная тема на 6 нативных Gutenberg-блоках (Block API) с поддержкой прямого inline-редактирования RichText на странице, слайдерами отзывов Swiper и автоматической JSON-LD микроразметкой Schema.org.",
          tech: "WordPress, Block API, Gutenberg, JSON-LD Schema, PHP"
        },
        cookieNotice: {
          badge: "Плагин WP",
          title: "WP Cookie Notice",
          desc: "Легковесный плагин предупреждения о куках (GDPR). Страница настроек на нативном WordPress Settings API, встроенный wp-color-picker, чистый Vanilla JS (~1.2 КБ) и нулевой сдвиг макета (CLS).",
          tech: "Plugin API, PHP, Settings API, Vanilla JS, CSS3"
        },
        seoSentinel: {
          badge: "AI / GEO / SEO",
          title: "SEO Sentinel — AI Search & GEO Copilot",
          desc: "Мультиагентная платформа глубокого технического аудита, анализа поисковых лидеров и Generative Engine Optimization (GEO). Оценка цитируемости нейросетями (Perplexity/ChatGPT), автогенерация Schema.org JSON-LD и обход WAF/Cloudflare.",
          tech: "PHP 8.2, PSR-4, Agentic Coding, GEO, Schema.org, Tailwind CSS, Docker"
        },
        metaTags: {
          badge: "SEO-плагин",
          title: "Custom Meta Tags Manager",
          desc: "Плагин технического SEO и микроразметки. Управление директивами индексации (noindex/follow), canonical, hreflang, OpenGraph, Twitter Cards и генерация валидного JSON-LD через хук wp_head.",
          tech: "WordPress Plugin, PHP, SEO, OpenGraph, JSON-LD"
        },
        multigeo: {
          badge: "iGaming / MultiGEO",
          title: "MultiGEO & Satellite Engine",
          desc: "Модуль локализации и управления сателлитными сетками. Автоматическое клонирование посадочных страниц под целевые ГЕО, дифференцированная каноникализация (Googlebot vs YandexBot) и защищённый REST API для PBN.",
          tech: "PHP, REST API, ACF Pro Sync, Hreflang, Bot Targeting"
        },
        cyberpunkFrontend: {
          badge: "Promo / Анимации",
          title: "Cyberpunk Promo",
          desc: "Промо-лендинг с неоновым киберпанк-интерфейсом: кастомные параллакс-слайдеры Swiper, интерактивные формы, звуковые эффекты и адаптивная семантическая вёрстка по БЭМ.",
          tech: "JavaScript (ES6+), SCSS, Swiper, Canvas, БЭМ"
        },
        sneakmaxFrontend: {
          badge: "E-Commerce / Quiz",
          title: "Sneakmax Sneaker Store",
          desc: "Фронтенд интернет-магазина обуви: интерактивный квиз подбора кроссовок, динамическая фильтрация цены на noUiSlider, модальное быстрое превью и корзина.",
          tech: "JavaScript (ES6+), SCSS, Swiper, noUiSlider, БЭМ"
        },
        animation: {
          badge: "iGaming / Анимации",
          title: "House of Gambling",
          desc: "Промо-лендинг для iGaming и партнёрских программ с плавной CSS-анимацией слота, интерактивным калькулятором дохода и мультиязычностью.",
          tech: "HTML5, CSS3 Animations, JavaScript (ES6+), Mobile-First"
        },
        spinpulse: {
          badge: "iGaming / Casino Lobby",
          title: "SpinPulse Gaming Lobby",
          desc: "Интерфейс игрового лобби онлайн-казино на чистом JavaScript (ES6+): запуск официальных демо-слотов (Pragmatic Play), живой тикер джекпотов, виртуальный кошелёк, турниры и звуковой пул Web Audio API.",
          tech: "JavaScript (ES6+), Web Audio API, HTML5 Canvas, BEM, Vite"
        },
        nova: {
          badge: "Fintech / UI",
          title: "NOVA Pay Fintech Landing",
          desc: "Современный посадочный интерфейс финтех-сервиса с тёмной темой, интерактивной визуализацией платёжных карт и микроанимациями UI-компонентов.",
          tech: "JavaScript (ES6+), SCSS, Vite, Mobile-First"
        },
        security: {
          badge: "React & TypeScript",
          title: "Cybersecurity Operations Center",
          desc: "Панель мониторинга сетевой безопасности и сетевого трафика на React и TypeScript с интерактивными графиками Recharts, фильтрацией инцидентов и аналитикой в реальном времени.",
          tech: "React, TypeScript, Recharts, REST API, Vite"
        },
        edufree: {
          badge: "Tailwind CSS",
          title: "Edufree EdTech Landing",
          desc: "Адаптивный лендинг образовательной платформы на Tailwind CSS с интерактивной фильтрацией курсов и оптимизацией Core Web Vitals.",
          tech: "Tailwind CSS, HTML5, JavaScript (ES6+), Vite"
        },
        gamevault: {
          badge: "Gaming Community",
          title: "GameVault Portal",
          desc: "Каталог и комьюнити-хаб для геймеров с динамическим каталогом релизов, карточками игровых серверов и неоновым визуальным стилем.",
          tech: "JavaScript, SCSS, CSS Flexbox/Grid, BEM"
        },
        techwear: {
          badge: "E-Commerce UI",
          title: "Techwear Store",
          desc: "Концепт интернет-магазина технологичной одежды с асимметричной типографикой, фильтрами категорий и интерактивной галереей лукбука.",
          tech: "React, TypeScript, Vite, Web Audio API"
        },
        cryptosticky: {
          badge: "Scroll Experience",
          title: "Crypto-sticky Platform",
          desc: "Интерфейс крипто-платформы с фиксацией секций при скролле (sticky scroll experience), интерактивными таблицами курсов и анимацией переходов.",
          tech: "CSS Sticky, JavaScript, CSS3 Animations, BEM"
        },
        legalFrontend: {
          badge: "Корпоративный сайт",
          title: "Legal Services",
          desc: "Корпоративный сайт юридической компании: адаптивная семантическая вёрстка по БЭМ, слайдер отзывов Swiper, аккордеон FAQ и модальные формы заявок.",
          tech: "JavaScript (ES6+), SCSS, Swiper, HTML5, БЭМ"
        },
        survive505: {
          badge: "Gaming / Promo",
          title: "Survive at all costs (505)",
          desc: "Промо-лендинг для ПК-игры в жанре survival с переключением языков (ENG/RU), интерактивным блоком системных требований, аккордеонами и адаптивной семантической вёрсткой.",
          tech: "JavaScript (ES6+), SCSS, Multilingual, BEM, Responsive"
        },
        travel: {
          badge: "Travel / Booking",
          title: "2rism Travel Platform",
          desc: "Интерфейс платформы для путешествий и бронирования с автозаполнением поиска направлений (AutoComplete.js), кастомными селектами и адаптивной сеткой отелей и туров.",
          tech: "JavaScript (ES6+), AutoComplete.js, CSS3 Flexbox, Custom Select, Mobile-First"
        }
      }
    },
    contacts: {
      title: "Контакты",
      subtitle: "Открыта к интересным предложениям о сотрудничестве, фронтенд-проектам и коммерческой разработке.",
      nameLabel: "Имя",
      nameValue: "Валерия Чернявская",
      telegramLabel: "Телеграм",
      telegramAria: "Написать в Telegram",
      githubLabel: "GitHub",
      githubAria: "Профиль на GitHub",
      emailLabel: "Почта",
      emailAria: "Отправить email",
      emailCopyAria: "Скопировать email в буфер обмена",
      copyEmailAria: "Скопировать email",
      copyTelegramAria: "Скопировать Telegram",
      phoneLabel: "Телефон",
      phoneAria: "Позвонить по телефону",
      linkedinLabel: "LinkedIn",
      linkedinAria: "Профиль в LinkedIn",
      resumeTitle: "Резюме",
      resumeDesc: "Открыть резюме",
      resumeLink: "https://lelyaler.github.io/anketa/",
      resumeAria: "Открыть резюме онлайн",
      copied: "Скопировано!"
    },
    footer: {
      copy: "© 2026 Валерия Чернявская. WordPress & Frontend Developer Portfolio."
    },
    ui: {
      scrollTop: "Наверх",
      langSwitchLabel: "Выбор языка",
      menuOpen: "Открыть меню",
      menuClose: "Закрыть меню"
    }
  },
  en: {
    meta: {
      title: "Valeriya Cherniavskaya - WordPress & Frontend Developer Portfolio",
      description: "Portfolio of WordPress & Frontend Developer Valeriya Cherniavskaya. Custom PHP themes & plugins, Gutenberg blocks, WooCommerce, Core Web Vitals, and interactive frontend.",
      ogTitle: "Valeriya Cherniavskaya - WordPress & Frontend Developer Portfolio",
      ogDesc: "Portfolio of WordPress & Frontend Developer. Custom PHP themes & plugins, Gutenberg, WooCommerce, Core Web Vitals, and interactive UI engineering.",
      twitterTitle: "Valeriya Cherniavskaya - WordPress & Frontend Developer Portfolio",
      twitterDesc: "Portfolio of WordPress & Frontend Developer. Custom PHP themes & plugins, Gutenberg, WooCommerce, Core Web Vitals, and interactive UI engineering."
    },
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contacts: "Contacts",
      resume: "CV"
    },
    hero: {
      title: "Hi, I'm Valeriya",
      subtitlePrefix: "I am a",
      roles: [
        "WordPress & PHP Developer",
        "Frontend Developer"
      ],
      projectsBtn: "Projects",
      contactsBtn: "Contacts"
    },
    about: {
      title: "About Me",
      p1: "WordPress & Frontend Developer with 4+ years of web development experience (2 years in iGaming and client projects). I specialize in developing custom PHP themes and plugins, WooCommerce stores, and Gutenberg blocks, with a strong focus on performance: reducing LCP, eliminating layout shifts (CLS), and optimizing Core Web Vitals.",
      p2: "At <strong>MaxBitSolution (iGaming, Belarus HTP resident)</strong>, I worked in close collaboration with the SEO department. Developed custom PHP themes, custom Gutenberg blocks with ACF Pro, and plugins tailored to business requirements, while implementing Schema.org (JSON-LD) structured data and resolving technical indexing issues.",
      p3: "I also deliver full-cycle client projects from concept to launch: from promo landing pages to WooCommerce stores. Managing the full development and deployment lifecycle: Vite/Webpack bundling, Docker containerization, VPS deployment (Linux/SSH), DNS setup, and SSL configuration.",
      comp1Title: "Custom WordPress & PHP",
      comp1Desc: "Theme and plugin development from scratch in PHP, WordPress hooks & filters, and custom REST API endpoints.",
      comp2Title: "Gutenberg & Admin UI",
      comp2Desc: "Custom Gutenberg blocks and patterns with ACF Pro. Intuitive editorial experience for content managers without risking broken layouts.",
      comp3Title: "Mobile-First & Frontend",
      comp3Desc: "Responsive semantic markup with a mobile-first focus (90%+). I prefer clean CSS3 and vanilla JS for peak performance and zero overhead, while working with SCSS, Tailwind CSS, and BEM whenever project requirements call for them.",
      comp4Title: "Deployment, Hosting & SEO",
      comp4Desc: "DNS and SSL management, VPS deployment (Linux/SSH), Docker containerization, technical SEO, and Schema.org structured data."
    },
    skills: {
      title: "Skills",
      groupWp: "WordPress & Backend",
      groupFrontend: "Frontend & Interfaces",
      groupTooling: "Tools & Deployment"
    },
    projects: {
      title: "Projects",
      tabsAria: "Project categories",
      filterWordpress: "WordPress (Themes & Plugins)",
      filterThemes: "WordPress Themes",
      filterPlugins: "WordPress Plugins",
      filterFrontend: "Frontend & Interfaces",
      visitBtn: "Live Demo",
      githubBtn: "GitHub",
      expandOpen: "Collapse",
      expandClosed: (count) => `Show all projects (${count} more)`,
      cards: {
        cyberpunkTheme: {
          badge: "Custom Theme",
          title: "Cyberpunk Promo Theme",
          desc: "Custom WordPress theme built from scratch in PHP without heavy page builders. Features real-time UI styling via WP Theme Customizer API, ACF Pro with Local JSON sync, and a 98+ Google PageSpeed score.",
          tech: "WordPress, PHP, ACF Pro, Customizer API, WebP"
        },
        sneakmaxTheme: {
          badge: "WooCommerce",
          title: "Sneakmax WooCommerce Theme",
          desc: "Full-featured custom e-commerce theme on pure WooCommerce. High-Performance Order Storage (HPOS) ready, dynamic AJAX product catalog with instant price filters, and modal quick view.",
          tech: "WordPress, WooCommerce, HPOS Ready, AJAX Catalog, PHP"
        },
        legalTheme: {
          badge: "Gutenberg Theme",
          title: "Legal Corporate Theme",
          desc: "Corporate theme powered by 6 native Gutenberg blocks (Block API). Features direct inline RichText editing on the page, Swiper testimonials slider, and automated Schema.org FAQPage JSON-LD markup.",
          tech: "WordPress, Block API, Gutenberg, JSON-LD Schema, PHP"
        },
        cookieNotice: {
          badge: "WordPress Plugin",
          title: "WP Cookie Notice",
          desc: "Lightweight GDPR cookie consent plugin. Admin options built with native WordPress Settings API, integrated wp-color-picker, Vanilla JS (~1.2 KB), and zero Cumulative Layout Shift.",
          tech: "Plugin API, PHP, Settings API, Vanilla JS, CSS3"
        },
        seoSentinel: {
          badge: "AI / GEO / SEO",
          title: "SEO Sentinel — AI Search & GEO Copilot",
          desc: "Multi-agent technical SEO & Generative Engine Optimization (GEO) platform. Evaluates AI search citation readiness (Perplexity, ChatGPT, Google AI Overviews), generates Schema.org JSON-LD, detects SERP content gaps, and bypasses Cloudflare WAF.",
          tech: "PHP 8.2, PSR-4, Agentic Coding, GEO, Schema.org, Tailwind CSS, Docker"
        },
        metaTags: {
          badge: "SEO Plugin",
          title: "Custom Meta Tags Manager",
          desc: "Technical SEO plugin for WordPress. Full control over indexing directives (noindex/follow), canonical tags, hreflang, OpenGraph, Twitter Cards, and valid JSON-LD schema via wp_head.",
          tech: "WordPress Plugin, PHP, SEO, OpenGraph, JSON-LD"
        },
        multigeo: {
          badge: "iGaming / MultiGEO",
          title: "MultiGEO & Satellite Engine",
          desc: "Multi-region localization and satellite management engine. Automated landing page replication across target GEOs, differentiated bot routing (Googlebot vs YandexBot), and secure REST API for PBN networks.",
          tech: "PHP, REST API, ACF Pro Sync, Hreflang, Bot Targeting"
        },
        cyberpunkFrontend: {
          badge: "Promo / Animations",
          title: "Cyberpunk Promo",
          desc: "Interactive promo landing page with a cyberpunk aesthetic: custom Swiper parallax sliders, sound effects, modal popups, and responsive BEM markup.",
          tech: "JavaScript (ES6+), SCSS, Swiper, Canvas, BEM"
        },
        sneakmaxFrontend: {
          badge: "E-Commerce / Quiz",
          title: "Sneakmax Sneaker Store",
          desc: "E-commerce store frontend: interactive sneaker sizing quiz, dynamic noUiSlider price filtering, modal quick view, and cart drawer.",
          tech: "JavaScript (ES6+), SCSS, Swiper, noUiSlider, BEM"
        },
        animation: {
          badge: "iGaming / Animations",
          title: "House of Gambling",
          desc: "iGaming & affiliate promo landing page featuring smooth CSS slot animations, an interactive revenue calculator, and multi-language support.",
          tech: "HTML5, CSS3 Animations, JavaScript (ES6+), Mobile-First"
        },
        spinpulse: {
          badge: "iGaming / Casino Lobby",
          title: "SpinPulse Gaming Lobby",
          desc: "High-performance online casino gaming lobby built with vanilla JavaScript (ES6+): official slot demo launcher (Pragmatic Play), progressive jackpot ticker, virtual wallet session, tournaments, and Web Audio effects.",
          tech: "JavaScript (ES6+), Web Audio API, HTML5 Canvas, BEM, Vite"
        },
        nova: {
          badge: "Fintech / UI",
          title: "NOVA Pay Fintech Landing",
          desc: "Modern fintech banking interface featuring dark theme styling, interactive payment card visualization, and smooth component micro-interactions.",
          tech: "JavaScript (ES6+), SCSS, Vite, Mobile-First"
        },
        security: {
          badge: "React & TypeScript",
          title: "Cybersecurity Operations Center",
          desc: "Network security and traffic monitoring dashboard built with React and TypeScript featuring interactive Recharts visualization, incident filtering, and real-time analytics.",
          tech: "React, TypeScript, Recharts, REST API, Vite"
        },
        edufree: {
          badge: "Tailwind CSS",
          title: "Edufree EdTech Landing",
          desc: "Responsive education platform landing page built with Tailwind CSS, featuring course filtering and Core Web Vitals optimization.",
          tech: "Tailwind CSS, HTML5, JavaScript (ES6+), Vite"
        },
        gamevault: {
          badge: "Gaming Community",
          title: "GameVault Portal",
          desc: "Video game catalog and community hub featuring dynamic release directory, server cards, and custom neon visual aesthetic.",
          tech: "JavaScript, SCSS, CSS Flexbox/Grid, BEM"
        },
        techwear: {
          badge: "E-Commerce UI",
          title: "Techwear Store",
          desc: "Urban techwear e-commerce concept featuring asymmetrical typography, category filters, and an interactive lookbook carousel.",
          tech: "React, TypeScript, Vite, Web Audio API"
        },
        cryptosticky: {
          badge: "Scroll Experience",
          title: "Crypto-sticky Platform",
          desc: "Crypto marketplace interface utilizing CSS sticky scroll sections, interactive exchange rate tables, and smooth reveal animations.",
          tech: "CSS Sticky, JavaScript, CSS3 Animations, BEM"
        },
        legalFrontend: {
          badge: "Corporate Website",
          title: "Legal Services",
          desc: "Corporate website for a legal practice: responsive semantic BEM markup, Swiper testimonials slider, accessible FAQ accordion, and contact modal forms.",
          tech: "JavaScript (ES6+), SCSS, Swiper, HTML5, BEM"
        },
        survive505: {
          badge: "Gaming / Promo",
          title: "Survive at all costs (505)",
          desc: "Promotional landing page for a PC survival game featuring real-time language switching (ENG/RU), interactive system requirements block, feature accordions, and fully responsive layout.",
          tech: "JavaScript (ES6+), SCSS, Multilingual, BEM, Responsive"
        },
        travel: {
          badge: "Travel / Booking",
          title: "2rism Travel Platform",
          desc: "Modern travel booking platform interface featuring smart destination search autocomplete (AutoComplete.js), custom dropdown selectors, and responsive tour grid.",
          tech: "JavaScript (ES6+), AutoComplete.js, CSS3 Flexbox, Custom Select, Mobile-First"
        }
      }
    },
    contacts: {
      title: "Contacts",
      subtitle: "Open to exciting collaboration opportunities, frontend projects, and commercial development.",
      nameLabel: "Name",
      nameValue: "Valeriya Cherniavskaya",
      telegramLabel: "Telegram",
      telegramAria: "Message on Telegram",
      githubLabel: "GitHub",
      githubAria: "GitHub profile",
      emailLabel: "Email",
      emailAria: "Send email",
      emailCopyAria: "Copy email to clipboard",
      copyEmailAria: "Copy email",
      copyTelegramAria: "Copy Telegram",
      phoneLabel: "Phone",
      phoneAria: "Call by phone",
      linkedinLabel: "LinkedIn",
      linkedinAria: "Open LinkedIn profile",
      resumeTitle: "CV",
      resumeDesc: "Open CV",
      resumeLink: "https://lelyaler.github.io/cv/",
      resumeAria: "Open CV online",
      copied: "Copied!"
    },
    footer: {
      copy: "© 2026 Valeriya Cherniavskaya. WordPress & Frontend Developer Portfolio."
    },
    ui: {
      scrollTop: "Back to top",
      langSwitchLabel: "Language selection",
      menuOpen: "Open menu",
      menuClose: "Close menu"
    }
  }
};
