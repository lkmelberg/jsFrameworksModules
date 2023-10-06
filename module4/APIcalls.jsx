import React, { useEffect, useState } from "react";

const url = "https://api.noroff.dev/api/v1/online-shop";

function App() {
  const [posts, setPosts] = useState([]);
  // State for holding our loading state
  const [isLoading, setIsLoading] = useState(false);
  // State for holding our error state
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        // Reset the error state in case there as an error previously
        setIsError(false);
        // Turn on the loading state each time we do an API call
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setPosts(json);
        // Clear the loading state once we've successfully got our data
        setIsLoading(false);
      } catch (error) {
        // Clear the loading state if we get an error and then
        // set our error state to true
        setIsLoading(false);
        setIsError(true);
      }
    }

    getData();
  }, []);

  if (isLoading) {
    return <div>Loading posts</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>Price: {post.price}</p>
          <img src={post.imageUrl} alt={post.title} />;
          <p>Rating: {post.rating}</p>
          <div>
            <h3>reviews:</h3>
            <p>
              {post.reviews.map((reviews) => (
                <p>: {reviews.description}</p>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;

// Level 1 process

//     Create a new CRA or reuse a previous installation

//     Get a list of products from the end-point: https://api.noroff.dev/api/v1/online-shop

//     Display a component for each product, using all of the properties from the object in the data
