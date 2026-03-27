import { IoMdClose } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  return (
    <div className="flex flex-col">
      <div className="bg-black  flex items-center px-10">
        <p className="text-white py-1 mx-auto " style={{fontFamily:"Satoshi-light, sans-serif"}}>
          Sign up and get 20% off to your first order.
          <a
            href="#"
            className="underline underline-offset-7 text-white m-1 font-bold"
          >
            Sign Up Now
          </a>
        </p>
        <IoMdClose className="text-white cursor-pointer" />
      </div>
        <div className="bg-white p-10 flex items-center justify-between">
            <div>
                <p className="text-black text-3xl" style={{fontFamily:"Integral CF Bold, sans-serif"}}>SHOP.CO</p>
            </div>
            <div>
                <ul className="flex items-center gap-5"style={{fontFamily:"Satoshi-light, sans-serif"}}>
                    <li className="text-black flex items-center cursor-pointer text-sm">Shop <RiArrowDropDownLine className="text-xl" /></li>
                    <li className="text-black cursor-pointer text-sm" style={{fontFamily:"Satoshi-light, sans-serif"}}>On Sale</li>
                    <li className="text-black cursor-pointer text-sm" style={{fontFamily:"Satoshi-light, sans-serif"}}>New Arrivals</li>
                    <li className="text-black cursor-pointer text-sm" style={{fontFamily:"Satoshi-light, sans-serif"}}>Brands</li>
                </ul>
            </div>
            <div className="bg-gray-200 p-2 rounded-full flex items-center gap-1 w-xl">
              <IoSearch  className="text-gray-500 text-xl "/>
              <input className="w-full text-gray-500 p-0.5 outline-none bg-transparent"
                type="text"  placeholder={"Search for products..."}></input>
            </div>
            <div className="flex gap-2">
              <RiShoppingCartLine className="text-xl cursor-pointer" />
              <CgProfile className="text-xl cursor-pointer"/>
            </div>
        </div>
    </div>
  );
}
