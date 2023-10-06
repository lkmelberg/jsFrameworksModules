import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addProduct, { incrementProduct } from "./store/products/products";
import "./App.css";

function App() {
  const [productTitle, setProduct] = useState("");
  const products = [...useSelector((state) => state.products)].sort((a, b) => {
    return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
  });
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addProduct(productTitle));
    setProduct("");
  };

  return (
    <div className="wrapper">
      <h1>Product List</h1>
      {/* <form onSubmit={handleSubmit}>
        <label>
          <p>Add Product</p>
          <input
            type="text"
            onChange={(e) => setProduct(e.target.value)}
            value={productTitle}
          />
        </label>
        <div>
          <button type="submit">Add</button>
        </div>
      </form> */}
      {/* <ul>
        {products.map((product) => (
          <li key={product.title}>
            <h3>{product.title}</h3>
            <div>
              Views: {product.price}
              <button onClick={() => dispatch(incrementProduct(product.title))}>
                <span role="img" aria-label="add">
                  ➕
                </span>
              </button>
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );
  console.log("works");
}

export default App;
