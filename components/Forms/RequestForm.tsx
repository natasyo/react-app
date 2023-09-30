import React from "react";

import styleForm from "./style-form.module.scss";
import { TextBox } from "@/components/ui/TextBox.tsx";
import { Button } from "@/components/ui/Button.tsx";
import Link from "next/link";

function RequestForm() {
  return (
    <div className={styleForm.requestForm}>
      <h5 className={styleForm.requestForm__header}>Send inquiry</h5>
      <p className={`${styleForm.requestForm__text}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
      <TextBox placeholder={"Your Name"} />
      <TextBox placeholder={"Email"} />
      <TextBox placeholder={"Paste your Figma design URL"} />
      <Button
        label={"Send an Inquiry"}
        className={styleForm.requestForm__button}
      />
      <Link href={"/"} className={`btn-link ${styleForm.requestForm__btnLink}`}>
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
            fill="#F4F6FC"
          />
        </svg>
      </Link>
    </div>
  );
}

export default RequestForm;
