"use client";
import Link from "next/link";
import Logo from "../../public/Logo.png";
import headerStyle from "./headerStyle.module.scss";
import TheNav from "@/components/nav/TheNav";
import Image from "next/image";

import React, { useState } from "react";
import { ButtonBar } from "@/components/ui/buttonBar.tsx";
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
];
export const TheHeader = () => {
  const [isOpenBar, setIsOpenBar] = useState(false);
  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.header__container + " container"}>
        <Link href={"/"} className={headerStyle.header__logo}>
          {/*<img src={Logo.src} alt="Finsweet" />*/}
          <Image
            src={Logo.src}
            alt={"Logo"}
            width={Logo.width}
            height={Logo.height}
          />
        </Link>
        <div
          className={`${headerStyle.header__right} ${
            isOpenBar ? headerStyle.header__right_open : ""
          }`}
        >
          <TheNav navLinks={navLinks} />
          <button
            className={"btn btn_contacts " + headerStyle.header__contacts}
          >
            Contact us
          </button>
        </div>
        <ButtonBar
          isOpen={isOpenBar}
          onClick={() => setIsOpenBar(!isOpenBar)}
          classname={headerStyle.header__buttonBar}
        />
      </div>
    </header>
  );
};
