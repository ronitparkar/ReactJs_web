import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
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

  const handleClearCase = () => {
    let newClearText = "";
    setText(newClearText);
  };

  return (
    <>
      <div
        className="container mt-5"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h4
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          Yeayy! write something in the box.
        </h4>
        <div className="container my-3 p-0">
          <textarea
            className="form-control"
            value={text}
            id="mybox"
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#404040" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
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
          <button
            className="btn btn-primary btn-lg m-3"
            onClick={handleClearCase}
          >
            Clear
          </button>
        </div>
      </div>
      <div
        className="container mt-5"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h4>Your Text Summary</h4>
        <p>
          Character Count: {text.length} , Word Count: {text.split(" ").length}
        </p>
        <p>Total time to read in minutes: {0.008 * text.split(" ").length}</p>
      </div>
    </>
  );
}
