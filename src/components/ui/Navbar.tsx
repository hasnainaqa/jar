"use client"
import Image from "next/image";
import NextLink from "./NextLink";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: "Find Job", path: "/" },
    { label: "On Going Jobs", path: "/ongoingjobs" },
    { label: "Messages", path: "/messages" },
  ];


  return (
<div className="fixed top-0 left-0 z-50 py-2.5 px-[60px] bg-white w-full flex justify-center shadow-light font-jakarta">
<div className="w-full max-w-[1300px] flex items-center justify-between">
        <Link href ="/">
        <Image
          src="/assets/icons/SiteLogo.svg"
          width={57}
          height={60}
          alt="JAR logo"
          className=""
          />
          </Link>
        <div className="flex items-center gap-10">
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.path}>
              {item.label}
            </Link>
          ))}
          </div>
          <div className="flex gap-4">
            <div className="flex items-center justify-center rounded-full h-11 w-11 bg-(--primary) shrink-0">
              <Image
                src={"/assets/icons/Bell.svg"}
                width={24}
                height={24}
                alt="bell"
              />
            </div>
            <Image
              src={"/assets/icons/DummyMan.jpg"}
              width={44}
              height={44}
              alt="man"
              className="rounded-full"
            />
          </div>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <p className=" h-6 w-6 ">&times;</p>
            ) : (
              <p className=" h-6 w-6 ">+</p>
            )}
          </button>
        </div>
        {isOpen && (
        <div className="md:hidden absolute top-14 w-[90%] right-2 mt-2 bg-white rounded-xl shadow-dark p-3 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="block px-4 py-2 text-sm rounded-md"
              onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}
