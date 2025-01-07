import React from "react";
import Button from "@mui/material/Button";
import "./index.css"; 
import GeraldImage from "../../assets/images/Gerald.jpeg";
import LinImage from "../../assets/images/Linda.jpeg";
import DanitaImage from "../../assets/images/ati.jpeg";
import Diana from "../../assets/images/diana.jpg";


function ContactUs() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-list">
        <div className="contact-item">
        <img
  src={GeraldImage}
  alt="Gerald Ampadu"
  className="contact-image"
/>

          <h3>Gerald Ampadu</h3>
          <p>Graphic designer with skills in marketing and content creation.</p>
          <a href="https://www.linkedin.com/in/gerald-nana-kwame-ampadu" className="contact-link">View Profile</a>
        </div>
      
        <div className="contact-item">
          <img
              src={DanitaImage}
            alt="Danita Lamptey"
            className="contact-image"
          />
          <h3>Danita Lamptey</h3>
          <p>Team Lead with a blend of skills in data, development and design.</p>
          <a
            href="https://www.linkedin.com/in/danita-lamptey"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </a>

        </div>

        <div className="contact-item">
          <img
             src={LinImage}
            alt="Linda Azuma"
            className="contact-image"
          />
          <h3>Linda Azuma</h3>
          <p>Passionate communicator with a degree in banking and finance.</p>
          <a href="https://www.linkedin.com/in/linda-azuma" className="contact-link">View Profile</a>
        </div>
        <div className="contact-item">
          <img
            src={Diana}
            alt="Diana Dzakah"
            className="contact-image"
          />
          <h3>Diana Dzakah</h3>
          <p>Excellent team player  with a degree in education.</p>
          <a href="http://wa.me/233552231994" className="contact-link">View Profile</a>
        </div>
      </div>
      <div className="back-home-container">
        <Button variant="contained" color="success" href="/">
          Back to Home
        </Button>
      </div>
    </div>
  );
}

export default ContactUs;
