// GSAP & ScrollTrigger Initialization
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- i18n Internationalization ---
function getInitialLanguage() {
  if (window.__initialLang) return window.__initialLang;
  try {
    const saved = localStorage.getItem("portfolio_lang");
    if (saved === "ru" || saved === "en") return saved;
    const navLang = (navigator.languages && navigator.languages[0]) || navigator.language || "";
    return navLang.toLowerCase().startsWith("ru") ? "ru" : "en";
  } catch (e) {
    return "ru";
  }
}

let currentLang = getInitialLanguage();

function getTranslation(path, lang = currentLang) {
  const dict = window.translations && window.translations[lang];
  if (!dict) return null;
  return path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : null), dict);
}

// --- Typewriter State & Functions ---
const typeText = document.querySelector(".information__subtitle-text");
const pipe = document.querySelector(".pipe");
let textInterval = null;
let counter = 0;
let symbolCounter = 0;
let pipeCheck = true;
let pipeInterval = null;

function getPhraseArray(lang = currentLang) {
  const roles = getTranslation("hero.roles", lang);
  if (Array.isArray(roles) && roles.length) return roles;
  return lang === "ru"
    ? [
        "WordPress & PHP разработчик",
        "Gutenberg & Frontend специалист",
        "Core Web Vitals & SEO эксперт",
      ]
    : [
        "WordPress & PHP Developer",
        "Gutenberg & Frontend Specialist",
        "Core Web Vitals & Technical SEO",
      ];
}

let phraseArray = getPhraseArray(currentLang);

function getPipe() {
  if (!pipe || !pipe.style) return;
  if (pipeCheck) {
    pipeCheck = false;
    pipe.style.display = "none";
  } else {
    pipeCheck = true;
    pipe.style.display = "inline-block";
  }
}

function changeTypeText() {
  if (!typeText) return;
  if (!phraseArray || !phraseArray.length) phraseArray = getPhraseArray(currentLang);
  if (counter >= phraseArray.length) counter = 0;
  if (symbolCounter === 0) {
    pipeCheck = true;
    setTimeout(() => {
      textInterval = setInterval(printText, 140, 1);
      clearInterval(pipeInterval);
    }, 400);
  }
  if (symbolCounter > 0) {
    pipeCheck = true;
    if (pipe && pipe.style) pipe.style.display = "inline-block";
    pipeInterval = setInterval(getPipe, 500);
    setTimeout(() => {
      textInterval = setInterval(printText, 60, -1);
    }, 1200);
  }
  function typeTextAnimation(phrase) {
    if (symbolCounter >= phrase.length + 1) {
      clearInterval(textInterval);
      changeTypeText();
    }
    if (symbolCounter < 0) {
      counter++;
      symbolCounter = 0;
      clearInterval(textInterval);
      changeTypeText();
    }
  }
  function printText(num) {
    const currentPhrase = phraseArray[counter] || "";
    typeText.textContent = currentPhrase.slice(0, symbolCounter);
    symbolCounter += num;
    typeTextAnimation(currentPhrase);
  }
}

function applyTranslations(lang, isDynamicChange = false) {
  document.documentElement.lang = lang;

  // Title & Meta tags
  const title = getTranslation("meta.title", lang);
  if (title) document.title = title;

  const metaDesc = document.querySelector('meta[name="description"]');
  const transDesc = getTranslation("meta.description", lang);
  if (metaDesc && transDesc) metaDesc.setAttribute("content", transDesc);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  const transOgTitle = getTranslation("meta.ogTitle", lang);
  if (ogTitle && transOgTitle) ogTitle.setAttribute("content", transOgTitle);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  const transOgDesc = getTranslation("meta.ogDesc", lang);
  if (ogDesc && transOgDesc) ogDesc.setAttribute("content", transOgDesc);

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute("content", lang === "ru" ? "ru_RU" : "en_US");

  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const transTwTitle = getTranslation("meta.twitterTitle", lang);
  if (twitterTitle && transTwTitle) twitterTitle.setAttribute("content", transTwTitle);

  const twitterDesc = document.querySelector('meta[name="twitter:description"]');
  const transTwDesc = getTranslation("meta.twitterDesc", lang);
  if (twitterDesc && transTwDesc) twitterDesc.setAttribute("content", transTwDesc);

  // Resume button link
  const resumeBtn = document.querySelector(".header__btn--resume, .header__btn--anketa");
  if (resumeBtn) {
    resumeBtn.href = lang === "en" ? "https://lelyaler.github.io/cv/" : "https://lelyaler.github.io/anketa/";
  }

  // Footer resume link
  const footerResumeLink = document.querySelector(".footer__resume-link");
  if (footerResumeLink) {
    footerResumeLink.href = lang === "en" ? "https://lelyaler.github.io/cv/" : "https://lelyaler.github.io/anketa/";
  }

  // Contact resume item
  const contactResumeLink = document.querySelector(".about__contacts-resume-link");
  const contactResumeTitle = document.querySelector(".about__contacts-resume-title");
  const contactResumeDesc = document.querySelector(".about__contacts-resume-desc");
  if (contactResumeLink) {
    contactResumeLink.href = lang === "en" ? "https://lelyaler.github.io/cv/" : "https://lelyaler.github.io/anketa/";
    contactResumeLink.setAttribute("aria-label", lang === "en" ? "Open CV online" : "Открыть резюме онлайн");
  }
  if (contactResumeTitle) {
    contactResumeTitle.textContent = lang === "en" ? "CV" : "Резюме";
  }
  if (contactResumeDesc) {
    contactResumeDesc.textContent = lang === "en" ? "Open CV" : "Открыть резюме";
    contactResumeDesc.href = lang === "en" ? "https://lelyaler.github.io/cv/" : "https://lelyaler.github.io/anketa/";
  }

  // Text content elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = getTranslation(key, lang);
    if (val !== null && typeof val === "string") {
      if (el.dataset.i18nHtml === "true") {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
  });

  // Attribute elements with data-i18n-attr
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const attrPairs = el.getAttribute("data-i18n-attr").split(",");
    attrPairs.forEach((pair) => {
      const [attr, key] = pair.split(":");
      if (attr && key) {
        const val = getTranslation(key.trim(), lang);
        if (val !== null && typeof val === "string") {
          el.setAttribute(attr.trim(), val);
        }
      }
    });
  });

  // Project archive button label
  const projectsExpandBtn = document.getElementById("projects-expand-btn");
  const extraCards = document.querySelectorAll(".projects__card--extra");
  if (projectsExpandBtn && extraCards.length) {
    const isProjOpen = projectsExpandBtn.classList.contains("is-open");
    const textEl = projectsExpandBtn.querySelector(".projects__expand-btn-text");
    if (textEl) {
      const closedFn = getTranslation("projects.expandClosed", lang);
      textEl.textContent = isProjOpen
        ? getTranslation("projects.expandOpen", lang)
        : (typeof closedFn === "function" ? closedFn(extraCards.length) : `Показать все проекты (ещё ${extraCards.length})`);
    }
  }

  // Language switcher active states
  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    const btnLang = btn.getAttribute("data-lang");
    const isActive = btnLang === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  // Dynamic language switch updates Splitting & ScrollTrigger
  if (isDynamicChange && typeof Splitting !== "undefined") {
    Splitting();
    document.querySelectorAll(".char, .word").forEach((el) => {
      el.style.opacity = "1";
    });
    if (typeof ScrollTrigger !== "undefined") {
      setTimeout(() => ScrollTrigger.refresh(), 100);
    }
  }

  // Update typewriter roles on language change
  phraseArray = getPhraseArray(lang);
  if (isDynamicChange) {
    clearInterval(textInterval);
    clearInterval(pipeInterval);
    counter = 0;
    symbolCounter = 0;
    if (typeText) typeText.textContent = "";
    changeTypeText();
  }
}

// Initial translation application
applyTranslations(currentLang, false);

// Language switcher clicks
document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const selectedLang = btn.getAttribute("data-lang");
    if (selectedLang && selectedLang !== currentLang) {
      currentLang = selectedLang;
      try {
        localStorage.setItem("portfolio_lang", currentLang);
      } catch (e) {}
      applyTranslations(currentLang, true);
    }
  });
});

// Initialize Splitting
if (typeof Splitting !== "undefined") {
  Splitting();
}

// Start Typewriter
changeTypeText();

// Smooth Scroll with Lenis
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let lenis = null;
if (typeof Lenis !== "undefined") {
  lenis = new Lenis({
    duration: prefersReducedMotion ? 0 : 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: !prefersReducedMotion,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    if (lenis) lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  if (typeof ScrollTrigger !== "undefined") {
    lenis.on("scroll", ScrollTrigger.update);
  }
}

// GSAP Animations
if (typeof gsap !== "undefined" && typeof gsap.timeline === "function") {
  let heroTl = gsap.timeline({
    default: {
      ease: "power2.inOut",
    },
  });

  heroTl.fromTo(
    ".header",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.6,
    }
  );
  heroTl.fromTo(
    ".information",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.6,
    },
    "-=0.3"
  );

  if (typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.create({
      trigger: ".about",
      start: "top bottom-=100",
      once: true,
      onEnter: () => {
        gsap.to(".about .title .char", {
          stagger: 0.03,
          opacity: 1,
          ease: "power2.inOut",
        });
        gsap.to(".about .about__description .word", {
          stagger: 0.015,
          opacity: 1,
          ease: "power2.inOut",
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".about",
      start: "top bottom-=150",
      once: true,
      onEnter: () => {
        gsap.to(".about__list li", {
          y: 0,
          opacity: 1,
          ease: "circ.out",
          duration: 0.8,
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".skills",
      start: "top bottom-=150",
      once: true,
      onEnter: () => {
        gsap.to(".skills .skills__inner h2 .char", {
          stagger: 0.03,
          opacity: 1,
          ease: "power2.inOut",
        });
        gsap.to(".skills__list", {
          y: 0,
          opacity: 1,
          ease: "circ.out",
          duration: 0.8,
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".projects",
      start: "top bottom-=150",
      once: true,
      onEnter: () => {
        gsap.to(".projects__card:not(.projects__card--hidden)", {
          y: 0,
          opacity: 1,
          ease: "circ.out",
          duration: 0.8,
        });
        gsap.to(".projects h2 .char", {
          stagger: 0.03,
          opacity: 1,
          ease: "power2.inOut",
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".contacts",
      start: "top bottom-=150",
      once: true,
      onEnter: () => {
        gsap.to(".contacts h2 .char", {
          stagger: 0.03,
          opacity: 1,
          ease: "power2.inOut",
        });
        gsap.to(".contacts__list li", {
          y: 0,
          opacity: 1,
          ease: "circ.out",
          duration: 0.8,
          stagger: 0.05,
        });
      },
    });
  }
}

// Navigation & Smooth Scroll
function smoothScrollTo(targetSelector) {
  const target = document.querySelector(targetSelector);
  if (!target) return;
  if (typeof lenis !== "undefined" && lenis && !prefersReducedMotion) {
    lenis.scrollTo(target, { offset: -30 });
  } else {
    target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
  }
}

document.querySelectorAll(".header__nav-link, .link-btn").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      smoothScrollTo(href);
    }
  });
});

// Interactive skill hover animation
const skillsArr = document.querySelectorAll(".skills__list-item-inner");
skillsArr.forEach((skill) => {
  skill.addEventListener("mouseover", (e) => {
    e.preventDefault();
    skill.classList.add("animated-skill");
    setTimeout(() => {
      skill.classList.remove("animated-skill");
    }, 1500);
  });
});

// Scroll to top button
const scrollTopBtn = document.getElementById("scroll-top-btn");
if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
      scrollTopBtn.classList.add("is-visible");
    } else {
      scrollTopBtn.classList.remove("is-visible");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    if (typeof lenis !== "undefined" && lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}

// Project Archive Accordion
const projectsExpandBtn = document.getElementById("projects-expand-btn");
const extraProjectCards = document.querySelectorAll(".projects__card--extra");

if (projectsExpandBtn && extraProjectCards.length) {
  let isProjectsOpen = false;
  projectsExpandBtn.addEventListener("click", () => {
    isProjectsOpen = !isProjectsOpen;
    projectsExpandBtn.classList.toggle("is-open", isProjectsOpen);
    const btnText = projectsExpandBtn.querySelector(".projects__expand-btn-text");
    if (btnText) {
      const closedFn = getTranslation("projects.expandClosed", currentLang);
      btnText.textContent = isProjectsOpen
        ? getTranslation("projects.expandOpen", currentLang)
        : (typeof closedFn === "function" ? closedFn(extraProjectCards.length) : `Показать все проекты (ещё ${extraProjectCards.length})`);
    }

    extraProjectCards.forEach((card, index) => {
      if (isProjectsOpen) {
        card.classList.remove("projects__card--hidden");
        if (typeof gsap !== "undefined") {
          gsap.fromTo(
            card,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              delay: index * 0.04,
              ease: "circ.out",
            }
          );
        } else {
          card.style.opacity = "1";
          card.style.transform = "none";
        }
      } else {
        if (typeof gsap !== "undefined") {
          gsap.to(card, {
            y: 20,
            opacity: 0,
            duration: 0.25,
            onComplete: () => {
              card.classList.add("projects__card--hidden");
            },
          });
        } else {
          card.classList.add("projects__card--hidden");
        }
      }
    });

    if (typeof ScrollTrigger !== "undefined") {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 350);
    }
  });
}

// Scrollspy for Header Navigation
const navItems = document.querySelectorAll(".header__nav-item");
const navSections = document.querySelectorAll("main section[id]");

if (navItems.length && navSections.length) {
  const updateScrollSpy = () => {
    const scrollPosition = window.scrollY + 250;
    let currentId = "";

    navSections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      const link = item.querySelector(".header__nav-link");
      if (link && link.getAttribute("href") === `#${currentId}`) {
        item.classList.add("is-active");
      } else {
        item.classList.remove("is-active");
      }
    });
  };

  window.addEventListener("scroll", updateScrollSpy, { passive: true });
  updateScrollSpy();
}

// Quick copy to clipboard with tooltip
document.querySelectorAll(".about__copy-btn").forEach((btn) => {
  let timeoutId = null;
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const textToCopy = btn.getAttribute("data-copy");
    if (!textToCopy) return;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      btn.classList.add("is-copied");
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        btn.classList.remove("is-copied");
      }, 1800);
    } catch (err) {
      console.error("Copy failed", err);
    }
  });
});
