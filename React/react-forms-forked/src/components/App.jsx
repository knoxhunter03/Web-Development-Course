import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  function handleOnChange(event) {
    setName(event.target.value)
  }

  function handleOnClick() {
    setHeadingText(name);
  }

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <input
        onChange={handleOnChange}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={handleOnClick}>Submit</button>
    </div>
  );
}

export default App;
