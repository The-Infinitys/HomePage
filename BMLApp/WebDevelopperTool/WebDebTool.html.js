if (document.getElementById("InfinityDevelopperTool") != null) {
  document.getElementById("HTMLEditor").innerHTML='<textarea id="HTMLSource" id="" cols="30" rows="10" placeHolder="//Please Write Here to Code"></textarea><button id="UpdateHTML">Update</button><button id="RestoreHTML">Restore</button>';
  document.getElementById("CSSEditor").innerHTML='<textarea id="CSSSource" cols="30" rows="10" placeHolder="//Please Write Here to Code"></textarea><button id="UpdateCSS">Update</button><style id="CSSAdder"></style>';
  document.getElementById("JSEditor").innerHTML='<textarea id="JSSource" rows="30" cols="10" placeHolder="//Please Write Here to Code"></textarea><button id="JSRunnerButton">Run</button><div id="JSRunnerConsole"></div><script id="JSRunner"></script>';
}