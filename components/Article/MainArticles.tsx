"use client";
import * as React from "react";
import { useSuspenseQuery } from "@apollo/client";
import { GetPostsDocument, GetPostsQuery } from "@/generates/gql/graphql.ts";
import Article from "@/components/Article/Article.tsx";

export function MainArticles() {
  const { data } = useSuspenseQuery(GetPostsDocument, {
    variables: {
      first: 3,
    },
    context: { fetchOptions: { cache: "force-cache" } },
    fetchPolicy: "cache-and-network",
  });
  const articles:
    | Array<NonNullable<GetPostsQuery["posts"]>["edges"][0]>
    | undefined = data?.posts?.edges;
  return (
    <>
      {articles?.map((article) => (
        <Article article={article} key={article.node.slug} />
      ))}
    </>
  );
}
