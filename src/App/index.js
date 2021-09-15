import React, { useState } from "react";
import UseFetch from "../custom-hooks";
import Loading from "../loading";

const Index = () => {
  const { isLoading, products } = UseFetch();
  console.log(products);
  const [menu, setMenu] = useState(products);

  return (
    <div>
      <ul className="w-1/2  flex justify-center text-lg tabs font-bold m-auto ">
        <li className="mx-5 cursor-pointer hover:bg-green-200 px-3 py-1 rounded-sm selected">
          All
        </li>
        <li className="mx-5 cursor-pointer px-3 py-1 rounded-sm hover:bg-green-200">
          Breakfast
        </li>
        <li className="mx-5 cursor-pointer px-3 py-1 rounded-sm hover:bg-green-200">
          Lunch
        </li>
        <li className="mx-5 cursor-pointer px-3 py-1 rounded-sm hover:bg-green-200">
          Shakes
        </li>
      </ul>
      {isLoading && <Loading />}
      <div className="menu__wrapper flex w-11/12 mx-auto mt-10 justify-between mx-auto flex-wrap">
        {!isLoading &&
          products.map((item) => {
            const { id, title, category, price, img, desc } = item;
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
