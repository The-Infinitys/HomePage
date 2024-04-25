//headerの初期化
const init_header = function () {
  fetch("/templete/header.html")
    .then((res) => res.text())
    .then((header) => {
      document.querySelector("header").innerHTML = header;
    }).catch((err) => console.log(`データが取得できませんでした：${err}`));
};

window.onload = () => {
  init_header();
}


//ハンバーガーメニューの設定
let is_opened_hamburgerMenu = false;
function hamburger_menu() {
  is_opened_hamburgerMenu = !is_opened_hamburgerMenu;
  const menu = document.querySelector("#hamburger_menus");
  if (is_opened_hamburgerMenu) {
    menu.classList.add("hamburger-open");
    menu.classList.remove("hamburger-close");
    menu.style.width = "35%";
    menu.style.opacity = "1";
  } else {
    menu.classList.add("hamburger-close");
    menu.classList.remove("hamburger-open");
    menu.style.width = "0";
    menu.style.opacity = "0";
  }
}