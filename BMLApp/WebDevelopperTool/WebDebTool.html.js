if (document.getElementById("InfinityDevelopperTool") == null) {
  let IDThtml = document.createElement("div");
  IDThtml.id = "InfinityDevelopperTool";
  IDThtml.innerHTML = `<div id="InfinityDevelopperTool"><style>#DevelopperToolBox{z-index:99999999999999;padding:0;position:fixed;width:20%;height:100%;top:0;right:0;background-color:#000}#VisibleSwitch{z-index:99999999999999999;position:fixed;top:0;right:0%;width:5%;height:5%;padding:0;background-color:#fff;color:#000;border:1px solid #808080}#MaximiseSwitch{z-index:99999999999999999;position:fixed;top:0;right:5%;width:5%;height:5%;padding:0;background-color:#fff;color:#000;border:1px solid #808080}#HTML{position:absolute;top:5%;left:0%;width:33%;height:5%;color:#ffa500;font-family:arial;border:2px solid #ffa500}#CSS{position:absolute;top:5%;left:33.3%;width:33%;height:5%;color:#add8e6;font-family:arial;border:2px solid #add8e6}#JS{position:absolute;top:5%;right:0;width:33%;height:5%;color:#ff0;font-family:arial;border:2px solid #ff0}</style><button id="VisibleSwitch">x</button> <button id="MaximiseSwitch">[]</button><div id="DevelopperToolBox"> <button id="HTML">&lt;></button><div id="HTMLEditor"></div><button id="CSS">#</button><div id="CSSEditor"></div><button id="JS">JS</button><div id="JSEditor"></div></div></div>`;
  document.body.appendChild(IDThtml);
} else {

}