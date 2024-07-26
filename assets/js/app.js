const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Typed Js

const typed = new Typed("#hero-titles", {
  strings: ["<i>Creative Agency</i>", "&amp; Typed JS Is Cool"],
  typeSpeed: 80,
  loop: true,
  loopCount: Infinity,
  backDelay: 2000,
});
