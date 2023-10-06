import React from "react";

interface IProduct {
  title: string;
  description: string;
  price: string | number;
}

function Product({ title, description, price }: IProduct) {
  return (
    <div>
      {title} - {description} - {price}
    </div>
  );
}

function App() {
  return (
    <div>
      <Product
        title="Milk"
        description="Fresh milk locally sourced"
        price={19.99}
      />
    </div>
  );
}

export default App;
