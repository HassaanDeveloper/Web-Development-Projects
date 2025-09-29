'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import "./globals.css"

function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>
        <nav className="navbar">
          <ul className="navbarList">
            <li className={`navbarItem ${pathname === "/" ? "active" : ""}`}>
              <Link href="/">
                Home
              </Link>
            </li>
            <li className={`navbarItem ${pathname === "/about" ? "active" : ""}`}>
              <Link href="/about">
                About
              </Link>
            </li>
            <li className={`navbarItem ${pathname === "/contact" ? "active" : ""}`}>
              <Link href="/contact">
                Contact
              </Link>
            </li>
            <li className={`navbarItem ${pathname === "/services" ? "active" : ""}`}>
              <Link href="/services" title="web-developer">
                Services
              </Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;