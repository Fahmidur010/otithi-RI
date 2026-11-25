/**
 * Otithi chrome: mobile nav + EN/BN language switch.
 */
(function () {
  "use strict";

  var i18n = window.OtithiI18n;
  if (!i18n) return;

  function getStoredLang() {
    try {
      var stored = localStorage.getItem(i18n.storageKey);
      if (stored === "en" || stored === "bn") return stored;
    } catch (e) {
      /* ignore */
    }
    return i18n.defaultLang;
  }

  function setStoredLang(lang) {
    try {
      localStorage.setItem(i18n.storageKey, lang);
    } catch (e) {
      /* ignore */
    }
  }

  function applyLang(lang) {
    var dict = i18n.strings[lang] || i18n.strings.en;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (key && Object.prototype.hasOwnProperty.call(dict, key)) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
      var btnLang = btn.getAttribute("data-lang");
      btn.setAttribute("aria-pressed", btnLang === lang ? "true" : "false");
    });

    var toggle = document.querySelector("[data-nav-toggle]");
    if (toggle) {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute(
        "aria-label",
        open ? dict["a11y.closeMenu"] : dict["a11y.openMenu"]
      );
    }

    updateSeasonDate();
  }

  function closeNav() {
    var header = document.querySelector("[data-site-header]");
    var toggle = document.querySelector("[data-nav-toggle]");
    if (!header || !toggle) return;
    header.classList.remove("is-nav-open");
    toggle.setAttribute("aria-expanded", "false");
    var lang = document.documentElement.lang || "en";
    var dict = i18n.strings[lang] || i18n.strings.en;
    toggle.setAttribute("aria-label", dict["a11y.openMenu"]);
  }

  function openNav() {
    var header = document.querySelector("[data-site-header]");
    var toggle = document.querySelector("[data-nav-toggle]");
    if (!header || !toggle) return;
    header.classList.add("is-nav-open");
    toggle.setAttribute("aria-expanded", "true");
    var lang = document.documentElement.lang || "en";
    var dict = i18n.strings[lang] || i18n.strings.en;
    toggle.setAttribute("aria-label", dict["a11y.closeMenu"]);
  }

  function initNav() {
    var header = document.querySelector("[data-site-header]");
    var toggle = document.querySelector("[data-nav-toggle]");
    if (!header || !toggle) return;

    toggle.addEventListener("click", function () {
      if (header.classList.contains("is-nav-open")) {
        closeNav();
      } else {
        openNav();
      }
    });

    header.querySelectorAll(".site-nav__link").forEach(function (link) {
      link.addEventListener("click", function () {
        closeNav();
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeNav();
    });
  }

  function initLang() {
    var lang = getStoredLang();
    applyLang(lang);

    document.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var next = btn.getAttribute("data-lang");
        if (next !== "en" && next !== "bn") return;
        setStoredLang(next);
        applyLang(next);
      });
    });
  }

  function prefersReducedMotion() {
    return (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function initHeroSlideshow() {
    var root = document.querySelector("[data-hero-slideshow]");
    var section = document.querySelector(".hero-living");
    if (!root) return;

    var slides = Array.prototype.slice.call(
      root.querySelectorAll("[data-hero-slide]")
    );
    var scenes = Array.prototype.slice.call(
      root.querySelectorAll("[data-hero-scene]")
    );
    var frame = root.querySelector(".hero-living__frame") || root.querySelector(".hero-living__slides");
    if (slides.length < 2) return;

    var index = 0;
    var timer = null;
    var intervalMs = 5200;
    var dragStartX = null;

    function show(next) {
      var previous = index;
      index = (next + slides.length) % slides.length;

      slides.forEach(function (slide, i) {
        slide.classList.remove("is-exit");
        if (i === previous && previous !== index) slide.classList.add("is-exit");
        slide.classList.toggle("is-active", i === index);
      });

      scenes.forEach(function (scene) {
        scene.classList.remove("is-active");
        scene.removeAttribute("aria-current");
      });
      // Reflow so the active scene progress bar restarts cleanly
      void root.offsetWidth;
      if (scenes[index]) {
        scenes[index].classList.add("is-active");
        scenes[index].setAttribute("aria-current", "true");
      }
    }

    function stop() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
      if (section) section.classList.add("is-paused");
    }

    function start() {
      stop();
      if (section) section.classList.remove("is-paused");
      if (prefersReducedMotion()) return;
      timer = window.setInterval(function () {
        show(index + 1);
      }, intervalMs);
    }

    scenes.forEach(function (scene, i) {
      scene.addEventListener("click", function () {
        show(i);
        start();
      });
    });

    document.querySelectorAll("[data-hero-jump]").forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        var jump = Number(el.getAttribute("data-hero-jump"));
        if (!Number.isFinite(jump)) return;
        show(jump);
        stop();
      });
      el.addEventListener("mouseleave", start);
    });

    if (frame) {
      frame.addEventListener("pointerdown", function (event) {
        dragStartX = event.clientX;
      });
      frame.addEventListener("pointerup", function (event) {
        if (dragStartX == null) return;
        var delta = event.clientX - dragStartX;
        dragStartX = null;
        if (Math.abs(delta) < 40) return;
        if (delta < 0) show(index + 1);
        else show(index - 1);
        start();
      });
      frame.addEventListener("pointercancel", function () {
        dragStartX = null;
      });
    }

    root.addEventListener("keydown", function (event) {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        show(index + 1);
        start();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        show(index - 1);
        start();
      }
    });

    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    root.addEventListener("focusin", stop);
    root.addEventListener("focusout", function (event) {
      if (!root.contains(event.relatedTarget)) start();
    });

    show(0);
    start();
  }

  function updateSeasonDate() {
    var el = document.querySelector("[data-season-date]");
    if (!el) return;

    var lang = document.documentElement.lang || "en";
    var now = new Date();
    try {
      el.textContent = new Intl.DateTimeFormat(lang === "bn" ? "bn-BD" : "en-GB", {
        month: "long",
        year: "numeric",
      }).format(now);
    } catch (e) {
      /* keep static HTML fallback */
    }
  }

  function initReveal() {
    var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
    if (!nodes.length) return;

    if (prefersReducedMotion() || typeof IntersectionObserver !== "function") {
      nodes.forEach(function (node) {
        node.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    nodes.forEach(function (node) {
      observer.observe(node);
    });
  }

  initNav();
  initLang();
  initHeroSlideshow();
  initReveal();
})();
