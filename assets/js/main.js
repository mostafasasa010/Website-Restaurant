const menuBtn = document.querySelector(".icon-menu");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 200) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
});

const navLinks = document.querySelectorAll(".nav-menu li a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
