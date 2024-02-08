var importedSources = [];
function importFile() {
  let dialoger = document.createElement("input");
  dialoger.type = "file";
  dialoger.click();

}
document.getElementById("left-button-importFile").addEventListener("click", importFile());
