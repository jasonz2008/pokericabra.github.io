'use strict';
const urlLang = new URLSearchParams(location.search).get('lang');
let savedLang;
try { savedLang = localStorage.getItem('jz-language'); } catch {}
window.portfolioLang = urlLang === 'zh-Hant' || urlLang === 'en' ? urlLang : savedLang === 'zh-Hant' ? 'zh-Hant' : 'en';
window.t = (en, zh) => window.portfolioLang === 'zh-Hant' ? zh : en;
window.applyLanguage = function (language) {
  window.portfolioLang = language;
  const currentUrl = new URL(location.href);currentUrl.searchParams.set("lang", language);history.replaceState(null, "", currentUrl);
  document.documentElement.lang = language;
  const key = language === 'zh-Hant' ? 'zh' : 'en';
  document.querySelectorAll('[data-en]').forEach(el => { el.textContent = el.dataset[key]; });
  for (const attr of ['alt', 'aria', 'placeholder']) {
    document.querySelectorAll(`[data-en-${attr}]`).forEach(el => el.setAttribute(attr === 'aria' ? 'aria-label' : attr, el.getAttribute(`data-${key}-${attr}`)));
  }
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
  document.querySelectorAll('.lang-link').forEach(link => {
    const url = new URL(link.getAttribute('href'), location.href);
    url.searchParams.set('lang', language);
    link.href = url.href;
  });
  try { localStorage.setItem('jz-language', language); } catch {}
  document.dispatchEvent(new CustomEvent('languagechange'));
};
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.lang)));
applyLanguage(window.portfolioLang);
