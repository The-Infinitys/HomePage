let a=document.createElement('html');
a.innerHTML=`
<textarea id="sourceCode" rows="15" cols="50" placeHolder="//Please Write Here to Code">
</textarea>
<button id="runButton">Run</button>
<h1 id="JSRunnerResult">
</h1>`;
document.body.appendChild(a);
let b=document.createElement('style');
b.innerHTML=`
#sourceCode{
  position:fixed;
  width:20%;
  height:50%;
  top:0;
  padding:0px;
  font-size:15px;
  background:black;
  border:2px solid #00ff00;
  border-radius:0; 
  color:#009900;
} 
#runButton{
  position:fixed;
  width:20%;
  height:10%;
  top:50%;
  padding:0px;
  background:black;
  border:2px solid #00ff00;
  border-radius:0; 
  color:#009900;
}
#JSRunnerResult{
  position:fixed;
  padding:0;
  top:55%;
  font-size:15px;
  width:20%;
  height:40%;
  background:black;
  color:green;
  border:2px solid #00ff00;
}`;
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
});`;
document.body.appendChild(c);