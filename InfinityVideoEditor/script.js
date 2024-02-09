var importedSources = [];

class sprite {
  constructor(file) {
    if (typeof file == "string") {
      this.source = {
        proparty: {
          name: "text",
          size: file.length,
          type: "text",
        },
        element: null,
      };
    } else {
      this.source = {
        proparty: {
          name: file.name,
          size: file.size,
          type: file.type,
        },
        element: null,
      };
      if (proparty.type.startsWith("image/")) {
        this.source.element = document.createElement("img");
      } else if (proparty.type.startsWith("audio/")) {
        this.source.element = document.createElement("audio");
      } else if (proparty.type.startsWith("video/")) {
        this.source.element = document.createElement("video");
      } else {
        console.error(
          "The type of file was invalid.You can use only video, audio, image, and string."
        );
      }
      //fileオブジェクトをhtmlエレメントに変える
      let reader = new FileReader();
      this.source.element.src = reader.result;
      reader.readAsDataURL(file);
    }
  }
}

document
  .getElementById("editor-button-importFile")
  .addEventListener("click", (e) => {
    //ソース(動画、画像、音声)をimportする為にボタンを押させる関数
    let dialoger = document.getElementById("file-dialog-source");
    dialoger.click();
  });

document
  .getElementById("file-dialog-source")
  .addEventListener("change", (e) => {
    const files = document.getElementById("file-dialog-source").files;
    for (let i = 0; i < files.length; ++i) {
      file = files[i];
      importedSources.append(file);
      console.info('imported the file named "' + file.name + '".');
    }
  });

document
  .getElementById("editor-button-importProject")
  .addEventListener("click", (e) => {
    //プロジェクトをimportする為にボタンを押させる関数
    let dialoger = document.getElementById("file-dialog-project");
    dialoger.click();
  });

document
  .getElementById("file-dialog-project")
  .addEventListener("change", (e) => {
    alert("現在作成中です...");
  });
