var importedSources = [];

document.getElementById("left-button-importFile").addEventListener("click", (e)=>{
    //ソース(動画、画像、音声)をimportする為にボタンを押させる関数
    let dialoger = document.createElement("file-dialog-source");
    dialoger.click();
});

document.getElementById("left-button-importProject").addEventListener("click", (e)=>{
    //プロジェクトをimportする為にボタンを押させる関数
    let dialoger = document.createElement("file-dialog-project");
    dialoger.click();
});