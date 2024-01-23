import React from "react";

import Image from "next/image";

const Footer = () => (
  <footer className="w-full flex md:justify-center justify-between items-center flex-col p-4 shadow-xl bg-slate-100">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <Image src='/food-delivery.jpeg' alt="logo" width={26} height={26} className="w-16" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className=" text-lg text-center mx-2 cursor-pointer">
          Marketing
        </p>
        <p className=" text-lg text-center mx-2 cursor-pointer">
           Services
        </p>
        <p className=" text-lg text-center mx-2 cursor-pointer">
          Sales
        </p>
        <p className=" text-lg text-center mx-2 cursor-pointer">
          Wallets
        </p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className=" text-base text-center">
        TechNoch Eatery your realiable source for a good meal
      </p>
      <p className=" text-base text-center font-medium mt-2">
        info@technoch.com
      </p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className=" text-left text-base">@TechNoch-Eatery 2024</p>
      <p className=" text-right text-base">All rights reserved</p>
    </div>
  </footer>
);

export default Footer;
