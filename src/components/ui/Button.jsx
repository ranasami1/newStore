import React from "react";

export default function Button({
  children,
  className = "",
  bgColor = "bg-black",
  textColor = "text-white",
  onClick=undefined
}) {
  return (
    <button
      className={`${bgColor} ${textColor} ${className} rounded-full w-full sm:w-fit flex items-center justify-center py-3 px-15 cursor-pointer text-xs sm:text-sm font-bold `}
      style={{ fontFamily: "Satoshi-light, sans-serif" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
