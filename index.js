const white = document.querySelector("#headerLogo-white");
const black = document.querySelector("#headerLogo-black");
setInterval(() => {
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const darkModeOn = darkModeMediaQuery.matches;
  if (darkModeOn) {
    black.style.visibility = "visible";
    white.style.visibility = "hidden";
  } else {
    black.style.visibility = "hidden";
    white.style.visibility = "visible";
  }
}, 100);

let is_opened_hamburgerMenu = false;
let hamburger_menu = () => {
  is_opened_hamburgerMenu = !is_opened_hamburgerMenu;
  const menu = document.querySelector("#hamburger_menus");
  if (is_opened_hamburgerMenu) {
    menu.style.visibility = "visible";
  } else {
    menu.style.visibility = "hidden";
  }
};