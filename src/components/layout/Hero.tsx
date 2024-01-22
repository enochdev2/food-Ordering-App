// import Right from "@/components/icons/Right";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

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
        <h1 className="text-4xl font-bold text-slate-400 md:ml-8 ml-4 my-12">
          Everything
          <br />
          is better
          <br />
          with a&nbsp;
          <br />
          <span className="text-primary">Great Meal</span>
        </h1>
        <p className="my-6 text-white text-base md:text-lg  md:ml-8 ml-4">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4 text-sm  md:ml-8 ml-4">
          <button className="flex justify-center bg-primary uppercase  items-center gap-2 text-white px-4 py-2 rounded-full">
            <Link href="/menu">
            Order now
            </Link>
            <FaLongArrowAltRight />
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-100 font-semibold">
            Learn more
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden w-full h-full  justify-end items-center  hidden md:flex lg:pr-12 pr-6 rounded-lg">
        <div className="relative md:w-[400px] w-[300px] h-[300px] md:h-[400px] overflow-hidden   hidden md:block rounded-3xl">
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
