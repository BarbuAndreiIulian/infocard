import React from "react";
import logo from "../assets/profile.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <img className="img" src={logo} />
    </div>
  );
};

export default Header;
