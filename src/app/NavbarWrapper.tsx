"use client";

import { usePathname } from "next/navigation";
import Navbar from "../components/ui/Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const hideNavbar = pathname === "/signup" || pathname === "/signup";

  return !hideNavbar ? <Navbar /> : null;
}
