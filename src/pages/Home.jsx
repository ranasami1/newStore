import heroBg from "../assets/images/Rectangle 2.png";
export default function Home() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-screen flex px-10"
      style={{ backgroundImage: `url(${heroBg})`}}
    >
      <div className="w-1/2 flex flex-col gap-5 justify-center">
        <h1
          className="text-black text-6xl"
          style={{ fontFamily: "Integral CF Bold, sans-serif" }}
        >
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-gray-500">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
      </div>

      <div className=""> </div>
    </div>
  );
}
