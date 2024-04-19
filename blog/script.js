result = {};
const getData = function (count) {
  fetch("https://the-infinitys.f5.si/BLOG/list/" + count.toString() + ".json")
    .then((res) => res.json())
    .then((apiData) => {
      const infos = apiData.info;
      infos.forEach(info => {
        const box = document.createElement("button");
        box.className = "blog-button";
        box.onclick = () => {
          blog_open("https://the-infinitys.f5.si/BLOG" + info.html);
        }
        const thumbnail = document.createElement("img");
        thumbnail.src = "https://the-infinitys.f5.si/BLOG" + info.thumbnail;
        thumbnail.alt = info.name;
        const title = document.createElement("div");
        title.innerHTML = info.title;
        box.innerHTML = thumbnail.outerHTML + title.outerHTML;
        document.querySelector(".list").appendChild(box);
      });
    }).catch((err) => console.log(`データが取得できませんでした：${err}`));
};
function blog_open(url) {
  document.querySelector(".view").style.visibility = "visible";
  document.querySelector("#close").style.visibility = "visible";
  fetch(url)
    .then((res) => res.text())
    .then((text) => {
      document.querySelector(".view").innerHTML = text;
    }).catch((err) => console.log(`データが取得できませんでした：${err}`));
}
function blog_close() {
  document.querySelector(".view").style.visibility = "hidden";
  document.querySelector("#close").style.visibility = "hidden";
}
getData(1);