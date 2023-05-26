/* eslint-disable react/prop-types */
// import { useState} from "react";
import MyDropzone from "../UI/draganddropfile";
import classes from "./form.module.css";
import Preview from "../preview/preview";
function Form(props) {
  const clickHandler = (e) => {
    if (props.mode !== e.target.innerText) {
      props.getFile(null);
      props.getType(e.target.innerText);
    }
  };
  let mode = props.mode;
  console.log(mode, props.files, "====== forms ");
  return (
    <>
      <div className={classes.form}>
        <div className={classes.options}>
          <span
            onClick={clickHandler}
            className={
              mode === "Encryption"
                ? classes.active + " " + classes.active1
                : ""
            }
          >
            Encryption
          </span>
          <span
            onClick={clickHandler}
            className={
              mode === "Decryption"
                ? classes.active + " " + classes.active2
                : ""
            }
          >
            Decryption
          </span>
        </div>
        <div className={classes.actualForm}>
          <label htmlFor="image">Image</label>
          <MyDropzone
            mode={props.mode}
            getFiles={props.getFile}
            className={classes.dropzone}
          ></MyDropzone>
          <div className={classes.formOptions}>
            <div>
              <label htmlFor="blocks">Block size</label>
              <br></br>
              <input
                type="number"
                max="100"
                min="3"
                name="blocks"
                placeholder="3"
                defaultValue="3"
                id={classes.blocks}
              ></input>
            </div>
            <div>
              <label htmlFor="size">Complex key</label>
              <br></br>
              <select
                name="size"
                id={classes.size}
                placeholder="FALSE"
                defaultValue="FALSE"
              >
                <option value="TRUE">TRUE</option>
                <option value="FALSE">FALSE</option>
              </select>
            </div>
            <div>
              <label htmlFor="key">Key</label>
              <br></br>
              <input type="text" name="key" id={classes.key} size="10"></input>
            </div>
          </div>
        </div>
      </div>
      <Preview
        files={props.files}
        mode={props.mode}
        sendingRequest={props.sendingRequest}
      ></Preview>
    </>
  );
}
export default Form;
