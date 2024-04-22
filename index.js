//headerの初期化
const initheader = function (count) {
  fetch("/templete/header.json" + count.toString() + ".json")
    .then((res) => res.text())
    .then((header) => {
      document.querySelector("header").innerHTML=header;
    }).catch((err) => console.log(`データが取得できませんでした：${err}`));
};
//ダークモードとライトモード
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

//ハンバーガーメニューの設定
let is_opened_hamburgerMenu = false;
async function hamburger_menu(){
  is_opened_hamburgerMenu = !is_opened_hamburgerMenu;
  const menu = document.querySelector("#hamburger_menus");
  if (is_opened_hamburgerMenu) {
    menu.classList.add("hamburger-open");
    menu.classList.remove("hamburger-close");
    menu.style.width="35%";
    menu.style.opacity="1";
  } else {
    menu.classList.add("hamburger-close");
    menu.classList.remove("hamburger-open");
    menu.style.width="0";
    menu.style.opacity="0";
  }
}