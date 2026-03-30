import React from "react";

export default function ProductCard({children, className = "",productName,productPrice}) {
  return (
    <div className={`${className} w-full md:w-auto `}>
      <img
        src={children}
        alt="Product"
        className=" w-full h-64 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
      />
      <h3 className="font-bold mt-2">{productName}</h3>
      <p className="text-gray-500 mt-1">{productPrice}</p>
    </div>
  );
}
