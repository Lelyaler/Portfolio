const translations = {
  ru: {
    meta: {
      title: "Валерия Чернявская — Frontend Developer Portfolio",
      description: "Портфолио Frontend-разработчика Валерии Чернявской. Разработка интерактивных веб-приложений, интеграции на WordPress, PHP, анимации и веб-производительность.",
      ogTitle: "Валерия Чернявская — Frontend Developer Portfolio",
      ogDesc: "Портфолио Frontend-разработчика. Разработка интерактивных веб-приложений, интеграции на WordPress, PHP и анимации.",
      twitterTitle: "Валерия Чернявская — Frontend Developer Portfolio",
      twitterDesc: "Портфолио Frontend-разработчика. Разработка интерактивных веб-приложений, интеграции на WordPress, PHP и анимации."
    },
    nav: {
      about: "Обо мне",
      skills: "Навыки",
      projects: "Проекты",
      contacts: "Контакты",
      anketa: "Анкета",
      cv: "CV"
    },
    hero: {
      title: 'Привет, меня зовут Лера <span class="information__hand">👋</span>',
      subtitlePrefix: "Я —",
      projectsBtn: "Список работ",
      contactsBtn: "Контакты",
      imageAlt: "Валерия Чернявская"
    },
    about: {
      title: "Обо мне",
      p1: "WordPress / Frontend Developer с 3+ годами коммерческого опыта в веб-разработке. Создаю быстрые, интерактивные и адаптивные веб-интерфейсы.",
      p2: "Работала в <strong>MaxBitSolution (iGaming, резидент ПВТ)</strong>: разрабатывала и кастомизировала темы и плагины WordPress. Писала кастомные темы на объектно-ориентированном PHP (WP_Query, $wpdb) с разделением логики, данных и шаблонов. Создавала кастомные Gutenberg-блоки, интегрировала REST API и PHP-хуки. Устраняла баги и разбиралась в чужом коде: находила причины ошибок, рефакторила и переписывала проблемные участки, улучшая читаемость и поддерживаемость. Системно оптимизировала производительность: Core Web Vitals 90+, семантическая разметка Schema.org (JSON-LD) и SEO-метатеги.",
      p3: "На фрилансе разрабатываю проекты «под ключ» для малого и среднего бизнеса: от кастомных тем до интернет-магазинов на WooCommerce. Создаю чистый поддерживаемый код с акцентом на безопасность (валидация, экранирование, защита от XSS и SQL-инъекций) и максимальную скорость загрузки.",
      comp1Title: "WordPress / PHP",
      comp1Desc: "Разработка тем с нуля на ООП PHP, кастомные блоки Gutenberg, плагины, WP_Query, $wpdb, Rewrite API, WooCommerce, платёжные API, интеграции по REST API.",
      comp2Title: "Frontend & Интерактив",
      comp2Desc: "JavaScript (ES6+), React (хуки, роутинг, REST API), TypeScript, семантическая вёрстка по БЭМ, анимации (GSAP, CSS 3D), Pixel Perfect и Mobile First.",
      comp3Title: "Инструменты & DevOps",
      comp3Desc: "Docker, GitLab CI, Vite, Webpack, Git, оптимизация Core Web Vitals и веб-доступность.",
      expandOpen: "Свернуть",
      expandClosed: "Читать полностью"
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
        spinpulse: {
          desc: "Высокопроизводительное лобби на чистом ES6+ без оверхеда фреймворков. Модульная архитектура по БЭМ, нативные Web APIs (Audio, Canvas, LocalStorage) и бандл всего 24 КБ gzip.",
          tech: "JavaScript (ES6+), Web Audio API, Canvas, HTML5/CSS3 (БЭМ), LocalStorage, Vite",
          visitAria: "Посетить сайт проекта SpinPulse",
          githubAria: "Исходный код проекта SpinPulse на GitHub"
        },
        nova: {
          desc: "Финтех-сервис с плавной интерактивной 3D-анимацией на GSAP, современным адаптивным интерфейсом и высокой производительностью.",
          tech: "JavaScript (ES6+), GSAP, CSS 3D, HTML5 Canvas, Vite",
          visitAria: "Посетить сайт проекта NOVA Pay",
          githubAria: "Исходный код проекта NOVA Pay на GitHub"
        },
        cyberpunk: {
          desc: "Атмосферный промо-лендинг в стиле Cyberpunk с динамическими слайдерами Swiper и интеграцией в кастомную тему WordPress (PHP).",
          tech: "WordPress, PHP, SCSS, JavaScript (ES6+), Swiper, БЭМ",
          visitAria: "Посетить сайт проекта Cyberpunk Promo",
          githubAria: "Исходный код темы WordPress для Cyberpunk Promo на GitHub"
        },
        security: {
          desc: "Аналитический дашборд кибербезопасности на React 19 и TypeScript с визуализацией сетевых метрик и инцидентов через Recharts.",
          tech: "React 19, TypeScript, Recharts, Lucide, Vite",
          visitAria: "Посетить сайт проекта Cybersecurity Operations Center",
          githubAria: "Исходный код проекта Cybersecurity Operations Center на GitHub"
        },
        gamevault: {
          desc: "Витрина и бэклог-трекер видеоигр в стилистике PS5 на React 19 и TypeScript со строгой типизацией, Gamepad API и Tailwind CSS.",
          tech: "React 19, TypeScript, Tailwind CSS, Gamepad API, Vitest",
          visitAria: "Посетить сайт проекта GameVault",
          githubAria: "Исходный код проекта GameVault на GitHub"
        },
        techwear: {
          desc: "Концептуальный e-commerce магазин на React 19 и TypeScript: радар логистики на Canvas, процедурный Web Audio синтезатор и PWA.",
          tech: "React 19, TypeScript, HTML5 Canvas, Web Audio API, PWA, Vite",
          visitAria: "Посетить сайт проекта Techwear Store",
          githubAria: "Исходный код проекта Techwear Store на GitHub"
        },
        edufree: {
          desc: "Адаптивный Mobile-First лендинг образовательной платформы: живой поиск курсов, корзина на LocalStorage, модальные окна Dialog и Tailwind CSS.",
          tech: "HTML5, Tailwind CSS, JavaScript (ES6+), HTML5 Dialog, Mobile-First",
          visitAria: "Посетить сайт проекта Edufree EdTech Landing",
          githubAria: "Исходный код проекта Edufree EdTech Landing на GitHub"
        },
        sneakmax: {
          desc: "Интернет-магазин кроссовок: каталог оригинальных моделей, гибкая фильтрация по параметрам, интерактивный квиз, корзина и оптимизация 100/100.",
          tech: "HTML5, CSS3, JavaScript (ES6+), БЭМ, Swiper, noUiSlider",
          visitAria: "Посетить сайт проекта Sneakmax Sneaker Store",
          githubAria: "Исходный код проекта Sneakmax Sneaker Store на GitHub"
        },
        crypto: {
          desc: "Промо-лендинг маркетплейса криптостикеров: аукционы со ставками в ETH, слайдер новинок на Swiper и каскадные scroll-анимации.",
          tech: "HTML5, CSS3, JavaScript (ES6+), БЭМ, Swiper, IntersectionObserver",
          visitAria: "Посетить сайт проекта Crypto-sticky",
          githubAria: "Исходный код проекта Crypto-sticky на GitHub"
        },
        legal: {
          desc: "Корпоративный сайт юридической компании со строгой типографикой, отзывами клиентов и формами обратной связи.",
          tech: "HTML5, CSS3, JavaScript (ES6+), БЭМ, Swiper",
          visitAria: "Посетить сайт проекта Legal Services",
          githubAria: "Исходный код проекта Legal Services на GitHub"
        },
        animation: {
          desc: "Интерактивная галерея веб-анимаций на чистом CSS и JavaScript для демонстрации визуальных возможностей и микроинтеракций.",
          tech: "HTML5, CSS3 3D Animation, JavaScript (ES6+)",
          visitAria: "Посетить сайт проекта Creative Animation Showcase",
          githubAria: "Исходный код проекта Creative Animation Showcase на GitHub"
        }
      }
    },
    contacts: {
      title: "Контакты",
      subtitle: "Открыта к интересным предложениям о сотрудничестве, фронтенд-проектам и коммерческой разработке.",
      nameLabel: "Имя",
      nameValue: "Валерия Чернявская",
      emailLabel: "Почта",
      emailAria: "Написать на электронную почту",
      telegramLabel: "Телеграм",
      telegramAria: "Связаться в Telegram",
      phoneLabel: "Телефон",
      phoneAria: "Позвонить по телефону",
      instagramLabel: "Instagram",
      instagramAria: "Открыть профиль Instagram"
    },
    footer: {
      copy: "© 2026 Валерия Чернявская. Frontend Developer Portfolio."
    },
    ui: {
      scrollTop: "Наверх",
      langSwitchLabel: "Выбор языка"
    }
  },
  en: {
    meta: {
      title: "Valeriya Cherniavskaya — Frontend Developer Portfolio",
      description: "Frontend Developer Portfolio of Valeriya Cherniavskaya. Building interactive web applications, WordPress & PHP integrations, animations, and high web performance.",
      ogTitle: "Valeriya Cherniavskaya — Frontend Developer Portfolio",
      ogDesc: "Frontend Developer Portfolio. Interactive web applications, WordPress & PHP integrations, and animations.",
      twitterTitle: "Valeriya Cherniavskaya — Frontend Developer Portfolio",
      twitterDesc: "Frontend Developer Portfolio. Interactive web applications, WordPress & PHP integrations, and animations."
    },
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contacts: "Contacts",
      anketa: "CV (RU)",
      cv: "CV (EN)"
    },
    hero: {
      title: 'Hi, I\'m Valeria <span class="information__hand">👋</span>',
      subtitlePrefix: "I'm",
      projectsBtn: "View Projects",
      contactsBtn: "Contact Me",
      imageAlt: "Valeriya Cherniavskaya"
    },
    about: {
      title: "About Me",
      p1: "WordPress / Frontend Developer with 3+ years of commercial experience in web development. I build fast, interactive, and responsive web interfaces.",
      p2: "Worked at <strong>MaxBitSolution (iGaming, HTP resident)</strong>: developed and customized WordPress themes and plugins. Built custom themes in object-oriented PHP (WP_Query, $wpdb) with separation of logic, data, and templates. Created custom Gutenberg blocks, integrated REST APIs and PHP hooks. Debugged issues and navigated legacy codebases: traced root causes, refactored and overhauled problematic modules to enhance readability and maintainability. Systematically optimized performance: Core Web Vitals 90+, Schema.org semantic markup (JSON-LD), and SEO meta tags.",
      p3: "As a freelancer, I deliver turnkey projects for small and medium-sized businesses: from custom themes to WooCommerce stores. I write clean, maintainable code focused on security (validation, escaping, XSS & SQL injection protection) and top load speeds.",
      comp1Title: "WordPress / PHP",
      comp1Desc: "Developing themes from scratch with OOP PHP, custom Gutenberg blocks, plugins, WP_Query, $wpdb, Rewrite API, WooCommerce, payment gateways, and REST API integrations.",
      comp2Title: "Frontend & Interactions",
      comp2Desc: "JavaScript (ES6+), React (hooks, routing, REST API), TypeScript, semantic BEM layout, animations (GSAP, CSS 3D), Pixel Perfect, and Mobile First.",
      comp3Title: "Tools & DevOps",
      comp3Desc: "Docker, GitLab CI, Vite, Webpack, Git, Core Web Vitals optimization, and web accessibility.",
      expandOpen: "Show Less",
      expandClosed: "Read More"
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
        spinpulse: {
          desc: "High-performance gaming lobby built on pure ES6+ without framework overhead. Features modular BEM architecture, native Web APIs (Audio, Canvas, Storage), and 24 KB gzip bundle.",
          tech: "JavaScript (ES6+), Web Audio API, Canvas, HTML5/CSS3 (BEM), LocalStorage, Vite",
          visitAria: "Visit SpinPulse project website",
          githubAria: "Source code of SpinPulse on GitHub"
        },
        nova: {
          desc: "Fintech service featuring smooth interactive 3D animation with GSAP, modern responsive UI, and high performance.",
          tech: "JavaScript (ES6+), GSAP, CSS 3D, HTML5 Canvas, Vite",
          visitAria: "Visit NOVA Pay project website",
          githubAria: "Source code of NOVA Pay on GitHub"
        },
        cyberpunk: {
          desc: "Atmospheric Cyberpunk promo landing page with Swiper sliders and custom WordPress theme integration (PHP).",
          tech: "WordPress, PHP, SCSS, JavaScript (ES6+), Swiper, BEM",
          visitAria: "Visit Cyberpunk Promo website",
          githubAria: "Source code of Cyberpunk WordPress theme on GitHub"
        },
        security: {
          desc: "Cybersecurity analytics dashboard built with React 19 and TypeScript with network metrics and incident tracking via Recharts.",
          tech: "React 19, TypeScript, Recharts, Lucide, Vite",
          visitAria: "Visit Cybersecurity Operations Center website",
          githubAria: "Source code of Cybersecurity Operations Center on GitHub"
        },
        gamevault: {
          desc: "PS5-styled video game showcase and backlog tracker built with React 19 and TypeScript with strict typing, Gamepad API, and Tailwind CSS.",
          tech: "React 19, TypeScript, Tailwind CSS, Gamepad API, Vitest",
          visitAria: "Visit GameVault project website",
          githubAria: "Source code of GameVault on GitHub"
        },
        techwear: {
          desc: "Conceptual tactical apparel store built with React 19 and TypeScript: Canvas logistics radar, procedural Web Audio synthesizer, and PWA.",
          tech: "React 19, TypeScript, HTML5 Canvas, Web Audio API, PWA, Vite",
          visitAria: "Visit Techwear Store website",
          githubAria: "Source code of Techwear Store on GitHub"
        },
        edufree: {
          desc: "Responsive Mobile-First landing page for an online academy: course search and filtering, LocalStorage cart, HTML5 Dialog, and Tailwind CSS.",
          tech: "HTML5, Tailwind CSS, JavaScript (ES6+), HTML5 Dialog, Mobile-First",
          visitAria: "Visit Edufree EdTech Landing website",
          githubAria: "Source code of Edufree EdTech Landing on GitHub"
        },
        sneakmax: {
          desc: "Sneaker store featuring an authentic footwear catalog, parameter filtering, interactive shoe-fitting quiz, cart, and 100/100 Lighthouse score.",
          tech: "HTML5, CSS3, JavaScript (ES6+), BEM, Swiper, noUiSlider",
          visitAria: "Visit Sneakmax Sneaker Store website",
          githubAria: "Source code of Sneakmax Sneaker Store on GitHub"
        },
        crypto: {
          desc: "Crypto sticker marketplace landing page: live ETH auctions, Swiper release carousel, interactive forms, and cascading scroll animations.",
          tech: "HTML5, CSS3, JavaScript (ES6+), BEM, Swiper, IntersectionObserver",
          visitAria: "Visit Crypto-sticky website",
          githubAria: "Source code of Crypto-sticky on GitHub"
        },
        legal: {
          desc: "Corporate law firm website with elegant typography, client testimonials, and feedback forms.",
          tech: "HTML5, CSS3, JavaScript (ES6+), BEM, Swiper",
          visitAria: "Visit Legal Services website",
          githubAria: "Source code of Legal Services on GitHub"
        },
        animation: {
          desc: "Interactive web animation gallery built with pure CSS and JavaScript demonstrating visual effects and micro-interactions.",
          tech: "HTML5, CSS3 3D Animation, JavaScript (ES6+)",
          visitAria: "Visit Creative Animation Showcase website",
          githubAria: "Source code of Creative Animation Showcase on GitHub"
        }
      }
    },
    contacts: {
      title: "Contacts",
      subtitle: "Open to interesting collaboration offers, frontend projects, and commercial development.",
      nameLabel: "Name",
      nameValue: "Valeriya Cherniavskaya",
      emailLabel: "Email",
      emailAria: "Send email",
      telegramLabel: "Telegram",
      telegramAria: "Contact via Telegram",
      phoneLabel: "Phone",
      phoneAria: "Call by phone",
      instagramLabel: "Instagram",
      instagramAria: "Open Instagram profile"
    },
    footer: {
      copy: "© 2026 Valeriya Cherniavskaya. Frontend Developer Portfolio."
    },
    ui: {
      scrollTop: "Back to top",
      langSwitchLabel: "Language selection"
    }
  }
};

window.translations = translations;
