const translate_Infinitys = (lang, data) => {
  if (lang in data) {
    const translate_info = data[lang];
    for (let i = 0; i < data.length; ++i) {
      const elem = document.querySelector(translate_info[i]["elem"]);
      elem.innerHTML = translate_info[i]["text"];
    }
  }
};

const main = () => {
  //get information
  let language = navigator.language;
  const params=new URL(window.location.href).searchParams;
  if (params.has("lang")){
    language=params.get("lang");
  }
  const location=new URL(window.location.href);
  const data_path="https://"+location.hostname+location.pathname+"/language.json"
  
  fetch(data_path)
    .then(res => res.json())
    .then(data => translate_Infinitys(language, data))
    .catch(err => alert("Translation programs was failed. Please reload the page. path: "+data_path+" error: "+err))
};
main();
