"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const HeaderComponent = () => {
  const session = useSession();
  console.log("session: ", session);
  const status = session.status;
  return (
    <header className="flex item-center justify-between">
      <Link className="text-primary font-semibold text-2xl" href={"/"}>
        Ankur Caffee
      </Link>
      <nav className="flex items-center gap-8 text-fontColor font-semibold">
        <Link href={"/"}>Home</Link>
        <Link href={""}>Food Menu</Link>
        <Link href={""}>About Us</Link>
        <Link href={""}>Contact</Link>
      </nav>
      <nav className="flex items-center gap-8">
        {status === "authenticated" && (
          <button
            onClick={() => signOut()}
            className="bg-primary text-white px-4 py-2 rounded-md font-semibold"
          >
            Logout
          </button>
        )}
        {status !== "authenticated" && (
          <>
            <Link
              href={"/login"}
              className="bg-primary text-white px-4 py-2 rounded-md font-semibold"
            >
              Login
            </Link>

            <Link
              href={"/register"}
              className="bg-primary text-white px-4 py-2 rounded-md font-semibold"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default HeaderComponent;
