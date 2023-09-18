import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={() => {
          props.onChange(event);
        }}
        type="text"
        value={props.value}
      />
      <button
        onClick={() => {
          props.onClicked();
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
