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
      p1: "WordPress & Frontend Developer с 4 годами коммерческого опыта. Разрабатываю адаптивные интерфейсы, кастомные темы и современные веб-приложения.",
      p2: "Последние 2 года работала в <strong>MaxBitSolution (iGaming, резидент ПВТ)</strong>. Занималась разработкой и поддержкой тем и плагинов WordPress: создавала кастомные решения на PHP с чистой структурой шаблонов, разрабатывала блоки Gutenberg, подключала сторонние сервисы через REST API и хуки. Занималась рефакторингом легаси-кодовой базы, исправлением ошибок и ускорением загрузки страниц по метрикам Core Web Vitals. В связке с SEO-командой внедряла семантическую разметку Schema.org и устраняла технические проблемы.",
      p3: "Параллельно разрабатываю проекты «под ключ» на фрилансе: от посадочных страниц до интернет-магазинов на WooCommerce. Создаю надёжный, поддерживаемый код с акцентом на скорость работы, адаптивность и безопасность данных.",
      comp1Title: "WordPress & PHP",
      comp1Desc: "Разработка кастомных тем и плагинов, Gutenberg, WooCommerce, WP_Query, REST API, хуки и фильтры.",
      comp2Title: "JavaScript & React / TypeScript",
      comp2Desc: "Современный JavaScript (ES6+), React, TypeScript, работа с DOM, fetch/REST API, роутинг, анимации.",
      comp3Title: "Вёрстка & Инструменты",
      comp3Desc: "Адаптивная и семантическая вёрстка по БЭМ, SCSS, Tailwind CSS, Vite, Webpack, Git, Docker, GitLab CI.",
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
          desc: "Интерактивное игровое лобби с анимацией барабанов на Canvas, звуковыми эффектами через Web Audio API и сохранением баланса в LocalStorage.",
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
        cyberpunk: {
          desc: "Адаптивный промо-лендинг по макету из Figma со слайдерами Swiper, модальными окнами и интеграцией в кастомную тему WordPress.",
          tech: "WordPress, PHP, SCSS, JavaScript (ES6+), Swiper",
          visitAria: "Посетить сайт проекта Cyberpunk Promo",
          githubAria: "Исходный код темы WordPress для Cyberpunk Promo на GitHub"
        },
        security: {
          desc: "Панель мониторинга сетевого трафика и безопасности на React и TypeScript с графиками Recharts, фильтрацией инцидентов и экспортом данных.",
          tech: "React, TypeScript, Recharts, REST API, Vite",
          visitAria: "Посетить сайт проекта Traffic & API Analytics Dashboard",
          githubAria: "Исходный код проекта Traffic & API Analytics Dashboard на GitHub"
        },
        gamevault: {
          desc: "Каталог видеоигр и трекер бэклога в стиле консольного интерфейса с фильтрацией по жанрам, поиском и поддержкой геймпада.",
          tech: "React, TypeScript, Tailwind CSS, Gamepad API, Vite",
          visitAria: "Посетить сайт проекта GameVault",
          githubAria: "Исходный код проекта GameVault на GitHub"
        },
        techwear: {
          desc: "Концептуальный интернет-магазин одежды на React и TypeScript с анимированным радаром на Canvas, корзиной и адаптивным каталогом.",
          tech: "React, TypeScript, HTML5 Canvas, Tailwind CSS, Vite",
          visitAria: "Посетить сайт проекта Techwear Store",
          githubAria: "Исходный код проекта Techwear Store на GitHub"
        },
        edufree: {
          desc: "Адаптивный лендинг образовательной платформы на Tailwind CSS с каталогом курсов, быстрым поиском и модальными окнами программ.",
          tech: "HTML5, Tailwind CSS, JavaScript (ES6+), Mobile-First",
          visitAria: "Посетить сайт проекта Edufree EdTech Landing",
          githubAria: "Исходный код проекта Edufree EdTech Landing на GitHub"
        },
        sneakmax: {
          desc: "Интернет-магазин кроссовок с ползунком цен, интерактивным квизом для подбора размера, корзиной и фотогалереей на Swiper.",
          tech: "HTML5, SCSS, JavaScript (ES6+), Swiper, noUiSlider",
          visitAria: "Посетить сайт проекта Sneakmax Sneaker Store",
          githubAria: "Исходный код проекта Sneakmax Sneaker Store на GitHub"
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
        },
        animation: {
          desc: "Промо-лендинг партнёрской программы с плавной CSS-анимацией вращения слота, калькулятором потенциального дохода и выбором языка.",
          tech: "HTML5, CSS3 Animations, JavaScript (ES6+)",
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
      description: "Frontend Developer Portfolio of Valeriya Cherniavskaya. Building responsive web interfaces, WordPress & PHP solutions, modern animations, and performance optimization.",
      ogTitle: "Valeriya Cherniavskaya — Frontend Developer Portfolio",
      ogDesc: "Frontend Developer Portfolio. Responsive web applications, custom WordPress themes, PHP, and UI animations.",
      twitterTitle: "Valeriya Cherniavskaya — Frontend Developer Portfolio",
      twitterDesc: "Frontend Developer Portfolio. Responsive web applications, custom WordPress themes, PHP, and UI animations."
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
      projectsBtn: "Projects",
      contactsBtn: "Contact Me",
      imageAlt: "Valeriya Cherniavskaya"
    },
    about: {
      title: "About Me",
      p1: "WordPress & Frontend Developer with 4 years of commercial experience. Building responsive web interfaces, custom themes, and modern web applications.",
      p2: "For the past 2 years, worked at <strong>MaxBitSolution (iGaming, HTP resident)</strong>. Developed and maintained custom WordPress themes and plugins: crafted clean PHP templates, developed custom Gutenberg blocks, and integrated third-party services via REST APIs and hooks. Handled legacy codebase refactoring, debugging, and performance optimization for Core Web Vitals. Collaborated with the SEO team to implement Schema.org markup and resolve technical search issues.",
      p3: "Alongside this, delivering end-to-end freelance client projects: from landing pages to WooCommerce stores. Focused on clean code, responsive layouts, web security, and fast loading speeds across devices.",
      comp1Title: "WordPress & PHP",
      comp1Desc: "Custom themes and plugins from scratch, Gutenberg blocks, WooCommerce, WP_Query, REST API, hooks.",
      comp2Title: "JavaScript & React / TypeScript",
      comp2Desc: "Modern JavaScript (ES6+), React, TypeScript, DOM manipulation, fetch/REST API, routing, UI animations.",
      comp3Title: "Layout & Tooling",
      comp3Desc: "Responsive semantic layout, BEM, SCSS, Tailwind CSS, Vite, Webpack, Git, Docker, GitLab CI.",
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
          desc: "Interactive gaming lobby featuring Canvas animations, sound effects via Web Audio API, and local state persistence.",
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
        cyberpunk: {
          desc: "Responsive promo landing page from Figma with Swiper carousels, modal windows, and custom WordPress theme integration.",
          tech: "WordPress, PHP, SCSS, JavaScript (ES6+), Swiper",
          visitAria: "Visit Cyberpunk Promo website",
          githubAria: "Source code of Cyberpunk WordPress theme on GitHub"
        },
        security: {
          desc: "Network traffic and security monitoring dashboard in React and TypeScript with Recharts graphs, incident filters, and report exports.",
          tech: "React, TypeScript, Recharts, REST API, Vite",
          visitAria: "Visit Traffic & API Analytics Dashboard website",
          githubAria: "Source code of Traffic & API Analytics Dashboard on GitHub"
        },
        gamevault: {
          desc: "Video game catalog and backlog tracker inspired by console UI with genre filters, search, and gamepad controller support.",
          tech: "React, TypeScript, Tailwind CSS, Gamepad API, Vite",
          visitAria: "Visit GameVault project website",
          githubAria: "Source code of GameVault on GitHub"
        },
        techwear: {
          desc: "Conceptual apparel store in React and TypeScript featuring an animated Canvas radar, shopping cart, and responsive catalog.",
          tech: "React, TypeScript, HTML5 Canvas, Tailwind CSS, Vite",
          visitAria: "Visit Techwear Store website",
          githubAria: "Source code of Techwear Store on GitHub"
        },
        edufree: {
          desc: "Responsive online academy landing page built with Tailwind CSS featuring course catalog, instant search, and program modals.",
          tech: "HTML5, Tailwind CSS, JavaScript (ES6+), Mobile-First",
          visitAria: "Visit Edufree EdTech Landing website",
          githubAria: "Source code of Edufree EdTech Landing on GitHub"
        },
        sneakmax: {
          desc: "Sneaker store with a dual-range price slider, interactive quiz for size selection, cart drawer, and Swiper photo gallery.",
          tech: "HTML5, SCSS, JavaScript (ES6+), Swiper, noUiSlider",
          visitAria: "Visit Sneakmax Sneaker Store website",
          githubAria: "Source code of Sneakmax Sneaker Store on GitHub"
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
        },
        animation: {
          desc: "Affiliate promo landing page featuring smooth CSS slot animations, an interactive earnings calculator, and multi-language support.",
          tech: "HTML5, CSS3 Animations, JavaScript (ES6+)",
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
