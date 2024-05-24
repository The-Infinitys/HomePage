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
rainbow_svg.src=`data:image/svg+xml,
<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="480"
  height="360"
  viewBox="0,0,480,360">
  <defs>
    <linearGradient
      x1="0"
      y1="180"
      x2="80"
      y2="180"
      gradientUnits="userSpaceOnUse"
      id="color-1">
      <stop offset="0" stop-color="#ff0000" />
      <stop offset="1" stop-color="#ffff00" />
    </linearGradient>
    <linearGradient
      x1="80"
      y1="180"
      x2="160"
      y2="180"
      gradientUnits="userSpaceOnUse"
      id="color-2">
      <stop offset="0" stop-color="#ffff00" />
      <stop offset="1" stop-color="#00ff00" />
    </linearGradient>
    <linearGradient
      x1="160"
      y1="180"
      x2="240"
      y2="180"
      gradientUnits="userSpaceOnUse"
      id="color-3">
      <stop offset="0" stop-color="#00ff00" />
      <stop offset="1" stop-color="#00ffff" />
    </linearGradient>
    <linearGradient
      x1="240"
      y1="180"
      x2="320"
      y2="180"
      gradientUnits="userSpaceOnUse"
      id="color-4">
      <stop offset="0" stop-color="#00ffff" />
      <stop offset="1" stop-color="#0000ff" />
    </linearGradient>
    <linearGradient
      x1="320"
      y1="180"
      x2="400"
      y2="180"
      gradientUnits="userSpaceOnUse"
      id="color-5">
      <stop offset="0" stop-color="#0000ff" />
      <stop offset="1" stop-color="#ff00ff" />
    </linearGradient>
    <linearGradient
      x1="400"
      y1="180"
      x2="480"
      y2="180"
      gradientUnits="userSpaceOnUse"
      id="color-6">
      <stop offset="0" stop-color="#ff00ff" />
      <stop offset="1" stop-color="#ff0000" />
    </linearGradient>
  </defs>
  <g transform="">
    <g
      data-paper-data='{"isPaintingLayer":true}'
      fill-rule="nonzero"
      stroke="#000000"
      stroke-width="0"
      stroke-linecap="butt"
      stroke-linejoin="miter"
      stroke-miterlimit="10"
      stroke-dasharray=""
      stroke-dashoffset="0"
      style="mix-blend-mode: normal">
      <path d="M0,360v-360h80v360z" fill="url(#color-1)" />
      <path
        d="M80,360v-360h80v360z"
        data-paper-data='{"index":null}'
        fill="url(#color-2)" />
      <path d="M160,360v-360h80v360z" fill="url(#color-3)" />
      <path
        d="M240,360v-360h80v360z"
        data-paper-data='{"index":null}'
        fill="url(#color-4)" />
      <path d="M320,360v-360h80v360z" fill="url(#color-5)" />
      <path
        d="M400,360v-360h80v360z"
        data-paper-data='{"index":null}'
        fill="url(#color-6)" />
    </g>
  </g></svg><!--rotationCenter:240:180-->

`;
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
