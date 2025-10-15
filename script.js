document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".desktop-nav");

  // Check if both elements exist before adding the listener
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      // This is a common way to toggle a mobile menu
      // We will add the CSS for the 'nav-open' class in style.css for full functionality
      nav.classList.toggle("nav-open");
    });

    // Optional: Close the menu when a link is clicked (good for single-page designs)
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav-open");
      });
    });
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("mobile-nav");

menuToggle.addEventListener("click", () => {
  // Toggles the 'nav-open' class on the navigation element
  nav.classList.toggle("nav-open");

  // Updates the accessibility attribute
  const isExpanded =
    menuToggle.getAttribute("aria-expanded") === "true" || false;
  menuToggle.setAttribute("aria-expanded", !isExpanded);
});
