"use client";
import * as React from "react";
import headerStyle from "@/components/TheHeader/headerStyle.module.scss";
import { ButtonBar } from "@/components/ui/buttonBar.tsx";
import { useState } from "react";
import { GetMainMenuQuery } from "@/generates/gql/graphql.ts";
import TheNav from "./TheNav.tsx";

type Props = {
  menu?: Array<NonNullable<GetMainMenuQuery["menuItems"]>["edges"][0]>;
};
export function MainMenu({ menu }: Props) {
  const [isOpenBar, setIsOpenBar] = useState(false);
  return (
    <>
      <div
        className={`${headerStyle.header__right} ${
          isOpenBar ? headerStyle.header__right_open : ""
        }`}
      >
        <TheNav navLinks={menu} />
        <button className={"btn btn_contacts " + headerStyle.header__contacts}>
          Contact us
        </button>
      </div>
      <ButtonBar
        isOpen={isOpenBar}
        onClick={() => setIsOpenBar(!isOpenBar)}
        classname={headerStyle.header__buttonBar}
      />
    </>
  );
}
