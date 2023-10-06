import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartReducer } from "./cartSlice";

function initialCartState() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => dispatch({ type: "ADD_ITEM_TO_CART" })}>
        Add item to cart
      </button>
      <button onClick={() => dispatch({ type: "DELETE_ITEM_FROM_CART" })}>
        Minus 1
      </button>
    </div>
  );
}

export default initialCartState;
