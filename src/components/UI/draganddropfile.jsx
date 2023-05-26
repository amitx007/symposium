/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import classes from "./draganddropfile.module.css";
import image from "../../assets/file-upload.png";

function MyDropzone(props) {
  const [file, setFile] = useState(null);
  // useEffect(() => {
  //   props.getFiles(file);
  // }, [file, props]);
  let mode = props.mode;
  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log(mode, "====== drag");
      if (mode === "Encryption") {
        if (
          acceptedFiles?.length === 1 &&
          (acceptedFiles[0].type === "image/jpeg" ||
            acceptedFiles[0].type === "image/jpg")
        ) {
          console.log("encryption");
          props.getFiles(() => {
            return {
              ...acceptedFiles.map((file) =>
                Object.assign(file, {
                  preview: URL.createObjectURL(file),
                  mode: "I",
                })
              ),
            };
          });
          // setFile(() => {
          //   return {
          //     ...acceptedFiles.map((file) =>
          //       Object.assign(file, { preview: URL.createObjectURL(file) })
          //     ),
          //   };
          // });
        } else if (acceptedFiles?.length > 1) {
          props.getFiles(() => {
            return {
              ...acceptedFiles.map((file) =>
                Object.assign(file, {
                  preview: URL.createObjectURL(file),
                  mode: "I",
                })
              ),
            };
          });
          // setFile(() => {
          //   return {
          //     error: { message: "Sorry ! Please insert a single image file" },
          //   };
          // });
        } else {
          props.getFiles(() => {
            return {
              error: {
                message: `Sorry ! Please insert a single JPEG/JPG file`,
                code: 111,
              },
            };
          });
          // setFile(() => {
          //   return {
          //     error: {
          //       message: "Sorry ! Please insert a single JPEG/JPG file",
          //     },
          //   };
          // });
        }
      } else if (mode === "Decryption" && acceptedFiles.length === 3) {
        console.log("ula ula1");
        let count = 0;
        let flag = false;
        for (let i in acceptedFiles) {
          if (acceptedFiles[i].type === "image/tiff") {
            count++;
          } else {
            flag = true;
          }
        }
        if (count === 3) {
          props.getFiles(() => {
            return {
              ...acceptedFiles.map((file) =>
                Object.assign(file, {
                  preview: URL.createObjectURL(file),
                  mode: "I",
                })
              ),
            };
          });
          // setFile(() => {
          //   return {
          //     ...acceptedFiles.map((file) =>
          //       Object.assign(file, {
          //         preview: URL.createObjectURL(file),
          //         mode: "I",
          //       })
          //     ),
          //   };
          // });
        } else if (flag) {
          props.getFiles(() => {
            return {
              error: {
                message: `Sorry ! Please insert another ${
                  3 - count
                } tiff files as it does not satisfy the requirements for decryptions`,
              },
            };
          });
          // setFile(() => {
          //   return {
          //     error: {
          //       message: `Sorry ! Please insert another ${
          //         3 - count
          //       } tiff files as it does not satisfy the requirements for decryptions`,
          //     },
          //   };
          // });
        }
      } else if (
        mode === "Decryption" &&
        (acceptedFiles.length < 3 || acceptedFiles.length > 3)
      ) {
        console.log("ula ula2");
        props.getFiles(() => {
          return {
            error: {
              message: "Sorry ! Please insert 3 tiff file",
              code: 222,
            },
          };
        });
      }
    },
    [mode, props]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps({
        className: classes.container,
      })}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <>
          <p>Drag n drop the image here, or click to select image</p>
          <img src={image} className={classes.upload}></img>
        </>
      )}
    </div>
  );
}
export default MyDropzone;
