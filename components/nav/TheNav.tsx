"use client";
import React from "react";
import Link from "next/link";

import styleNav from "./navStyle.module.scss";
import { usePathname } from "next/navigation";
import { GetMainMenuQuery } from "@/generates/gql/graphql.ts";

type Props = {
  navLinks?: Array<NonNullable<GetMainMenuQuery["menuItems"]>["edges"][0]>;
  className?: string;
};
const TheNav = ({ navLinks, className }: Props) => {
  const pathname = usePathname();

  return (
    <>
      <nav className={` ${className ? className : ""}`}>
        <ul className={styleNav.menu__wrap}>
          {navLinks?.length
            ? navLinks.map((navLink) => {
                const isActive = pathname === navLink.node.path;
                return (
                  <li className={styleNav.menu__item} key={navLink.node.path}>
                    <Link
                      href={navLink.node.path || "/"}
                      className={
                        isActive
                          ? styleNav.menu__link +
                            " " +
                            styleNav.menu__link_active
                          : styleNav.menu__link
                      }
                    >
                      {navLink.node.label}
                    </Link>
                  </li>
                );
              })
            : ""}
        </ul>
      </nav>
    </>
  );
};

export default TheNav;
