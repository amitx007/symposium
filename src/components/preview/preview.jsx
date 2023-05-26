/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// /file 0 img jpeg , file 1 file 2 file 3 tiff
// file 0 ,2 ,3 tiff 1 is jpeg  decryption
import classes from "./preview.module.css";
import image from "../../assets/tick.png";
let success = true;
function Preview(props) {
  let files = props.files;
  let mode = props.mode;
  let names = [];
  let errorFlag = false;
  let errorMessage = "";
  let errorCode;
  if (files?.error) {
    errorFlag = true;
    errorMessage = files.error.message;
    errorCode = files.error.code;
  } else {
    for (let i in files) {
      names.push(files[i].name);
    }
  }
  return (
    <>
      <div className={classes.preview}>
        <div className={classes.heading}>
          <h3>Input/Output Panel</h3>
        </div>
        <div className={classes.grid}>
          {errorFlag && (
            <div className={classes.errorBox}>
              <p
                className={`${classes.errorMessage} ${
                  errorCode === 111
                    ? classes.notrequiredValue
                    : classes.multipleValue
                }`}
              >
                {errorMessage}
              </p>
            </div>
          )}
          {files && (
            <ul className={classes.list}>
              {names.map((ele, ind) => (
                <div className={classes.output} key={ind}>
                  <spam className={classes.mode}>
                    {files[ind].mode === "I" ? "Input" : "Output"} :
                  </spam>
                  <a
                    download
                    key={ind}
                    href={files[ind].preview}
                    className={classes.listItems}
                  >
                    {ele} <img src={image} className={classes.tick}></img>
                  </a>
                </div>
              ))}
            </ul>
          )}
          {!files && (
            <div className={classes.errorBox}>
              <p className={`${classes.errorMessage} ${classes.nullValue}`}>
                Sorry you have not selected any file for {mode}
              </p>
            </div>
          )}
        </div>
        {files && !errorFlag && (
          <div className={classes.button}>
            <button
              onClick={props.sendingRequest}
              disabled={names.length < 4 ? false : true}
            >
              Start {mode}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
export default Preview;
