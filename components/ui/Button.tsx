// @flow
import * as React from "react";
import styleUI from "./styleUI.module.scss";
type Props = {
  label: string;
  type?: "submit" | "button" | "reset" | undefined;
  className?: string;
};
export const Button = ({ label, type, className }: Props) => {
  return (
    <button
      type={type}
      className={` ${className ? className : ""} ${styleUI.button} btn`}
    >
      {label}
    </button>
  );
};
