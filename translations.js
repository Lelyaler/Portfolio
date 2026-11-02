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
      wordpress: "WordPress",
      contacts: "Контакты",
      resume: "Резюме"
    },
    hero: {
      title: 'Привет, меня зовут Лера <span class="information__hand">👋</span>',
      subtitlePrefix: "Я —",
      roles: [
        "WordPress & PHP разработчик",
        "Gutenberg & Frontend специалист",
        "Core Web Vitals & SEO эксперт"
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
      title: "Навыки"
    },
    projects: {
      title: "Проекты",
      visitBtn: "Посетить сайт",
      githubBtn: "GitHub",
      expandOpen: "Свернуть архив проектов",
      expandClosed: (count) => `Показать все проекты (ещё ${count})`,
      cards: {
        cyberpunk: {
          desc: "Кастомная тема WordPress с чистой структурой шаблонов на PHP (WP_Query, хуки, ACF Pro), слайдерами Swiper, кастомайзером темы и экосистемой авторских плагинов.",
          tech: "WordPress, PHP, ACF Pro, SCSS, JavaScript (ES6+), Swiper",
          visitAria: "Посетить сайт проекта Cyberpunk Promo",
          githubAria: "Исходный код темы WordPress для Cyberpunk Promo на GitHub"
        },
        animation: {
          desc: "Промо-лендинг для iGaming и партнёрских программ с плавной CSS-анимацией слота, интерактивным калькулятором дохода и мультиязычностью.",
          tech: "HTML5, CSS3 Animations, JavaScript (ES6+), Mobile-First",
          visitAria: "Посетить сайт проекта House of Gambling",
          githubAria: "Исходный код проекта House of Gambling на GitHub"
        },
        sneakmax: {
          desc: "Интернет-магазин кроссовок с интерактивным квизом подбора обуви, AJAX-каталогом, корзиной и интеграцией в кастомную WooCommerce-тему (HPOS, заказ в 1 клик).",
          tech: "WooCommerce, PHP 8+, JavaScript (ES6+), Swiper, noUiSlider",
          visitAria: "Посетить сайт проекта Sneakmax Sneaker Store",
          githubAria: "Исходный код проекта Sneakmax Sneaker Store на GitHub"
        },
        spinpulse: {
          desc: "Интерактивное игровое лобби на HTML5 Canvas с Web Audio API и анимацией барабанов — демонстрация сложной frontend-логики в iGaming.",
          tech: "JavaScript (ES6+), HTML5 Canvas, Web Audio API, SCSS, Vite",
          visitAria: "Посетить сайт проекта SpinPulse",
          githubAria: "Исходный код проекта SpinPulse на GitHub"
        },
        nova: {
          desc: "Интерфейс финтех-сервиса с 3D-каруселью банковских карт на GSAP, звуковой имитацией оплаты и кастомизацией дизайна карты.",
          tech: "JavaScript (ES6+), GSAP, CSS 3D, Web Audio API, Vite",
          visitAria: "Посетить сайт проекта NOVA Pay",
          githubAria: "Исходный код проекта NOVA Pay на GitHub"
        },
        security: {
          desc: "Панель мониторинга сетевого трафика и безопасности на React и TypeScript с графиками Recharts, фильтрацией инцидентов и экспортом данных.",
          tech: "React, TypeScript, Recharts, REST API, Vite",
          visitAria: "Посетить сайт проекта Cybersecurity Operations Center",
          githubAria: "Исходный код проекта Cybersecurity Operations Center на GitHub"
        },
        techwear: {
          desc: "Концептуальный интернет-магазин одежды на React и TypeScript с анимированным радаром на Canvas, корзиной и адаптивным каталогом.",
          tech: "React, TypeScript, HTML5 Canvas, Tailwind CSS, Vite",
          visitAria: "Посетить сайт проекта Techwear Store",
          githubAria: "Исходный код проекта Techwear Store на GitHub"
        },
        gamevault: {
          desc: "Каталог видеоигр и трекер бэклога в стиле консольного интерфейса с фильтрацией по жанрам, поиском и поддержкой геймпада.",
          tech: "React, TypeScript, Tailwind CSS, Gamepad API, Vite",
          visitAria: "Посетить сайт проекта GameVault",
          githubAria: "Исходный код проекта GameVault на GitHub"
        },
        edufree: {
          desc: "Адаптивный лендинг образовательной платформы на Tailwind CSS с каталогом курсов, быстрым поиском и модальными окнами программ.",
          tech: "HTML5, Tailwind CSS, JavaScript (ES6+), Mobile-First",
          visitAria: "Посетить сайт проекта Edufree EdTech Landing",
          githubAria: "Исходный код проекта Edufree EdTech Landing на GitHub"
        },
        crypto: {
          desc: "Лендинг маркетплейса цифровых стикеров с таймером обратного отсчёта аукциона, каруселью новинок и плавными анимациями появления.",
          tech: "HTML5, CSS3, JavaScript (ES6+), Swiper, БЭМ",
          visitAria: "Посетить сайт проекта Crypto-sticky",
          githubAria: "Исходный код проекта Crypto-sticky на GitHub"
        },
        legal: {
          desc: "Корпоративный сайт юридической компании по макету из Figma с динамическими счётчиками статистики, слайдером отзывов и формой заявки.",
          tech: "HTML5, CSS3, JavaScript (ES6+), Swiper, БЭМ",
          visitAria: "Посетить сайт проекта Legal Services",
          githubAria: "Исходный код проекта Legal Services на GitHub"
        }
      }
    },
    wpSection: {
      badge: "WordPress Architecture",
      title: "WordPress & PHP Решения",
      subtitle: "Кастомные темы без конструкторов, авторские плагины на ООП PHP и разработка расширений для экосистемы WordPress.",
      themeBadge: "Кастомная тема",
      pluginBadge: "Кастомный плагин",
      seoBadge: "SEO-плагин",
      wooBadge: "WooCommerce",
      cards: {
        theme: {
          title: "Cyberpunk Promo Theme",
          desc: "Кастомная тема WordPress с чистой архитектурой шаблонов на PHP без конструкторов (Elementor). Кастомайзер темы (WP Theme Customizer) для изменения цветов из админки, гибкие поля ACF Pro с автосинхронизацией (Local JSON) и Google PageSpeed 98/100.",
          tech: "WordPress 6.x, PHP 8+, ACF Pro, Customizer API, WebP",
          visitBtn: "Live Demo",
          githubBtn: "GitHub"
        },
        sneakmaxTheme: {
          badge: "WooCommerce Тема",
          title: "Sneakmax WooCommerce Theme",
          desc: "Полнофункциональная кастомная тема интернет-магазина оригинальных кроссовок на WooCommerce без сторонних конструкторов. Динамический AJAX-каталог с фильтрами по цене и полу, быстрый просмотр в модальном окне, интерактивный квиз подбора обуви и поддержка архитектуры HPOS.",
          tech: "WordPress 6.x, WooCommerce, HPOS, PHP 8+, AJAX Catalog",
          visitBtn: "Live Demo",
          githubBtn: "GitHub"
        },
        cookieNotice: {
          title: "WP Cookie Notice",
          desc: "Легковесный плагин WordPress для отображения уведомления о cookie (GDPR). Управление через нативный Settings API, колорпикер wp-color-picker, чистый Vanilla JS без jQuery (~1.2 KB) и нулевой Layout Shift (CLS).",
          tech: "Plugin API, OOP PHP, Settings API, Vanilla JS, CSS3",
          githubBtn: "GitHub"
        },
        metaTags: {
          title: "Custom Meta Tags Manager",
          desc: "Универсальный плагин WordPress для управления мета-тегами сайта. Гибкая настройка title, description, поисковой индексации (noindex, follow), canonical, hreflang, OpenGraph и микроразметки JSON-LD через собственную страницу в меню админки и хук wp_head.",
          tech: "WordPress Plugin API, PHP, SEO, Admin Menu, OpenGraph",
          githubBtn: "GitHub"
        },
        multigeo: {
          title: "MultiGEO & Satellite Engine",
          desc: "Модуль локализации и управления сателлитами. Автоматическое клонирование посадочных страниц и полей ACF Pro под любые ГЕО, дифференцированная каноникализация (Googlebot vs YandexBot) и защищённый REST API для PBN-сеток.",
          tech: "OOP PHP, REST API, ACF Pro Sync, Hreflang, Bot Targeting",
          githubBtn: "GitHub"
        },
        wooCheckout: {
          title: "Fast Checkout & Slide Cart",
          desc: "Коммерческий модуль WooCommerce. Интерактивная выезжающая корзина (Slide Cart Drawer) с живым пересчетом количества без перезагрузки (Cart Fragments), прогресс-бар бесплатной доставки и оформление заказа в 1 клик с поддержкой HPOS.",
          tech: "WooCommerce, HPOS Ready, Cart Fragments, 1-Click Order, REST API",
          githubBtn: "GitHub"
        }
      }
    },
    contacts: {
      title: "Контакты",
      subtitle: "Открыта к предложениям по разработке на WordPress & PHP, созданию кастомных тем и плагинов, вёрстке и коммерческому фронтенду.",
      nameLabel: "Имя",
      nameValue: "Валерия Чернявская",
      emailLabel: "Почта",
      emailAria: "Написать на электронную почту",
      copyEmailAria: "Скопировать email",
      telegramLabel: "Телеграм",
      telegramAria: "Связаться в Telegram",
      copyTelegramAria: "Скопировать Telegram",
      phoneLabel: "Телефон",
      phoneAria: "Позвонить по телефону",
      linkedinLabel: "LinkedIn",
      linkedinAria: "Открыть профиль LinkedIn",
      resumeTitle: "Резюме",
      resumeDesc: "Открыть резюме",
      resumeLink: "https://lelyaler.github.io/anketa/",
      resumeAria: "Открыть резюме онлайн",
      copied: "Скопировано!"
    },
    footer: {
      copy: "© 2026 Валерия Чернявская. WordPress & Frontend Developer Portfolio.",
      resume: "Резюме"
    },
    ui: {
      scrollTop: "Наверх",
      langSwitchLabel: "Выбор языка"
    }
  },
  en: {
    meta: {
      title: "Valeriya Cherniavskaya — WordPress & Frontend Developer Portfolio",
      description: "WordPress & Frontend Developer Portfolio of Valeriya Cherniavskaya. Custom WordPress themes & plugins in PHP, Gutenberg blocks, WooCommerce, Core Web Vitals, and technical SEO.",
      ogTitle: "Valeriya Cherniavskaya — WordPress & Frontend Developer Portfolio",
      ogDesc: "WordPress & Frontend Developer Portfolio. Custom WordPress themes & plugins in PHP, Gutenberg, WooCommerce, Core Web Vitals, and interactive interfaces.",
      twitterTitle: "Valeriya Cherniavskaya — WordPress & Frontend Developer Portfolio",
      twitterDesc: "WordPress & Frontend Developer Portfolio. Custom WordPress themes & plugins in PHP, Gutenberg, WooCommerce, Core Web Vitals, and interactive interfaces."
    },
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      wordpress: "WordPress",
      contacts: "Contacts",
      resume: "CV"
    },
    hero: {
      title: 'Hi, I\'m Valeria <span class="information__hand">👋</span>',
      subtitlePrefix: "I'm a",
      roles: [
        "WordPress & PHP Developer",
        "Gutenberg & Frontend Specialist",
        "Core Web Vitals & Technical SEO"
      ],
      projectsBtn: "Projects",
      contactsBtn: "Contact Me"
    },
    about: {
      title: "About Me",
      p1: "WordPress & Frontend Developer with 4 years of commercial experience. Specializing in custom WordPress themes and plugins built from scratch in PHP, custom Gutenberg blocks, WooCommerce online stores, and high-load web performance optimization.",
      p2: "For the past 2 years, worked at <strong>MaxBitSolution (iGaming, HTP resident)</strong> in the SEO department. Developed custom themes with clean OOP PHP architectures (WP_Query, hooks, filters, REST API), built custom Gutenberg blocks, and developed tailored plugins. Optimized Core Web Vitals (LCP, FID, CLS consistently green in Google PageSpeed), implemented Schema.org (JSON-LD) rich snippets, and resolved technical search indexing issues.",
      p3: "Alongside this, delivering full-cycle client projects: from promo landing pages to WooCommerce stores and VPS/hosting deployments (Nginx, Docker). Focused on clean template architectures, Mobile-First responsive layouts (90%+ mobile traffic), and maximum loading speed.",
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
      title: "Skills"
    },
    projects: {
      title: "Projects",
      visitBtn: "Live Demo",
      githubBtn: "GitHub",
      expandOpen: "Collapse project archive",
      expandClosed: (count) => `Show all projects (${count} more)`,
      cards: {
        cyberpunk: {
          desc: "Custom WordPress theme with clean PHP template architecture (WP_Query, hooks, ACF Pro), Swiper sliders, Theme Customizer, and custom companion plugins.",
          tech: "WordPress, PHP, ACF Pro, SCSS, JavaScript (ES6+), Swiper",
          visitAria: "Visit Cyberpunk Promo website",
          githubAria: "Source code of Cyberpunk WordPress theme on GitHub"
        },
        animation: {
          desc: "iGaming & affiliate promo landing page featuring smooth CSS slot animations, an interactive revenue calculator, and multi-language support.",
          tech: "HTML5, CSS3 Animations, JavaScript (ES6+), Mobile-First",
          visitAria: "Visit House of Gambling website",
          githubAria: "Source code of House of Gambling on GitHub"
        },
        sneakmax: {
          desc: "Sneaker e-commerce store with an interactive sizing quiz, AJAX catalog, cart, and integration into a custom WooCommerce theme (HPOS, 1-click checkout).",
          tech: "WooCommerce, PHP 8+, JavaScript (ES6+), Swiper, noUiSlider",
          visitAria: "Visit Sneakmax Sneaker Store website",
          githubAria: "Source code of Sneakmax Sneaker Store on GitHub"
        },
        spinpulse: {
          desc: "Interactive gaming lobby featuring Canvas animations, sound effects via Web Audio API, and local state persistence in iGaming.",
          tech: "JavaScript (ES6+), HTML5 Canvas, Web Audio API, SCSS, Vite",
          visitAria: "Visit SpinPulse project website",
          githubAria: "Source code of SpinPulse on GitHub"
        },
        nova: {
          desc: "Fintech landing concept with a 3D bank card carousel on GSAP, payment sound feedback, and interactive card customization.",
          tech: "JavaScript (ES6+), GSAP, CSS 3D, Web Audio API, Vite",
          visitAria: "Visit NOVA Pay project website",
          githubAria: "Source code of NOVA Pay on GitHub"
        },
        security: {
          desc: "Network traffic and security monitoring dashboard in React and TypeScript with Recharts graphs, incident filters, and report exports.",
          tech: "React, TypeScript, Recharts, REST API, Vite",
          visitAria: "Visit Traffic & API Analytics Dashboard website",
          githubAria: "Source code of Traffic & API Analytics Dashboard on GitHub"
        },
        techwear: {
          desc: "Conceptual apparel store in React and TypeScript featuring an animated Canvas radar, shopping cart, and responsive catalog.",
          tech: "React, TypeScript, HTML5 Canvas, Tailwind CSS, Vite",
          visitAria: "Visit Techwear Store website",
          githubAria: "Source code of Techwear Store on GitHub"
        },
        gamevault: {
          desc: "Video game catalog and backlog tracker inspired by console UI with genre filters, search, and gamepad controller support.",
          tech: "React, TypeScript, Tailwind CSS, Gamepad API, Vite",
          visitAria: "Visit GameVault project website",
          githubAria: "Source code of GameVault on GitHub"
        },
        edufree: {
          desc: "Responsive online academy landing page built with Tailwind CSS featuring course catalog, instant search, and program modals.",
          tech: "HTML5, Tailwind CSS, JavaScript (ES6+), Mobile-First",
          visitAria: "Visit Edufree EdTech Landing website",
          githubAria: "Source code of Edufree EdTech Landing on GitHub"
        },
        crypto: {
          desc: "Digital sticker marketplace landing page with an auction countdown timer, release carousel, and smooth scroll animations.",
          tech: "HTML5, CSS3, JavaScript (ES6+), Swiper, BEM",
          visitAria: "Visit Crypto-sticky website",
          githubAria: "Source code of Crypto-sticky on GitHub"
        },
        legal: {
          desc: "Corporate law firm website built from Figma with animated statistics counters, client testimonial slider, and consultation form.",
          tech: "HTML5, CSS3, JavaScript (ES6+), Swiper, BEM",
          visitAria: "Visit Legal Services website",
          githubAria: "Source code of Legal Services on GitHub"
        }
      }
    },
    wpSection: {
      badge: "WordPress Architecture",
      title: "WordPress & PHP Solutions",
      subtitle: "Custom themes without page builders, companion OOP PHP plugins, and extensions for the WordPress ecosystem.",
      themeBadge: "Custom Theme",
      pluginBadge: "Custom Plugin",
      seoBadge: "SEO Plugin",
      wooBadge: "WooCommerce",
      cards: {
        theme: {
          title: "Cyberpunk Promo Theme",
          desc: "Custom WordPress theme built from scratch with pure PHP (zero heavy page builders). Template hierarchy (WP_Query, hooks), Theme Customizer API for live UI color control, ACF Pro with Local JSON sync, and 98/100 Google PageSpeed score.",
          tech: "WordPress 6.x, PHP 8+, ACF Pro, Customizer API, WebP",
          visitBtn: "Live Demo",
          githubBtn: "GitHub"
        },
        sneakmaxTheme: {
          badge: "WooCommerce Theme",
          title: "Sneakmax WooCommerce Theme",
          desc: "Full-featured custom sneaker e-commerce theme for WooCommerce built without page builders. Dynamic AJAX catalog with price & attribute filters, modal quick view, interactive sizing quiz, and full WooCommerce HPOS architecture support.",
          tech: "WordPress 6.x, WooCommerce, HPOS, PHP 8+, AJAX Catalog",
          visitBtn: "Live Demo",
          githubBtn: "GitHub"
        },
        cookieNotice: {
          title: "WP Cookie Notice",
          desc: "Lightweight WordPress plugin for GDPR cookie notice compliance. Admin panel powered by native WordPress Settings API, built-in wp-color-picker, zero jQuery (~1.2 KB Vanilla JS), and zero Cumulative Layout Shift.",
          tech: "Plugin API, OOP PHP, Settings API, Vanilla JS, CSS3",
          githubBtn: "GitHub"
        },
        metaTags: {
          title: "Custom Meta Tags Manager",
          desc: "Universal WordPress plugin for technical SEO, OpenGraph, Twitter Cards, search indexing directives, canonical URLs, and JSON-LD structured data management with dedicated admin panel.",
          tech: "WordPress Plugin API, PHP, SEO, Admin Menu, OpenGraph",
          githubBtn: "GitHub"
        },
        multigeo: {
          title: "MultiGEO & Satellite Engine",
          desc: "Satellite management and multi-GEO localization engine. Automated landing page and ACF Pro field replication for targeted regions, differentiated canonical routing (Googlebot vs YandexBot), and secure REST API for PBN networks.",
          tech: "OOP PHP, REST API, ACF Pro Sync, Hreflang, Bot Targeting",
          githubBtn: "GitHub"
        },
        wooCheckout: {
          title: "Fast Checkout & Slide Cart",
          desc: "Commercial WooCommerce extension. Interactive slide-out cart drawer with live quantity recalculation (Cart Fragments), free shipping dynamic progress bar, and instant 1-click checkout with HPOS compatibility.",
          tech: "WooCommerce, HPOS Ready, Cart Fragments, 1-Click Order, REST API",
          githubBtn: "GitHub"
        }
      }
    },
    contacts: {
      title: "Contacts",
      subtitle: "Open to opportunities in WordPress & PHP development, custom theme & plugin creation, responsive layout, and commercial frontend.",
      nameLabel: "Name",
      nameValue: "Valeriya Cherniavskaya",
      emailLabel: "Email",
      emailAria: "Send email",
      copyEmailAria: "Copy email",
      telegramLabel: "Telegram",
      telegramAria: "Contact via Telegram",
      copyTelegramAria: "Copy Telegram handle",
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
      copy: "© 2026 Valeriya Cherniavskaya. WordPress & Frontend Developer Portfolio.",
      resume: "CV"
    },
    ui: {
      scrollTop: "Back to top",
      langSwitchLabel: "Language selection"
    }
  }
};

if (typeof window !== 'undefined') {
  window.translations = translations;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { translations };
}
