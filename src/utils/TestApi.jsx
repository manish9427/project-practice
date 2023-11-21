import React, { useEffect } from "react";
import { fetchDataFromApi } from "./api";

function TestApi() {
  useEffect(() => {
    ApiTesting();
  }, []);

  const ApiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default TestApi;
