// ---------------- NAVBAR ACTIVE LINK ----------------
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY;

  links.forEach(link => {
    let section = document.querySelector(link.getAttribute("href"));

    if (
      section.offsetTop <= fromTop + 100 &&
      section.offsetTop + section.offsetHeight > fromTop + 100
    ) {
      link.style.color = "#38bdf8";
    } else {
      link.style.color = "#cbd5f5";
    }
  });
});


// ---------------- FADE ANIMATION (CORRECT) ----------------
const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show"); // 🔥 key line
    }
  });
}, { threshold: 0.2 });

faders.forEach(el => observer.observe(el));


// ---------------- HAMBURGER MENU ----------------
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}


// ---------------- TYPING EFFECT ----------------
const text = "Aspiring Java Full Stack Developer";
let i = 0;

function typingEffect() {
  const typingElement = document.getElementById("typing");

  if (typingElement && i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 50);
  }
}

typingEffect();