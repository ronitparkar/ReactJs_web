import { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("Type or paste your content here");
  //   setText("Ronit is here!");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerCase = () => {
    let newlowerText = text.toLowerCase();
    setText(newlowerText);
  };

  return (
    <>
      <div className="container mt-5">
        <h4>
          Accidentally left the caps lock on and typed something, but can't be
          bothered to start again and retype it all?
        </h4>
        <div className="container my-3 p-0">
          <textarea
            className="form-control text-muted"
            value={text}
            id="mybox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div>
          <button
            className="btn btn-primary btn-lg m-3"
            onClick={handleUpperCase}
          >
            UPPERCASE
          </button>
          <button
            className="btn btn-primary btn-lg m-3"
            onClick={handleLowerCase}
          >
            lowercase
          </button>
        </div>
      </div>
      <div className="container mt-5">
        <h4>Your Text Summary</h4>
        <p>
          Character Count: {text.length} , Word Count: {text.split(" ").length}
        </p>
        <p>Total time to read in minutes: {0.008 * text.split(" ").length}</p>
      </div>
    </>
  );
}
