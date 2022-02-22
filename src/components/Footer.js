import React from "react";
import "./Footer.css";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import github from "../assets/github.svg";

const Footer = () => {
  return (
    <div className="container-flexbox">
      <div className="container-width1">
        <img src={twitter} />
        <img src={facebook} />
        <img src={instagram} />
        <img src={github} />
      </div>
    </div>
  );
};

export default Footer;
