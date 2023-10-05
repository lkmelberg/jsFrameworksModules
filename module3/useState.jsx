import React from "react";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(true);

  const activate = () => {
    setIsActive(true);
  };

  const deactivate = () => {
    setIsActive(false);
  };

  return (
    <div>
      {isActive ? (
        <div>
          <h1>I am active</h1>
          <button onClick={deactivate}>deactivate</button>
        </div>
      ) : (
        <div>
          <h1>I am not active</h1>
          <button onClick={activate}>activate</button>
        </div>
      )}
    </div>
  );
}

export default App;

// Level 1 process

//     Create a new CRA or reuse an old one.

//     In your App, create a state called isActive with a setter called setIsActive.

//     In your return, check if isActive is true. If it is, return <div>I am active</div>; otherwise, return <div>I am not active</div>.

//     Add a button to the screen. Link this button to a function that toggles isActive between true and false.

//     When you click the button, you should now see the text change between I am active and I am not active.
