import styleUI from "./styleUI.module.scss";
// @flow
import * as React from "react";

type Props = {
  label?: string;
  placeholder?: string;
  value?: string;
  className?: string;
};
export const TextBox = ({ label, placeholder, value, className }: Props) => {
  return (
    <label className={`${styleUI.textBox}  ${className ? className : ""}`}>
      {label ? <span>{label}</span> : ""}
      <input
        type={"text"}
        placeholder={placeholder}
        value={value}
        className={`${styleUI.textBox__input}`}
      />
    </label>
  );
};
