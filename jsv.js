
const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menu.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menu.textContent = "☰";
  });
});

// Automatic copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Reveal sections while scrolling
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section").forEach(section => {
  section.classList.add("reveal");
  observer.observe(section);
});
