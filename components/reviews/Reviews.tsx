"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReviewUser from "../../public/user-review.png";
import styleReview from "./reviewStyle.module.scss";
import Image from "next/image";
import { ReactNode } from "react";

export const Reviews = () => {
  function prev(
    clickHandler: () => void,
    hasPrev: boolean,
    label: string,
  ): ReactNode {
    return (
      <button
        type="button"
        aria-label={label}
        // aria-has-prev={hasPrev}
        className={`${styleReview.review__button} ${styleReview.review__button_prev}`}
        onClick={clickHandler}
      >
        <svg
          width="13"
          height="22"
          viewBox="0 0 13 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.6"
            d="M11.5859 -1.23626e-07L13 3.21951L3.96947 10.9106L13 18.7805L11.5859 22L9.06922e-07 11.626L1.06329e-06 9.8374L11.5859 -1.23626e-07Z"
          />
        </svg>
      </button>
    );
  }
  function next(
    clickHandler: () => void,
    hasNext: boolean,
    label: string,
  ): ReactNode {
    return (
      <button
        type="button"
        aria-label={label}
        className={`${styleReview.review__button} ${styleReview.review__button_next}`}
        onClick={clickHandler}
        // aria-has-next={hasNext}
      >
        <svg
          width="13"
          height="22"
          viewBox="0 0 13 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.41412 22L0 18.7805L9.03053 11.0894L0 3.21951L1.41412 0L13 10.374V12.1626L1.41412 22Z" />
        </svg>
      </button>
    );
  }
  return (
    <>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        className={styleReview.review__items}
        swipeable={true}
        renderArrowNext={next}
        renderArrowPrev={prev}
        showThumbs={false}
      >
        <div key={"slide1"}>
          <h5 className={styleReview.review__header}>
            &ldquo;The best agency we’ve worked with so far. They understand our
            product and are able to add new features with a great focus.&rdquo;
          </h5>
          <div className={styleReview.review__user}>
            <div className={styleReview.review__photo}>
              <Image
                src={ReviewUser.src}
                alt={"User"}
                width={ReviewUser.width}
                height={ReviewUser.height}
              />
            </div>
            <div className={styleReview.review__userInfo}>
              <p className={styleReview.review__userName}>Jenny Wilson</p>
              <p className={styleReview.review__userPosition}>Vice President</p>
            </div>
          </div>
        </div>
        <div key={"slide2"}>
          <h5 className={styleReview.review__header}>
            &ldquo;The best agency we’ve worked with so far. They understand our
            product and are able to add new features with a great focus. &rdquo;
          </h5>
          <div className={styleReview.review__user}>
            <div className={styleReview.review__photo}>
              <Image
                src={ReviewUser.src}
                alt={"User"}
                width={ReviewUser.width}
                height={ReviewUser.height}
              />
            </div>
            <div className={styleReview.review__userInfo}>
              <p className={styleReview.review__userName}>Jenny Wilson</p>
              <p className={styleReview.review__userPosition}>Vice President</p>
            </div>
          </div>
        </div>
        <div key={"slide3"}>
          <h5 className={styleReview.review__header}>
            &ldquo;The best agency we’ve worked with so far. They understand our
            product and are able to add new features with a great focus.&rdquo;
          </h5>
          <div className={styleReview.review__user}>
            <div className={styleReview.review__photo}>
              <Image
                src={ReviewUser.src}
                alt={"User"}
                width={ReviewUser.width}
                height={ReviewUser.height}
              />
            </div>
            <div className={styleReview.review__userInfo}>
              <p className={styleReview.review__userName}>Jenny Wilson</p>
              <p className={styleReview.review__userPosition}>Vice President</p>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};
