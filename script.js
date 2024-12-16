// script.js
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links li a");

  // Abrir e fechar o menu
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Fechar o menu ao clicar fora dele
  document.addEventListener("click", function (event) {
    if (
      !navLinks.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      navLinks.classList.remove("active");
    }
  });

  // Fechar o menu ao clicar em uma opção do menu
  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });
});
