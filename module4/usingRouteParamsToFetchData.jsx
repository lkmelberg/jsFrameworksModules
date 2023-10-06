import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

function Home() {
  return <div>Home</div>;
}

function Todo() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setData(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }, [id]);

  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(data);

  return (
    <div>
      <div>To Do:</div>
      <div>Item: {data.title}</div>
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todo/1">Todo:</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="todo/:id" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;

// Level 1 process

// The API you should use is: https://jsonplaceholder.typicode.com/todos

//     Create a new CRA or an existing app.

//     Add react-router.

//     Create <Todo> component which only returns <div>Todo</div> at this stage.

//     Create routing to this <Todo> component using a dynamic segment.

//     In the <Todo> component, use the useParams hook to get the params.

//     Use the correct parameter from params to do an API call and fetch a single Todo.

//     Display this Todo on the page.
