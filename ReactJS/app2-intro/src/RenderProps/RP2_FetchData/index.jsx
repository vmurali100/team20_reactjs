import React from "react";
import DataFetcher from "./DataFetcher";

const RP2_FetchData = () => {
  return (
    <div>
      <DataFetcher url="https://jsonplaceholder.typicode.com/posts">
        {() => {
          return <></>;
        }}
      </DataFetcher>
    </div>
  );
};

export default RP2_FetchData;
