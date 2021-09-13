import React from "react";
import UseFetch from "../custom-hooks";

const index = () => {
  const { isLoading, products } = UseFetch();
  return (
    <div>
      <h1> React app </h1>
    </div>
  );
};

export default index;
