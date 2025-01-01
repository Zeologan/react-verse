import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
const Footer = () => {
  return (
    <div className="footer_box">
      <div className="logo">LOGO</div>
      <div className="menu">
        <ul>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Cookies</li>
        </ul>
      </div>
      <div className="footer_menu">
        <ul>
          <li><FaFacebookF /></li>
          <li><FaTwitter /></li>
          <li><IoLogoWhatsapp /></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
