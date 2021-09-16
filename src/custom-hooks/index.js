import { useState, useEffect } from "react";


export const useFetch = (url) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getProducts = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
    };

    useEffect(() => {
        getProducts();
    }, [url]);

    return { isLoading, products };
};