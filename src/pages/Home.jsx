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
import { useToggle } from "../hooks/useToggle.jsx";
export default function Home() {
  const { isOpen, toggle } = useToggle();
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
      <div className="flex flex-col items-center justify-center h-auto gap-5 py-10 sm:px-10 sm:py-20 border-b border-gray-300 mb-20">
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
        <div className={`${isOpen ? "flex " : "hidden"} w-full md:flex-wrap md:justify-between overflow-x-auto scrollbar-hide gap-5 sm:p-10 p-5`}>
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
          onClick={toggle}
          className="!w-50 bg-white !text-black hover:bg-black hover:!text-white transform:transition-transform duration-300 border border-gray-300"
        >
          View All
        </Button>
      </div>
    </div>
  );
}
