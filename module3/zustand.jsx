import { createWithEqualityFn } from "zustand/traditional";
import { useState } from "react";

const useStore = createWithEqualityFn((set) => ({
  products: [
    {
      id: 0,
      title: "Milk",
      price: 19.99,
      discountedPrice: 19.99,
    },
    {
      id: 1,
      title: "Bread",
      price: 12.99,
      discountedPrice: 12.99,
    },
    {
      id: 2,
      title: "Cheese",
      price: 25.99,
      discountedPrice: 25.99,
    },
  ],
  addProducts: (product) =>
    set((state) => ({
      products: [
        { title: product.title, id: Math.random() * 100 },
        ...state.products,
      ],
    })),
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
  clearCount: () =>
    set((state) => ({
      products: [state],
    })),
}));

function App() {
  return (
    <>
      <div>
        <List />
        <Form />
      </div>
    </>
  );
}
function List() {
  const products = useStore((state) => state.products);
  const removeProduct = useStore((state) => state.removeProduct);
  const clearCount = useStore((state) => state.clearCount);
  return (
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <div className="row">
                <div className="col-md-6">{product.title} </div>
                <div className="col-md-6">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={(e) => removeProduct(product.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
}
// export default List;?

function Form() {
  const [title, setName] = useState("");
  const addProducts = useStore((state) => state.addProducts);
  const clearCount = useStore((state) => state.clearCount);

  const onChange = (e) => {
    setName(e.target.value);
  };

  const addProduct = () => {
    addProducts({ title: title });
    clear();
  };

  const clear = () => setName("");

  return (
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-6">
        <input
          id="name"
          type="text"
          className="form-control"
          onChange={onChange}
          value={title}></input>
      </div>
      <div className="col-md-2">
        <button
          className="btn btn-outline-primary"
          onClick={(e) => addProduct()}>
          Add
        </button>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={(e) => clearCount()}>
          Remove all
        </button>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
}

export default App;

// Level 1 process

//     Start with a new CRA or a clean, existing app.

//     Create a zustand store that:

//     2.1 Allows a product to be added

//     2.2 Clears the list of products.

// Below is product data you can use.

// const products = [
//   {
//     id: 0,
//     title: 'Milk',
//     price: 19.99,
//     discountedPrice: 19.99,
//   },
//   {
//     id: 1,
//     title: 'Bread',
//     price: 12.99,
//     discountedPrice: 12.99,
//   },
//   {
//     id: 2,
//     title: 'Cheese',
//     price: 25.99,
//     discountedPrice: 25.99,
//   },
// ];
