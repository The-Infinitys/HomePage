var importedSources = [];

document.getElementById("left-button-importFile").addEventListener("click", (e)=>{
    //ファイルをimportする為の関数
    let dialoger = document.createElement("input");
    dialoger.type = "file";
    dialoger.click();

});
