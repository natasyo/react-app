import styleFooter from "./footerStyle.module.scss";
import Image from "next/image";
import Logo from "@/public/Logo.png";
import Link from "next/link";
import TheNav from "@/components/nav/TheNav.tsx";
import {
  GetMainMenuDocument,
  GetMainMenuQuery,
} from "@/generates/gql/graphql.ts";
import { clientApollo } from "@/api/apolloClient.ts";

async function TheFooter() {
  const menu:
    | Array<NonNullable<GetMainMenuQuery["menuItems"]>["edges"][0]>
    | undefined = (await clientApollo.query({ query: GetMainMenuDocument }))
    .data.menuItems?.edges;
  return (
    <footer className={styleFooter.footer}>
      <div className={styleFooter.footer__main}>
        <div className={`container ${styleFooter.footer__container}`}>
          <div className={styleFooter.footer__left}>
            <Link href={"/"}>
              <Image
                src={Logo.src}
                alt={"Logo"}
                width={Logo.width}
                height={Logo.height}
                className={styleFooter.footer__logo}
              />
            </Link>
            <p className={styleFooter.footer__text}>
              We are always open to discuss your project and improve your online
              presence.
            </p>
            <div className={styleFooter.footer__contacts}>
              <div className={styleFooter.footer__email}>
                <p
                  className={`text-size-medium-bold ${styleFooter.footer__contactsHeader}`}
                >
                  Email me at
                </p>
                <Link href="mailto:contact@website.com">
                  contact@website.com
                </Link>
              </div>
              <div>
                <p
                  className={`text-size-medium-bold ${styleFooter.footer__contactsHeader}`}
                >
                  Call us
                </p>
                <Link href="tel:0927627728525">0927 6277 28525</Link>
              </div>
            </div>
          </div>
          <div className={styleFooter.footer__right}>
            <h2>Lets Talk!</h2>
            <p className={styleFooter.footer__text}>
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </p>
            <div className={styleFooter.footer__socials}>
              <Link href={""} className={styleFooter.footer__socialsItem}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2019_389)">
                    <path
                      d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.993 2.92547 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94438 3.125 9.77172 3.125C10.6467 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5538C9.56 5.25 9.25 5.86672 9.25 6.5V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.993 16 8Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2019_389">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link href={""} className={styleFooter.footer__socialsItem}>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2019_391)">
                    <path
                      d="M5.69945 14.5005C11.7357 14.5005 15.0382 9.49829 15.0382 5.16173C15.0382 5.0211 15.0351 4.87735 15.0288 4.73673C15.6713 4.27213 16.2257 3.69666 16.666 3.03735C16.0677 3.30356 15.4324 3.47741 14.782 3.55298C15.4669 3.14243 15.9797 2.49747 16.2254 1.73767C15.5811 2.11953 14.8764 2.3889 14.1416 2.53423C13.6466 2.0082 12.992 1.6599 12.2791 1.54319C11.5663 1.42648 10.8348 1.54786 10.1978 1.88855C9.56088 2.22925 9.05388 2.77029 8.75525 3.42803C8.45661 4.08577 8.38297 4.82357 8.5457 5.52735C7.24101 5.46188 5.96464 5.12296 4.79934 4.53255C3.63403 3.94215 2.60581 3.11345 1.78133 2.10017C1.36228 2.82265 1.23405 3.67759 1.4227 4.49122C1.61135 5.30485 2.10272 6.01612 2.79695 6.48048C2.27577 6.46393 1.766 6.32361 1.30977 6.0711V6.11173C1.3093 6.86992 1.57141 7.60488 2.05156 8.19167C2.5317 8.77846 3.20023 9.18086 3.94352 9.33048C3.46072 9.46257 2.954 9.48182 2.46258 9.38673C2.67232 10.0388 3.0804 10.6091 3.62986 11.018C4.17933 11.427 4.84276 11.6542 5.52758 11.668C4.36497 12.5812 2.9288 13.0766 1.45039 13.0742C1.18821 13.0738 0.926282 13.0578 0.666016 13.0261C2.16792 13.9897 3.91504 14.5014 5.69945 14.5005Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2019_391">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.666016)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>

              <Link href={""} className={styleFooter.footer__socialsItem}>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2019_393)">
                    <path
                      d="M8.33399 1.44062C10.4715 1.44062 10.7246 1.45 11.5652 1.4875C12.3465 1.52187 12.7684 1.65313 13.0496 1.7625C13.4215 1.90625 13.6902 2.08125 13.9684 2.35938C14.2496 2.64062 14.4215 2.90625 14.5652 3.27813C14.6746 3.55938 14.8059 3.98438 14.8402 4.7625C14.8777 5.60625 14.8871 5.85938 14.8871 7.99375C14.8871 10.1313 14.8777 10.3844 14.8402 11.225C14.8059 12.0063 14.6746 12.4281 14.5652 12.7094C14.4215 13.0813 14.2465 13.35 13.9684 13.6281C13.6871 13.9094 13.4215 14.0813 13.0496 14.225C12.7684 14.3344 12.3434 14.4656 11.5652 14.5C10.7215 14.5375 10.4684 14.5469 8.33399 14.5469C6.19649 14.5469 5.94336 14.5375 5.10274 14.5C4.32148 14.4656 3.89961 14.3344 3.61836 14.225C3.24648 14.0813 2.97773 13.9063 2.69961 13.6281C2.41836 13.3469 2.24648 13.0813 2.10273 12.7094C1.99336 12.4281 1.86211 12.0031 1.82773 11.225C1.79023 10.3813 1.78086 10.1281 1.78086 7.99375C1.78086 5.85625 1.79023 5.60313 1.82773 4.7625C1.86211 3.98125 1.99336 3.55938 2.10273 3.27813C2.24648 2.90625 2.42148 2.6375 2.69961 2.35938C2.98086 2.07812 3.24648 1.90625 3.61836 1.7625C3.89961 1.65313 4.32461 1.52187 5.10274 1.4875C5.94336 1.45 6.19649 1.44062 8.33399 1.44062ZM8.33399 0C6.16211 0 5.89023 0.009375 5.03711 0.046875C4.18711 0.084375 3.60273 0.221875 3.09648 0.41875C2.56836 0.625 2.12148 0.896875 1.67773 1.34375C1.23086 1.7875 0.958984 2.23438 0.752734 2.75938C0.555859 3.26875 0.418359 3.85 0.380859 4.7C0.343359 5.55625 0.333984 5.82812 0.333984 8C0.333984 10.1719 0.343359 10.4438 0.380859 11.2969C0.418359 12.1469 0.555859 12.7313 0.752734 13.2375C0.958984 13.7656 1.23086 14.2125 1.67773 14.6562C2.12148 15.1 2.56836 15.375 3.09336 15.5781C3.60273 15.775 4.18398 15.9125 5.03398 15.95C5.88711 15.9875 6.15898 15.9969 8.33086 15.9969C10.5027 15.9969 10.7746 15.9875 11.6277 15.95C12.4777 15.9125 13.0621 15.775 13.5684 15.5781C14.0934 15.375 14.5402 15.1 14.984 14.6562C15.4277 14.2125 15.7027 13.7656 15.9059 13.2406C16.1027 12.7313 16.2402 12.15 16.2777 11.3C16.3152 10.4469 16.3246 10.175 16.3246 8.00313C16.3246 5.83125 16.3152 5.55938 16.2777 4.70625C16.2402 3.85625 16.1027 3.27188 15.9059 2.76562C15.709 2.23438 15.4371 1.7875 14.9902 1.34375C14.5465 0.9 14.0996 0.625 13.5746 0.421875C13.0652 0.225 12.484 0.0875 11.634 0.05C10.7777 0.009375 10.5059 0 8.33399 0Z"
                      fill="white"
                    />
                    <path
                      d="M8.33398 3.89062C6.06523 3.89062 4.22461 5.73125 4.22461 8C4.22461 10.2688 6.06523 12.1094 8.33398 12.1094C10.6027 12.1094 12.4434 10.2688 12.4434 8C12.4434 5.73125 10.6027 3.89062 8.33398 3.89062ZM8.33398 10.6656C6.86211 10.6656 5.66836 9.47188 5.66836 8C5.66836 6.52813 6.86211 5.33437 8.33398 5.33437C9.80586 5.33437 10.9996 6.52813 10.9996 8C10.9996 9.47188 9.80586 10.6656 8.33398 10.6656Z"
                      fill="white"
                    />
                    <path
                      d="M13.5652 3.72891C13.5652 4.26016 13.134 4.68828 12.6059 4.68828C12.0746 4.68828 11.6465 4.25703 11.6465 3.72891C11.6465 3.19766 12.0777 2.76953 12.6059 2.76953C13.134 2.76953 13.5652 3.20078 13.5652 3.72891Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2019_393">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.333984)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link href={""} className={styleFooter.footer__socialsItem}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2019_398)">
                    <path
                      d="M14.8156 0H1.18125C0.528125 0 0 0.515625 0 1.15313V14.8438C0 15.4813 0.528125 16 1.18125 16H14.8156C15.4688 16 16 15.4813 16 14.8469V1.15313C16 0.515625 15.4688 0 14.8156 0ZM4.74687 13.6344H2.37188V5.99687H4.74687V13.6344ZM3.55938 4.95625C2.79688 4.95625 2.18125 4.34062 2.18125 3.58125C2.18125 2.82188 2.79688 2.20625 3.55938 2.20625C4.31875 2.20625 4.93437 2.82188 4.93437 3.58125C4.93437 4.3375 4.31875 4.95625 3.55938 4.95625ZM13.6344 13.6344H11.2625V9.92188C11.2625 9.0375 11.2469 7.89687 10.0281 7.89687C8.79375 7.89687 8.60625 8.8625 8.60625 9.85938V13.6344H6.2375V5.99687H8.5125V7.04063H8.54375C8.85938 6.44063 9.63438 5.80625 10.7875 5.80625C13.1906 5.80625 13.6344 7.3875 13.6344 9.44375V13.6344Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2019_398">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styleFooter.footer__bottom}>
        <div className={`container ${styleFooter.footer__bottomContainer}`}>
          <p>Copyright 2022, Finsweet.com</p>
          {menu ? (
            <TheNav navLinks={menu} className={styleFooter.footer__menu} />
          ) : (
            ""
          )}
        </div>
      </div>
    </footer>
  );
}

export default TheFooter;
