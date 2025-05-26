window.addEventListener("load", () => {
  document.querySelector(".preloader").style.display = "none";
});

const slides = document.querySelectorAll(".hero-slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 4000);

const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

const setTheme = (theme) => {
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

themeToggle.addEventListener("change", () => {
  setTheme(themeToggle.checked ? "light" : "dark");
});

const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);
themeToggle.checked = savedTheme === "light";
