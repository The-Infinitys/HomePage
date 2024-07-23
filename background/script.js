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
          y: Math.sin(r) * 80,
        };
      } else {
        return {
          x: -100 * (Math.cos(r) - 1),
          y: Math.sin(r) * 80,
        };
      }
    };
    const circle = (t) => {
      if (t < 0 || 360 < t) {
        return circle(t % 360);
      }
      const r = t * (Math.PI / 180);
      return {
        x: Math.cos(r),
        y: Math.sin(r),
      };
    };
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const graphics = canvas.getContext("2d");
    graphics.clearRect(0, 0, canvas.width, canvas.height);
    let before_data = inf(0);
    graphics.lineWidth = canvas.width / 57;
    for (let i = 0; i <= 720; i += quality) {
      const data = inf(i);
      graphics.beginPath();
      graphics.moveTo(
        (before_data.x * canvas.width) / 500 + canvas.width / 2,
        (before_data.y * canvas.height) / 500 + canvas.height / 2
      );
      graphics.lineTo(
        (data.x * canvas.width) / 500 + canvas.width / 2,
        (data.y * canvas.height) / 500 + canvas.height / 2
      );
      graphics.closePath();
      graphics.strokeStyle = hsvToRgb16(((data.x + 200) / 400) * 360, 100, 100);
      graphics.stroke();
      before_data = data;
    }
    before_data = circle(0);
    graphics.lineWidth = canvas.width / 777;
    for (let count = 0; count < 777; count += quality * 10) {
      for (let t = 0; t <= 360; t += quality) {
        let data = circle(t);
        data.x *= 1 - count / 7777;
        data.y *= 1 - count / 7777;
        graphics.beginPath();
        graphics.moveTo(
          (before_data.x * canvas.width) / 2.22 + canvas.width / 2,
          (before_data.y * canvas.height) / 2.22 + canvas.height / 2
        );
        graphics.lineTo(
          (data.x * canvas.width) / 2.22 + canvas.width / 2,
          (data.y * canvas.height) / 2.22 + canvas.height / 2
        );
        graphics.closePath();
        graphics.strokeStyle = hsvToRgb16(
          (t + 360 + count / 7.7) % 360,
          100,
          100
        );
        graphics.stroke();
        before_data = data;
      }
    }
    return canvas.toDataURL("image/webp", 1);
  };
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
const generate_pattern = (mode = "honeycomb") => {
  //ダークモード・ライトモード対応
  const root3 = 1.7320508;
  const Rainbowpattern = document.createElement("canvas");
  Rainbowpattern.id = "Rainbowpattern";
  Rainbowpattern.style = `
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
  document.body.append(Rainbowpattern);
  const draw = Rainbowpattern.getContext("2d");
  const rainbow_svg = document.createElement("div");
  rainbow_svg.id = "rainbow-back";
  document.body.append(rainbow_svg);
  console.log("draw-mode: " + mode);
  const pattern = (x, y, r, color, mode) => {
    if (mode.startsWith("honeycomb")) {
      draw.globalCompositeOperation = "source-over";
      draw.fillStyle = color;
      draw.beginPath();
      draw.moveTo(x, y - r);
      draw.lineTo(x + (root3 / 2) * r, y - r / 2);
      draw.lineTo(x + (root3 / 2) * r, y + r / 2);
      draw.lineTo(x, y + r);
      draw.lineTo(x - (root3 / 2) * r, y + r / 2);
      draw.lineTo(x - (root3 / 2) * r, y - r / 2);
      draw.fill();
    } else if (mode.startsWith("jp-spirit")) {
      draw.strokeStyle = color;
      draw.lineWidth = 1;
      draw.globalCompositeOperation = "destination-out";
      draw.beginPath();
      draw.arc(x, y, r, 0, 2 * Math.PI, true);
      draw.closePath();
      draw.stroke();
      draw.globalCompositeOperation = "source-over";
    } else if (mode.startsWith("triangle")) {
      draw.strokeStyle = color;
      draw.lineWidth = 1;
      draw.globalCompositeOperation = "destination-out";
      draw.beginPath();
      draw.lineTo(x + (root3 / 2) * r, y - r / 2);
      draw.lineTo(x, y + r);
      draw.lineTo(x - (root3 / 2) * r, y - r / 2);
      draw.closePath();
      draw.stroke();
      draw.globalCompositeOperation = "source-over";
    } else if (mode.startsWith("isosceles-trapezoid")) {
      draw.strokeStyle = color;
      draw.lineWidth = 1;
      draw.globalCompositeOperation = "destination-out";
      draw.beginPath();
      const trapizoid_width = r * 1.18;
      const trapizoid_height = r * 1.55;
      if (mode.endsWith(".0")) {
        draw.moveTo(x + trapizoid_width / 2, y + trapizoid_height / 2);
        draw.lineTo(x + trapizoid_width, y - trapizoid_height / 2);
        draw.lineTo(x - trapizoid_width, y - trapizoid_height / 2);
        draw.lineTo(x - trapizoid_width / 2, y + trapizoid_height / 2);
      } else {
        draw.moveTo(x + trapizoid_width, y + trapizoid_height / 2);
        draw.lineTo(x + trapizoid_width / 2, y - trapizoid_height / 2);
        draw.lineTo(x - trapizoid_width / 2, y - trapizoid_height / 2);
        draw.lineTo(x - trapizoid_width, y + trapizoid_height / 2);
      }
      draw.closePath();
      draw.stroke();
      draw.globalCompositeOperation = "source-over";
    } else {
      alert("The Infinity's Infinity style: invalid back code error");
    }
  };
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
  //     saturation = Number(saturation) monoqro/ 100;
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
  const drawpattern = (color) => {
    draw.clearRect(0, 0, Rainbowpattern.width, Rainbowpattern.height);
    if (
      mode == "jp-spirit" ||
      mode == "triangle" ||
      mode == "isosceles-trapezoid"
    ) {
      draw.fillStyle = color;
      draw.fillRect(0, 0, Rainbowpattern.width, Rainbowpattern.height);
    }
    for (let i = 0; i < Math.round(Rainbowpattern.width / radius) + 2; ++i) {
      for (let j = 0; j < Math.round(Rainbowpattern.height / radius) + 2; ++j) {
        pattern(
          radius * 2 * i + (j % 2) * radius,
          ((radius * 2 * root3) / 2) * j,
          radius * radius_percent,
          color,
          mode + "." + (i % 2).toString()
        );
      }
    }
  };

  const renewpatternCanvas = () => {
    Rainbowpattern.width = window.innerWidth * window.devicePixelRatio;
    Rainbowpattern.height = window.innerHeight * window.devicePixelRatio;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      drawpattern("#000");
    } else {
      drawpattern("#fff");
    }
  };
  renewpatternCanvas();
  window.onresize = renewpatternCanvas;
  const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
  // 最初の判定
  if (mediaQueryList.matches) {
    console.log("dark-mode is enabled.");
  } else {
    console.log("light-mode is enabled");
  }
  // メディアクエリの変化を監視するリスナー関数を定義
  const listener_pattern = function (event) {
    if (event.matches) {
      console.log("swaped to dark-mode");
    } else {
      console.log("swaped to light-mode");
    }
    renewpatternCanvas();
  };
  mediaQueryList.addEventListener("change", listener_pattern);
};
const generate_style = (mode = "monochrome") => {
  switch (mode) {
    case "monochrome":
      const dark_back = document.createElement("img");
      dark_back.src =
        "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzNjAiIGhlaWdodD0iMzYwIiB2aWV3Qm94PSIwLDAsMzYwLDM2MCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwLDApIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNNjAsMzYwdi0zNjBoMzYwdjM2MHoiIGZpbGw9IiMwMDAwMDAiLz48cGF0aCBkPSJNNjAsMTgwdi0xODBoMTgweiIgZmlsbD0iIzI3MjcyNyIvPjxwYXRoIGQ9Ik02MCw5MHYtOTBoMTgweiIgZmlsbD0iIzg4ODg4OCIvPjxwYXRoIGQ9Ik00MjAsMTgwdjE4MGgtMTgweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiMyNzI3MjciLz48cGF0aCBkPSJNNDIwLDI3MHY5MGgtMTgweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiM4ODg4ODgiLz48cGF0aCBkPSJNMjQwLDBsMTgwLDB2MTgweiIgZmlsbD0iIzI3MjcyNyIvPjxwYXRoIGQ9Ik0zMzAsMGw5MCwwdjE4MHoiIGZpbGw9IiM4ODg4ODgiLz48cGF0aCBkPSJNMjQwLDM2MGwtMTgwLDBsMCwtMTgweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiMyNzI3MjciLz48cGF0aCBkPSJNMTUwLDM2MGgtOTBsMCwtMTgweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiM4ODg4ODgiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxODA6MTgwLS0+";
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
      document.body.append(dark_back);
      const light_back = document.createElement("img");
      light_back.src =
        "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCwwLDM2MCwzNjAiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MCwwKSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTYwLDM2MHYtMzYwaDM2MHYzNjB6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iI2ZmZmZmZiIvPjxwYXRoIGQ9Ik0yNDAsMGgxODB2MTgweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJNMjQwLDBoMTgwdjkweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiM4ODg4ODgiLz48cGF0aCBkPSJNMjQwLDM2MGgtMTgwdi0xODB6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iI2MzYzNjMyIvPjxwYXRoIGQ9Ik0yNDAsMzYwaC0xODB2LTkweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiM4ODg4ODgiLz48cGF0aCBkPSJNNjAsMTgwdi0xODBoMTgweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJNNjAsMTgwdi0xODBoOTB6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iIzg4ODg4OCIvPjxwYXRoIGQ9Ik00MjAsMTgwdjE4MGgtMTgweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJNNDIwLDE4MHYxODBoLTkweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiM4ODg4ODgiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxODA6MTgwLS0+";
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
      document.body.append(light_back);
      const center_inf = document.createElement("img");
      center_inf.src =
        "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNzQiIGhlaWdodD0iMTc0IiB2aWV3Qm94PSIwLDAsMTc0LDE3NCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1MywtOTMpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjNzc3Nzc3IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE1NSwxODBjMCwtMTguNzc3NjggMTkuMDI3OSwtMzQgNDIuNSwtMzRjMjMuNDcyMTEsMCA0Mi41LDE1LjIyMjMyIDQyLjUsMzRjMCwxOC43Nzc2OCAtMTkuMDI3ODksMzQgLTQyLjUsMzRjLTIzLjQ3MjEsMCAtNDIuNSwtMTUuMjIyMzIgLTQyLjUsLTM0eiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTI0MCwxODBjMCwtMTguNzc3NjggMTkuMDI3OSwtMzQgNDIuNSwtMzRjMjMuNDcyMTEsMCA0Mi41LDE1LjIyMjMyIDQyLjUsMzRjMCwxOC43Nzc2OCAtMTkuMDI3ODksMzQgLTQyLjUsMzRjLTIzLjQ3MjEsMCAtNDIuNSwtMTUuMjIyMzIgLTQyLjUsLTM0eiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTE1NSwxODBjMCwtNDYuOTQ0MiAzOC4wNTU4LC04NSA4NSwtODVjNDYuOTQ0MiwwIDg1LDM4LjA1NTggODUsODVjMCw0Ni45NDQyIC0zOC4wNTU4LDg1IC04NSw4NWMtNDYuOTQ0MiwwIC04NSwtMzguMDU1OCAtODUsLTg1eiIgc3Ryb2tlLXdpZHRoPSI0Ii8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6ODc6ODctLT4=";
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
      document.body.append(center_inf);
      break;
    case "wave":
      const drop = () => {
        const wave = document.createElement("img");
        wave.src = "data:image/svg+xml;base64,PHN2ZwogIHZpZXdCb3g9IjAgMCAxMDAgMTAwIgogIHZlcnNpb249IjEuMSIKICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmRyb3B7CiAgICAgICAgZmlsbDojMDAwOwogICAgICAgIHN0cm9rZTpub25lOwogICAgICAgIGZpbGwtb3BhY2l0eTogMDsKICAgICAgfQogICAgICAud2F2ZXsKICAgICAgICBmaWxsOm5vbmU7CiAgICAgICAgc3Ryb2tlOiMwMDA7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8Zz4KICAgIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjQwIiBjbGFzcz0iZHJvcCI+CiAgICAgIDxhbmltYXRlCiAgICAgICAgYXR0cmlidXRlVHlwZT0iWE1MIgogICAgICAgIGF0dHJpYnV0ZU5hbWU9InIiCiAgICAgICAgY2FsY01vZGU9InNwbGluZSIKICAgICAgICB2YWx1ZXM9IjQwOyAwOyAwIgogICAgICAgIGtleVRpbWVzPSIwLjA7IDAuNTsgMS4wIgogICAgICAgIGtleVNwbGluZXM9IjAuNSAwIDAuNSAxOyAwLjUgMCAwLjUgMSIKICAgICAgICBkdXI9IjJzIgogICAgICAgIHJlcGVhdENvdW50PSIxIgogICAgICAvPgogICAgICA8YW5pbWF0ZQogICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIKICAgICAgICBhdHRyaWJ1dGVOYW1lPSJmaWxsLW9wYWNpdHkiCiAgICAgICAgY2FsY01vZGU9InNwbGluZSIKICAgICAgICB2YWx1ZXM9IjA7IDE7IDAiCiAgICAgICAga2V5VGltZXM9IjAuMDsgMC41OyAxLjAiCiAgICAgICAga2V5U3BsaW5lcz0iMC41IDAgMC41IDE7IDAuNSAwIDAuNSAxIgogICAgICAgIGR1cj0iMnMiCiAgICAgICAgcmVwZWF0Q291bnQ9IjEiCiAgICAgIC8+CiAgICA8L2NpcmNsZT4KICAgIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjQwIiBjbGFzcz0id2F2ZSI+CiAgICAgIDxhbmltYXRlCiAgICAgICAgYXR0cmlidXRlVHlwZT0iWE1MIgogICAgICAgIGF0dHJpYnV0ZU5hbWU9InIiCiAgICAgICAgY2FsY01vZGU9InNwbGluZSIKICAgICAgICB2YWx1ZXM9IjA7IDA7IDQwIgogICAgICAgIGtleVRpbWVzPSIwLjA7IDAuNTsgMS4wIgogICAgICAgIGtleVNwbGluZXM9IjAgMC41IDAuNSAxOzAgMC41IDAuNSAxIgogICAgICAgIGR1cj0iMnMiCiAgICAgICAgcmVwZWF0Q291bnQ9IjEiCiAgICAgIC8+CiAgICAgIDxhbmltYXRlCiAgICAgICAgYXR0cmlidXRlVHlwZT0iWE1MIgogICAgICAgIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS13aWR0aCIKICAgICAgICBjYWxjTW9kZT0ic3BsaW5lIgogICAgICAgIHZhbHVlcz0iMDsgNTsgMCIKICAgICAgICBrZXlUaW1lcz0iMC4wOyAwLjU7IDEuMCIKICAgICAgICBrZXlTcGxpbmVzPSIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMSIKICAgICAgICBkdXI9IjJzIgogICAgICAgIHJlcGVhdENvdW50PSIxIgogICAgICAvPgogICAgPC9jaXJjbGU+CiAgPC9nPgo8L3N2Zz4K";
        wave.alt = "";
        wave.style = `
          position:fixed;
          width:10vmin;
          height:10vmin;
          z-index:-1000;
          fill:`+"hsl("+Math.random().toString()+"turn 100% 50%);"+`
        `;
        wave.style.top = (100 * Math.random()).toString() + "vh";
        wave.style.left = (100 * Math.random()).toString() + "vw";
        document.body.append(wave);
        setTimeout(() => {
          wave.remove();
          drop();
        }, 2000);
      };
      drop();
      break;
    default:
      break;
  }
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
  generate_style("wave");
  // if (Math.random() < 1 / 5) {
  //   generate_style((mode = "monochrome"));
  // } else if (Math.random() < 1 / 4) {
  //   generate_pattern((mode = "honeycomb"));
  // } else if (Math.random() < 1 / 3) {
  //   generate_pattern((mode = "jp-spirit"));
  // } else if (Math.random() < 1 / 2) {
  //   generate_pattern((mode = "triangle"));
  // } else {
  //   generate_pattern((mode = "isosceles-trapezoid"));
  // }
};
The_Infinitys_main();
