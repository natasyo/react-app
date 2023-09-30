import { clientApollo } from "@/api/apolloClient.ts";
import { GetPostDocument, GetPostsDocument } from "@/generates/gql/graphql.ts";
import blogStyle from "@/app/blog/blog.module.scss";
import Image from "next/image";
import * as React from "react";

export default async function Page({ params }: { params: { slug: string } }) {
  console.log("params ", params);

  const { data } = await clientApollo.query({
    query: GetPostDocument,
    variables: { slug: params.slug.toString() },
  });
  return (
    <div className={blogStyle.blogContent}>
      <div className={`container ${blogStyle.container}`}>
        {data.postBy && data.postBy?.featuredImage?.node.guid && (
          <Image
            src={data.postBy?.featuredImage.node.guid}
            alt={data.postBy?.featuredImage.node.altText || ""}
            title={data.postBy?.featuredImage.node.title || ""}
            width={data.postBy.featuredImage.node.mediaDetails!.width!}
            height={data.postBy.featuredImage.node.mediaDetails!.height!}
          />
        )}
        <h2>{data.postBy?.title}</h2>
        <p>{data.postBy?.date}</p>
        <div
          dangerouslySetInnerHTML={{ __html: data.postBy?.content || "<></>" }}
        />
      </div>
    </div>
  );
}
export async function generateStaticParams() {
  const { data } = await clientApollo.query({
    query: GetPostsDocument,
  });
  if (data.posts) {
    return data.posts.edges.map((post) => {
      return { slug: post.node.slug! };
    });
  }

  return [];
}
