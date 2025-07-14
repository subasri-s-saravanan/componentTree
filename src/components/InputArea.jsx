import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleClick() {
    props.onAdd(inputText); // Pass inputText to parent
    setInputText(""); // Clear input after adding
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={handleClick}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
