import React from 'react'

export default function Button({ children, className= ""}) {
  return (
    <button className='bg-black text-white rounded-full w-full sm:w-fit py-3 px-20 cursor-pointer text-sm font-bold ' style={{fontFamily:"Satoshi-light, sans-serif"}}>
        {children}
    </button>
  )
}
