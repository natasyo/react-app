import Link from "next/link";
import Logo from "../../public/Logo.png";
import headerStyle from "./headerStyle.module.scss";
import TheNav from "@/components/nav/TheNav";
import Image from "next/image";

import React, { useState } from "react";
import { ButtonBar } from "@/components/ui/buttonBar.tsx";
import { clientApollo } from "@/api/apolloClient.ts";
import {
  GetMainMenuDocument,
  GetMainMenuQuery,
} from "@/generates/gql/graphql.ts";
import { MainMenu } from "@/components/nav/MainMenu.tsx";

export async function TheHeader() {
  const menu:
    | Array<NonNullable<GetMainMenuQuery["menuItems"]>["edges"][0]>
    | undefined = (await clientApollo.query({ query: GetMainMenuDocument }))
    .data.menuItems?.edges;
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
        <MainMenu menu={menu} />
      </div>
    </header>
  );
}
