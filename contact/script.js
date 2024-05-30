// 子画面の要素を取得
var form_element = document.querySelector("#google-form");
 
// 子画面のコンテンツサイズに合わせてサイズを変更する関数
function changeParentHeight(){
  form_element.style.height = form_element.contentWindow.document.body.scrollHeight + "px";
}
 
// 親画面 iframe の高さを変更するイベント
// 1. 子画面の読み込み完了時点で処理を行う
form_element.contentWindow.onload = function(){ changeParentHeight(); };
 
// 2. 子画面のウィンドウサイズ変更が完了した時点で処理を行う
var timer = 0;
form_element.contentWindow.onresize = function () {
  if (timer > 0) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    changeParentHeight();
  }, 100);
}