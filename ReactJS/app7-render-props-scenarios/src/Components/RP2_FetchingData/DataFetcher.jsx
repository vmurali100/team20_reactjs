import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const DataFetcher = ({ url, children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);
  return children({ data, loading });
};

export default DataFetcher;
