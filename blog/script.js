const blog_start = {
  year: 2024,
  month: 4
}
let today = new Date();
today = {
  year: today.getFullYear(),
  month: today.getMonth() + 1
}
const data_list_length = 1 + 12 * (today.year - blog_start.year) + today.month - blog_start.month;
const domain = new URL(window.location.href);
const blog_domain = domain.hostname;
const blog_params = new URL(window.location.href).searchParams;
let param_open = ""
if (blog_params.has("name")) {
  param_open = blog_params.get("name");
}
const getData = function (name) {
  fetch("https://" + blog_domain + name + ".json")
    .then((res) => res.json())
    .then((apiData) => {
      const infos = apiData.info;
      infos.forEach(info => {
        if (param_open == info.name) {
          document.querySelector("#blog-title").innerHTML = info.title;
          blog_open("https://" + blog_domain + info.index);
        };
        const box = document.createElement("button");
        box.classList.add("blog-button");
        box.onclick = () => {
          param_open = info.name;
          document.querySelector("#blog-title").innerHTML = info.title;
          blog_open("https://" + blog_domain + info.index);
        }
        const thumbnail = document.createElement("img");
        thumbnail.src = "https://" + blog_domain + info.thumbnail;
        thumbnail.alt = info.name;
        thumbnail.loading = "lazy";
        const title = document.createElement("div");
        title.innerHTML = info.title;
        box.innerHTML = thumbnail.outerHTML + title.outerHTML;
        document.querySelector(".list").appendChild(box);
      });
    }).catch((err) => console.log(`データが取得できませんでした：${err}`));
};
function blog_open(url) {
  window.location.href = url;
}
for (let i = data_list_length; i > 0; i--) {
  const pathname = "/api/blog/" + (blog_start.year + ~~((blog_start.month + i - 1) / 12)).toString() + "-" + ((blog_start.month + i - 2) % 12 + 1).toString()
  getData(pathname);
}