import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <Link className="" href="">
          Ankur Caffe
        </Link>
        <nav>
          <Link href={""}>Home</Link>
          <Link href={""}>Food Menu</Link>
          <Link href={""}>About Us</Link>
          <Link href={""}>Contact</Link>
          <Link href={""}>Login</Link>
        </nav>
      </header>
    </>
  );
}
