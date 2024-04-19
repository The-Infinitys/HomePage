result={};
const getData = function (count) {
  fetch("https://the-infinitys.f5.si/BLOG/list/" + count.toString() + ".json")
    .then((res) => res.json())
    .then((apiData) => {
      const info=apiData.info;
      console.log(info);
      const box=document.createElement("button");
      box.className="blog-button";
      box.onclick=()=>{
        blog_open(info["html"]);
      }
      const thumbnail=document.createElement("img");
      thumbnail.src="https://the-infinitys.f5.si/BLOG"+info["thumbnail"];
      thumbnail.alt=info["name"];
      const title=document.createElement("div");
      title.innerHTML=info["title"];
      box.innerHTML=thumbnail.outerHTML+title.outerHTML;
      document.querySelector(".list div").appendChild(box);
    }).catch((err) => console.log(`データが取得できませんでした：${err}`));
};
function blog_open(url){

}
getData(1);