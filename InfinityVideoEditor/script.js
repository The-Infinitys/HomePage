var importedSources = [];

document.getElementById("left-button-importFile").addEventListener("click", (e)=>{
    //ソース(動画、画像、音声)をimportする為にボタンを押させる関数
    let dialoger = document.createElement("file-dialog-source");
    dialoger.click();
});

document.getElementById("file-dialog-source").addEventListener("change",(e)=>{
    const files=document.getElementById("file-dialog-source").files;
    for (let i=0;i<files.length;++i){
        file=files[i];
        importedSources.append(file);
        console.log(file);
    }
});

document.getElementById("left-button-importProject").addEventListener("click", (e)=>{
    //プロジェクトをimportする為にボタンを押させる関数
    let dialoger = document.createElement("file-dialog-project");
    dialoger.click();
});

document.getElementById("file-dialog-project").addEventListener("change",(e)=>{
    alert("現在作成中です...");
});