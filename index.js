//headerの初期化
const init_header = function () {
  fetch("/templete/header.html")
    .then((res) => res.text())
    .then((header) => {
      document.querySelector("header").innerHTML=header;
    }).catch((err) => console.log(`データが取得できませんでした：${err}`));
};

window.onload= () =>{
  init_header();
}
