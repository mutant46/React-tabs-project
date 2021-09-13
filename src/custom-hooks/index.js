import { useState, useEffect } from "react";
const url = "http://mutant46.pythonanywhere.com/react-couse-api/";

const useFetch = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
    console.log(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { isLoading, products };
};

export default useFetch;
