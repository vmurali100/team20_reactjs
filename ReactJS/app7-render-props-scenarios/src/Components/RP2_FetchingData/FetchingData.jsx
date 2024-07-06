import React from "react";
import DataFetcher from "./DataFetcher";

const FetchingData = () => {
  return (
    <div>
      <h1>Data Fetching Example</h1>
      <DataFetcher url="https://jsonplaceholder.typicode.com/posts">
        {({ data, loading }) =>
          loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {data.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          )
        }
      </DataFetcher>
    </div>
  );
};

export default FetchingData;
