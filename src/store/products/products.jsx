import { combineReducers } from "redux";
const ADD_PRODUCT = "ADD_PRODUCT";
const INCREMENT_PRODUCT = "INCREMENT_PRODUCT";

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    product,
  };
}

export function incrementProduct(product) {
  return {
    type: INCREMENT_PRODUCT,
    product,
  };
}

const defaultProducts = [
  {
    id: 0,
    title: "Milk",
    price: 19.99,
    discountedPrice: 19.99,
    count: 0,
  },
  {
    id: 1,
    title: "Bread",
    price: 12.99,
    discountedPrice: 12.99,
    count: 0,
  },
  {
    id: 2,
    title: "Cheese",
    price: 25.99,
    discountedPrice: 25.99,
    count: 0,
  },
];

//     [
//   {
//     name: "robin",
//     views: 1,
//   },
// ];

function products(state = defaultProducts, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        {
          title: action.product,
          price: action.product,
        },
      ];
    case INCREMENT_PRODUCT:
      const product = state.find((b) => action.product === b.title);
      const products = state.filter((b) => action.product !== b.title);
      return [
        ...products,
        {
          ...product,
          count: product.count + 1,
        },
      ];
    default:
      return state;
  }
}

const productApp = combineReducers({
  products,
});

export default productApp;
