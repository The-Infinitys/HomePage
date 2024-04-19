const getData = function () {
  fetch("https://the-infinitys.f5.si/blog-data/list/1.json")
    .then((res) => res.json())
    .then((apiData) => {
      alert(apiData);
    }).catch((err) => console.error(`データが取得できませんでした：${err}`));
};
getData();