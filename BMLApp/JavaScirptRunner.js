(function(){
  let a=document.createElement('html');
  a.innerHTML=`
  <div id="JSRunnerBox">
  <textarea id="sourceCode" rows="15" cols="50" placeHolder="//Please Write Here to Code">
  </textarea>
  <button id="runButton">Run</button>
  <h1 id="JSRunnerResult">
  </h1>
  </div>
  <button id="HideJSRunner"></button>
  `;
  document.body.appendChild(a);
  let b=document.createElement('style');
  b.innerHTML=`
  #JSRunnerBox{
    position:fixed;
    width:20%;
    height:100%;
    top:0;
    left:0;
    padding:0px;
    background:black;
    border:2px solid #00ff00;
    border-radius:0; 
    color:#009900;
  }
  #sourceCode{
    position:absolute;
    width:100%;
    height:50%;
    top:0;
    left:0;
    padding:0px;
    font-size:15px;
    background:black;
    border:2px solid #00ff00;
    border-radius:0; 
    color:#009900;
  } 
  #runButton{
    position:absolute;
    width:100%;
    height:10%;
    top:50%;
    left:0;
    padding:0px;
    background:black;
    border:2px solid #00ff00;
    border-radius:0; 
    color:#009900;
  }
  #JSRunnerResult{
    position:absolute;
    padding:0;
    top:60%;
    left:0;
    font-size:15px;
    width:100%;
    height:40%;
    background:black;
    color:green;
    border:2px solid #00ff00;
  }
  #HideJSRunner{
    position:fixed;
    width:10%;
    height:10%;
    top:50%;
    left:0;
    padding:0px;
    background:black;
    border:2px solid #00ff00;
    border-radius:0; 
    color:#009900;
  }
  `;
  document.body.appendChild(b);
  let c=document.createElement('script');
  c.innerHTML=`
  document.querySelector('#runButton').addEventListener('click', (e) => {
    var sourceCode = document.getElementById("sourceCode").value;
    var sourceData=document.createElement('script');
    sourceCode=sourceCode.split("\\n").join("\\n");
      sourceData.innerHTML="function JSRunner(){"+sourceCode+"}document.getElementById('JSRunnerResult').innerHTML=JSRunner();";
    console.log(sourceData.innerHTML);
    document.body.appendChild(sourceData); 
  });
  document.querySelector('#HideJSRunner').addEventListener('click', (e) => {
    if(document.getElementById('JSRunnerBox').style.visibility==='visible'){
      document.getElementById('JSRunnerBox').style.visibility = 'hidden';
    }else{
      document.getElementById('JSRunnerBox').style.visibility = 'visible';
    }
  });
  `;
  document.body.appendChild(c);
  }())