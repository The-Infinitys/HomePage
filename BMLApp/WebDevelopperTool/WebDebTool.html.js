if (document.getElementById("InfinityDevelopperTool") == null) {
  let IDThtml = document.createElement("div");
  IDThtml.id = "InfinityDevelopperTool";
  IDThtml.innerHTML = `

  <div id="InfinityDevelopperTool">
    <style>
      #DevelopperToolBox {
        z-index: 9999999;
        padding: 0;
        position: fixed;
        width: 20%;
        height: 100%;
        top: 0;
        right: 0;
        background-color: black;
      }
      #VisibleSwitch {
        z-index: 99999999999999999;
        position: fixed;
        top: 0;
        right: 0%;
        width: 5%;
        height: 5%;
        padding: 0;
        background-color: white;
        color: black;
        border: 1px solid gray;
      }
      #MaximiseSwitch {
        z-index: 99999999999999999;
        position: fixed;
        top: 0;
        right: 5%;
        width: 5%;
        height: 5%;
        padding: 0;
        background-color: white;
        color: black;
        border: 1px solid gray;
      }

      #HTML {
        position: absolute;
        top: 5%;
        left: 0%;
        width: 33%;
        height: 5%;
        color: orange;
        font-family: arial;
        border: 2px solid orange;
      }

      #HTMLEditor {
        position: absolute;
        top: 10%;
        left: 0;
        width: 100%;
        height: 90%;
        border: 2px solid orange;
      }

      #HTMLSource {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 80%;
        border: 2px solid orange;
      }

      #UpdateHTML {
        z-index: 999999;
        position: absolute;
        top: 80%;
        left: 0;
        width: 100%;
        height: 10%;
        border: 2px solid orange;
      }

      #RestoreHTML {
        z-index: 999999;
        position: absolute;
        top: 90%;
        left: 0;
        width: 100%;
        height: 10%;
        border: 2px solid orange;
      }
    </style>
    <button id="VisibleSwitch">x</button>
    <button id="MaximiseSwitch">[]</button>
    <div id="DevelopperToolBox">
      <button id="HTML">&lt;&gt;</button>
      <div id="HTMLEditor">
        <textarea id="HTMLSource" id="" cols="30" rows="10" placeHolder="//Please Write Here to Code"></textarea>
        <button id="UpdateHTML">Update</button>
        <button id="RestoreHTML">Restore</button>
      </div>
    </div>

    <script>
      var HTMLEditor = document.getElementById("HTMLEditor");
      var CSSEditor = document.getElementById("CSSEditor");
      var JSEditor = document.getElementById("JSEditor");
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
      });
    </script>
    <script>
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
      document.querySelector("#HTML").addEventListener("click", (e) => {
        CSSEditor.style.visibility = "hidden";
        JSEditor.style.visibility = "hidden";
        HTMLEditor.style.visibility = "visible";
      });
      document.querySelector("#RestoreHTML").addEventListener("click", (e) => {
        HTMLSource.value = getHTMLSource();
      });
      document.querySelector("#UpdateHTML").addEventListener("click", (e) => {
        console.log(HTMLSource.value);
        document.open();
        document.write(HTMLSource.value);
      });
    </script>
  </div>

`;
  document.body.appendChild(IDThtml);
} else {

}