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
      projectsBtn: "Проекты",
      contactsBtn: "Контакты",
      imageAlt: "Валерия Чернявская"
    },
    about: {
      title: "Обо мне",
      p1: "WordPress / Frontend Developer с 4 годами коммерческого опыта. Создаю быстрые, интерактивные и адаптивные веб-интерфейсы.",
      p2: "Последние 2 года работала в <strong>MaxBitSolution (iGaming, резидент ПВТ)</strong>: разрабатывала и кастомизировала темы и плагины WordPress. Писала кастомные темы на объектно-ориентированном PHP (WP_Query, $wpdb) с разделением логики, данных и шаблонов. Создавала кастомные Gutenberg-блоки, интегрировала REST API и PHP-хуки. Разбиралась в чужом коде: находила причины ошибок, рефакторила и переписывала проблемные участки. Оптимизировала производительность Core Web Vitals 90+, семантическая разметка Schema.org (JSON-LD), SEO-метатеги. Работала в связке с SEO-командой, устраняла баги, влияющие на ранжирование.",
      p3: "До этого и параллельно разрабатываю проекты «под ключ» на фрилансе для малого и среднего бизнеса: от кастомных тем до интернет-магазинов на WooCommerce. Создаю чистый поддерживаемый код с акцентом на безопасность (валидация, экранирование, защита от XSS и SQL-инъекций) и максимальную скорость загрузки.",
      comp1Title: "WordPress / PHP",
      comp1Desc: "Кастомные темы и плагины с нуля, Gutenberg, WooCommerce, WP_Query, $wpdb, Hooks, OOP, REST API.",
      comp2Title: "JavaScript & React / TypeScript",
      comp2Desc: "DOM, fetch, async/await, интерактив, делегирование событий, компоненты, хуки, роутинг.",
      comp3Title: "Вёрстка & Инструменты",
      comp3Desc: "Pixel Perfect из Figma, mobile-first, SCSS, Tailwind, БЭМ, Vite, Webpack, Docker, GitLab CI.",
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
          desc: "Игровое лобби на чистом ES6+ без оверхеда фреймворков: реактивный стор на Proxy, Web Audio, Canvas и бандл 24 КБ.",
          tech: "JavaScript (ES6+), Web Audio API, Canvas, HTML5/CSS3 (БЭМ), LocalStorage, Vite",
          visitAria: "Посетить сайт проекта SpinPulse",
          githubAria: "Исходный код проекта SpinPulse на GitHub"
        },
        nova: {
          desc: "Финтех-сервис с 3D-каруселью карт на GSAP, симуляцией NFC-терминала со звуком, печатью чека и кастомайзером дизайна.",
          tech: "JavaScript (ES6+), GSAP, CSS 3D, Web Audio API, Canvas Confetti, Vite",
          visitAria: "Посетить сайт проекта NOVA Pay",
          githubAria: "Исходный код проекта NOVA Pay на GitHub"
        },
        cyberpunk: {
          desc: "Промо-лендинг по макету из Figma в стиле Cyberpunk: слайдер Swiper, модальные окна на HTML5 Dialog и тема для WordPress.",
          tech: "WordPress, PHP, SCSS, JavaScript (ES6+), Swiper, БЭМ",
          visitAria: "Посетить сайт проекта Cyberpunk Promo",
          githubAria: "Исходный код темы WordPress для Cyberpunk Promo на GitHub"
        },
        security: {
          desc: "Дашборд телеметрии и инцидентов шлюзов на React 19 и TypeScript: перцентили задержек p50/p95/p99, фид CISA KEV и экспорт логов.",
          tech: "React 19, TypeScript, Recharts, CISA KEV API, Vitest, Vite",
          visitAria: "Посетить сайт проекта Traffic & API Analytics Dashboard",
          githubAria: "Исходный код проекта Traffic & API Analytics Dashboard на GitHub"
        },
        gamevault: {
          desc: "Каталог и бэклог видеоигр в эстетике PS5 на React 19 и TypeScript: навигация джойстиком через Gamepad API и синхронизация URL.",
          tech: "React 19, TypeScript, Tailwind CSS, Gamepad API, Vitest",
          visitAria: "Посетить сайт проекта GameVault",
          githubAria: "Исходный код проекта GameVault на GitHub"
        },
        techwear: {
          desc: "Киберпанк e-commerce на React 19 и TypeScript: процедурный синтез звука через Web Audio, радар дрона на Canvas и PWA-модуль.",
          tech: "React 19, TypeScript, HTML5 Canvas, Web Audio API, PWA, Vite",
          visitAria: "Посетить сайт проекта Techwear Store",
          githubAria: "Исходный код проекта Techwear Store на GitHub"
        },
        edufree: {
          desc: "Образовательный портал на Tailwind CSS: живой поиск и фильтрация курсов, корзина на LocalStorage и модальный силлабус программ.",
          tech: "HTML5, Tailwind CSS, JavaScript (ES6+), LocalStorage, Mobile-First",
          visitAria: "Посетить сайт проекта Edufree EdTech Landing",
          githubAria: "Исходный код проекта Edufree EdTech Landing на GitHub"
        },
        sneakmax: {
          desc: "Магазин кроссовок: слайдер цен noUiSlider, подбор обуви через пошаговый квиз, корзина заказов и галерея ракурсов на Swiper.",
          tech: "HTML5, CSS3, JavaScript (ES6+), БЭМ, Swiper, noUiSlider",
          visitAria: "Посетить сайт проекта Sneakmax Sneaker Store",
          githubAria: "Исходный код проекта Sneakmax Sneaker Store на GitHub"
        },
        crypto: {
          desc: "Маркетплейс криптостикеров: таймер аукциона, кастомная пагинация Swiper, каскадные анимации появления и модалка ставок.",
          tech: "HTML5, CSS3, JavaScript (ES6+), БЭМ, Swiper, IntersectionObserver",
          visitAria: "Посетить сайт проекта Crypto-sticky",
          githubAria: "Исходный код проекта Crypto-sticky на GitHub"
        },
        legal: {
          desc: "Сайт юридической коллегии по макету из Figma: анимированные счетчики практики на IntersectionObserver, отзывы и модалки.",
          tech: "HTML5, CSS3, JavaScript (ES6+), БЭМ, Swiper, Figma",
          visitAria: "Посетить сайт проекта Legal Services",
          githubAria: "Исходный код проекта Legal Services на GitHub"
        },
        animation: {
          desc: "Промо-лендинг прямого рекламодателя: непрерывное вращение барабанов слота (60 FPS), интерактивный калькулятор доходности и i18n.",
          tech: "HTML5, CSS3 (Keyframes 60 FPS), JavaScript (ES Modules)",
          visitAria: "Посетить сайт проекта House of Gambling",
          githubAria: "Исходный код проекта House of Gambling на GitHub"
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
      p1: "WordPress / Frontend Developer with 4 years of commercial experience. Building fast, interactive, and responsive web interfaces.",
      p2: "For the past 2 years, worked at <strong>MaxBitSolution (iGaming, HTP resident)</strong>: developed and customized WordPress themes and plugins. Built custom themes in object-oriented PHP (WP_Query, $wpdb) with clean separation of logic, data, and templates. Developed custom Gutenberg blocks, integrated REST APIs and PHP hooks. Refactored legacy codebases: traced and resolved root causes, overhauling problematic areas for readability and maintainability. Optimized performance (Core Web Vitals 90+), Schema.org semantic markup (JSON-LD), and SEO meta tags. Collaborated closely with the SEO team to fix ranking issues.",
      p3: "Prior to and alongside this, delivering turnkey freelance projects for small and medium-sized businesses: from bespoke themes to WooCommerce online stores. Writing clean, maintainable code focused on security (validation, escaping, XSS & SQL injection prevention) and blazing-fast load speeds.",
      comp1Title: "WordPress / PHP",
      comp1Desc: "Custom themes and plugins from scratch, Gutenberg, WooCommerce, WP_Query, $wpdb, Hooks, OOP, REST API.",
      comp2Title: "JavaScript & React / TypeScript",
      comp2Desc: "DOM, fetch, async/await, interactive UI, event delegation, components, hooks, routing.",
      comp3Title: "Layout & Tooling",
      comp3Desc: "Pixel Perfect from Figma, mobile-first, SCSS, Tailwind, BEM, Vite, Webpack, Docker, GitLab CI.",
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
          desc: "High-performance gaming lobby on pure ES6+: native Proxy reactive store, Web Audio API, Canvas, and ultra-light 24 KB gzip bundle.",
          tech: "JavaScript (ES6+), Web Audio API, Canvas, HTML5/CSS3 (BEM), LocalStorage, Vite",
          visitAria: "Visit SpinPulse project website",
          githubAria: "Source code of SpinPulse on GitHub"
        },
        nova: {
          desc: "Fintech concept featuring GSAP 3D card carousel, simulated NFC payment with audio feedback, receipt printer, and card customizer.",
          tech: "JavaScript (ES6+), GSAP, CSS 3D, Web Audio API, Canvas Confetti, Vite",
          visitAria: "Visit NOVA Pay project website",
          githubAria: "Source code of NOVA Pay on GitHub"
        },
        cyberpunk: {
          desc: "Cyberpunk promo landing page based on Figma: Swiper carousel, native HTML5 Dialog modals, and custom WordPress theme integration.",
          tech: "WordPress, PHP, SCSS, JavaScript (ES6+), Swiper, BEM",
          visitAria: "Visit Cyberpunk Promo website",
          githubAria: "Source code of Cyberpunk WordPress theme on GitHub"
        },
        security: {
          desc: "Network telemetry and gateway incident dashboard on React 19 & TypeScript: p50/p95/p99 latency, live CISA KEV feed, and CSV exports.",
          tech: "React 19, TypeScript, Recharts, CISA KEV API, Vitest, Vite",
          visitAria: "Visit Traffic & API Analytics Dashboard website",
          githubAria: "Source code of Traffic & API Analytics Dashboard on GitHub"
        },
        gamevault: {
          desc: "PS5-styled game catalog and backlog tracker on React 19 & TypeScript: DualSense Gamepad API controls and bi-directional URL state sync.",
          tech: "React 19, TypeScript, Tailwind CSS, Gamepad API, Vitest",
          visitAria: "Visit GameVault project website",
          githubAria: "Source code of GameVault on GitHub"
        },
        techwear: {
          desc: "Cyberpunk e-commerce platform on React 19 & TypeScript: procedural Web Audio synthesizer, Canvas drone radar, and offline PWA service.",
          tech: "React 19, TypeScript, HTML5 Canvas, Web Audio API, PWA, Vite",
          visitAria: "Visit Techwear Store website",
          githubAria: "Source code of Techwear Store on GitHub"
        },
        edufree: {
          desc: "Educational platform on Tailwind CSS: real-time course search and filtering, LocalStorage cart drawer, and interactive modal syllabus.",
          tech: "HTML5, Tailwind CSS, JavaScript (ES6+), LocalStorage, Mobile-First",
          visitAria: "Visit Edufree EdTech Landing website",
          githubAria: "Source code of Edufree EdTech Landing on GitHub"
        },
        sneakmax: {
          desc: "Sneaker e-commerce store: dual-range noUiSlider pricing, interactive shoe-fitting quiz, cart drawer, and Swiper angle gallery.",
          tech: "HTML5, CSS3, JavaScript (ES6+), BEM, Swiper, noUiSlider",
          visitAria: "Visit Sneakmax Sneaker Store website",
          githubAria: "Source code of Sneakmax Sneaker Store on GitHub"
        },
        crypto: {
          desc: "Crypto sticker marketplace landing page: live ETH auction timer, custom bullet Swiper pagination, and cascading scroll animations.",
          tech: "HTML5, CSS3, JavaScript (ES6+), BEM, Swiper, IntersectionObserver",
          visitAria: "Visit Crypto-sticky website",
          githubAria: "Source code of Crypto-sticky on GitHub"
        },
        legal: {
          desc: "Law firm website crafted from Figma: dynamic case counters powered by IntersectionObserver, client testimonials, and consult modals.",
          tech: "HTML5, CSS3, JavaScript (ES6+), BEM, Swiper, Figma",
          visitAria: "Visit Legal Services website",
          githubAria: "Source code of Legal Services on GitHub"
        },
        animation: {
          desc: "iGaming affiliate landing page: continuous 60 FPS CSS slot reel animations, interactive ROI earnings calculator, and full i18n.",
          tech: "HTML5, CSS3 (Keyframes 60 FPS), JavaScript (ES Modules)",
          visitAria: "Visit House of Gambling website",
          githubAria: "Source code of House of Gambling on GitHub"
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

if (typeof window !== 'undefined') {
  window.translations = translations;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { translations };
}
