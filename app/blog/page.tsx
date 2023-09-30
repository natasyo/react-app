import * as React from "react";
import styleArticles from "./blog.module.scss";
import { Suspense } from "react";
import { Loading } from "@/components/Loading/Loading.tsx";
import { BlogComponent } from "@/components/Article/BlogComponent.tsx";

export default function Page() {
  return (
    <div className={styleArticles.blog}>
      <div className={`container`}>
        <Suspense fallback={<Loading />}>
          <BlogComponent />
        </Suspense>
      </div>
    </div>
  );
}
