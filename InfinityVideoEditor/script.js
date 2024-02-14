var importedSources = [];

document
  .getElementById("editor-button-importFile")
  .addEventListener("click", (e) => {
    //ソース(動画、画像、音声)をimportする為にボタンを押させる関数
    let dialoger = document.getElementById("file-dialog-source");
    dialoger.click();
  });

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
  .getElementById("editor-button-importProject")
  .addEventListener("click", (e) => {
    //プロジェクトをimportする為にボタンを押させる関数
    let dialoger = document.getElementById("file-dialog-project");
    dialoger.click();
  });

document
  .getElementById("file-dialog-project")
  .addEventListener("change", (e) => {
    alert("現在作成中です...");
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
