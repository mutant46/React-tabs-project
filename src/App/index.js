import React, { useState, useEffect } from "react";
import { useFetch } from "../custom-hooks";
import Loading from "../loading";
const url = "http://mutant46.pythonanywhere.com/react-couse-api/";

const Index = () => {
  const { isLoading, products } = useFetch(url);
  const [menu, setMenu] = useState(products);

  useEffect(() => {
    setMenu(products);
  }, [products]);

  const setProducts = (category) => {
    let newProducts = products.filter(
      (product) => product.category === category
    );
    setMenu(newProducts);
  };

  return (
    <div>
      <ul className="w-1/2  flex justify-center text-lg tabs font-bold m-auto ">
        <li
          className="mx-5 cursor-pointer hover:bg-green-200 px-3 py-1 rounded-sm"
          onClick={() => setMenu(products)}
        >
          All
        </li>
        <li
          className="mx-5 cursor-pointer px-3 py-1 rounded-sm hover:bg-green-200"
          onClick={() => setProducts("breakfast")}
        >
          Breakfast
        </li>
        <li
          className="mx-5 cursor-pointer px-3 py-1 rounded-sm hover:bg-green-200"
          onClick={() => setProducts("lunch")}
        >
          Lunch
        </li>
        <li
          className="mx-5 cursor-pointer px-3 py-1 rounded-sm hover:bg-green-200"
          onClick={() => setProducts("shakes")}
        >
          Shakes
        </li>
      </ul>
      {isLoading && <Loading />}
      <div className="menu__wrapper flex w-11/12 mx-auto mt-10 justify-between mx-auto flex-wrap">
        {!isLoading &&
          menu.map((item) => {
            const { id, title, price, img, desc } = item;
            return (
              <div
                className="menu__item py-5 my-5 overflow-hidden md:w-6/12 md:flex"
                key={id}
              >
                <div className="overflow-hidden mb-5 md:mb-0 md:w-2/4 md:h-36 border-red-900 border-4 ">
                  <img src={img} alt="Product" className="w-full h-full" />
                </div>

                <div className="md:px-5 w-full">
                  <div className="border-dotted border-b-2 border-red-900 flex justify-between py-1 uppercase font-bold">
                    <h1>{title}</h1>
                    <span>
                      <b className="text-red-900">${price}</b>
                    </span>
                  </div>
                  <p className="mt-4 rounded-sm ">{desc}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Index;
