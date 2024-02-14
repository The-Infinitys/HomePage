//メモリ取得(プロジェクト用)
var importedSources = [];
var ProjectJSON = {
  title: "",
  sources: [], //here is the name of source file
  sprites: {},
};

//定数の生成(スプライトの雛形)
const sprite_animation = {
  persent: 0, //it needs 0~100.
  x: 0,
  y: 0,
  direction: 0,
  rotation_way: "right", //it needs left or right
  size: 100,
};
const sprite_video = {
  name: "",
  source: {
    name: "",
    start: 0,
    speed: 1,
  },
  start_time: 0,
  duration: 0,
  position: {
    x: 0,
    y: 0,
    direction: 0,
    size: 100,
  },
  animation: [],
};

const sprite_image = {
  name: "",
  source: "",
  start_time: 0,
  duration: 0,
  position: {
    x: 0,
    y: 0,
    direction: 0,
    size: 100,
  },
  animation: [],
};

const sprite_text = {
  name: "",
  source: {
    text: "",
    font: "",
  },
  start_time: 0,
  duration: 0,
  position: {
    x: 0,
    y: 0,
    direction: 0,
    size: 100,
  },
  animation: [],
};
//ファイルの読み込み
document
  .getElementById("file-dialog-source")
  .addEventListener("change", (e) => {
    const files = document.getElementById("file-dialog-source").files;
    for (let i = 0; i < files.length; ++i) {
      file = files[i];
      importedSources.append(file);
      console.info('imported the file named "' + file.name + '".');
    }
  });

document
  .getElementById("file-dialog-project")
  .addEventListener("change", (e) => {
    alert("現在作成中です...");
  });

//画面上の動きを作る。
document
  .getElementById("editor-button-importFile")
  .addEventListener("click", (e) => {
    //ソース(動画、画像、音声)をimportする為にボタンを押させる関数
    let dialoger = document.getElementById("file-dialog-source");
    dialoger.click();
  });

document
  .getElementById("editor-button-importProject")
  .addEventListener("click", (e) => {
    //プロジェクトをimportする為にボタンを押させる関数
    let dialoger = document.getElementById("file-dialog-project");
    dialoger.click();
  });

document.getElementById("editor-back").addEventListener("click", (e) => {
  document.getElementById("editor-back").style.visibility = "hidden";
  editorMenus = document.getElementsByClassName("editor-menus");
  for (let i = 0; i < editorMenus.length; ++i) {
    editorMenus[i].style.visibility = "hidden";
  }
  document.getElementById("editor-menu-main").style.visibility = "visible";
});

document
  .getElementById("editor-button-addElem")
  .addEventListener("click", (e) => {
    document.getElementById("editor-menu-main").style.visibility = "hidden";
    document.getElementById("editor-menu-sub").style.visibility = "visible";
    document.getElementById("editor-menu-addElem").style.visibility = "visible";
    document.getElementById("editor-back").style.visibility = "visible";
    document.getElementById("editor-subtitle").innerHTML = "add Element";
  });
