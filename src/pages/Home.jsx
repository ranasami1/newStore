import heroBg from "../assets/images/Rectangle 2.png";
import Button from "../components/ui/Button";
export default function Home() {
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
            <p className="text-3xl md:text-4xl" style={{fontFamily:"Satoshi-Black,sans-serif"}}>200+</p>
            <p className="text-gray-500 text-xs md:text-base">International Brands</p>
          </div>
          <div className="flex flex-col items-start sm:border-r-2 border-gray-300 sm:pr-10">
            <p className="text-3xl md:text-4xl" style={{fontFamily:"Satoshi-Black,sans-serif"}}>2,000+</p>
            <p className="text-gray-500 text-xs md:text-base">High-Quality Products</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-3xl md:text-4xl" style={{fontFamily:"Satoshi-Black,sans-serif"}}>30,000+</p>
            <p className="text-gray-500 text-xs md:text-base">Happy Customers</p>
          </div>
        </div>
      </div>
      <div><img className="w-full" src={heroBg} alt="Hero" /></div>
    </div>
    </div>
  );
}
