
const CONFIG = {
  // Replace these two values before publishing the website.
  domain: "https://ZEXO-eng.github.io/howsapp/",
  supportEmail: "mjokr7201@gmail.com"
};

function applyConfig() {
  document.querySelectorAll("[data-support-email]").forEach((el) => {
    el.textContent = CONFIG.supportEmail;
    if (el.tagName === "A") el.href = `mailto:${CONFIG.supportEmail}`;
  });
  document.querySelectorAll("[data-domain]").forEach((el) => {
    el.textContent = CONFIG.domain;
  });
}

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("howsapp-site-lang", lang);
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.textContent = lang === "ar" ? "English" : "العربية";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  const saved = localStorage.getItem("howsapp-site-lang");
  const preferred = saved || (navigator.language?.toLowerCase().startsWith("ar") ? "ar" : "en");
  setLanguage(preferred);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(document.documentElement.lang === "ar" ? "en" : "ar");
    });
  });
});
