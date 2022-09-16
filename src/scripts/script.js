// mobile menu
const btnMobile = document.querySelector("header button");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

btnMobile.addEventListener("click", () => {
  header.classList.toggle("mobile-menu");

  // hide content
  main.classList.toggle("hide-content");
  footer.classList.toggle("hide-content");
});

const windowWidth = window.innerWidth;
if (!(windowWidth < 800)) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
  });
}

// menu - accessibility
btnMobile.addEventListener("touchstart", (e) => {
  const nav = document.getElementById("nav");
  nav.classList.toggle("menu-active");
  const menuActive = nav.classList.contains("menu-active");
  e.currentTarget.setAttribute("aria-expanded", menuActive);
  if (menuActive) {
    e.currentTarget.setAttribute("aria-label", "Close Menu");
  } else {
    e.currentTarget.setAttribute("aria-label", "Open Menu");
  }
});

// Internal navigation
const navInternalLinks = document.querySelectorAll(
  '.nav-internal-links a[href^="#"]'
);

function scrollToSection(e) {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  const topSection = section.offsetTop - 100;

  header.classList.remove("mobile-menu");
  main.classList.remove("hide-content");
  footer.classList.remove("hide-content");

  window.scrollTo({
    top: topSection,
    behavior: "smooth",
  });
}

navInternalLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});
