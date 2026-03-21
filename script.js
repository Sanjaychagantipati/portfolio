// Navbar active section highlight
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
      link.style.color = "white";
    }
  });
});