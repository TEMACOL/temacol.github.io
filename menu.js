document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");

  if (toggle && navbar) {
    toggle.addEventListener("click", () => {
      navbar.classList.toggle("show");
    });
  }
});

document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".navbar").classList.remove("show");
  });
});