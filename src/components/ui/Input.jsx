import React from 'react'

export default function Input({className="",placeholder="",type="text",children,bgColor="bg-gray-200",mobile="",textColor="text-gray-500"}) {
  return (
    <div className={`${bgColor} p-2 rounded-full gap-1 flex items-center md:flex ${mobile} ${className}`}>
              {children}
              <input
                className=" text-gray-500 p-0.5 outline-none bg-transparent"
                type="text"
                placeholder={`${placeholder}`}
              />
            </div>
  )
}
