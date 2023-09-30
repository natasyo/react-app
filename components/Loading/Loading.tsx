// @flow
import * as React from "react";
import styleLoading from "./LoadingStule.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";

type Props = {
  className?: string;
};
export const Loading = ({ className }: Props) => {
  return (
    <div className={`${styleLoading.loading} ${className}`}>
      <FontAwesomeIcon icon={faSpinner} spinPulse /> Loading...
    </div>
  );
};
