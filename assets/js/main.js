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

const changeTheme = document.querySelector(".change-theme");

const savedTheme = window.localStorage.getItem("theme");
if (savedTheme) {
  document.body.classList.toggle("dark-theme", savedTheme === "moon");
  changeTheme.classList.toggle("bx-sun", savedTheme === "sun");
}

changeTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDarkTheme = document.body.classList.contains("dark-theme");
  window.localStorage.setItem("theme", isDarkTheme ? "moon" : "sun");
  changeTheme.classList.toggle("bx-sun", !isDarkTheme);
});

const btnTop = document.querySelector(".btn-top");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 500) {
    btnTop.classList.add("active");
  } else {
    btnTop.classList.remove("active");
  }
});
