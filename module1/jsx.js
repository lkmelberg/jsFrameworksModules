import React from "react";

function App() {
  const productCart = "Product Cart";
  return (
    <div>
      <h1>{productCart}</h1>;
      <ul>
        <li>Milk - 19.99</li>
        <li>Bread - 23.99</li>
        <li>Cheese - 40.99</li>
      </ul>
    </div>
  );
}

export default App;

// Not sure if this is correct

// Level 1 process

//     Add a H1 heading <h1> with children of Product cart
//     Create an unordered list <ul> below the H1.
//     Create three list items inside of the <ul> list, with the values of: 3.1 Milk - 19.99 3.2 Bread - 23.99 3.3 Cheese - 40.99
