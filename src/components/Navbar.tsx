"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="p-6 px-16 flex justify-between items-center border-b border-b-blue-500">
      <Link href={"/"} className="text-xl hover:text-blue-500 font-semibold">
        Getting Familiar with NextJs
      </Link>
      <div className="flex items-center gap-8">
        <Link href={`/`} className="">
          Home
        </Link>
        <Link href={"/users"}>Users</Link>
        <Link href={"/"}></Link>
      </div>
    </div>
  );
};

export default Navbar;
