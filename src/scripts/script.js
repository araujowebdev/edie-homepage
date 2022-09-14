// mobile menu
const btnMobile = document.querySelector("header button");
const header = document.querySelector("header");
btnMobile.addEventListener("click", () => {
  header.classList.toggle("mobile-menu");

  // hide content
  const main = document.querySelector("main");
  main.classList.toggle("hide-content");
});

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
