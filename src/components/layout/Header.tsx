"use client";
import { CartContext } from "@/components/AppContext";
import Bars2 from "@/components/icons/Bars2";
import ShoppingCart from "@/components/icons/ShoppingCart";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useContext, useState } from "react";

export default function Header() {
  const { data: session, status } = useSession();
  console.log(session);

  const userData = session?.user;
  let userName: any = userData?.name || userData?.email;
  const { cartProducts } = useContext(CartContext) as any;
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  if (userName) {
    userName = userName.split("@")[0];
  }

  return (
    <header className="px-3 shadow-lg">
      <div className="flex items-center py-3 bg-transparent md:hidden justify-between">
        <Link
          className="text-primary shadow-slate-800 font-semibold text-base"
          href={"/"}
        >
          TECH-NOCH EATERY
        </Link>
        <div className="flex gap-8 items-center">
          <Link href={"/cart"} className="relative">
            <ShoppingCart />
            {cartProducts?.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">
                {cartProducts.length}
              </span>
            )}
          </Link>
          <button
            title="button"
            type="button"
            className="p-1 border"
            onClick={() => setMobileNavOpen((prev) => !prev)}
          >
            <Bars2 />
          </button>
        </div>
      </div>

      {mobileNavOpen && (
        <div
          onClick={() => setMobileNavOpen(false)}
          className="md:hidden p-4 bg-gray-200  rounded-lg mt-2 flex flex-col gap-2 text-center"
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/menu"}>Menu</Link>
          <Link href={"/#about"}>About</Link>
          <Link href={"/#contact"}>Contact</Link>
          {status === "unauthenticated" ? (
            <>
              <Link href={"/login"}>Login</Link>
              <Link
                href={"/register"}
                className="bg-primary rounded-full text-white px-8 py-2"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link href={"/profile"} className="whitespace-nowrap">
                Hello, {userName}
              </Link>
              <button
                onClick={() => signOut()}
                className="bg-primary rounded-full text-white px-8 py-2"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}

      <div className="hidden md:flex bg-transparent items-center justify-between">
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
          <Link
            className="text-primary ml-4 font-semibold text-base"
            href={"/"}
          >
            <p>TECH-NOCH</p>
            <p>EATERY</p>
          </Link>
        </nav>
        <nav className="flex items-center gap-8 grow  text-gray-500 justify-center py-2 font-semibold rounded-full ">
          <div className=" flex gap-4  px-3 py-3">
            <Link href={"/"}>Home</Link>
            <Link href={"/menu"}>Menu</Link>
            <Link href={"/#about"}>About</Link>
            <Link href={"/#contact"}>Contact</Link>
          </div>
        </nav>
        <nav className="flex items-center gap-5 text-gray-500 font-semibold">
          <Link href={"/cart"} className="relative">
            <ShoppingCart />
            {cartProducts?.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">
                {cartProducts.length}
              </span>
            )}
          </Link>
          {status === "unauthenticated" ? (
            <>
              <Link href={"/login"}>Login</Link>
              <Link
                href={"/register"}
                className="bg-primary rounded-full text-white px-8 py-2"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                href={"/profile"}
                className="whitespace-nowrap ml-2 text-sm flex flex-col"
              >
                Hello, <br /> {userName}
              </Link>

              <button
                onClick={() => signOut()}
                className="bg-primary rounded-full text-white px-8 py-2"
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
