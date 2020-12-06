import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import "./Header.scss";

type HeaderProps = {
  title: string;
  showBack?: boolean;
};

const Header: FunctionComponent<HeaderProps> = ({ title, showBack }) => {
  let history = useHistory();

  return (
    <div className="header-root">
      {/* Back Button */}
      {showBack ? (
        <button onClick={() => history.goBack()} className="header-button">
          Back
        </button>
      ) : (
        <div />
      )}

      {/* Title */}
      <p className="header-title">{title}</p>

      {/* Add other action elements, else empty */}
      <div />
    </div>
  );
};

export default Header;
