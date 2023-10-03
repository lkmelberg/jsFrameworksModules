import React from "react";

function ProductsList(props) {
  return (
    <>
      {props.map((props) => (
        <li key={props.id}>
          <b>{props.title}: </b>
          {props.price}
        </li>
      ))}
    </>
  );
}

function App() {
  const products = [
    { id: 0, title: "Bread", price: 19.99 },
    { id: 1, title: "Milk", price: 29.99 },
    { id: 2, title: "Cheese", price: 35.99 },
    { id: 3, title: "Water", price: 15.99 },
  ];
  return <div>{ProductsList(products)}</div>;
}

export default App;

// Level 1 process

// The data you will be using is as follows:

// const products = [
//   { id: 0, title: 'Bread', price: 19.99 },
//   { id: 1, title: 'Milk', price: 29.99 },
//   { id: 2, title: 'Cheese', price: 35.99 },
//   { id: 3, title: 'Water', price: 15.99 },
// ];

//     Create a component called <ProductsList>.

//     Use the supplied data as a variable in <App> called products. Pass this data as a prop called products into <ProductsList>.

//     Map through the data in <ProductsList> and display the title and price of each value in a div.
