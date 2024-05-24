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
const rainbow_svg=new Image();
rainbow_svg.src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0ODAiIGhlaWdodD0iMzYwIiB2aWV3Qm94PSIwLDAsNDgwLDM2MCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwIiB5MT0iMTgwIiB4Mj0iODAiIHkyPSIxODAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmYwMDAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmZjAwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjgwIiB5MT0iMTgwIiB4Mj0iMTYwIiB5Mj0iMTgwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZmYwMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwZmYwMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxNjAiIHkxPSIxODAiIHgyPSIyNDAiIHkyPSIxODAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMyI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDBmZjAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDBmZmZmIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjI0MCIgeTE9IjE4MCIgeDI9IjMyMCIgeTI9IjE4MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci00Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMGZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDAwZmYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMzIwIiB5MT0iMTgwIiB4Mj0iNDAwIiB5Mj0iMTgwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwMDBmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmMDBmZiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSI0MDAiIHkxPSIxODAiIHgyPSI0ODAiIHkyPSIxODAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItNiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmYwMGZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmYwMDAwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgdHJhbnNmb3JtPSIiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDM2MHYtMzYwaDgwdjM2MHoiIGZpbGw9InVybCgjY29sb3ItMSkiLz48cGF0aCBkPSJNODAsMzYwdi0zNjBoODB2MzYweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9InVybCgjY29sb3ItMikiLz48cGF0aCBkPSJNMTYwLDM2MHYtMzYwaDgwdjM2MHoiIGZpbGw9InVybCgjY29sb3ItMykiLz48cGF0aCBkPSJNMjQwLDM2MHYtMzYwaDgwdjM2MHoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSJ1cmwoI2NvbG9yLTQpIi8+PHBhdGggZD0iTTMyMCwzNjB2LTM2MGg4MHYzNjB6IiBmaWxsPSJ1cmwoI2NvbG9yLTUpIi8+PHBhdGggZD0iTTQwMCwzNjB2LTM2MGg4MHYzNjB6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0idXJsKCNjb2xvci02KSIvPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjI0MDoxODAtLT4=";
rainbow_svg.style=`
position:fixed;
width:100vw;
height:100vh;
top:0;
left:0;
z-index:-1000;
animation-name: show;
animation-duration: 5s;
animation-timing-function: linear;
animation-iteration-count: initial;
`;
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
function honeycomb(x, y, r, color) {
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
var hsvToRgb16 = function (hue, saturation, value) {
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
function drawhoneycomb(color) {
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

function renewCanvas() {
  RainbowHoneycomb.width = (window.innerWidth * window.devicePixelRatio);
  RainbowHoneycomb.height = (window.innerHeight * window.devicePixelRatio);
  drawhoneycomb("#000");
  Honeycomb_img_dark.src = RainbowHoneycomb.toDataURL("image/webp", 0.75);
  drawhoneycomb("#fff");
  Honeycomb_img_light.src = RainbowHoneycomb.toDataURL("image/webp", 0.75);
}
renewCanvas();
window.onresize = renewCanvas;
