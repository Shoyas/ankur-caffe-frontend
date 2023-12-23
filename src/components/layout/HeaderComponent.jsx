/*
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
        {status === "unauthenticated" && (
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

*/

/*
// try responsive

"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const HeaderComponent = () => {
  const session = useSession();
  console.log(session);
  const status = session.status;
  const userInfo = session?.data?.user;
  const userName = userInfo?.name || userInfo?.email;
  console.log(userName);

  return (
    <header className="flex flex-col md:flex-row items-center justify-between">
      <Link
        className="text-primary font-semibold text-2xl mb-4 md:mb-0"
        href={"/"}
      >
        Ankur Caffee
      </Link>

      <nav className="flex flex-col md:flex-row items-center md:gap-8 text-fontColor font-semibold mb-4 lg:mb-0">
        <Link href={"/"}>Home</Link>
        <Link href={""}>Food Menu</Link>
        <Link href={""}>About Us</Link>
        <Link href={""}>Contact</Link>
      </nav>

      <nav className="flex items-center gap-6 lg:gap-8">
        {status === "authenticated" && (
          <>
            <Link className="px-4 py-2" href={"/profile"}>
              {userName}
            </Link>
            <button
              onClick={() => signOut()}
              className="bg-primary text-white px-4 py-2 rounded-md font-semibold"
            >
              Logout
            </button>
          </>
        )}
        {status === "unauthenticated" && (
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

*/

// Try response and display name limiting

"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const HeaderComponent = () => {
  const session = useSession();
  console.log(session);
  const status = session.status;
  const userInfo = session?.data?.user;
  const userName = userInfo?.name || userInfo?.email;
  console.log(userName);

  const limitString = (inputString) => {
    if (inputString) {
      const firstSpaceIndex = inputString.indexOf(" ");
      const limitedString =
        firstSpaceIndex !== -1
          ? inputString.substring(0, firstSpaceIndex)
          : inputString;
      return limitedString;
    } else {
      return "";
    }
  };
  const Name = limitString(userName);

  return (
    <header className="flex flex-col md:flex-row items-center justify-between">
      <Link
        className="text-primary font-semibold text-2xl mb-4 md:mb-0"
        href={"/"}
      >
        Ankur Caffee
      </Link>

      <nav className="flex flex-col md:flex-row items-center md:gap-8 text-fontColor font-semibold mb-4 lg:mb-0">
        <Link href={"/"}>Home</Link>
        <Link href={""}>Food Menu</Link>
        <Link href={""}>About Us</Link>
        <Link href={""}>Contact</Link>
      </nav>

      <nav className="flex items-center gap-6 lg:gap-8">
        {status === "authenticated" && (
          <>
            <Link
              className="whitespace-nowrap text-fontColor font-semibold"
              href={"/profile"}
            >
              Name: {Name}
            </Link>
            <button
              onClick={() => signOut()}
              className="bg-primary text-white px-4 py-2 rounded-md font-semibold"
            >
              Logout
            </button>
          </>
        )}
        {status === "unauthenticated" && (
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
