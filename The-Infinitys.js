
const init_header = function () {
  //headerの初期化
  const header_text = `
    <a href="/" aria-label="Home">
      <img id="headerLogo" src="/image/The-Infinitys.webp" alt="" onerror="generate_Infinitys()" />
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
          <a href="/blog">Blog </a>
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
const init_style=()=>{
  const style_text=`
  :root {
    --background: white;
    --text: black;
    --hamburger-width: 35%;
  }
  
  #Honeycomb-dark {
    visibility: hidden;
  }
  
  #Honeycomb-light {
    visibility: visible;
  }
  
  @media (prefers-color-scheme: dark) {
    :root {
      --background: black;
      --text: white;
    }
  
    #Honeycomb-dark {
      visibility: visible;
    }
  
    #Honeycomb-light {
      visibility: hidden;
    }
  }
  
  
  @media (max-aspect-ratio: 1/1) {
    :root {
      --hamburger-width: 100%;
    }
  
    header h1 {
      visibility: hidden;
    }
  }
  
  body {
    background-color: var(--background);
  }
  
  * {
    padding: 0;
    margin: 0;
    font-family: serif;
  }
  
  header {
    z-index: 777;
    position: fixed;
    top: 0;
    left: 0;
    margin-top: 0;
    text-align: left;
    width: 100%;
    height: 10%;
    font-size: 15%;
    display: flex;
    font-size: 20px;
    color: var(--text);
    background-color: var(--background);
  }
  
  header a img {
    position: relative;
    top: 0;
    left: 1vw;
    width: 10vh;
    height: 10vh;
  }
  
  header h1 {
    position: absolute;
    top: 0;
    left: 12vw;
    font-size: 7vh;
  }
  
  header button {
    position: absolute;
    right: 0%;
    top: 0%;
    width: 10vh;
    height: 10vh;
    background-color: transparent;
    border: none;
  }
  
  @keyframes rainbow-stroke {
    0% {
      stroke: #ff0000;
    }
  
    17% {
      stroke: #ffff00;
    }
  
    33% {
      stroke: #00ff00;
    }
  
    50% {
      stroke: #00ffff;
    }
  
    67% {
      stroke: #0000ff;
    }
  
    83% {
      stroke: #ff00ff;
    }
  
    100% {
      stroke: #ff0000;
    }
  }
  
  #hamburger_menu_icon {
    animation-name: rainbow-stroke;
    animation-duration: 5s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
  }
  
  #hamburger_menus {
    position: fixed;
    left:100vw;
    top: 10%;
    width: var(--hamburger-width);
    height: 90%;
    text-align: left;
    overflow: hidden;
    text-overflow: clip;
    border: 1px solid var(--text);
    color: var(--text);
    z-index: 777;
    opacity: 0;
    background-color: #ffffffcc;
  
    @media (prefers-color-scheme: dark) {
      background-color: #000000cc;
    }
  }
  
  #hamburger_menus tr {
    padding: 0;
    margin: 0;
    width: 100%;
  }
  
  #hamburger_menus tr th a {
    color: var(--text);
    font-size: 6vh;
    text-decoration: none;
  }
  
  .hamburger_menus-contents-icons {
    width: auto;
    height: 6vh;
  }
  
  
  @keyframes hamburger-open-animation {
    from {
      left: 100vw;
      opacity: 0;
    }
  
    to {
      left: calc(100vw - var(--hamburger-width));
      opacity: 1;
    }
  }
  
  @keyframes hamburger-close-animation {
    from {
      left: calc(100vw - var(--hamburger-width));
      opacity: 1;
    }
  
    to {
      left: 100vw;
      opacity: 0;
    }
  
  }
  
  .hamburger-open {
    animation-name: hamburger-open-animation;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-iteration-count: initial;
  }
  
  .hamburger-close {
    animation-name: hamburger-close-animation;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-iteration-count: initial;
  }
  
  footer {
    text-align: center;
    background-size: cover;
    width: 100%;
    height: 50px;
    color: var(--text);
    background-color: var(--background);
    opacity: 0.75;
  }
  `;
  const style=document.createElement("style");
  style.innerHTML=style_text;
  document.body.append(style);
}
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
  document.querySelector("#headerLogo").src =
    The_Infinitys(Math.floor(window.innerWidth / 10), 5);
  document.querySelector("#logo").src =
    The_Infinitys(Math.floor(window.innerWidth / 2), 1);
};
//
window.onload = () => {
  init_style();
  init_header();
  init_footer();
  generate_honeycomb();
}
//ハンバーガーメニューの設定
let is_opened_hamburgerMenu = false;
function hamburger_menu() {
  is_opened_hamburgerMenu = !is_opened_hamburgerMenu;
  const menu = document.querySelector("#hamburger_menus");
  if (is_opened_hamburgerMenu) {
    menu.classList.add("hamburger-open");
    menu.classList.remove("hamburger-close");
    menu.style.left = "calc(100vw - var(--hamburger-width))";
    menu.style.opacity = "1";
  } else {
    menu.classList.add("hamburger-close");
    menu.classList.remove("hamburger-open");
    menu.style.left = "100vw";
    menu.style.opacity = "0";
  }
}

const generate_honeycomb = () => {
  //ダークモード・ライトモード対応
  const root3 = 1.7320508;
  const RainbowHoneycomb = document.createElement("canvas");
  RainbowHoneycomb.id = "RainbowHoneycomb";
  const show_rainbowhoneycomb = document.createElement("style");
  show_rainbowhoneycomb.innerHTML = `
@keyframes show{
  from {opacity:0;}
  to {opacity:1;}
}
`;
  document.body.appendChild(show_rainbowhoneycomb);
  const rainbow_svg = document.createElement("img");
  rainbow_svg.src = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHZpZXdCb3g9IjAsMCw0ODAsMzYwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjAiIHkxPSIxODAiIHgyPSI4MCIgeTI9IjE4MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZjAwMDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmZmMDAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iODAiIHkxPSIxODAiIHgyPSIxNjAiIHkyPSIxODAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmZjAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDBmZjAwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjE2MCIgeTE9IjE4MCIgeDI9IjI0MCIgeTI9IjE4MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0zIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMGZmMDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMGZmZmYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjQwIiB5MT0iMTgwIiB4Mj0iMzIwIiB5Mj0iMTgwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTQiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwZmZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwMDBmZiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIzMjAiIHkxPSIxODAiIHgyPSI0MDAiIHkyPSIxODAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItNSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDAwMGZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmYwMGZmIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjQwMCIgeTE9IjE4MCIgeDI9IjQ4MCIgeTI9IjE4MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci02Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZjAwZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZjAwMDAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyB0cmFuc2Zvcm09IiI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMzYwdi0zNjBoODB2MzYweiIgZmlsbD0idXJsKCNjb2xvci0xKSIvPjxwYXRoIGQ9Ik04MCwzNjB2LTM2MGg4MHYzNjB6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0idXJsKCNjb2xvci0yKSIvPjxwYXRoIGQ9Ik0xNjAsMzYwdi0zNjBoODB2MzYweiIgZmlsbD0idXJsKCNjb2xvci0zKSIvPjxwYXRoIGQ9Ik0yNDAsMzYwdi0zNjBoODB2MzYweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9InVybCgjY29sb3ItNCkiLz48cGF0aCBkPSJNMzIwLDM2MHYtMzYwaDgwdjM2MHoiIGZpbGw9InVybCgjY29sb3ItNSkiLz48cGF0aCBkPSJNNDAwLDM2MHYtMzYwaDgwdjM2MHoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSJ1cmwoI2NvbG9yLTYpIi8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MjQwOjE4MC0tPg==";
  rainbow_svg.style = `
position:fixed;
width:100vw;
height:100vh;
top:0;
left:0;
z-index:-1000;
object-fit:fill;
animation-name: show;
animation-duration: 5s;
animation-timing-function: linear;
animation-iteration-count: initial;
`;
  rainbow_svg.alt = "";
  document.body.appendChild(rainbow_svg);
  const Honeycomb_img_dark = new Image();
  Honeycomb_img_dark.id = "Honeycomb-dark";
  Honeycomb_img_dark.style = `
  position:fixed;
  width:100vw;
  height:100vh;
  top:0;
  left:0;
  z-index:-100;
  animation-name: show;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: initial;
  `;
  Honeycomb_img_dark.alt = "";
  document.body.appendChild(Honeycomb_img_dark);
  const Honeycomb_img_light = new Image();
  Honeycomb_img_light.id = "Honeycomb-light";
  Honeycomb_img_light.style = `
  position:fixed;
  width:100vw;
  height:100vh;
  top:0;
  left:0;
  z-index:-100;
  animation-name: show;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: initial;
  `;
  Honeycomb_img_light.alt = "";
  document.body.appendChild(Honeycomb_img_light);
  const draw = RainbowHoneycomb.getContext("2d");
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
  const drawhoneycomb = (color) => {
    for (let i = 0; i < Math.round(RainbowHoneycomb.width / radius) + 2; ++i) {
      for (let j = 0; j < Math.round(RainbowHoneycomb.height / radius) + 2; ++j) {
        honeycomb(
          radius * 2 * i + (j % 2) * radius,
          ((radius * 2 * root3) / 2) * j,
          radius, color
        );
      }
    }
  }

  // const is_phone = () => {
  //   const ua = navigator.userAgent;
  //   if (ua.indexOf("iPhone") >= 0) {
  //     return true;
  //   }
  //   if (ua.indexOf("iPad") >= 0) {
  //     return true;
  //   }
  //   if (ua.indexOf("Android") >= 0) {
  //     return true;
  //   }
  //   return false;
  // };

  const renewCanvas = () => {
    RainbowHoneycomb.width = (window.innerWidth * window.devicePixelRatio);
    RainbowHoneycomb.height = (window.innerHeight * window.devicePixelRatio);
    drawhoneycomb("#000");
    Honeycomb_img_dark.src = RainbowHoneycomb.toDataURL("image/webp", 0.75);
    drawhoneycomb("#fff");
    Honeycomb_img_light.src = RainbowHoneycomb.toDataURL("image/webp", 0.75);
  }
  renewCanvas();
  window.onresize = renewCanvas;
}