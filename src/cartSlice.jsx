export const initialCartState = {
  noOfItemInCart: 0,
  cart: [],
};

export const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        noOfItemInCart: state.noOfItemInCart + 1,
        cart: [...state.cart, action.payload],
      };
    case "DELETE_ITEM_FROM_CART":
      return {
        ...state,
        noOfItemInCart: state.noOfItemInCart + 1,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  } // Important to handle the default behaviour
};
export default cartReducer;
