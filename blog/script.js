//data_list_lengthを動的に変えること。
const data_list_length = 1;

const getData = function (count) {
  fetch("https://the-infinitys.f5.si/BLOG/list/" + count.toString() + ".json")
    .then((res) => res.json())
    .then((apiData) => {
      const infos = apiData.info;
      infos.forEach(info => {
        const box = document.createElement("button");
        box.classList.add("blog-button");
        box.onclick = () => {
          document.querySelector("#blog-title").innerHTML = info.title;
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
  document.querySelector("#blog").style.visibility = "visible";
  document.querySelector("#blog-view").src = url;
}
function blog_close() {
  document.querySelector("#blog").style.visibility = "hidden";
}
for (let i=data_list_length;i>0;++i){
  getData(i);
}