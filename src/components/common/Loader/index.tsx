import React from "react";
import "./Loader.scss";

interface ILoaderProps {
  show: boolean;
}

const Loader: React.FC<ILoaderProps> = ({ show }) => {
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
