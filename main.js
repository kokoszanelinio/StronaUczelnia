// Prosty skrypt do obsługi hamburger menu w widoku mobilnym
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  navToggle.addEventListener("click", () => {
    navMenu.style.display =
      navMenu.style.display === "flex" ? "none" : "flex";
  });
});
