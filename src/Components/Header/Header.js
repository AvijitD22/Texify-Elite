import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="navbar">
      <a className="navbar-brand" href="/">
        {props.brandName}
      </a>
      <div>
        <a className="navbar-link" href={props.firstLinkRedirectTo}>
          {props.firstLinkName}
        </a>
        <a className="navbar-link" href={props.secondLinkRedirectTo}>
          {props.secondLinkName}
        </a>
      </div>
    </div>
  );
};

export default Header;
