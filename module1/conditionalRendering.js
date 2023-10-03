import React from "react";

function ProductsList(props) {
  return (
    <>
      {props.map((props) => (
        <li key={props.id}>
          <b>{props.title}: </b>
          {props.price} {props.isOnSale && "ON SALE"}
        </li>
      ))}
    </>
  );
}

function App() {
  const products = [
    { id: 0, title: "Bread", price: 19.99, isOnSale: true },
    { id: 1, title: "Milk", price: 29.99, isOnSale: false },
    { id: 2, title: "Cheese", price: 35.99, isOnSale: false },
    { id: 3, title: "Water", price: 15.99, isOnSale: true },
  ];
  return <div>{ProductsList(products)}</div>;
}

export default App;

// Level 1 process

// The data for you to use is as follows.

// const products = [
//   { id: 0, title: 'Bread', price: 19.99, isOnSale: true },
//   { id: 1, title: 'Milk', price: 29.99, isOnSale: false },
//   { id: 2, title: 'Cheese', price: 35.99, isOnSale: false },
//   { id: 3, title: 'Water', price: 15.99, isOnSale: true },
// ];

//     Loop through the above data in <App> or a new component. This choice is up to you.

//     Display the title and price values.

//     If the product isOnSale property is set to true, then display a div with “ON SALE” as the text. If the isOnSale property is set to false, do not display anything.

//     You should now have all the products mapped out, but only the ones with isOnSale set to true will display the “ON SALE” text.
