//ダークモード・ライトモード対応

const root3 = 1.7320508;
const RainbowHoneycomb = document.createElement("canvas");
RainbowHoneycomb.id="RainbowHoneycomb"
window.onresize = renewCanvas;
const RainbowHoneycomb_img_dark=new Image();
RainbowHoneycomb_img_light.id="RainbowHoneycomb-dark";
RainbowHoneycomb_img_dark.style =`
  position:fixed;
  width:100%;
  height:100%;
  top:0;
  left:0;
  z-index:-100;
  animation-name: show;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: initial;
  visibility: hidden;
  `;
RainbowHoneycomb_img_dark.alt="";
document.body.appendChild(RainbowHoneycomb_img_dark);
const RainbowHoneycomb_img_light=new Image();
RainbowHoneycomb_img_light.id="RainbowHoneycomb-light";
RainbowHoneycomb_img_light.style =`
  position:fixed;
  width:100%;
  height:100%;
  top:0;
  left:0;
  z-index:-100;
  animation-name: show;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: initial;
  visibility: visible;
  `;
RainbowHoneycomb_img_light.alt="";
document.body.appendChild(RainbowHoneycomb_img_light);
const show_rainbowhoneycomb=document.createElement("style");
show_rainbowhoneycomb.innerHTML=`
@keyframes show{
  from {opacity:0;}
  to {opacity:1;}
}
@media (prefers-color-scheme: dark) {
  #RainbowHoneycomb-dark{
    visibility:visible;
  }
  #RainbowHoneycomb-light{
    visibility:hidden;
  }
}
`;
document.body.appendChild(show_rainbowhoneycomb);
const draw = RainbowHoneycomb.getContext("2d");
function honeycomb(x, y, r,color) {
  draw.fillStyle=color;
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

let tickcount = 0;
function drawhoneycomb(color) {
  for (let i = 0; i < RainbowHoneycomb.width; ++i) {
    draw.fillStyle = hsvToRgb16(
      (i * 360) / RainbowHoneycomb.width + tickcount,
      100,
      100
    );
    draw.fillRect(i, 0, 1, RainbowHoneycomb.height);
  }
  for (let i = 0; i < Math.round(RainbowHoneycomb.width / radius) + 2; ++i) {
    for (let j = 0; j < Math.round(RainbowHoneycomb.height / radius) + 2; ++j) {
      honeycomb(
        radius * 2 * i + (j % 2) * radius,
        ((radius * 2 * root3) / 2) * j,
        radius,color
      );
    }
  }
  tickcount += 1;
}

function renewCanvas() {
  RainbowHoneycomb.width = window.innerWidth*1.2;
  RainbowHoneycomb.height = window.innerHeight*1.2;
  drawhoneycomb("#000");
  RainbowHoneycomb_img_dark.src=RainbowHoneycomb.toDataURL("image/webp",1);
  drawhoneycomb("#fff");
  RainbowHoneycomb_img_light.src=RainbowHoneycomb.toDataURL("image/webp",1);
}
renewCanvas();
