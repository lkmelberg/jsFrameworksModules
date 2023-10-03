import React from "react";

function Person(props) {
  return (
    <p>
      {props.firstName}, {props.lastName}: {props.city},
    </p>
  );
}

function App() {
  // We will now create use our component 3 times
  // but with different values in each
  return (
    <div>
      <Person firstName="Ola" lastName="Nordmann" city="Oslo" />
    </div>
  );
}

export default App;

// Level 1 process

//     Create a component, such as <Person>.

//     Add three props to this component, such as firstName, lastName and city.

//     Display this component to the screen using random values you’d like to use.

//     Reuse this component again, but use different values this time.
