import React, { createContext, useContext } from "react";

const products = [
  { id: 0, title: "Bread", price: 19.99 },
  { id: 1, title: "Milk", price: 29.99 },
  { id: 2, title: "Cheese", price: 35.99 },
  { id: 3, title: "Water", price: 15.99 },
];

const productContext = createContext(products);

function App() {
  return (
    <productContext.Provider value={products}>
      <div>
        <MyComponent />
      </div>
    </productContext.Provider>
  );
}

function MyComponent() {
  const product = useContext(productContext);
  return (
    <div>
      {product.map((products, index) => (
        <div key={index}>
          <span>{products.title}</span>:<span>{products.price}</span>
        </div>
      ))}
    </div>
  );
}

export default App;

// Level 1 process

//     Start with a new CRA or clean the existing app.

//     Create a context with the data listed below available.

//     Create a component that will be used to display the data and call this in your main <App>.

//     Display the data in the above component (point 3 above) using the context. Do not use props.

// Data to use:

// const products = [
//   { id: 0, title: 'Bread', price: 19.99 },
//   { id: 1, title: 'Milk', price: 29.99 },
//   { id: 2, title: 'Cheese', price: 35.99 },
//   { id: 3, title: 'Water', price: 15.99 },
// ];
