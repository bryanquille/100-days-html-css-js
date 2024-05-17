const header = document.querySelector("#header");
const hero = document.querySelector("#hero");
const navlinks = document.querySelectorAll(".navlink");

let heroHeight = hero.clientHeight;
const headerHeight = header.clientHeight;

if (window.innerHeight <= 800 && window.innerWidth >= 768) {
  hero.setAttribute("style", "height: 100vh");
  heroHeight = hero.clientHeight;
}

window.addEventListener("scroll", () => {
  if (window.scrollY >= heroHeight - headerHeight) {
    header.style = `
            background-color: #f0d43a;
            color: #000000;
            backdrop-filter: unset;
            transition: background-color 0.3s, color 0.3s;
        `;
    navlinks.forEach((navlink) => {
      navlink.style = `border-color: #000000;`;
      navlink.addEventListener("mouseover", () => {
        navlink.classList.add("navlink-hover");
      });
      navlink.addEventListener("mouseout", () => {
        navlink.classList.remove("navlink-hover");
      });
    });
  } else {
    header.removeAttribute("style");
    navlinks.forEach((navlink) => {
      navlink.removeAttribute("style");
      navlink.addEventListener("mouseover", () => {
        navlink.classList.remove("navlink-hover");
      });
    });
  }
});
