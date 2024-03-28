"use client";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../public/logo.webp";
import { useState } from "react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePathname();
  console.log(menuOpen);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav position="static">
      <div className="navbar">
        <Link href="/">
          <Image src={logo} alt="logo" width="100" height="60" />
        </Link>

        <li className={`navbar_items ${path === "/" ? "navbar_selected" : ""}`}>
          <Link href="/">Request Trial</Link>
        </li>
        <li
          className={`navbar_items ${
            path === "/history" ? "navbar_selected" : ""
          }`}
        >
          <Link href="/history">History</Link>
        </li>

        <div className="navbar_hamburger" onClick={toggleMenu}>
          <RxHamburgerMenu />
        </div>
      </div>

      {menuOpen && (
        <div className="navbar_column">
          <li className={`${path === "/" ? "navbar_selected" : ""}`}>
            <Link href="/">Request Trial</Link>
          </li>
          <li className={`${path === "/history" ? "navbar_selected" : ""}`}>
            <Link href="/history">History</Link>
          </li>
        </div>
      )}
      <div className="custom_line"></div>
    </nav>
  );
}
