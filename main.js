document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  navToggle.addEventListener("click", () => {
    // Przełączanie widoczności menu w widoku mobilnym
    if (navMenu.style.display === "flex") {
      navMenu.style.display = "none";
    } else {
      navMenu.style.display = "flex";
    }
  });

  // Prosta animacja fade-in przy scrollu (Intersection Observer)
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => observer.observe(el));
});
