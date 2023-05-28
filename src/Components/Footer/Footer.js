import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <footer className="footer">
      <a
        className="github-button"
        href={props.hrefLink}
        target="_blank"
        rel="noreferrer"
      >
        {props.buttonName}
      </a>
      <p className="footer-text">
        &copy; {props.year} {props.brandName}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
