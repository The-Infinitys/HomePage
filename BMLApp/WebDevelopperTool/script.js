document.querySelector('#VisibleSwitch').addEventListener('click', (e) => {
  if(document.getElementById('DevelopperToolBox').style.visibility==='visible'){
    document.getElementById('DevelopperToolBox').style.visibility = 'hidden';
    document.getElementById('VisibleSwitch').style.opacity='0';
  }else{
    document.getElementById('DevelopperToolBox').style.visibility = 'visible';
    document.getElementById('VisibleSwitch').style.opacity='1';
  }
});