const translate_main = () => {
  //get information
  const translate_Infinitys = (lang, data) => {
  if (lang in data) {
    const translate_info = data[lang];
    for (let i = 0; i < translate_info.length; ++i) {
      const elem = document.querySelector(translate_info[i]["elem"]);
      elem.innerHTML = translate_info[i]["text"];
    }
  }
};
  let language = navigator.language;
  const params=new URL(window.location.href).searchParams;
  if (params.has("lang")){
    language=params.get("lang");
  }
  fetch("./language.json")
    .then(res => res.json())
    .then(data => translate_Infinitys(language, data))
    .catch(err => alert("Translation programs was failed. Please reload the page. path: "+data_path+" error: "+err))
};
translate_main();
