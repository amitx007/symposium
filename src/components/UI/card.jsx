import classes from "./card.module.css";
import Form from "../form/form";

import axios from "axios";

import { useState } from "react";

const Card = () => {
  const [files, setFiles] = useState(null);
  console.log(files);
  const getFiles = (file) => {
    setFiles(file);
  };
  const [type, setType] = useState("Encryption");

  const getType = (mode) => {
    setType(() => {
      return mode;
    });
  };

  const sendingImage = (e) => {
    e.preventDefault();
    const data = new FormData();
    if (type === "Encryption") {
      data.append("image", files[0], files[0].name);
      data.append("mode", "-e");
      data.append("block_size", 3);
      data.append("complex_key", "");
    } else {
      data.append("image", files[0], files[0].name);
      data.append("key", files[1], files[1].name);
      data.append("key2", files[2], files[2].name);
      data.append("mode", "-d");
      data.append("block_size", 3);
      data.append("complex_key", "");
    }
    console.log("hyyy!");
    axios({
      method: "post",
      url: "http://localhost:8000/api/upload-image/",
      data,
    }).then((res) => {
      let _files = res.data;

      const blob = new Blob([_files], {
        type: type === "Encryption" ? "image/tiff" : "image/jpeg",
      });
      const blobURL = URL.createObjectURL(blob);
      const ele = document.createElement("a");

      ele.onclick = (e) => {
        console.log("helolo");
        e.preventDefault();
      };
      ele.href = blobURL;
      ele.download =
        type === "Encryption" ? "EncryptedImage.tiff" : "DecryptedImage.jpeg";
      ele.click();
      console.log(type);
      const myFile = new File(
        [blob],
        type === "Encryption" ? "EncryptedImage.tiff" : "DecryptedImage.jpeg",
        {
          type: blob.type,
        }
      );
      let x = 0;
      let newFile = {};
      for (let i in files) {
        x++;
        newFile[i] = files[i];
      }
      newFile[x++] = myFile;
      newFile[x - 1].preview = blobURL;
      newFile[x - 1].mode = "O";
      if (type === "Encryption") {
        newFile[x++] = {
          name: "key.tiff",
          type: "image/tiff",
          path: "./public/key.tiff",
          preview: "./public/key.tiff",
          mode: "O",
        };
        newFile[x++] = {
          name: "key2.tiff",
          type: "image/tiff",
          path: "./public/key2.tiff",
          preview: "./public/key2.tiff",
          mode: "O",
        };
      }

      setFiles(newFile);
    });
  };

  return (
    <>
      <div className={classes.card}>
        <Form
          getFile={setFiles}
          getType={getType}
          mode={type}
          files={files}
          sendingRequest={sendingImage}
        ></Form>
      </div>
    </>
  );
};

export default Card;
