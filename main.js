document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu - przełączanie
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  navToggle.addEventListener("click", () => {
    if (navMenu.style.display === "flex") {
      navMenu.style.display = "none";
    } else {
      navMenu.style.display = "flex";
    }
  });

  // Intersection Observer – animacje sekcji przy scrollu
  const animatedSections = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("active");
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.1 });

  animatedSections.forEach(section => {
    observer.observe(section);
  });
});
