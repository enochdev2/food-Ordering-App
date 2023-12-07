import { signOut } from "next-auth/react";
import Link from "next/link";


export default function AuthLinks(
    {status, userName}:{status:any,userName: any}
    ) {
    if (status === 'authenticated') {
      return (
        <>
          <Link href={'/profile'} className="whitespace-nowrap">
            Hello, {userName}
          </Link>
          <button
            onClick={() => signOut()}
            className="bg-primary rounded-full text-white px-8 py-2">
            Logout
          </button>
        </>
      );
    }
    if (status === 'unauthenticated') {
      return (
        <>
          <Link href={'/login'}>Login</Link>
          <Link href={'/register'} className="bg-primary rounded-full text-white px-8 py-2">
            Register
          </Link>
        </>
      );
    }
  }