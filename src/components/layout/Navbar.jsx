import { IoMdClose } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { PiListBold } from "react-icons/pi";

export default function Navbar() {
  return (
    <div className="flex flex-col">
      <div className="bg-black flex flex-row items-center px-5 md:px-10">
        <p className="text-white py-1 mx-auto text-xs" style={{fontFamily:"Satoshi-light, sans-serif"}}>
          Sign up and get 20% off to your first order.
          <a href="#" className="underline underline-offset-7 text-white m-1 font-bold">
            Sign Up Now
          </a>
        </p>
        <IoMdClose className="text-white cursor-pointer hidden md:block" />
      </div>

      <div className="bg-white px-5 md:px-10 py-5 flex items-center justify-between">
        <PiListBold className="block md:hidden text-xl" />

        <div>
          <p className="text-black text-2xl md:text-3xl" style={{fontFamily:"Integral CF Bold, sans-serif"}}>
            SHOP.CO
          </p>
        </div>

        <div className="hidden md:block">
          <ul className="flex items-center gap-5" style={{fontFamily:"Satoshi-light, sans-serif"}}>
            <li className="text-black flex items-center cursor-pointer text-sm">
              Shop <RiArrowDropDownLine className="text-xl" />
            </li>
            <li className="text-black cursor-pointer text-sm">On Sale</li>
            <li className="text-black cursor-pointer text-sm">New Arrivals</li>
            <li className="text-black cursor-pointer text-sm">Brands</li>
          </ul>
        </div>

        <div className="bg-gray-200 p-2 rounded-full gap-1 w-xl hidden md:flex items-center">
          <IoSearch className="text-gray-500 text-xl" />
          <input
            className="w-full text-gray-500 p-0.5 outline-none bg-transparent"
            type="text"
            placeholder="Search for products..."
          />
        </div>

        <div className="flex gap-2">
          <RiShoppingCartLine className="text-xl cursor-pointer" />
          <CgProfile className="text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}