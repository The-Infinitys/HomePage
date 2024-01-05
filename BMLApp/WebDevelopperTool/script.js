var HTMLEditor=document.getElementById("HTMLEditor")
var CSSEditor=document.getElementById("CSSEditor")
var JSEditor=document.getElementById("JSEditor")

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
  if(HTMLEditor.style.visibility==='Hidden'){
    CSSEditor.style.visibility='Hidden';
    JSEditor.style.visibility='Hidden';
    HTMLEditor.style.visibility='Visible';
  }
});

document.querySelector('#CSS').addEventListener('click', (e) => {
  if(HTMLEditor.style.visibility==='Hidden'){
    HTMLEditor.style.visibility='Hidden';
    JSEditor.style.visibility='Hidden';
    CSSEditor.style.visibility='Visible';
  }
});

document.querySelector('#JS').addEventListener('click', (e) => {
  if(HTMLEditor.style.visibility==='Hidden'){
    CSSEditor.style.visibility='Hidden';
    HTMLEditor.style.visibility='Hidden';
    JSEditor.style.visibility='Visible';
  }
});