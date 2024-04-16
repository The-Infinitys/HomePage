const white = document.querySelector("#headerLogo-white");
const black = document.querySelector("#headerLogo-black");
setInterval(() => {
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const darkModeOn = darkModeMediaQuery.matches;
  if (darkModeOn) {
    black.style.visibility="visible";
    white.style.visibility="hidden";
  } else {
    black.style.visibility="hidden";
    white.style.visibility="visible";
  }
}, 100);
