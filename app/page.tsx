import styleMain from "./page.module.scss";
import Illustration from "../public/Illustration-banner.svg";
import Image from "next/image";
import Link from "next/link";
import { Reviews } from "@/components/reviews/Reviews";
import Questions from "@/components/questions/Questions";
import RequestForm from "@/components/Forms/RequestForm.tsx";

import Project1 from "../public/Card1.png";
import Project2 from "../public/Card2.png";
import Project3 from "../public/Card3.png";
import { MainArticles } from "@/components/Article/MainArticles.tsx";
import { Suspense } from "react";
import { Loading } from "@/components/Loading/Loading.tsx";

export default async function Home() {
  return (
    <main className={"main"}>
      <div className={styleMain.banner}>
        <div className={styleMain.banner__container + " container"}>
          <div className={styleMain.banner__left}>
            <h1 className={styleMain.banner__header}>
              Building stellar websites for early startups
            </h1>
            <p className={styleMain.banner__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <button className={"btn "}>Button text</button>
          </div>
          <div className={styleMain.banner__righ}>
            <Image
              src={Illustration.src}
              alt={"Illustration"}
              width={Illustration.width}
              height={Illustration.height}
            />
          </div>
        </div>
      </div>
      <div className={styleMain.howWork}>
        <div className={"container " + styleMain.howWork__container}>
          <div className={styleMain.howWork__info}>
            <h2 className={styleMain.howWork__header}>How we work</h2>
            <p className={styleMain.howWork__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <Link href={"/"} className={"btn-link"}>
              Get in touch with us
              <svg
                width="25"
                height="12"
                viewBox="0 0 25 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                  fill="#2405F2"
                />
              </svg>
            </Link>
          </div>
          <div className={styleMain.howWork__items}>
            <div className={styleMain.howWork__item}>
              <p className={styleMain.howWork__number}>01</p>
              <h5 className={styleMain.howWork__itemHeader}>Strategy</h5>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div className={styleMain.howWork__item}>
              <p className={styleMain.howWork__number}>02</p>
              <h5 className={styleMain.howWork__itemHeader}>Wireframing</h5>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div className={styleMain.howWork__item}>
              <p className={styleMain.howWork__number}>03</p>
              <h5 className={styleMain.howWork__itemHeader}>Design</h5>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div className={styleMain.howWork__item}>
              <p className={styleMain.howWork__number}>04</p>
              <h5 className={styleMain.howWork__itemHeader}>Development</h5>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styleMain.projects}>
        <div className={styleMain.projects__container + " container"}>
          <h2 className={styleMain.projects__header}>View our projects</h2>
          <div className={styleMain.projects__content}>
            <div className={styleMain.projects__main}>
              <Image
                src={Project1.src}
                alt={"Project"}
                height={Project1.height}
                width={Project1.width}
              />
              <div className={styleMain.projects__mainInfo}>
                <p
                  className={
                    "text-size-large " + styleMain.projects__mainHeader
                  }
                >
                  Workhub office Webflow Webflow Design
                </p>
                <p className={styleMain.projects__mainText}>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam{" "}
                </p>
                <Link
                  href={"/"}
                  className={
                    "btn-link btn-link_yellow " + styleMain.projects__mainLink
                  }
                >
                  View project
                  <svg
                    width="25"
                    height="12"
                    viewBox="0 0 25 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                      fill="#FCD980"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className={styleMain.projects__projects}>
              <div className={styleMain.projects__projectItem}>
                <Image
                  src={Project2.src}
                  width={Project2.width}
                  height={Project3.height}
                  alt={"Project 2"}
                />
                <div className={styleMain.projects__projectOverlay}>
                  <p
                    className={
                      "text-size-large " + styleMain.projects__projectHeader
                    }
                  >
                    Unisaas Website Design
                  </p>
                  <Link
                    href={"/"}
                    className={
                      "btn-link btn-link_yellow " +
                      styleMain.projects__mainLink +
                      " " +
                      styleMain.projects__projectLink
                    }
                  >
                    View project
                    <svg
                      width="25"
                      height="12"
                      viewBox="0 0 25 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                        fill="#FCD980"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className={styleMain.projects__projectItem}>
                <Image
                  src={Project3.src}
                  width={Project3.width}
                  height={Project3.height}
                  alt={"Project 2"}
                />
                <div className={styleMain.projects__projectOverlay}>
                  <p
                    className={
                      "text-size-large " + styleMain.projects__projectHeader
                    }
                  >
                    Unisaas Website Design
                  </p>
                  <Link
                    href={"/"}
                    className={
                      "btn-link btn-link_yellow " +
                      styleMain.projects__mainLink +
                      " " +
                      styleMain.projects__projectLink
                    }
                  >
                    View project
                    <svg
                      width="25"
                      height="12"
                      viewBox="0 0 25 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                        fill="#FCD980"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styleMain.design}>
        <div className={"container"}>
          <p className={styleMain.design__titleHeader}>Features</p>
          <h2 className={styleMain.design__header}>
            Design that solves problems, one product at a time
          </h2>
          <div className={styleMain.design__items}>
            <div className={styleMain.design__item}>
              <div className={styleMain.design__itemIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="28"
                  viewBox="0 0 32 28"
                  fill="none"
                >
                  <path
                    d="M16 10.8749C19.003 10.8749 21.4374 8.44047 21.4374 5.43745C21.4374 2.43443 19.003 0 16 0C12.9969 0 10.5625 2.43443 10.5625 5.43745C10.5625 8.44047 12.9969 10.8749 16 10.8749Z"
                    fill="#2405F2"
                  />
                  <path
                    d="M27 10.8749C28.8984 10.8749 30.4374 9.33593 30.4374 7.43747C30.4374 5.53901 28.8984 4 27 4C25.1015 4 23.5625 5.53901 23.5625 7.43747C23.5625 9.33593 25.1015 10.8749 27 10.8749Z"
                    fill="#2405F2"
                  />
                  <path
                    d="M4.99997 10.8749C6.89843 10.8749 8.43744 9.33593 8.43744 7.43747C8.43744 5.53901 6.89843 4 4.99997 4C3.10151 4 1.5625 5.53901 1.5625 7.43747C1.5625 9.33593 3.10151 10.8749 4.99997 10.8749Z"
                    fill="#2405F2"
                  />
                  <path
                    d="M8.3868 13.9615C7.03369 12.8528 5.80826 12.9996 4.24371 12.9996C1.90373 12.9996 0 14.8921 0 17.2177V24.0432C0 25.0532 0.824368 25.8745 1.83811 25.8745C6.21469 25.8745 5.68745 25.9537 5.68745 25.6857C5.68745 20.8491 5.11458 17.3022 8.3868 13.9615Z"
                    fill="#2405F2"
                  />
                  <path
                    d="M17.4882 13.0249C14.7555 12.797 12.3802 13.0275 10.3314 14.7187C6.90288 17.4649 7.56268 21.1625 7.56268 25.6861C7.56268 26.8829 8.53642 27.8748 9.75141 27.8748C22.9439 27.8748 23.469 28.3003 24.2513 26.5679C24.5078 25.9821 24.4375 26.1682 24.4375 20.5636C24.4375 16.112 20.583 13.0249 17.4882 13.0249Z"
                    fill="#2405F2"
                  />
                  <path
                    d="M27.7564 13.0004C26.1833 13.0004 24.9646 12.8552 23.6133 13.9623C26.8611 17.2783 26.3126 20.5832 26.3126 25.6865C26.3126 25.9562 25.8749 25.8753 30.0963 25.8753C31.1463 25.8753 32.0001 25.0247 32.0001 23.9791V17.2185C32.0001 14.8929 30.0963 13.0004 27.7564 13.0004Z"
                    fill="#2405F2"
                  />
                </svg>
              </div>

              <h6 className={styleMain.design__itemHeader}>
                Uses Client First
              </h6>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.{" "}
              </p>
            </div>
            <div className={styleMain.design__item}>
              <div className={styleMain.design__itemIcon}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 0C7.21187 0 0 7.21187 0 16C0 24.7881 7.21187 32 16 32C24.7881 32 32 24.7881 32 16C32 7.21187 24.7881 0 16 0ZM14.0637 23.2775L7.05713 16.271L9.7085 13.6196L14.1864 18.0975L23.1759 9.9255L25.6991 12.6996L14.0637 23.2775Z"
                    fill="#2405F2"
                  />
                </svg>
              </div>

              <h6 className={styleMain.design__itemHeader}>
                Two Free Revision Round
              </h6>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>
            </div>
            <div className={styleMain.design__item}>
              <div className={styleMain.design__itemIcon}>
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_757_976)">
                    <path
                      d="M2.64172 9.89299L9.89237 2.64235L8.68379 1.43377C6.68481 -0.565208 3.43213 -0.565208 1.43341 1.43404C0.464898 2.40229 -0.0683594 3.68964 -0.0683594 5.05923C-0.0683594 6.42856 0.464898 7.71617 1.43341 8.68442L2.64172 9.89299Z"
                      fill="#2405F2"
                    />
                    <path
                      d="M4.0918 11.3426L6.992 8.44238L11.1478 12.5982L8.24757 15.4984L4.0918 11.3426Z"
                      fill="#2405F2"
                    />
                    <path
                      d="M8.44238 6.992L11.3426 4.0918L15.4984 8.24731L12.5982 11.1475L8.44238 6.992Z"
                      fill="#2405F2"
                    />
                    <path
                      d="M24.9643 30.764C24.9643 30.7643 24.9643 30.7643 24.964 30.7643L24.4863 31.2423L33.5261 34.8581C33.6494 34.9075 33.7784 34.9315 33.9066 34.9315C34.1736 34.9315 34.4358 34.8271 34.6318 34.6311C34.9218 34.3411 35.011 33.9061 34.8588 33.5251L31.243 24.4854L24.9643 30.764Z"
                      fill="#2405F2"
                    />
                    <path
                      d="M19.3652 26.615L22.2654 23.7148L25.6888 27.1384L22.7886 30.0386L19.3652 26.615Z"
                      fill="#2405F2"
                    />
                    <path
                      d="M23.7148 22.2657L26.615 19.3652L30.0386 22.7888L27.1384 25.689L23.7148 22.2657Z"
                      fill="#2405F2"
                    />
                    <path
                      d="M8.80609 27.5075C8.40555 27.9078 8.40555 28.5572 8.80609 28.9575L11.4646 31.616L8.44934 34.6313C8.04907 35.0318 7.39965 35.0318 6.99937 34.6313L0.232049 27.864C-0.168495 27.4637 -0.168495 26.8143 0.232049 26.414L26.414 0.232049C26.8143 -0.168495 27.4637 -0.168495 27.864 0.232049L34.6313 6.99911C34.8316 7.19938 34.9317 7.46187 34.9317 7.72436C34.9317 7.98658 34.8316 8.24907 34.6313 8.44934L31.616 11.4646L27.9908 7.83918C27.5903 7.43864 26.9411 7.43864 26.5406 7.83918C26.1403 8.23973 26.1403 8.88887 26.5406 9.28942L30.1658 12.9146L27.8757 15.2049L25.2172 12.5461C24.8169 12.1458 24.1675 12.1458 23.7669 12.5461C23.3667 12.9467 23.3667 13.5958 23.7669 13.9963L26.4255 16.6549L24.1354 18.9452L20.5103 15.3197C20.1097 14.9195 19.4606 14.9195 19.06 15.3197C18.6597 15.7203 18.6597 16.3694 19.06 16.77L22.6852 20.3952L20.3952 22.6855L17.7366 20.0269C17.3361 19.6264 16.6869 19.6264 16.2864 20.0269C15.8861 20.4272 15.8861 21.0764 16.2864 21.4769L18.9449 24.1354L16.6549 26.4258L13.0297 22.8003C12.6292 22.4 11.98 22.4 11.5795 22.8003C11.1792 23.2008 11.1792 23.85 11.5795 24.2505L15.2047 27.8757L12.9146 30.166L10.2561 27.5075C9.85579 27.107 9.20637 27.107 8.80609 27.5075Z"
                      fill="#2405F2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_757_976">
                      <rect width="35" height="35" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <h6 className={styleMain.design__itemHeader}>
                Template Customization
              </h6>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>
            </div>
            <div className={styleMain.design__item}>
              <div className={styleMain.design__itemIcon}>
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_757_984)">
                    <path
                      d="M34.9994 23.686C34.9994 19.3427 32.5078 15.4665 28.7761 13.5811C28.6602 21.9086 21.9086 28.6602 13.5811 28.7761C15.4665 32.5078 19.3427 34.9994 23.686 34.9994C25.7223 34.9994 27.7026 34.4571 29.4426 33.4266L34.95 34.95L33.4266 29.4426C34.4571 27.7026 34.9994 25.7223 34.9994 23.686Z"
                      fill="#2405F2"
                    />
                    <path
                      d="M26.7285 13.3643C26.7285 5.99506 20.7335 0 13.3643 0C5.99506 0 0 5.99506 0 13.3643C0 15.7659 0.639267 18.1043 1.85318 20.1572L0.0491333 26.6791L6.57131 24.8753C8.62423 26.0892 10.9626 26.7285 13.3643 26.7285C20.7335 26.7285 26.7285 20.7335 26.7285 13.3643ZM11.3135 10.2539H9.2627C9.2627 7.99217 11.1025 6.15234 13.3643 6.15234C15.626 6.15234 17.4658 7.99217 17.4658 10.2539C17.4658 11.4019 16.9798 12.5052 16.132 13.2807L14.3896 14.8754V16.4746H12.3389V13.9723L14.7475 11.7677C15.1779 11.3738 15.415 10.8363 15.415 10.2539C15.415 9.12304 14.4951 8.20312 13.3643 8.20312C12.2334 8.20312 11.3135 9.12304 11.3135 10.2539ZM12.3389 18.5254H14.3896V20.5762H12.3389V18.5254Z"
                      fill="#2405F2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_757_984">
                      <rect width="35" height="35" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <h6 className={styleMain.design__itemHeader}>24/7 Support</h6>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>
            </div>
            <div className={styleMain.design__item}>
              <div className={styleMain.design__itemIcon}>
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_757_919)">
                    <path
                      d="M29.3038 9.94438L31.656 7.59354C32.2263 7.02479 32.2263 6.10167 31.656 5.53146C31.0858 4.96125 30.1642 4.96125 29.594 5.53146L27.2417 7.88229C24.9463 5.985 22.0865 4.74542 18.9583 4.44938V2.91667H21.875C22.6815 2.91667 23.3333 2.26333 23.3333 1.45833C23.3333 0.653333 22.6815 0 21.875 0H13.125C12.3185 0 11.6667 0.653333 11.6667 1.45833C11.6667 2.26333 12.3185 2.91667 13.125 2.91667H16.0417V4.44938C8.28042 5.18583 2.1875 11.7367 2.1875 19.6875C2.1875 28.1313 9.05625 35 17.5 35C25.9438 35 32.8125 28.1313 32.8125 19.6875C32.8125 15.9892 31.4942 12.5942 29.3038 9.94438ZM18.9583 19.6875C18.9583 20.494 18.305 21.1458 17.5 21.1458C16.695 21.1458 16.0417 20.494 16.0417 19.6875V11.6667C16.0417 10.8602 16.695 10.2083 17.5 10.2083C18.305 10.2083 18.9583 10.8602 18.9583 11.6667V19.6875Z"
                      fill="#2405F2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_757_919">
                      <rect width="35" height="35" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <h6 className={styleMain.design__itemHeader}>Quick Delivery</h6>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>
            </div>
            <div className={styleMain.design__item}>
              <div className={styleMain.design__itemIcon}>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.866 5.80537C25.866 5.0077 25.5547 4.25677 24.9905 3.69259L22.1734 0.8755C21.6171 0.319082 20.8273 0 20.0413 0H19.8701V5.97656H25.8661L25.866 5.80537Z"
                    fill="#2405F2"
                  />
                  <path
                    d="M18.1911 20.5552C18.3818 19.9764 18.7145 19.4375 19.1483 19.0008L25.8927 12.2836V7.96875H18.8934C18.3429 7.96875 17.9297 7.52323 17.9297 6.97266V0H2.98828C1.34048 0 0 1.34048 0 2.98828V31.0117C0 32.6595 1.34048 34 2.98828 34H22.8778C24.5256 34 25.8927 32.6595 25.8927 31.0117V23.5775L24.798 24.6455C24.3545 25.0852 23.8351 25.4052 23.2494 25.6008L20.0822 26.6582L19.5997 26.6845C18.802 26.6845 18.0472 26.2963 17.5783 25.6466C17.1134 24.9997 16.9869 24.1612 17.2398 23.4034L18.1911 20.5552ZM4.98047 17.9297H14.9091C15.4596 17.9297 15.9052 18.3752 15.9052 18.9258C15.9052 19.4764 15.4596 19.9219 14.9091 19.9219H4.98047C4.42989 19.9219 3.98438 19.4764 3.98438 18.9258C3.98438 18.3752 4.42989 17.9297 4.98047 17.9297ZM3.98438 14.9414C3.98438 14.3908 4.42989 13.9453 4.98047 13.9453H14.9091C15.4596 13.9453 15.9052 14.3908 15.9052 14.9414C15.9052 15.492 15.4596 15.9375 14.9091 15.9375H4.98047C4.42989 15.9375 3.98438 15.492 3.98438 14.9414ZM3.98438 22.9102C3.98438 22.3596 4.42989 21.9141 4.98047 21.9141H14.9091C15.4596 21.9141 15.9052 22.3596 15.9052 22.9102C15.9052 23.4607 15.4596 23.9062 14.9091 23.9062H4.98047C4.42989 23.9062 3.98438 23.4607 3.98438 22.9102ZM18.8934 27.8906C19.444 27.8906 19.8895 28.3361 19.8895 28.8867C19.8895 29.4373 19.4441 29.8828 18.8934 29.8828H12.9169C12.3663 29.8828 11.9208 29.4373 11.9208 28.8867C11.9208 28.3361 12.3663 27.8906 12.9169 27.8906H18.8934ZM4.98047 11.9531C4.42989 11.9531 3.98438 11.5076 3.98438 10.957C3.98438 10.4065 4.42989 9.96094 4.98047 9.96094H18.8934C19.444 9.96094 19.8895 10.4065 19.8895 10.957C19.8895 11.5076 19.444 11.9531 18.8934 11.9531H4.98047Z"
                    fill="#2405F2"
                  />
                  <path
                    d="M19.9956 21.4365L19.129 24.0364C18.9991 24.4259 19.3697 24.7964 19.7592 24.6663L22.3575 23.7985L19.9956 21.4365Z"
                    fill="#2405F2"
                  />
                  <path
                    d="M27.7321 13.2354L21.1719 19.7956L24.0011 22.6248C25.4838 21.1418 28.3689 18.2564 30.561 16.0643L27.7321 13.2354Z"
                    fill="#2405F2"
                  />
                  <path
                    d="M33.4149 10.3777C33.0648 10.0256 32.5492 9.82422 32.0025 9.82422C31.4557 9.82422 30.9402 10.0256 30.5881 10.3787L29.1406 11.8262L31.9694 14.6549C32.7618 13.8624 33.3095 13.3147 33.417 13.2074C34.1951 12.4281 34.195 11.1588 33.4149 10.3777Z"
                    fill="#2405F2"
                  />
                </svg>
              </div>

              <h6 className={styleMain.design__itemHeader}>
                Hands-on approach
              </h6>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Reviews*/}
      <div className={styleMain.reviews}>
        <div className={"container " + styleMain.reviews__container}>
          <div className={styleMain.reviews__left}>
            <h3 className={styleMain.reviews__header}>
              What our clients say about us
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
          </div>
          <div className={styleMain.reviews__right}>
            <Reviews />
          </div>
        </div>
      </div>

      {/*  Questions*/}
      <div className={styleMain.questions}>
        <div className={`${styleMain.questions__container} container`}>
          <div className={styleMain.questions__left}>
            <h3 className={styleMain.questions__header}>
              Frequently asked questions
            </h3>
            <Link
              href={"/about"}
              className={`text-size-medium-bold ${styleMain.questions__abouLink}`}
            >
              Contact us for more info
            </Link>
          </div>
          <Suspense fallback={<Loading />}>
            <Questions />
          </Suspense>
        </div>
      </div>
      <div className={styleMain.contactForm}>
        <div className={`container ${styleMain.contactForm__container}`}>
          <div className={styleMain.contactForm__left}>
            <div className={`h1 ${styleMain.contactForm__header}`}>
              Building stellar websites for early startups
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </p>
          </div>
          <div className={styleMain.contactForm__form}>
            <RequestForm />
          </div>
        </div>
      </div>
      <div className={styleMain.blog}>
        <Suspense fallback={<Loading />}>
          <div className={`${styleMain.blog__container} container`}>
            <MainArticles />
          </div>
        </Suspense>
      </div>
    </main>
  );
}
