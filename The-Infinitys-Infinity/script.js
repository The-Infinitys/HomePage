
const init_header = function () {
  //headerの初期化
  const header_text = `
    <a href="/" aria-label="Home">
      <img id="headerLogo" class="The-Infinitys" src="/image/The-Infinitys.webp" alt="" onerror="generate_Infinitys()" />
    </a>
    <h1>The Infinity's</h1>
    <button
      id="hamburger_menu_button"
      aria-label="hamburger_menu_button"
      onclick="hamburger_menu()">
      <div
      class="hamburger_menu_icon"
      id="open_hamburger_menu">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke-width="10">
          <line x1="10" y1="20" x2="90" y2="20" />
          <line x1="10" y1="50" x2="90" y2="50" />
          <line x1="10" y1="80" x2="90" y2="80" />
        </svg>
      </div>
      <div
      class="hamburger_menu_icon"
      id="close_hamburger_menu"
      style="opacity:0;"
      >
        <svg
          viewBox="-60 -60 120 120"
          fill="none"
          >
          <ellipse cx="-25" cy="0" rx="25" ry="20" stroke-width="2" />
          <ellipse cx="25" cy="0" rx="25" ry="20" stroke-width="2" />
          <circle cx="0" cy="0" r="50" stroke-width="4" />
        </svg>
      </div>
    </button>
    <!--hamburger menu-->
    <table id="hamburger_menus">
      <tr>
        <th scope="col">
          <!--icon-->
        </th>
          <!--name-->
        <th scope="col">
        </th>
      </tr>
      <tr>
        <th>
          <img
            alt=""
            class="hamburger_menus-contents-icons"
            src="/image/header/infinity.svg" />
        </th>
        <th><a aria-label="Home" href="/">Home </a></th>
      </tr>
      <tr>
        <th>
          <img
            alt=""
            class="hamburger_menus-contents-icons"
            src="/image/header/blog.svg" />
        </th>
        <th>
          <a href="/blog/">Blog </a>
        </th>
      </tr>
      <tr>
        <th>
          <img
            alt=""
            class="hamburger_menus-contents-icons"
            src="/image/header/scratch.svg" />
        </th>
        <th>
          <a href="https://scratch.mit.edu/users/The_Infinitys">Scratch </a>
        </th>
      </tr>
      <tr>
        <th>
          <img
            alt=""
            class="hamburger_menus-contents-icons"
            src="/image/header/github.svg" />
        </th>
        <th>
          <a href="https://github.com/The-Infinitys">GitHub </a>
        </th>
      </tr>
    </table>
`;
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

const init_footer = function () {
  //headerの初期化
  const footer_text = `
    <div>
      <div>
        <p><a href="/contact/">Contact to The Infinity's</a></p>
        <p><a href="/blog/">Watch The Infinity's Blog</a></p>
        <p><a href="https://scratch.mit.edu/users/The_Infinitys/">Go to Scratch profile</a></p>
        <p><a href="https://github.com/The_Infinitys/">Go to GitHub profile</a></p>
      </div>
    </div>
    <h1>&copy; 2024 The Infinity's</h1>
  `;
  const footer = document.createElement("footer");
  footer.style = `
  animation-name: show;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: initial;
  `;
  footer.innerHTML = footer_text;
  document.body.append(footer);
};
const generate_Infinitys = function () {
  const The_Infinitys = (size, quality) => {
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
  const elems = document.getElementsByClassName("The-Infinitys");
  for (let i = 0; i < elems.length; ++i) {
    elems[i].src = The_Infinitys(400, 2);
  }
};
//ハンバーガーメニューの設定
let is_opened_hamburgerMenu = false;
function hamburger_menu() {
  is_opened_hamburgerMenu = !is_opened_hamburgerMenu;
  const menu = document.querySelector("#hamburger_menus");
  const open_button = document.querySelector("#open_hamburger_menu");
  const close_button = document.querySelector("#close_hamburger_menu");
  if (is_opened_hamburgerMenu) {
    //open the menu
    open_button.classList.remove("hamburger_menu_icon_show");
    open_button.classList.add("hamburger_menu_icon_hide");
    close_button.classList.remove("hamburger_menu_icon_hide");
    close_button.classList.add("hamburger_menu_icon_show");
    menu.classList.add("hamburger-open");
    menu.classList.remove("hamburger-close");
    open_button.style.opacity = "0";
    close_button.style.opacity = "1";
    menu.style.left = "calc(100vw - var(--hamburger-width))";
    menu.style.opacity = "1";
  } else {
    //close the menu
    open_button.classList.add("hamburger_menu_icon_show");
    open_button.classList.remove("hamburger_menu_icon_hide");
    close_button.classList.add("hamburger_menu_icon_hide");
    close_button.classList.remove("hamburger_menu_icon_show");
    menu.classList.add("hamburger-close");
    menu.classList.remove("hamburger-open");
    open_button.style.opacity = "1";
    close_button.style.opacity = "0";
    menu.style.left = "100vw";
    menu.style.opacity = "0";
  }
}
const generate_honeycomb = () => {
  //ダークモード・ライトモード対応
  const root3 = 1.7320508;
  const RainbowHoneycomb = document.createElement("canvas");
  RainbowHoneycomb.id = "RainbowHoneycomb";
  RainbowHoneycomb.style = `
    position:fixed;
    width:100vw;
    height:100vh;
    top:0;
    left:0;
    z-index:-100;
    animation-name: show;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: initial;
  `;
  document.body.appendChild(RainbowHoneycomb);
  const draw = RainbowHoneycomb.getContext("2d");
  const rainbow_svg = document.createElement("img");
  rainbow_svg.src = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB2aWV3Qm94PSIwLDAsNDgwLDM2MCI+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAiIHkxPSIxODAiIHgyPSI4MCIgeTI9IjE4MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmYwMDAwIiAvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmZmMDAiIC8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjgwIiB5MT0iMTgwIiB4Mj0iMTYwIiB5Mj0iMTgwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTIiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmMDAiIC8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwZmYwMCIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMTYwIiB5MT0iMTgwIiB4Mj0iMjQwIiB5Mj0iMTgwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTMiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMGZmMDAiIC8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwZmZmZiIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMjQwIiB5MT0iMTgwIiB4Mj0iMzIwIiB5Mj0iMTgwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTQiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMGZmZmYiIC8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwMDBmZiIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMzIwIiB5MT0iMTgwIiB4Mj0iNDAwIiB5Mj0iMTgwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTUiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMDAwZmYiIC8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmMDBmZiIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNDAwIiB5MT0iMTgwIiB4Mj0iNDgwIiB5Mj0iMTgwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTYiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZjAwZmYiIC8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmMDAwMCIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgdHJhbnNmb3JtPSIiPgogICAgICAgIDxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMCIKICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIgogICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPgogICAgICAgICAgICA8cGF0aCBkPSJNMCwzNjB2LTM2MWg4MHYzNjF6IiBmaWxsPSJ1cmwoI2NvbG9yLTEpIiAvPgogICAgICAgICAgICA8cGF0aCBkPSJNODAsMzYwdi0zNjFoODB2MzYxeiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9InVybCgjY29sb3ItMikiIC8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNjAsMzYwdi0zNjFoODB2MzYxeiIgZmlsbD0idXJsKCNjb2xvci0zKSIgLz4KICAgICAgICAgICAgPHBhdGggZD0iTTI0MCwzNjB2LTM2MWg4MHYzNjF6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0idXJsKCNjb2xvci00KSIgLz4KICAgICAgICAgICAgPHBhdGggZD0iTTMyMCwzNjB2LTM2MWg4MHYzNjF6IiBmaWxsPSJ1cmwoI2NvbG9yLTUpIiAvPgogICAgICAgICAgICA8cGF0aCBkPSJNNDAwLDM2MHYtMzYxaDgwdjM2MXoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSJ1cmwoI2NvbG9yLTYpIiAvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjI0MDoxODAtLT4=";
  rainbow_svg.style = `
    position:fixed;
    width:100vw;
    height:100vh;
    top:0;
    left:0;
    z-index:-1000;
    object-fit:fill;
    animation: show 5s linear 1;
  `;
  rainbow_svg.alt = "";
  document.body.appendChild(rainbow_svg);
  const honeycomb = (x, y, r, color) => {
    draw.fillStyle = color;
    draw.beginPath();
    draw.moveTo(x, y - r);
    draw.lineTo(x + (root3 / 2) * r, y - r / 2);
    draw.lineTo(x + (root3 / 2) * r, y + r / 2);
    draw.lineTo(x, y + r);
    draw.lineTo(x - (root3 / 2) * r, y + r / 2);
    draw.lineTo(x - (root3 / 2) * r, y - r / 2);
    draw.fill();
  }
  const radius = 50;
  const radius_percent = 1.12;
  // const hsvToRgb16 = function (hue, saturation, value) {
  //   var result = false;
  //   if (
  //     (saturation || saturation === 0) &&
  //     saturation <= 100 &&
  //     (value || value === 0) &&
  //     value <= 100
  //   ) {
  //     var red = 0,
  //       green = 0,
  //       blue = 0,
  //       i = 0,
  //       f = 0,
  //       q = 0,
  //       p = 0,
  //       t = 0;
  //     hue = Number(hue % 360) / 60;
  //     saturation = Number(saturation) / 100;
  //     value = Number(value) / 100;
  //     if (saturation === 0) {
  //       red = value;
  //       green = value;
  //       blue = value;
  //     } else {
  //       i = Math.floor(hue);
  //       f = hue - i;
  //       p = value * (1 - saturation);
  //       q = value * (1 - saturation * f);
  //       t = value * (1 - saturation * (1 - f));
  //       switch (i) {
  //         case 0:
  //           red = value;
  //           green = t;
  //           blue = p;
  //           break;
  //         case 1:
  //           red = q;
  //           green = value;
  //           blue = p;
  //           break;
  //         case 2:
  //           red = p;
  //           green = value;
  //           blue = t;
  //           break;
  //         case 3:
  //           red = p;
  //           green = q;
  //           blue = value;
  //           break;
  //         case 4:
  //           red = t;
  //           green = p;
  //           blue = value;
  //           break;
  //         case 5:
  //           red = value;
  //           green = p;
  //           blue = q;
  //           break;
  //       }
  //     }
  //     result = {
  //       red: Math.round(red * 255).toString(),
  //       green: Math.round(green * 255).toString(),
  //       blue: Math.round(blue * 255).toString(),
  //     };
  //   }
  //   return "rgb(" + result.red + "," + result.green + "," + result.blue + ")";
  // };
  const drawhoneycomb = (color) => {
    draw.clearRect(0, 0, RainbowHoneycomb.width, RainbowHoneycomb.height);
    for (let i = 0; i < Math.round(RainbowHoneycomb.width / radius) + 2; ++i) {
      for (let j = 0; j < Math.round(RainbowHoneycomb.height / radius) + 2; ++j) {
        honeycomb(
          radius * 2 * i + (j % 2) * radius,
          ((radius * 2 * root3) / 2) * j,
          radius * radius_percent, color
        );
      }
    }
  }

  const renewHoneycombCanvas = () => {
    RainbowHoneycomb.width = (window.innerWidth * window.devicePixelRatio);
    RainbowHoneycomb.height = (window.innerHeight * window.devicePixelRatio);
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      drawhoneycomb("#000");
    } else {
      drawhoneycomb("#fff");
    }
  }
  renewHoneycombCanvas();
  window.onresize = renewHoneycombCanvas;
  const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
  // 最初の判定
  if (mediaQueryList.matches) {
    console.log("dark-mode is enabled.");
  } else {
    console.log("light-mode is enabled");
  }
  // メディアクエリの変化を監視するリスナー関数を定義
  const listener_honeycomb = function (event) {
    if (event.matches) {
      console.log("swaped to dark-mode");
    } else {
      console.log("swaped to light-mode");
    }
    renewHoneycombCanvas();
  };
  mediaQueryList.addEventListener("change", listener_honeycomb);
}
const generate_style = () => {
  const dark_back = document.createElement("img");
  dark_back.src = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzNjAiIGhlaWdodD0iMzYwIiB2aWV3Qm94PSIwLDAsMzYwLDM2MCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwLDApIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNNjAsMzYwdi0zNjBoMzYwdjM2MHoiIGZpbGw9IiMwMDAwMDAiLz48cGF0aCBkPSJNNjAsMTgwdi0xODBoMTgweiIgZmlsbD0iIzI3MjcyNyIvPjxwYXRoIGQ9Ik02MCw5MHYtOTBoMTgweiIgZmlsbD0iIzg4ODg4OCIvPjxwYXRoIGQ9Ik00MjAsMTgwdjE4MGgtMTgweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiMyNzI3MjciLz48cGF0aCBkPSJNNDIwLDI3MHY5MGgtMTgweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiM4ODg4ODgiLz48cGF0aCBkPSJNMjQwLDBsMTgwLDB2MTgweiIgZmlsbD0iIzI3MjcyNyIvPjxwYXRoIGQ9Ik0zMzAsMGw5MCwwdjE4MHoiIGZpbGw9IiM4ODg4ODgiLz48cGF0aCBkPSJNMjQwLDM2MGwtMTgwLDBsMCwtMTgweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiMyNzI3MjciLz48cGF0aCBkPSJNMTUwLDM2MGgtOTBsMCwtMTgweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiM4ODg4ODgiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxODA6MTgwLS0+";
  dark_back.id = "dark-mobile";
  dark_back.alt = "";
  dark_back.style = `
    position:fixed;
    width:100vw;
    height:100vh;
    top:0;
    left:0;
    z-index:-1000;
  `;
  document.body.appendChild(dark_back);
  const light_back = document.createElement("img");
  light_back.src = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCwwLDM2MCwzNjAiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MCwwKSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTYwLDM2MHYtMzYwaDM2MHYzNjB6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iI2ZmZmZmZiIvPjxwYXRoIGQ9Ik0yNDAsMGgxODB2MTgweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJNMjQwLDBoMTgwdjkweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiM4ODg4ODgiLz48cGF0aCBkPSJNMjQwLDM2MGgtMTgwdi0xODB6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iI2MzYzNjMyIvPjxwYXRoIGQ9Ik0yNDAsMzYwaC0xODB2LTkweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiM4ODg4ODgiLz48cGF0aCBkPSJNNjAsMTgwdi0xODBoMTgweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJNNjAsMTgwdi0xODBoOTB6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iIzg4ODg4OCIvPjxwYXRoIGQ9Ik00MjAsMTgwdjE4MGgtMTgweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJNNDIwLDE4MHYxODBoLTkweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiM4ODg4ODgiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxODA6MTgwLS0+";
  light_back.id = "light-mobile";
  light_back.alt = "";
  light_back.style = `
    position:fixed;
    width:100vw;
    height:100vh;
    top:0;
    left:0;
    z-index:-999;
  `;
  document.body.appendChild(light_back);
  const center_inf = document.createElement("img");
  center_inf.src = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNzQiIGhlaWdodD0iMTc0IiB2aWV3Qm94PSIwLDAsMTc0LDE3NCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1MywtOTMpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjNzc3Nzc3IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE1NSwxODBjMCwtMTguNzc3NjggMTkuMDI3OSwtMzQgNDIuNSwtMzRjMjMuNDcyMTEsMCA0Mi41LDE1LjIyMjMyIDQyLjUsMzRjMCwxOC43Nzc2OCAtMTkuMDI3ODksMzQgLTQyLjUsMzRjLTIzLjQ3MjEsMCAtNDIuNSwtMTUuMjIyMzIgLTQyLjUsLTM0eiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTI0MCwxODBjMCwtMTguNzc3NjggMTkuMDI3OSwtMzQgNDIuNSwtMzRjMjMuNDcyMTEsMCA0Mi41LDE1LjIyMjMyIDQyLjUsMzRjMCwxOC43Nzc2OCAtMTkuMDI3ODksMzQgLTQyLjUsMzRjLTIzLjQ3MjEsMCAtNDIuNSwtMTUuMjIyMzIgLTQyLjUsLTM0eiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTE1NSwxODBjMCwtNDYuOTQ0MiAzOC4wNTU4LC04NSA4NSwtODVjNDYuOTQ0MiwwIDg1LDM4LjA1NTggODUsODVjMCw0Ni45NDQyIC0zOC4wNTU4LDg1IC04NSw4NWMtNDYuOTQ0MiwwIC04NSwtMzguMDU1OCAtODUsLTg1eiIgc3Ryb2tlLXdpZHRoPSI0Ii8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6ODc6ODctLT4=";
  center_inf.alt = "";
  center_inf.style = `
    position:fixed;
    width:50vw;
    height:50vw;
    transform: translate(-50%,-50%);
    top:50vh;
    left:50vw;
    z-index:-100;
    animation-name: show;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: initial;
  `;
  document.body.appendChild(center_inf);
};

const is_phone = () => {
  const ua = navigator.userAgent;
  if (ua.indexOf("iPhone") >= 0) {
    return true;
  }
  if (ua.indexOf("iPad") >= 0) {
    return true;
  }
  if (ua.indexOf("Android") >= 0) {
    return true;
  }
  return false;
};

const The_Infinitys_main = () => {
  init_header();
  init_footer();
  if (Math.random() < 0.3) {
    generate_style();
  } else {
    generate_honeycomb();
  }
}
The_Infinitys_main();
