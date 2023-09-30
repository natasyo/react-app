import styleBtn from "./styleUI.module.scss";

import * as React from "react";
import { MouseEventHandler } from "react";

type Props = {
  isOpen: boolean;
  onClick?: MouseEventHandler;
  classname?: string;
};
export const ButtonBar = ({ isOpen, onClick, classname }: Props) => {
  return (
    <button
      className={`${styleBtn.buttonBar} ${
        !isOpen ? styleBtn.buttonBar_isOpen : styleBtn.buttonBar_isClose
      } ${classname}`}
      onClick={onClick}
    >
      <span className={`${styleBtn.buttonBar__line}`}></span>
      <span className={`${styleBtn.buttonBar__line}`}></span>
      <span className={`${styleBtn.buttonBar__line} `}></span>
    </button>
  );
};
