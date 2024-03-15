import React from "react";
import Zb from "../../assets/images/ziibo.png";
import "./Footer.css";
import Faqs from "../../pages/faqs";

function Footer() {
  return (
    <div className="ziibo-footer-container">
      <h3>GET CONNECTED</h3>
      <img src={Zb} alt="ZbLogo" style={{ width: "100vw" }} />
      <Faqs />
      <div className="ziibo-footer-navigations">
        <h4>NAVIGATIONS</h4>
        <div className="links">
          <a href="/navigation">Home</a>
          <a href="/navigation">About Us</a>
          <a href="/navigation">Contact Us</a>
          <a href="/navigation">FAQs</a>
        </div>
      </div>
      <hr></hr>

      <div className="ziibo-footer-copyright">
        @2024 ZIIBO PLC.All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
