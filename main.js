gsap.registerPlugin(ScrollTrigger);

// язык определяется inline-скриптом в <head>, чтобы не мигал контент
let currentLang = window.__initialLang || "ru";

function t(path, lang = currentLang) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), translations[lang]);
}

// typewriter
const typeText = document.querySelector(".information__subtitle-text");
const pipe = document.querySelector(".pipe");
let textInterval = null;
let pipeInterval = null;
let counter = 0;
let symbolCounter = 0;
let pipeCheck = true;
let phraseArray = t("hero.roles");

function getPipe() {
  pipeCheck = !pipeCheck;
  pipe.style.display = pipeCheck ? "inline-block" : "none";
}

function changeTypeText() {
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
    pipe.style.display = "inline-block";
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
    const phrase = phraseArray[counter];
    typeText.textContent = phrase.slice(0, symbolCounter);
    symbolCounter += num;
    typeTextAnimation(phrase);
  }
}

function restartTypewriter() {
  clearInterval(textInterval);
  clearInterval(pipeInterval);
  counter = 0;
  symbolCounter = 0;
  typeText.textContent = "";
  changeTypeText();
}

// i18n
function setMeta(selector, value) {
  const el = document.querySelector(selector);
  if (el && value) el.setAttribute("content", value);
}

function applyTranslations(lang) {
  document.documentElement.lang = lang;
  document.title = t("meta.title", lang);
  setMeta('meta[name="description"]', t("meta.description", lang));
  setMeta('meta[property="og:title"]', t("meta.ogTitle", lang));
  setMeta('meta[property="og:description"]', t("meta.ogDesc", lang));
  setMeta('meta[property="og:locale"]', lang === "ru" ? "ru_RU" : "en_US");
  setMeta('meta[name="twitter:title"]', t("meta.twitterTitle", lang));
  setMeta('meta[name="twitter:description"]', t("meta.twitterDesc", lang));

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const val = t(el.dataset.i18n, lang);
    if (typeof val !== "string") return;
    if (el.dataset.i18nHtml === "true") {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  // формат: data-i18n-attr="href:contacts.resumeLink,aria-label:contacts.resumeAria"
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      const val = t(key, lang);
      if (typeof val === "string") el.setAttribute(attr, val);
    });
  });

  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", isActive);
  });

  phraseArray = t("hero.roles", lang);
}

applyTranslations(currentLang);

document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    if (lang === currentLang) return;
    currentLang = lang;

    try {
      localStorage.setItem("portfolio_lang", lang);
    } catch (e) {
      // приватный режим Safari
    }
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);

    applyTranslations(lang);
    updateExpandButton();

    // после смены текста Splitting нужно перезапустить
    Splitting({ target: "[data-splitting]", force: true });
    document.querySelectorAll(".char, .word").forEach((el) => {
      el.style.opacity = "1";
    });
    ScrollTrigger.refresh();
    restartTypewriter();
  });
});

Splitting();
changeTypeText();

// плавный скролл
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let lenis = null;

if (!prefersReducedMotion) {
  lenis = new Lenis({
    duration: 1.2,
    easing: (x) => Math.min(1, 1.001 - Math.pow(2, -10 * x)),
  });
  lenis.on("scroll", ScrollTrigger.update);

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

function scrollToTarget(target, offset = 0) {
  if (lenis) {
    lenis.scrollTo(target, { offset });
  } else {
    const el = typeof target === "number" ? null : document.querySelector(target);
    window.scrollTo({ top: el ? el.offsetTop + offset : target, behavior: "smooth" });
  }
}

// анимации
const heroTl = gsap.timeline({ defaults: { ease: "power2.inOut", duration: 0.6 } });
heroTl.fromTo(".header", { opacity: 0 }, { opacity: 1 });
heroTl.fromTo(".information", { opacity: 0 }, { opacity: 1 }, "-=0.3");

function revealTitle(selector) {
  gsap.to(selector, { stagger: 0.03, opacity: 1, ease: "power2.inOut" });
}

function slideUp(selector, extra = {}) {
  gsap.to(selector, { y: 0, opacity: 1, ease: "circ.out", duration: 0.8, ...extra });
}

function onReveal(trigger, offset, callback) {
  ScrollTrigger.create({ trigger, start: `top bottom-=${offset}`, once: true, onEnter: callback });
}

onReveal(".about", 100, () => {
  revealTitle(".about .title .char");
  gsap.to(".about .about__description .word", { stagger: 0.015, opacity: 1, ease: "power2.inOut" });
});
onReveal(".about", 150, () => slideUp(".about__list li"));
onReveal(".skills", 150, () => {
  revealTitle(".skills h2 .char");
  slideUp(".skills__list");
});
onReveal(".projects", 150, () => {
  slideUp(".projects__card:not(.projects__card--hidden)");
  revealTitle(".projects h2 .char");
});
onReveal(".contacts", 150, () => {
  revealTitle(".contacts h2 .char");
  slideUp(".contacts__list li", { stagger: 0.05 });
});

// навигация
document.querySelectorAll(".header__nav-link, .link-btn").forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (!href.startsWith("#")) return;
    e.preventDefault();
    scrollToTarget(href, -30);
  });
});

const navItems = document.querySelectorAll(".header__nav-item");
const navSections = document.querySelectorAll("main section[id]");

function updateScrollSpy() {
  const pos = window.scrollY + 250;
  let currentId = "";
  navSections.forEach((section) => {
    if (pos >= section.offsetTop && pos < section.offsetTop + section.offsetHeight) {
      currentId = section.id;
    }
  });
  navItems.forEach((item) => {
    const href = item.querySelector(".header__nav-link").getAttribute("href");
    item.classList.toggle("is-active", href === `#${currentId}`);
  });
}

const scrollTopBtn = document.getElementById("scroll-top-btn");

window.addEventListener(
  "scroll",
  () => {
    updateScrollSpy();
    scrollTopBtn.classList.toggle("is-visible", window.scrollY > 450);
  },
  { passive: true }
);
updateScrollSpy();

scrollTopBtn.addEventListener("click", () => scrollToTarget(0));

// переворот карточки навыка
document.querySelectorAll(".skills__list-item-inner").forEach((skill) => {
  const flip = () => {
    if (skill.classList.contains("animated-skill")) return;
    skill.classList.add("animated-skill");
    setTimeout(() => skill.classList.remove("animated-skill"), 1500);
  };
  skill.addEventListener("mouseover", flip);
  skill.addEventListener("touchstart", flip, { passive: true });
});

// копирование контактов
document.querySelectorAll(".about__copy-btn").forEach((btn) => {
  let timeoutId = null;
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
    } catch (err) {
      console.error("Не удалось скопировать", err);
      return;
    }
    btn.classList.add("is-copied");
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => btn.classList.remove("is-copied"), 1800);
  });
});

// проекты: вкладки и кнопка "показать все"
const INITIAL_LIMIT = 9;
const tabBtns = document.querySelectorAll(".wp-tab-btn");
const cards = [...document.querySelectorAll(".wp-card[data-category]")];
const expandBtn = document.getElementById("projects-expand-btn");
const expandText = expandBtn.querySelector(".projects__expand-btn-text");
const moreContainer = document.querySelector(".projects__more-container");
let activeFilter = document.querySelector(".wp-tab-btn.is-active").dataset.filter;
let isProjectsOpen = false;

function getCategoryCards() {
  return cards.filter((card) => activeFilter === "all" || card.dataset.category === activeFilter);
}

// последнюю карточку в неполном ряду центрируем
function updateLoneCards() {
  const visible = cards.filter((card) => !card.classList.contains("is-hidden"));
  const perRow = window.innerWidth > 1024 ? 3 : window.innerWidth > 680 ? 2 : 1;
  cards.forEach((card) => card.classList.remove("is-lone-card"));
  if (perRow > 1 && visible.length % perRow === 1) {
    visible[visible.length - 1].classList.add("is-lone-card");
  }
}

function updateExpandButton() {
  const extraCount = getCategoryCards().length - INITIAL_LIMIT;
  moreContainer.style.display = extraCount > 0 ? "flex" : "none";
  if (extraCount <= 0) return;
  expandBtn.classList.toggle("is-open", isProjectsOpen);
  expandText.textContent = isProjectsOpen ? t("projects.expandOpen") : t("projects.expandClosed")(extraCount);
}

function renderProjects(animate = false) {
  const categoryCards = getCategoryCards();
  cards.forEach((card) => {
    if (!categoryCards.includes(card)) card.classList.add("is-hidden");
  });

  categoryCards.forEach((card, index) => {
    const isExtra = index >= INITIAL_LIMIT;
    card.classList.toggle("wp-card--extra", isExtra);

    if (isExtra && !isProjectsOpen) {
      card.classList.add("is-hidden");
      return;
    }

    const wasHidden = card.classList.contains("is-hidden");
    card.classList.remove("is-hidden");
    if (animate && wasHidden) {
      gsap.fromTo(
        card,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.35, delay: (index % 3) * 0.05, ease: "power2.out" }
      );
    } else if (!animate) {
      card.style.opacity = "1";
      card.style.transform = "none";
    }
  });

  updateLoneCards();
  updateExpandButton();
  setTimeout(() => ScrollTrigger.refresh(), 200);
}

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    activeFilter = btn.dataset.filter;
    tabBtns.forEach((b) => {
      b.classList.toggle("is-active", b === btn);
      b.setAttribute("aria-selected", b === btn);
    });
    renderProjects(true);
  });
});

expandBtn.addEventListener("click", () => {
  isProjectsOpen = !isProjectsOpen;
  if (!isProjectsOpen) {
    const section = document.getElementById("projects");
    if (section.getBoundingClientRect().top < 0) scrollToTarget("#projects");
  }
  renderProjects(isProjectsOpen);
});

window.addEventListener("resize", updateLoneCards);
renderProjects();

// мобильное меню
const burger = document.getElementById("header-burger");
const headerNav = document.getElementById("header-nav");

function toggleMenu(open) {
  burger.classList.toggle("is-open", open);
  headerNav.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", t(open ? "ui.menuClose" : "ui.menuOpen"));
}

burger.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu(!burger.classList.contains("is-open"));
});

headerNav.querySelectorAll(".header__nav-link").forEach((link) => {
  link.addEventListener("click", () => toggleMenu(false));
});

document.addEventListener("click", (e) => {
  if (burger.classList.contains("is-open") && !headerNav.contains(e.target)) {
    toggleMenu(false);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") toggleMenu(false);
});
