import React from "react";

function App() {
  function onButtonClick() {
    console.log("Button clicked!");
  }

  return (
    <div>
      <button onClick={onButtonClick}>Click me</button>
    </div>
  );
}

export default App;

// Level 1 process

//     Add a button element.

//     Create a function called onButtonClick which console.logs “Button have been clicked”.

//     Attach this function to your button element, making sure that clicking the button calls the function.
