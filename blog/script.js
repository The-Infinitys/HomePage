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
const start_loading_button = document.querySelector("#start-loading");
const getData = function (name) {
  fetch("https://" + blog_domain + name + ".json")
    .then((res) => res.json())
    .then((apiData) => {
      const infos = apiData.info;
      for (let i = 0; i < infos.length; i++) {
        const info = infos[i];
        const box = document.createElement("button");
        box.className="blog-button show-blog-button";
        box.onclick = () => {
          window.location.href = "https://" + blog_domain + info.index;
        }
        const thumbnail = document.createElement("img");
        thumbnail.src = "https://" + blog_domain + info.thumbnail;
        thumbnail.alt = info.name;
        thumbnail.loading = "lazy";
        const loading = document.createElement("img");
        loading.src = "data:image/svg+xml;base64,PHN2ZyAgIHZlcnNpb249IjEuMSIgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICAgdmlld0JveD0iLTYwIC02MCAxMjAgMTIwIiAgIGZpbGw9Im5vbmUiICAgc3Ryb2tlPSIjNzc3Ij4gICA8Zz4gICA8YW5pbWF0ZVRyYW5zZm9ybSAgICBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iICAgICBhdHRyaWJ1dGVUeXBlPSJYTUwiICAgICB0eXBlPSJyb3RhdGUiICAgICBmcm9tPSIwIDAgMCIgICAgIHRvPSIzNjAgMCAwIiAgICAga2V5VGltZXM9IjA7IDEiICAgICBrZXlTcGxpbmVzPSIwLjUsIDAuMjMsIDAuNSwgMC43NyIgICAgIGNhbGNNb2RlPSJzcGxpbmUiICAgICBkdXI9IjJzIiAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4gICA8YW5pbWF0ZSAgICAgICBhdHRyaWJ1dGVOYW1lPSJzdHJva2UiICAgICAgIHZhbHVlcz0iI2YwMDsjZmYwOyMwZjA7IzBmZjsjMDBmOyNmMGY7I2YwMCIgICAgICAgZHVyPSI1cyIgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+ICAgPGVsbGlwc2UgY3g9Ii0yNSIgY3k9IjAiIHJ4PSIyNSIgcnk9IjIwIiBzdHJva2Utd2lkdGg9IjIiIC8+ICAgPGVsbGlwc2UgY3g9IjI1IiBjeT0iMCIgcng9IjI1IiByeT0iMjAiIHN0cm9rZS13aWR0aD0iMiIgLz4gICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iNTAiIHN0cm9rZS13aWR0aD0iNCIgLz4gICA8L2c+IDwvc3ZnPiA=";
        loading.alt = "loading...";
        loading.className = "loading-infinity";
        const title = document.createElement("div");
        title.innerHTML = info.title;
        box.innerHTML = loading.outerHTML + thumbnail.outerHTML + title.outerHTML;
        const insert_button = () => {
          document.querySelector("#blog-button-section").insertBefore(box, start_loading_button);
        }
        setTimeout(insert_button, 200);
      }
    }).catch((err) => console.log(`データが取得できませんでした：${err}`));
};
start_loading_button.onclick = () => {
  for (let load_count = data_list_length; load_count > 0; load_count--) {
    const pathname = "/article-" + blog_start.year.toString() + "/index/" + (blog_start.year + ~~((blog_start.month + load_count - 1) / 12)).toString() + "-" + ((blog_start.month + load_count - 2) % 12 + 1).toString()
    getData(pathname);
    if (load_count <= 1) {
      start_loading_button.style.opacity = 0;
      start_loading_button.classList.remove("show-blog-button");
      start_loading_button.classList.add("hide-blog-button");
    }
  }
}
