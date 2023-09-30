"use client";
import { useSuspenseQuery } from "@apollo/client";
import { GetPostsDocument } from "@/generates/gql/graphql.ts";
import Article from "@/components/Article/Article.tsx";
import * as React from "react";
import styleBlog from "./article.module.scss";

export function BlogComponent() {
  const { data } = useSuspenseQuery(GetPostsDocument, {
    variables: {
      first: 10,
    },
    context: { fetchOptions: { cache: "force-cache" } },
  });
  return (
    <>
      {" "}
      <div className={styleBlog.blogPage}>
        <h2>Our Blog</h2>
        {data?.posts?.edges?.map((post) => (
          <Article article={post} key={post.node.slug} />
        ))}
      </div>
    </>
  );
}
