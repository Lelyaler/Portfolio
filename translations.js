const translations = {
  ru: {
    meta: {
      title: "Валерия Чернявская — WordPress & Frontend Developer Portfolio",
      description: "Портфолио WordPress & Frontend-разработчика Валерии Чернявской. Кастомные темы и плагины на PHP, блоки Gutenberg, WooCommerce, Core Web Vitals и интерактивный фронтенд.",
      ogTitle: "Валерия Чернявская — WordPress & Frontend Developer Portfolio",
      ogDesc: "Портфолио WordPress & Frontend-разработчика. Разработка кастомных тем и плагинов на PHP, Gutenberg, WooCommerce, Core Web Vitals и интерактивные интерфейсы.",
      twitterTitle: "Валерия Чернявская — WordPress & Frontend Developer Portfolio",
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
      title: 'Привет, меня зовут Лера <span class="information__hand">👋</span>',
      subtitlePrefix: "Я —",
      roles: [
        "WordPress & PHP разработчик",
        "Gutenberg & Frontend специалист",
        "Оптимизация Core Web Vitals & SEO"
      ],
      projectsBtn: "Проекты",
      contactsBtn: "Контакты"
    },
    about: {
      title: "Обо мне",
      p1: "WordPress & Frontend Developer с 4 годами коммерческого опыта. Специализируюсь на создании кастомных тем и плагинов WordPress с нуля на PHP, блоках Gutenberg, интернет-магазинах на WooCommerce и оптимизации производительности под высокие нагрузки.",
      p2: "Последние 2 года работала в <strong>MaxBitSolution (iGaming, резидент ПВТ)</strong> в SEO-отделе. Разрабатывала кастомные темы на ООП PHP (WP_Query, хуки, фильтры, REST API), создавала кастомные блоки Gutenberg и плагины под бизнес-задачи. Ускоряла сайты по метрикам Core Web Vitals (LCP, FID, CLS в зелёной зоне Google), внедряла семантическую микроразметку Schema.org (JSON-LD) и оптимизировала индексацию страниц.",
      p3: "Параллельно разрабатываю клиентские проекты полного цикла: от промо-лендингов до интернет-магазинов на WooCommerce и их развёртывания на VPS/хостингах (Nginx, Docker). Фокусируюсь на чистой архитектуре шаблонов, Mobile-First вёрстке (90%+ мобильного трафика) и максимальной скорости загрузки.",
      comp1Title: "Кастомный WordPress & PHP",
      comp1Desc: "Разработка кастомных тем с нуля на ООП PHP, плагины, WP_Query, REST API, хуки, фильтры и интеграции сервисов.",
      comp2Title: "Gutenberg & React",
      comp2Desc: "Создание кастомных блоков и паттернов Gutenberg на React, ACF Pro, гибкая и удобная админка для контент-менеджеров.",
      comp3Title: "Mobile-First & Стили",
      comp3Desc: "Адаптивная семантическая вёрстка под 90%+ мобильного трафика по БЭМ, SCSS, Tailwind CSS, Vite, Webpack.",
      comp4Title: "Деплой, Хостинг & SEO",
      comp4Desc: "CI/CD (GitLab CI, GitHub Actions), деплой на VPS (Nginx, SSH), Docker, MySQL, Schema.org и техническое SEO."
    },
    skills: {
      title: "Навыки",
      groupWp: "WordPress & Backend",
      groupFrontend: "Frontend & Интерфейсы",
      groupTooling: "Инструменты & Деплой"
    },
    projects: {
      title: "Проекты",
      filterThemes: "Темы WordPress",
      filterPlugins: "Плагины WordPress",
      filterFrontend: "Фронтенд & Интерфейсы",
      visitBtn: "Live Demo",
      githubBtn: "GitHub",
      cards: {
        cyberpunkTheme: {
          badge: "Кастомная тема",
          title: "Cyberpunk Promo Theme",
          desc: "Кастомная тема WordPress с чистой архитектурой шаблонов на PHP без конструкторов (Elementor). Кастомайзер темы (WP Theme Customizer) для изменения цветов из админки, гибкие поля ACF Pro с автосинхронизацией Local JSON и 98+ PageSpeed.",
          tech: "WordPress 6.x, PHP 8+, ACF Pro, Customizer API, WebP"
        },
        sneakmaxTheme: {
          badge: "WooCommerce",
          title: "Sneakmax WooCommerce Theme",
          desc: "Полнофункциональная кастомная тема для WooCommerce на чистом PHP без Elementor. Поддержка High-Performance Order Storage (HPOS), динамический AJAX-каталог товаров с фильтрацией цен на лету и модальный просмотр.",
          tech: "WordPress 6.x, WooCommerce, HPOS Ready, AJAX Catalog, PHP 8+"
        },
        legalTheme: {
          badge: "Gutenberg Тема",
          title: "Legal Corporate Theme",
          desc: "Корпоративная тема на 6 нативных Gutenberg-блоках (Block API v3) с поддержкой прямого inline-редактирования RichText на странице, слайдерами отзывов Swiper и автоматической JSON-LD микроразметкой Schema.org.",
          tech: "WordPress 6.x, Block API v3, Gutenberg, JSON-LD Schema, PHP 8+"
        },
        cookieNotice: {
          badge: "Плагин WP",
          title: "WP Cookie Notice",
          desc: "Легковесный плагин предупреждения о куках (GDPR). Страница настроек на нативном WordPress Settings API, встроенный wp-color-picker, чистый Vanilla JS (~1.2 КБ) и нулевой сдвиг макета (CLS).",
          tech: "Plugin API, OOP PHP, Settings API, Vanilla JS, CSS3"
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
          tech: "OOP PHP, REST API, ACF Pro Sync, Hreflang, Bot Targeting"
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
          badge: "Canvas & WebGL",
          title: "SpinPulse Gaming UI",
          desc: "Интерактивный игровой интерфейс слот-машины на чистом HTML5 Canvas с реалистичной физикой барабанов, звуковым движком Web Audio API и адаптивным управлением.",
          tech: "HTML5 Canvas, Web Audio API, JavaScript, CSS3"
        },
        nova: {
          badge: "Fintech / UI",
          title: "NOVA Pay Fintech Landing",
          desc: "Современный посадочный интерфейс финтех-сервиса с тёмной темой, интерактивной визуализацией платёжных карт и микроанимациями UI-компонентов.",
          tech: "JavaScript (ES6+), SCSS, Vite, Mobile-First"
        },
        edufree: {
          badge: "Tailwind CSS",
          title: "Edufree EdTech Landing",
          desc: "Адаптивный лендинг образовательной платформы с гибкой сеткой Tailwind CSS, фильтрацией курсов и оптимизацией Core Web Vitals.",
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
          tech: "JavaScript (ES6+), SCSS, CSS Grid, Swiper"
        },
        cryptosticky: {
          badge: "Scroll Experience",
          title: "Crypto-sticky Platform",
          desc: "Интерфейс крипто-платформы с фиксацией секций при скролле (sticky scroll experience), интерактивными таблицами курсов и анимацией переходов.",
          tech: "CSS Sticky, JavaScript, CSS3 Animations, BEM"
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
      langSwitchLabel: "Выбор языка"
    }
  },
  en: {
    meta: {
      title: "Valeriya Cherniavskaya — WordPress & Frontend Developer Portfolio",
      description: "Portfolio of WordPress & Frontend Developer Valeriya Cherniavskaya. Custom PHP themes & plugins, Gutenberg blocks, WooCommerce, Core Web Vitals, and interactive frontend.",
      ogTitle: "Valeriya Cherniavskaya — WordPress & Frontend Developer Portfolio",
      ogDesc: "Portfolio of WordPress & Frontend Developer. Custom PHP themes & plugins, Gutenberg, WooCommerce, Core Web Vitals, and interactive UI engineering.",
      twitterTitle: "Valeriya Cherniavskaya — WordPress & Frontend Developer Portfolio",
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
      title: 'Hi, I\'m Lera <span class="information__hand">👋</span>',
      subtitlePrefix: "I am a",
      roles: [
        "WordPress & PHP Developer",
        "Gutenberg & Frontend Engineer",
        "Core Web Vitals & SEO Optimization"
      ],
      projectsBtn: "Projects",
      contactsBtn: "Contacts"
    },
    about: {
      title: "About Me",
      p1: "WordPress & Frontend Developer with 4 years of commercial experience. Specialized in custom WordPress themes and OOP PHP plugins from scratch, custom Gutenberg blocks, WooCommerce e-commerce stores, and high-load web performance optimization.",
      p2: "For the past 2 years, worked at <strong>MaxBitSolution (iGaming, HTP resident)</strong> in the SEO engineering department. Developed custom themes on OOP PHP (WP_Query, hooks, filters, REST API), created custom Gutenberg blocks, and built custom plugins tailored to business workflows. Optimized sites for Core Web Vitals (Google green-zone LCP, FID, CLS), implemented Schema.org JSON-LD structured data, and improved search engine indexing.",
      p3: "Concurrently delivered end-to-end client projects: from high-converting promo landing pages to WooCommerce stores deployed on VPS environments (Nginx, Docker). Focused on clean template architecture, Mobile-First responsive markup (90%+ mobile traffic), and blazing-fast loading speeds.",
      comp1Title: "Custom WordPress & PHP",
      comp1Desc: "Custom themes from scratch on OOP PHP, custom plugins, WP_Query, REST API, hooks, filters, and third-party integrations.",
      comp2Title: "Gutenberg & React",
      comp2Desc: "Custom Gutenberg blocks and patterns with React, ACF Pro, intuitive admin workflows for content management teams.",
      comp3Title: "Mobile-First & Styling",
      comp3Desc: "Responsive semantic layout optimized for 90%+ mobile traffic with BEM, SCSS, Tailwind CSS, Vite, and Webpack.",
      comp4Title: "Deployment, Hosting & SEO",
      comp4Desc: "CI/CD (GitLab CI, GitHub Actions), VPS hosting deployment (Nginx, SSH), Docker, MySQL, Schema.org, and technical SEO."
    },
    skills: {
      title: "Skills",
      groupWp: "WordPress & Backend",
      groupFrontend: "Frontend & UI Engineering",
      groupTooling: "DevOps & Tooling"
    },
    projects: {
      title: "Projects",
      filterThemes: "WordPress Themes",
      filterPlugins: "WordPress Plugins",
      filterFrontend: "Frontend & Interfaces",
      visitBtn: "Live Demo",
      githubBtn: "GitHub",
      cards: {
        cyberpunkTheme: {
          badge: "Custom Theme",
          title: "Cyberpunk Promo Theme",
          desc: "Custom WordPress theme built with pure PHP template hierarchy (zero heavy builders). Real-time UI styling via WP Theme Customizer API, ACF Pro with Local JSON synchronization, and 98+ Google PageSpeed score.",
          tech: "WordPress 6.x, PHP 8+, ACF Pro, Customizer API, WebP"
        },
        sneakmaxTheme: {
          badge: "WooCommerce",
          title: "Sneakmax WooCommerce Theme",
          desc: "Full-featured custom e-commerce theme on pure WooCommerce. High-Performance Order Storage (HPOS) ready, dynamic AJAX product catalog with instant price filters, and modal quick view.",
          tech: "WordPress 6.x, WooCommerce, HPOS Ready, AJAX Catalog, PHP 8+"
        },
        legalTheme: {
          badge: "Gutenberg Theme",
          title: "Legal Corporate Theme",
          desc: "Corporate theme powered by 6 native Gutenberg blocks (Block API v3). Features direct inline RichText editing on the page, Swiper testimonials slider, and automated Schema.org FAQPage JSON-LD markup.",
          tech: "WordPress 6.x, Block API v3, Gutenberg, JSON-LD Schema, PHP 8+"
        },
        cookieNotice: {
          badge: "WordPress Plugin",
          title: "WP Cookie Notice",
          desc: "Lightweight GDPR cookie consent plugin. Admin options built with native WordPress Settings API, integrated wp-color-picker, Vanilla JS (~1.2 KB), and zero Cumulative Layout Shift.",
          tech: "Plugin API, OOP PHP, Settings API, Vanilla JS, CSS3"
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
          tech: "OOP PHP, REST API, ACF Pro Sync, Hreflang, Bot Targeting"
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
          badge: "Canvas & WebGL",
          title: "SpinPulse Gaming UI",
          desc: "Interactive casino slot machine interface built on pure HTML5 Canvas with realistic reel physics, Web Audio API sound effects, and responsive layout.",
          tech: "HTML5 Canvas, Web Audio API, JavaScript, CSS3"
        },
        nova: {
          badge: "Fintech / UI",
          title: "NOVA Pay Fintech Landing",
          desc: "Modern fintech banking interface featuring dark theme styling, interactive payment card visualization, and smooth component micro-interactions.",
          tech: "JavaScript (ES6+), SCSS, Vite, Mobile-First"
        },
        edufree: {
          badge: "Tailwind CSS",
          title: "Edufree EdTech Landing",
          desc: "Responsive education platform landing page featuring flexible Tailwind CSS grid, course filtering, and Core Web Vitals optimization.",
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
          tech: "JavaScript (ES6+), SCSS, CSS Grid, Swiper"
        },
        cryptosticky: {
          badge: "Scroll Experience",
          title: "Crypto-sticky Platform",
          desc: "Crypto marketplace interface utilizing CSS sticky scroll sections, interactive exchange rate tables, and smooth reveal animations.",
          tech: "CSS Sticky, JavaScript, CSS3 Animations, BEM"
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
      langSwitchLabel: "Language selection"
    }
  }
};
