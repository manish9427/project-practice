import React, { useEffect } from "react";
import { fetchDataFromApi } from "./api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "../store/homeSlice";

function TestApi() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);
  useEffect(() => {
    ApiTesting();
  }, []);

  const ApiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };

  return (
    <div>
      <h1>{url?.total_pages}</h1>
    </div>
  );
}

export default TestApi;
