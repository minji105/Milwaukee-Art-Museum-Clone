const menu = document.querySelector(".menu");
const menuButton = document.getElementById("menu-button");
const main = document.querySelector(".main");
const footer = document.querySelector("footer");

let menuOpen = false;

menuButton.addEventListener("click", () => {
  if (menu.classList.contains("open")) {
    // menu close

    menu.classList.remove("open");
    menu.classList.add("close");
    if (window.scrollY > 0)
      header.classList.add("scrolled");

    document.body.style.overflow = "auto";

    menuOpen = false;
  } else {
    // menu open

    menu.classList.remove("close");
    menu.classList.add("open");
    header.classList.remove("scrolled");

    document.body.style.overflow = "hidden";

    menuOpen = true;
  }

  menuButton.classList.toggle("toggle");
})
