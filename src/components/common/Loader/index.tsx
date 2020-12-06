import React, { FunctionComponent } from "react";
import "./Loader.scss";

type LoaderProps = {
  show: boolean;
};

const Loader: FunctionComponent<LoaderProps> = ({ show }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="root-loader">
      <div className="loader-center" />
      <div className="loader-pulse" />
      <div className="loader-pulse-delay" />
    </div>
  );
};

export default Loader;
