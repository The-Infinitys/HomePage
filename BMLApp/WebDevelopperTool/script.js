var HTMLEditor=document.getElementById("HTMLEditor");
var CSSEditor=document.getElementById("CSSEditor");
var JSEditor=document.getElementById("JSEditor");
function getHTMLSource(){
  return document.documentElement.outerHTML.replace("/&/g", "&amp;").replace("/</g", "&lt;").replace("/>/g", "&gt;");
}
document.querySelector('#VisibleSwitch').addEventListener('click', (e) => {
  if(document.getElementById('DevelopperToolBox').style.visibility==='visible'){
    document.getElementById('DevelopperToolBox').style.visibility = 'hidden';
    document.getElementById('VisibleSwitch').style.opacity='0';
  }else{
    document.getElementById('DevelopperToolBox').style.visibility = 'visible';
    document.getElementById('VisibleSwitch').style.opacity='1';
  }
});
document.querySelector('#HTML').addEventListener('click', (e) => {
  CSSEditor.style.visibility='hidden';
  JSEditor.style.visibility='hidden';
  HTMLEditor.style.visibility='visible';
});
document.querySelector('#CSS').addEventListener('click', (e) => {
  HTMLEditor.style.visibility='hidden';
  JSEditor.style.visibility='hidden';
  CSSEditor.style.visibility='visible';
});
document.querySelector('#JS').addEventListener('click', (e) => {
  CSSEditor.style.visibility='hidden';
  HTMLEditor.style.visibility='hidden';
  JSEditor.style.visibility='visible';
});
document.querySelector('#RestoreHTML').addEventListener('click',(e)=>{

});