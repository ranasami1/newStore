import heroBg from "../assets/images/Rectangle 2.png";
import Button from "../components/ui/Button";
import brand from "../assets/images/Vector.png";
import brand2 from "../assets/images/Vector (2).png";
import brand3 from "../assets/images/Vector (1).png";
import brand4 from "../assets/images/gucci-logo-1 1.png";
import brand5 from "../assets/images/Group.png";
import ProductCard from "../components/ui/ProductCard.jsx";
import productPic from "../assets/images/image 7.png";
import productPic2 from "../assets/images/image 8.png";
import productPic3 from "../assets/images/image 9.png";
import productPic4 from "../assets/images/image 10.png";
import casual from "../assets/images/Casual.png";
import formal from "../assets/images/Formal.png";
import party from "../assets/images/Party.png";
import gym from "../assets/images/Gym.png";
import { useToggle } from "../hooks/useToggle.jsx";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";
import { MdVerified } from "react-icons/md";

export default function Home() {
  const { isOpen: isNewArrivalsOpen, toggle: toggleNewArrivals } = useToggle();
  const { isOpen: isTopSellingOpen, toggle: toggleTopSelling } = useToggle();
  return (
    <div className="bg-white">
      <div className="flex bg-[#F2F0F1] flex-wrap justify-between p-5 sm:p-10 pb-0">
        <div className="flex flex-col gap-5 justify-center md:w-1/2">
          <h1
            className="text-black text-3xl md:text-6xl"
            style={{ fontFamily: "Integral CF Bold, sans-serif" }}
          >
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-gray-500 text-xs md:text-base">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button>Shop Now</Button>
          <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-5">
            <div className="flex flex-col items-start border-r-2 border-gray-300 pr-10">
              <p
                className="text-3xl md:text-4xl"
                style={{ fontFamily: "Satoshi-Black,sans-serif" }}
              >
                200+
              </p>
              <p className="text-gray-500 text-xs md:text-base">
                International Brands
              </p>
            </div>
            <div className="flex flex-col items-start sm:border-r-2 border-gray-300 sm:pr-10">
              <p
                className="text-3xl md:text-4xl"
                style={{ fontFamily: "Satoshi-Black,sans-serif" }}
              >
                2,000+
              </p>
              <p className="text-gray-500 text-xs md:text-base">
                High-Quality Products
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p
                className="text-3xl md:text-4xl"
                style={{ fontFamily: "Satoshi-Black,sans-serif" }}
              >
                30,000+
              </p>
              <p className="text-gray-500 text-xs md:text-base">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
        <div>
          <img className="w-full" src={heroBg} alt="Hero" />
        </div>
      </div>
      <div className="bg-black w-full flex flex-wrap items-center justify-center md:justify-between gap-5 p-5 sm:p-10 mb-5">
        <img src={brand} className="w-20 md:w-30 p-0" alt="brand" />
        <img src={brand3} className="w-20 md:w-30 p-0" alt="brand" />
        <img src={brand4} className="w-20 md:w-30 p-0" alt="brand" />
        <img src={brand5} className="w-20 md:w-30 p-0" alt="brand" />
        <img src={brand2} className="w-20 md:w-30 p-0" alt="brand" />
      </div>
      <div className="flex flex-col items-center justify-center h-auto gap-5 py-10 sm:px-10 sm:py-20 border-b border-gray-300 mb-10">
        <h1
          className="text-black text-3xl md:text-4xl px-5"
          style={{ fontFamily: "Integral CF Bold, sans-serif" }}
        >
          NEW ARRIVALS
        </h1>
        <div className="w-full overflow-hidden">
          <div className="flex md:flex-wrap md:justify-between overflow-x-auto scrollbar-hide gap-5 sm:p-10 p-5">
            <ProductCard
              className="min-w-[50%] sm:min-w-[48%] md:min-w-0"
              children={productPic}
              productName="Product 1"
              productPrice="$99.99"
            />
            <ProductCard
              className="min-w-[50%] sm:min-w-[48%] md:min-w-0"
              children={productPic2}
              productName="Product 2"
              productPrice="$149.99"
            />
            <ProductCard
              className="min-w-[50%] sm:min-w-[48%] md:min-w-0"
              children={productPic}
              productName="Product 3"
              productPrice="$199.99"
            />
            <ProductCard
              className="min-w-[50%] sm:min-w-[48%] md:min-w-0"
              children={productPic4}
              productName="Product 4"
              productPrice="$249.99"
            />
          </div>
        </div>
        <div
          className={`${isNewArrivalsOpen ? "flex " : "hidden"} w-full md:flex-wrap md:justify-between overflow-x-auto scrollbar-hide gap-5 sm:p-10 p-5`}
        >
          <ProductCard
            className="min-w-[50%] sm:min-w-[48%] md:min-w-0"
            children={productPic}
            productName="Product 1"
            productPrice="$99.99"
          />
          <ProductCard
            className="min-w-[50%] sm:min-w-[48%] md:min-w-0"
            children={productPic2}
            productName="Product 2"
            productPrice="$149.99"
          />
          <ProductCard
            className="min-w-[50%] sm:min-w-[48%] md:min-w-0"
            children={productPic}
            productName="Product 3"
            productPrice="$199.99"
          />
          <ProductCard
            className="min-w-[50%] sm:min-w-[48%] md:min-w-0"
            children={productPic3}
            productName="Product 4"
            productPrice="$249.99"
          />
        </div>
        <Button
          onClick={toggleNewArrivals}
          className="!w-70 bg-white !text-black hover:bg-black hover:!text-white transform:transition-transform duration-300 border border-gray-300"
          id="New Arrivals View All Button"
        >
          View All
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center h-auto gap-5 py-10 sm:px-10 sm:py-20 border-b border-gray-300 mb-10">
        <h1
          className="text-black text-3xl md:text-4xl px-5"
          style={{ fontFamily: "Integral CF Bold, sans-serif" }}
        >
          top selling
        </h1>
        <div className="w-full overflow-hidden">
          <div className="flex md:flex-wrap md:justify-between overflow-x-auto scrollbar-hide gap-5 sm:p-10 p-5">
            <ProductCard
              className="min-w-[50%] sm:min-w-[48%] md:min-w-0"
              children={productPic}
              productName="Product 1"
              productPrice="$99.99"
            />
            <ProductCard
              className="min-w-[50%] sm:min-w-[48%] md:min-w-0"
              children={productPic2}
              productName="Product 2"
              productPrice="$149.99"
            />
            <ProductCard
              className="min-w-[50%] sm:min-w-[48%] md:min-w-0"
              children={productPic}
              productName="Product 3"
              productPrice="$199.99"
            />
            <ProductCard
              className="min-w-[50%] sm:min-w-[48%] md:min-w-0"
              children={productPic4}
              productName="Product 4"
              productPrice="$249.99"
            />
          </div>
        </div>
        <div
          className={`${isTopSellingOpen ? "flex " : "hidden"} w-full md:flex-wrap md:justify-between overflow-x-auto scrollbar-hide gap-5 sm:p-10 p-5`}
        >
          <ProductCard
            className="min-w-[50%] sm:min-w-[48%] md:min-w-0"
            children={productPic}
            productName="Product 1"
            productPrice="$99.99"
          />
          <ProductCard
            className="min-w-[50%] sm:min-w-[48%] md:min-w-0"
            children={productPic2}
            productName="Product 2"
            productPrice="$149.99"
          />
          <ProductCard
            className="min-w-[50%] sm:min-w-[48%] md:min-w-0"
            children={productPic}
            productName="Product 3"
            productPrice="$199.99"
          />
          <ProductCard
            className="min-w-[50%] sm:min-w-[48%] md:min-w-0"
            children={productPic3}
            productName="Product 4"
            productPrice="$249.99"
          />
        </div>
        <Button
          onClick={toggleTopSelling}
          className="!w-70 bg-white !text-black hover:bg-black hover:!text-white transform:transition-transform duration-300 border border-gray-300"
          id="Top Selling View All Button"
        >
          View All
        </Button>
      </div>
      <div className="bg-white p-5 md:p-10 flex items-center justify-center">
        <div className="bg-[#F2F0F1] w-[99.5%] m-auto rounded-3xl p-5 md:p-10">
          <h1
            className="text-center text-3xl font-bold mb-8"
            style={{ fontFamily: "Integral CF Bold, sans-serif" }}
          >
            BROWSE BY DRESS STYLE
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-5 overflow-hidden relative h-48 md:col-span-1 hover:scale-105 transition-transform duration-300">
              <p className="font-bold text-lg z-10 relative">Casual</p>
              <img
                src={casual}
                alt="Casual"
                className="absolute right-0 bottom-0 h-full object-cover"
              />
            </div>

            <div className="bg-white rounded-2xl p-5 overflow-hidden relative h-48 md:col-span-2 hover:scale-105 transition-transform duration-300">
              <p className="font-bold text-lg z-10 relative">Formal</p>
              <img
                src={formal}
                alt="Formal"
                className="absolute right-0 bottom-0 h-full object-cover"
              />
            </div>

            <div className="bg-white rounded-2xl p-5 overflow-hidden relative h-48 md:col-span-2 hover:scale-105 transition-transform duration-300">
              <p className="font-bold text-lg z-10 relative">Party</p>
              <img
                src={party}
                alt="Party"
                className="absolute right-0 bottom-0 h-full object-cover"
              />
            </div>

            <div className="bg-white rounded-2xl p-5 overflow-hidden relative h-48 md:col-span-1 hover:scale-105 transition-transform duration-300">
              <p className="font-bold text-lg z-10 relative">Gym</p>
              <img
                src={gym}
                alt="Gym"
                className="absolute right-0 bottom-0 h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 md:p-10 flex flex-col">
        <div className="flex items-center justify-between">
        <h1
          className=" text-3xl font-bold"
          style={{ fontFamily: "Integral CF Bold, sans-serif" }}
        >
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="flex items-center gap-5">
          <FaArrowLeft />
          <FaArrowRight />
        </div>
      </div>
      <div className="p-5 flex items-center gap-5 overflow-x-scroll ">
        <div
          id="review"
          className="flex flex-col gap-3 p-5 md:p-5 items-start rounded-2xl border-gray-300 border min-w-100% md:w-60"
        >
          <span className="flex gap-1 ">
            <IoStarSharp className="text-[#FFC633] text-lg"/>
            <IoStarSharp className="text-[#FFC633] text-lg"/>
            <IoStarSharp className="text-[#FFC633] text-lg"/>
            <IoStarSharp className="text-[#FFC633] text-lg"/>
            <IoStarSharp className="text-[#FFC633] text-lg"/>
          </span>
          <p className="flex items-center font-bold" style={{fontFamily:"Satoshi-bold,sans-serif"}}>
            Sarah M.
            <MdVerified className="text-[#01AB31]" />
          </p>
          <p className="text-gray-500 text-xs">
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>
        <div
          id="review"
          className="flex flex-col gap-3 p-5 md:p-5 items-start rounded-2xl border-gray-300 border min-w-100% md:w-60"
        >
          <span className="flex gap-1 ">
            <IoStarSharp className="text-[#FFC633] text-lg"/>
            <IoStarSharp className="text-[#FFC633] text-lg"/>
            <IoStarSharp className="text-[#FFC633] text-lg"/>
            <IoStarSharp className="text-[#FFC633] text-lg"/>
            <IoStarSharp className="text-[#FFC633] text-lg"/>
          </span>
          <p className="flex items-center font-bold" style={{fontFamily:"Satoshi-bold,sans-serif"}}>
            Sarah M.
            <MdVerified className="text-[#01AB31]" />
          </p>
          <p className="text-gray-500 text-xs">
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>
        <div
          id="review"
          className="flex flex-col gap-3 p-5 md:p-5 items-start rounded-2xl border-gray-300 border min-w-100% md:w-60"
        >
          <span className="flex gap-1 ">
            <IoStarSharp className="text-[#FFC633] text-lg"/>
            <IoStarSharp className="text-[#FFC633] text-lg"/>
            <IoStarSharp className="text-[#FFC633] text-lg"/>
            <IoStarSharp className="text-[#FFC633] text-lg"/>
            <IoStarSharp className="text-[#FFC633] text-lg"/>
          </span>
          <p className="flex items-center font-bold" style={{fontFamily:"Satoshi-bold,sans-serif"}}>
            Sarah M.
            <MdVerified className="text-[#01AB31]" />
          </p>
          <p className="text-gray-500 text-xs">
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>
        <div
          id="review"
          className="flex flex-col gap-3 p-5 md:p-5 items-start rounded-2xl border-gray-300 border min-w-100% md:w-60"
        >
          <span className="flex gap-1 ">
            <IoStarSharp className="text-[#FFC633] text-lg"/>
            <IoStarSharp className="text-[#FFC633] text-lg"/>
            <IoStarSharp className="text-[#FFC633] text-lg"/>
            <IoStarSharp className="text-[#FFC633] text-lg"/>
            <IoStarSharp className="text-[#FFC633] text-lg"/>
          </span>
          <p className="flex items-center font-bold" style={{fontFamily:"Satoshi-bold,sans-serif"}}>
            Sarah M.
            <MdVerified className="text-[#01AB31]" />
          </p>
          <p className="text-gray-500 text-xs">
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>
        <div
          id="review"
          className="flex flex-col gap-3 p-5 md:p-5 items-start rounded-2xl border-gray-300 border min-w-100% md:w-60"
        >
          <span className="flex gap-1 ">
            <IoStarSharp className="text-[#FFC633] text-lg"/>
            <IoStarSharp className="text-[#FFC633] text-lg"/>
            <IoStarSharp className="text-[#FFC633] text-lg"/>
            <IoStarSharp className="text-[#FFC633] text-lg"/>
            <IoStarSharp className="text-[#FFC633] text-lg"/>
          </span>
          <p className="flex items-center font-bold" style={{fontFamily:"Satoshi-bold,sans-serif"}}>
            Sarah M.
            <MdVerified className="text-[#01AB31]" />
          </p>
          <p className="text-gray-500 text-xs">
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
