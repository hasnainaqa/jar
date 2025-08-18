"use client";

import { usePathname } from "next/navigation";
import Navbar from "../components/ui/Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const hideNavbar = pathname === "/signup" || pathname === "/profile-setup";

  return !hideNavbar ? <Navbar /> : null;
}
