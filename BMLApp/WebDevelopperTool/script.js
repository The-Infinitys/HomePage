var HTMLEditor = document.getElementById("HTMLEditor");
var CSSEditor = document.getElementById("CSSEditor");
var JSEditor = document.getElementById("JSEditor");
var HTMLSource = document.getElementById("HTMLSource");
function getHTMLSource() {
  return document.documentElement.outerHTML
    .replace("/&/g", "&amp;")
    .replace("/</g", "&lt;")
    .replace("/>/g", "&gt;");
}
function openDevelopper() {
  document.getElementById("DevelopperToolBox").style.visibility = "visible";

  document.getElementById("MaximiseSwitch").style.visibility = "visible";

  CSSEditor.style.visibility = "hidden";
  JSEditor.style.visibility = "hidden";
  HTMLEditor.style.visibility = "visible";
  document.getElementById("VisibleSwitch").style.opacity = "1";
}
openDevelopper();
HTMLSource.value = getHTMLSource();
document.querySelector("#VisibleSwitch").addEventListener("click", (e) => {
  if (
    document.getElementById("DevelopperToolBox").style.visibility === "visible"
  ) {
    document.getElementById("DevelopperToolBox").style.visibility = "hidden";
    document.getElementById("MaximiseSwitch").style.visibility = "hidden";
    CSSEditor.style.visibility = "hidden";
    JSEditor.style.visibility = "hidden";
    HTMLEditor.style.visibility = "hidden";
    document.getElementById("VisibleSwitch").style.opacity = "0";
  } else {
    openDevelopper();
  }
});
document.querySelector("#MaximiseSwitch").addEventListener("click", (e) => {
  if (document.getElementById("DevelopperToolBox").style.width == "100%") {
    document.getElementById("DevelopperToolBox").style.width = "20%";
  } else {
    document.getElementById("DevelopperToolBox").style.width = "100%";
  }
})
document.querySelector("#HTML").addEventListener("click", (e) => {
  CSSEditor.style.visibility = "hidden";
  JSEditor.style.visibility = "hidden";
  HTMLEditor.style.visibility = "visible";
});
document.querySelector("#CSS").addEventListener("click", (e) => {
  HTMLEditor.style.visibility = "hidden";
  JSEditor.style.visibility = "hidden";
  CSSEditor.style.visibility = "visible";
});
document.querySelector("#JS").addEventListener("click", (e) => {
  CSSEditor.style.visibility = "hidden";
  HTMLEditor.style.visibility = "hidden";
  JSEditor.style.visibility = "visible";
});
document.querySelector("#RestoreHTML").addEventListener("click", (e) => {
  HTMLSource.value = getHTMLSource();
});
document.querySelector("#UpdateHTML").addEventListener("click", (e) => {
  console.log(HTMLSource.value);
  document.open();
  document.write(HTMLSource.value);
});
console.log = ((logTextAreaArgument) => {
  let logTextArea = logTextAreaArgument;
  return text => logTextArea.innerHTML += text + '<br>';
})(document.getElementById("JSRunnerConsole"));
function a() {
  x = document.getElementById("test")
  x.remove();
  y = document.createElement("script");
  y.id = "test";
  y.innerHTML = "console.log(" + getRandomInt(9).toString() + ")";
  document.body.appendChild(y);
  document.getElementById("123").innerHTML = console;
}