const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const darkModeOn = darkModeMediaQuery.matches;

const startLogo = document.querySelector("startLogo");
const logo = document.querySelector("logo");
setInterval(() => {
  if (darkModeOn) {
  } else {
    startLogo.src = "/images/TheInfinitys(White).png";
    logo.src = "/images/Infinity Light.svg";
  }
}, 1000);
