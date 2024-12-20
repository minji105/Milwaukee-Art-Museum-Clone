const menu = document.querySelector(".menu");
const menuButtons = document.querySelectorAll("#menu-button");
const main = document.querySelector(".main");
const footer = document.querySelector("footer");

let menuOpen = false;

menuButtons.forEach((menuButton) => {
  menuButton.addEventListener("click", () => {
    if (menu.classList.contains("open")) {
      // menu close

      menu.classList.remove("open");
      menu.classList.add("close");

      if (window.scrollY > 0)
        header.classList.add("scrolled");

      lenis.start();
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";

      menuOpen = false;
    } else {
      // menu open

      menu.classList.remove("close");
      menu.classList.add("open");
      header.classList.remove("scrolled");

      lenis.stop();
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      menuOpen = true;
    }

    menuButton.classList.toggle("toggle");
  })
})
