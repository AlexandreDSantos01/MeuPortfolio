// Menu Hamburguer
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('show');
});

// Animação simples ao rolar para seções
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section, .hero");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("show");
              }
          });
      },
      {
          threshold: 0.1,
      }
  );

  sections.forEach((section) => {
      section.classList.add("hidden");
      observer.observe(section);
  });
});
