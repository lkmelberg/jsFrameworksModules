import React from "react";
import "./styles/module2.2/styles.css";

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <p className="text">Paragraph 1</p>
    </div>
  );
}

export default App;

// Level 1 process

//     Create a new CRA. Replace App.js with the following:

// function App() {
//   return <div>Hello world</div>;
// }

// export default App;

//     Create a new stylesheet in /src/ called styles.css.

//     Add the following style to style.css:

// body {
//   background-color: lightblue;
// }

//     Import your stylesheet into App.js at the top of the file with import './style.css'. When you save the file, the App should have a light blue background.

//     Create a new class called .text. Give it a color property of #fff.

//     Add a new p element with the text Paragraph 1. Give this p element a class (className) property with a value of text. Make sure this p element is in-between the <div> elements in App.js. You should now have a p element with white text.
