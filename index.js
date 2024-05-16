//headerの初期化
const header = `
<a href="/"
  ><img id="headerLogo" src="/image/The-Infinitys.webp" alt="" />
</a>
<h1>The Infinity's</h1>
<button
  id="hamburger_menu_button"
  aria-label="hamburger_menu_button"
  onclick="hamburger_menu()">
  <svg
    id="hamburger_menu_icon"
    viewBox="0 0 100 100"
    fill="none"
    stroke-width="10">
    <line x1="10" y1="20" x2="90" y2="20" />
    <line x1="10" y1="50" x2="90" y2="50" />
    <line x1="10" y1="80" x2="90" y2="80" />
  </svg>
</button>
<!--hamburger menu-->
<div id="hamburger_menus">
  <div><a href="/">Home</a></div>
  <div><a href="/blog">Blog</a></div>
  <div><a href="https://scratch.mit.edu/users/The_Infinitys">Scratch</a></div>
  <div><a href="https://github.com/The-Infinitys">GitHub</a></div>
</div>
`;
const init_header = function () {
  document.querySelector("header").innerHTML = header;
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
    menu.style.width = "var(--hamburger-width)";
    menu.style.opacity = "1";
  } else {
    menu.classList.add("hamburger-close");
    menu.classList.remove("hamburger-open");
    menu.style.width = "0";
    menu.style.opacity = "0";
  }
}
