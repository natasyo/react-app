"use client";

import React from "react";
import Link from "next/link";

import styleNav from "./navStyle.module.scss";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};
type Props = {
  navLinks: NavLink[];
  className?: string;
};
const TheNav = ({ navLinks, className }: Props) => {
  const pathname = usePathname();
  return (
    <>
      <nav className={` ${className ? className : ""}`}>
        <ul className={styleNav.menu__wrap}>
          {navLinks.map((navLink) => {
            const isActive = pathname === navLink.href;
            return (
              <li className={styleNav.menu__item} key={navLink.href}>
                <Link
                  href={navLink.href}
                  className={
                    isActive
                      ? styleNav.menu__link + " " + styleNav.menu__link_active
                      : styleNav.menu__link
                  }
                >
                  {navLink.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default TheNav;
