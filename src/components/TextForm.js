import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //  console.log("Upper key is clicked");
    setText(Text.toUpperCase());
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLowClick = () => {
    setText(Text.toLowerCase());
    props.showAlert("Converted to lowercase", "success");
  };
  const handleOnChange = (event) => {
    // console.log("handle on change is clicked");
    setText(event.target.value);
  };
  const counting = (event) => {
    if (event === "") return 0;
    else {
      return event.split(/\s+/).length;
    }
  };
  const [Text, setText] = useState("Enter text here");

  return (
    <div>
      <div
        className="container my-3 "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {counting(Text)} <b>Words</b> and {Text.length} <b>Characters</b>
          {/* Text.split(/\s+/).filter((Element) => {return Element.length!=0}).length  
            instead i could have written this in couting(Text)
          */}
        </p>

        <p>
          {" "}
          <b>Time taken to read is</b> {0.08 * counting(Text)} Minutes
        </p>
      </div>
      <div className="container">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={Text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "cadetblue" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }} // first {was for writing the javascript and the other is {for wrting the obejcts}}
          ></textarea>
        </div>
        <button
          disabled={Text.length === 0}
          classNameName="btn btn-primary mx-6 primary"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={Text.length === 0}
          classNameName="btn btn-primary mx-5 primary"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Preview</h2>
        <p>{Text.length > 0 ? Text : "Nothing to preview"}</p>
      </div>
    </div>
  );
}
