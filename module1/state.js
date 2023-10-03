import { useState } from "react";

function App() {
  function Product() {
    return <div>{productTitle}</div>;
  }
  // Our counter state created here
  const [productTitle, setProductTitle] = useState("Milk");

  // This function calls 'setCounter' and
  // we increment 'counter' by 1
  function onButtonClick() {
    setProductTitle("Cheese");
  }
  return (
    <div>
      <Product />
      <button onClick={onButtonClick}>Change to Cheese</button>
    </div>
  );
}

export default App;

// Level 1 process

//     Create a Product component that is empty except for an empty div, e.g. <div></div>.

//     Call this component in <App>.

//     Create a state called productTitle and pass it into your Product component. Give this state the initial value of “Milk”.

//     Create a button element with a function called onButtonClick. This function must change the productTitle state to “Cheese”. Tip: Use the setter returned useState, which should have been called setProductTitle.

//     Your Product component should now display “Cheese” when the button is clicked.
