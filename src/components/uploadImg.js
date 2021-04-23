import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const Uploadimg = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log("file", selected);

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
      console.log("selected part");
    } else {
      setFile(null);
      console.log("non selected part");

      setError(
        "Your cannot include other file type please select among png or jpeg"
      );
    }
  };

  return (
    <div className="uploadimg">
      <form>
        <label className="inp">
          <input type="file" onChange={changeHandler} />
          <span className="plus">+</span>
        </label>
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div className="file">{file.name}</div>}
          {file && <ProgressBar file={file} />}
        </div>
      </form>
    </div>
  );
};

export default Uploadimg;
