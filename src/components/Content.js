import React from "react";
import "./Content.css";
import mail from "../assets/mail.svg";
import vector from "../assets/Vector.svg";

const Content = () => {
  return (
    <div className="content-el">
      <div className="sub-content-el">
        <h1 className="h1-el">Andrei Barbu</h1>
        <h3 className="h3-el">Frontend Developer</h3>
        <p className="p-el">laurasmith.com</p>
        <div className="buttons">
          <button className="email-el">
            <img className="svg" src={mail} /> Email
          </button>
          <button className="linkedin-el">
            <img className="vector" src={vector} />
            LInkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
