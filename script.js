const startLogo = document.querySelector("#startLogo");
const logo = document.querySelector("#logo");
setInterval(() => {
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const darkModeOn = darkModeMediaQuery.matches;

  if (darkModeOn) {
    startLogo.src = "./images/TheInfinitys(Black).png";
  } else {
    startLogo.src = "./images/TheInfinitys(White).png";
  }
}, 1000);
