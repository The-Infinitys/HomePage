//headerの初期化
const header_text = `
<a href="/" aria-label="Home">
  <img id="headerLogo" src="/image/The-Infinitys.webp" alt="" />
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
  <div><a aria-label="Home" href="/">Home</a></div>
  <div><a href="/blog">Blog</a></div>
  <div><a href="https://scratch.mit.edu/users/The_Infinitys">Scratch</a></div>
  <div><a href="https://github.com/The-Infinitys">GitHub</a></div>
</div>
`;
const init_header = function () {
  const header = document.createElement("header");
  header.style = `
  animation-name: show;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: initial;
  `;
  header.innerHTML = header_text;
  document.body.prepend(header);
};
const generate_Infinitys = function () {
  document.querySelector("#headerLogo").src =
    The_Infinitys(Math.floor(window.innerWidth / 10), 5);
  document.querySelector("#logo").src =
    The_Infinitys(Math.floor(window.innerWidth / 2), 1);
};

//generate Infinity
function The_Infinitys(size, quality) {
  const hsvToRgb16 = function (hue, saturation, value) {
    var result = false;
    if (
      (saturation || saturation === 0) &&
      saturation <= 100 &&
      (value || value === 0) &&
      value <= 100
    ) {
      var red = 0,
        green = 0,
        blue = 0,
        i = 0,
        f = 0,
        q = 0,
        p = 0,
        t = 0;
      hue = Number(hue % 360) / 60;
      saturation = Number(saturation) / 100;
      value = Number(value) / 100;
      if (saturation === 0) {
        red = value;
        green = value;
        blue = value;
      } else {
        i = Math.floor(hue);
        f = hue - i;
        p = value * (1 - saturation);
        q = value * (1 - saturation * f);
        t = value * (1 - saturation * (1 - f));
        switch (i) {
          case 0:
            red = value;
            green = t;
            blue = p;
            break;
          case 1:
            red = q;
            green = value;
            blue = p;
            break;
          case 2:
            red = p;
            green = value;
            blue = t;
            break;
          case 3:
            red = p;
            green = q;
            blue = value;
            break;
          case 4:
            red = t;
            green = p;
            blue = value;
            break;
          case 5:
            red = value;
            green = p;
            blue = q;
            break;
        }
      }
      result = {
        red: Math.round(red * 255).toString(),
        green: Math.round(green * 255).toString(),
        blue: Math.round(blue * 255).toString(),
      };
    }
    return "rgb(" + result.red + "," + result.green + "," + result.blue + ")";
  };
  const inf = (t) => {
    if (t < 0 || 720 < t) {
      return inf(t % 720);
    }
    const r = t * (Math.PI / 180);
    if (t < 360) {
      return {
        x: 100 * (Math.cos(r) - 1),
        y: Math.sin(r) * 80
      }
    } else {
      return {
        x: -100 * (Math.cos(r) - 1),
        y: Math.sin(r) * 80
      }
    }
  }
  const circle = (t) => {
    if (t < 0 || 360 < t) {
      return circle(t % 360);
    }
    const r = t * (Math.PI / 180);
    return {
      x: Math.cos(r),
      y: Math.sin(r)
    }
  };
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const graphics = canvas.getContext("2d");
  graphics.clearRect(0, 0, canvas.width, canvas.height)
  let before_data = inf(0);
  graphics.lineWidth = canvas.width / 57;
  for (let i = 0; i <= 720; i += quality) {
    const data = inf(i);
    graphics.beginPath();
    graphics.moveTo(before_data.x * canvas.width / 500 + canvas.width / 2, before_data.y * canvas.height / 500 + canvas.height / 2);
    graphics.lineTo(data.x * canvas.width / 500 + canvas.width / 2, data.y * canvas.height / 500 + canvas.height / 2);
    graphics.closePath();
    graphics.strokeStyle = hsvToRgb16((data.x + 200) / 400 * 360, 100, 100);
    graphics.stroke();
    before_data = data;
  }
  before_data = circle(0);
  graphics.lineWidth = canvas.width / 777;
  for (let count = 0; count < 777; count += quality * 10) {
    for (let t = 0; t <= 360; t += quality) {
      let data = circle(t);
      data.x *= 1 - count / 7777
      data.y *= 1 - count / 7777
      graphics.beginPath();
      graphics.moveTo(before_data.x * canvas.width / 2.22 + canvas.width / 2, before_data.y * canvas.height / 2.22 + canvas.height / 2);
      graphics.lineTo(data.x * canvas.width / 2.22 + canvas.width / 2, data.y * canvas.height / 2.22 + canvas.height / 2);
      graphics.closePath();
      graphics.strokeStyle = hsvToRgb16((t + 360 + count / 7.7) % 360, 100, 100);
      graphics.stroke();
      before_data = data;
    }
  }
  return canvas.toDataURL("image/webp", 1);
}
//
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
