import React from "react";
import styles from "./styles/module2.3/App.module.css";

function App() {
  return <div className={styles.container}>Hello world</div>;
}

export default App;

// Level 1 process

//     Create a new CRA or reuse an older app you’re not using. Replace App.js with the following:

// import React from 'react';

// function App() {
//   return <div>Hello world</div>;
// }

// export default App;

//     Create a new stylesheet in /src/ called App.module.css.

//     Add the following style to App.module.css:

// .container {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100px;
//   width: 100px;
//   background: red;
//   color: white;
// }

//     Import your stylesheet into App.js at the top of the file with import styles from './App.module.css'.

//     Add the container style to your div in App.js. This will cause the container to look like a red box with white text.
