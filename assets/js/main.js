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

  initNav();
  initLang();
})();
