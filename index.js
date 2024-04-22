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
let hamburger_menu_width=50;
function delay(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve,ms);
  });
}
async function hamburger_menu(){
  is_opened_hamburgerMenu = !is_opened_hamburgerMenu;
  const menu = document.querySelector("#hamburger_menus");
  if (is_opened_hamburgerMenu) {
    for (let i=0;i<25;++i){
      const num=hamburger_menu_width*(i/25)**2
      menu.style.width=num.toString()+"%";
      await delay(5);
    }
  } else {
    for (let i=25;i>0;--i){
      const num=hamburger_menu_width*(i/25)**2
      menu.style.width=num.toString()+"%";
      await delay(5);
    }
  }
}