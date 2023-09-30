import { StaticImageData } from "next/image";

export interface IArticle {
  image: StaticImageData;
  title: string;
  content: string;
  date: Date;
}
