document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu (mobile)
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  navToggle.addEventListener("click", () => {
    if (navMenu.style.display === "flex") {
      navMenu.style.display = "none";
    } else {
      navMenu.style.display = "flex";
    }
  });

  // Animacje sekcji (fade-in) przy scrollu
  const fadeElements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("active");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  fadeElements.forEach(el => observer.observe(el));

  // Dane mieszkań do wizualizacji (przykład)
  const apartments = [
    {
      id: "V.A.07",
      status: "Dostępne",
      floor: 5,
      rooms: 1,
      size: 27.95,
      top: "30%",
      left: "40%"
    },
    {
      id: "V.B.12",
      status: "Rezerwacja",
      floor: 6,
      rooms: 2,
      size: 45.30,
      top: "60%",
      left: "70%"
    },
    {
      id: "V.C.10",
      status: "Sprzedane",
      floor: 3,
      rooms: 3,
      size: 60.15,
      top: "50%",
      left: "20%"
    }
  ];

  // Dodajemy hotspoty do sekcji "wizualizacja"
  const vizWrapper = document.querySelector(".viz-wrapper");

  apartments.forEach(apt => {
    // Tworzymy div hotspot
    const hotspot = document.createElement("div");
    hotspot.classList.add("hotspot");
    hotspot.style.top = apt.top;
    hotspot.style.left = apt.left;

    // Kropka
    const marker = document.createElement("div");
    marker.classList.add("hotspot-marker");

    // Popup
    const popup = document.createElement("div");
    popup.classList.add("hotspot-popup");
    let statusColor = "#444";
    if (apt.status === "Dostępne") statusColor = "green";
    if (apt.status === "Sprzedane") statusColor = "red";
    if (apt.status === "Rezerwacja") statusColor = "#ffaa00";

    popup.innerHTML = `
      <h3>${apt.id} <span style="color:${statusColor}">• ${apt.status}</span></h3>
      <p>
        Piętro: ${apt.floor}<br>
        Pokoje: ${apt.rooms}<br>
        Pow: ${apt.size} m²
      </p>
    `;

    hotspot.appendChild(marker);
    hotspot.appendChild(popup);
    vizWrapper.appendChild(hotspot);
  });
});
