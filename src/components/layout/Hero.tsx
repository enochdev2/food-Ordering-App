// import Right from "@/components/icons/Right";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <section className=" relative  hero w-full md:mt-2 mb-8 h-screen  ">
      <div className="absolute w-full h-screen bg-black/75 top-0 z-[-1] m-auto"></div>
      <div className="absolute w-full m-auto h-screen top-0 z-[-2]">
        <Image
          src={"/food-delivery.jpeg"}
          fill
          // objectFit={"}
          alt={"pizza"}
        />
      </div>
      <div className="py-8 md:pl-8 md:py-12 bg-transparent">
        <h1 className="text-4xl font-semibold">
          Everything
          <br />
          is better
          <br />
          with a&nbsp;
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex justify-center bg-primary uppercase  items-center gap-2 text-white px-4 py-2 rounded-full">
            Order now
            <FaLongArrowAltRight />
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden w-full h-full  justify-end items-center  hidden md:flex pr-12 rounded-lg">
      <div className="relative w-[400px] h-[400px] overflow-hidden   hidden md:block rounded-3xl">
        <Image
          src={"/rice3.jpeg"}
         fill
          // objectFit={"contain"}
          alt={"pizza"}
          className="justify-end self-center"
        />
      </div>
      </div>
    </section>
  );
}
