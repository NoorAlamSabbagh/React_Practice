import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to UpperCase!", "success");
  };
  const handleLoClick = () => {
    console.log("LowerCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowerCase!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const ClearText = (event) => {
    // let newText = "";
    setText(event.target.value);
  };

  const CopyText = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const ExtraSpaces = () =>{
  let  newText = text.split(/[ ]+/)
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed!", "Success")
  }


  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='light'?'grey':'white'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={ClearText}>
          ClearText
        </button>
        <button className="btn btn-primary mx-2" onClick={CopyText}>
          CopyText
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={ExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to preview it here"}</p>
      </div>
    </>
  );
}
