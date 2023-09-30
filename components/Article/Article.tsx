import React from "react";
import articleStyle from "./article.module.scss";
import Image from "next/image";
import Link from "next/link";
import { GetPostsQuery } from "@/generates/gql/graphql.ts";
import NoImage from "../../public/no-image.jpg";

type Props = {
  className?: string;
  article: NonNullable<GetPostsQuery["posts"]>["edges"][0];
};
function Article({ className, article }: Props) {
  // function toDate(date: Date) {
  //   const dateString = date.toDateString().split(" ");
  //   return `${dateString[2]} ${dateString[1]} ${dateString[3]}`;
  // }
  return (
    <div className={`${className} ${articleStyle.article}`}>
      <div className={`${articleStyle.article__imageWrap}`}>
        {article.node.featuredImage?.node.link ? (
          <Image
            src={article.node.featuredImage.node.guid!}
            width={article.node.featuredImage.node.mediaDetails!.width!}
            height={article.node.featuredImage.node.mediaDetails!.height!}
            alt={article.node.featuredImage.node.altText || ""}
            className={articleStyle.article__image}
          />
        ) : (
          <Image
            src={NoImage}
            width={NoImage.width}
            height={NoImage.height}
            alt={"no image"}
            className={articleStyle.article__image}
          />
        )}
      </div>
      <p className={`${articleStyle.article__date}`}>{article.node.date}</p>
      <p className={`h6 ${articleStyle.article__header}`}>
        {article.node.title}
      </p>
      <div
        className={articleStyle.article__preview}
        dangerouslySetInnerHTML={{ __html: article.node.excerpt || "<p></p>" }}
      />

      <Link
        href={`/blog${article.node.uri}`}
        className={`btn-link ${articleStyle.article__link}`}
      >
        Read More
        <svg
          width="25"
          height="12"
          viewBox="0 0 25 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
            fill="#282938"
          />
        </svg>
      </Link>
    </div>
  );
}

export default Article;
