document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  navToggle.addEventListener("click", () => {
    // Proste przełączanie widoczności menu na mobile
    if (navMenu.style.display === "flex") {
      navMenu.style.display = "none";
    } else {
      navMenu.style.display = "flex";
    }
  });

  // Animacje przy scrollowaniu – Intersection Observer
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
