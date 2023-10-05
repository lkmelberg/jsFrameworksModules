import React, { useReducer } from "react";

const enemyHitPoints = { count: 100 };

function reducer(state, action) {
  // These are actions that can be dispatched
  switch (action.type) {
    case "attack":
      return { count: state.count - 10 };
    case "reset":
      return { count: 100 };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, enemyHitPoints);
  return (
    <div>
      <div>Enemy Hit Points: {state.count}</div>
      <button onClick={() => dispatch({ type: "attack" })}>Attack</button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
export default App;

// Level 1 process

//     Start with a clean CRA state.

//     Create a reducer with an initial state of enemyHitPoints being set to 100.

//     Create a reducer action attack which reduces the enemy hit points by 10.

//     Create the following HTML elements:

//     4.1 label that displays the enemy hit points

//     4.2 button that calls for the attack reducer action.

// Level 2 process

//     Add a random chance to the
