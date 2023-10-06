import React from "react";
import { Routes, Route, Link, useParams, Outlet } from "react-router-dom";

function Home() {
  return <div>Home</div>;
}

function Products() {
  return <div>Products</div>;
}
function Contact() {
  return <div>Contact form</div>;
}

function Product() {
  let params = useParams();
  console.log(params);
  // Logs the id of whichever product page you are on e.g.
  // {id: '1'} or {id: '2'}
  return <div>Individual product page: {params.id}</div>;
}

function RouteNotFound() {
  return <div>Page not found</div>;
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/product/1">Product with ID: 1</Link>
        </li>
        <li>
          <Link to="/product/2">Product with ID: 2</Link>
        </li>
      </ul>
    </nav>
  );
}

// Our header component that gets used in our <Layout> component
function Header() {
  return (
    <header>
      <div>Header with Logo and nav</div>
      <Nav />
    </header>
  );
}

// Our footer component that gets used in our <Layout> component
function Footer() {
  return <footer>Website footer</footer>;
}

// The <Outlet> from react-router-dom displays any child routes, almost like
// passing through "children" in a component
function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// Level 1 process

//     Start with a new CRA or reuse an existing one.

//     Add React Router.

//     Create 3 pages: <Home>, <Products> and <Contact>.

//     Create <Header> and <Footer> components.

//     Create a <Nav> component with links to your pages and add it to your <Header> component.

//     Create a <Layout> component with an <Outlet>, and add the <Header> and <Footer> components to this <Layout> component.

//     Create the routing for your pages, making sure to use the <Layout> component.

//     Create another page component, <Product>, that is a dynamic segment with an id value. In this component, log the parameter. Add links to test values e.g. product/1 and then test that it’s working.
