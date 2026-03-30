import React from "react";
import Input from "../ui/Input";
import { MdOutlineMail } from "react-icons/md";
import Button from "../ui/Button";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col bg-gray-200 px-5 md:p-10 h-auto">
      <div className="bg-black relative -top-25 w-[99.5%] rounded-2xl p-5 sm:p-10 flex mx-auto">
        <div className="flex flex-wrap justify-center items-center w-full gap-5 md:flex-nowrap md:justify-between">
          <p
            className="text-white text-2xl sm:text-3xl md:text-4xl md:w-1/2"
            style={{ fontFamily: "Integral CF Bold, sans-serif" }}
          >
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </p>
          <div className="flex flex-col gap-3 w-full md:w-1/3">
            <Input placeholder="Enter your email address" bgColor="bg-white">
              <MdOutlineMail className="text-gray-500 text-xl" />
            </Input>
            <Button
              bgColor="bg-white"
              textColor="text-black"
              className="!w-full"
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col md:flex-row flex-wrap items-start justify-between  gap-10 pb-10">
          <div className="flex flex-col gap-5 w-full md:w-1/4">
            <p
              className="text-black text-2xl md:text-3xl"
              style={{ fontFamily: "Integral CF Bold, sans-serif" }}
            >
              SHOP.CO
            </p>
            <p className="text-gray-500 text-xs md:text-xs">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="flex flex-row gap-3 text-xl">
              <TiSocialTwitterCircular className="cursor-pointer" />
              <FaFacebook className="cursor-pointer" />
              <IoLogoInstagram className="cursor-pointer" />
              <FaGithub className="cursor-pointer" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full md:w-2/3">
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-sm tracking-widest">COMPANY</h4>
              <a href="#" className="text-gray-500 text-xs md:text-sm">
                Features
              </a>
              <a href="#" className="text-gray-500 text-xs md:text-sm">
                Works
              </a>
              <a href="#" className="text-gray-500 text-xs md:text-sm">
                About
              </a>
              <a href="#" className="text-gray-500 text-xs md:text-sm">
                Career
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-sm tracking-widest">HELP</h4>
              <a href="#" className="text-gray-500 text-xs md:text-sm">
                Customer Support
              </a>
              <a href="#" className="text-gray-500 text-xs md:text-sm">
                Delivery Details
              </a>
              <a href="#" className="text-gray-500 text-xs md:text-sm">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-500 text-xs md:text-sm">
                Privacy Policy
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-sm tracking-widest">FAQ</h4>
              <a href="#" className="text-gray-500 text-xs md:text-sm">
                Account
              </a>
              <a href="#" className="text-gray-500 text-xs md:text-sm">
                Manage Deliveries
              </a>
              <a href="#" className="text-gray-500 text-xs md:text-sm">
                Orders
              </a>
              <a href="#" className="text-gray-500 text-xs md:text-sm">
                Payments
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-sm tracking-widest">RESOURCES</h4>
              <a href="#" className="text-gray-500 text-xs md:text-sm">
                Free eBooks
              </a>
              <a href="#" className="text-gray-500 text-xs md:text-sm">
                Development Tutorial
              </a>
              <a href="#" className="text-gray-500 text-xs md:text-sm">
                How to - Blog
              </a>
              <a href="#" className="text-gray-500 text-xs md:text-sm">
                Youtube Playlist
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="h-4 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              className="h-4 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-4 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple Pay"
              className="h-4 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg"
              alt="Google Pay"
              className="h-4 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
