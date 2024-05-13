import React from "react";
// import { LOGO } from "../constants/constants";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsDiscord, BsTwitterX } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-top-bx">
          <div className="footer-top-bx1">
            <a href="#">
              <img  className="footer-logo" src="/images/lenscorp-logo.webp" alt="logo" />
            </a>
            <span style={{ marginBottom: "3rem" }}>
              Tomorrow's Vision, Today!
            </span>
            <div className="footer-icon">
              <FaFacebook />
              <BsInstagram />
              <SiLinkedin />
              <BsDiscord />
              <BsTwitterX />
            </div>
          </div>
          <div className="footer-top-bx1">
            <span className="footer-two-title">SITEMAP</span>
            <a className="footer-common" target="_blank">
              MakeMyWeb.
            </a>
            <a className="footer-common" target="_blank">
              Services
            </a>
            <span className="footer-common">Products</span>
            <a className="footer-common" target="_blank">
              Blogs
            </a>
            <a className="footer-common" target="_blank">
              Life at LENS
            </a>
          </div>
          <div className="footer-top-bx1">
            <span className="footer-two-title">CONNECT</span>
            <a className="footer-common">+1-517-9300-792</a>
            <a className="footer-common">+91-9990-736-796</a>
            <a className="footer-common">solutions@lenscorp.ai</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-bx">
          <span style={{ color: "rgb(153, 153, 153)" }}>
            2023 <span style={{ color: "white" }}>LENS, Inc. </span> All rights
            reserved.
          </span>
          <div className="footer-bottom-sm-bx">
            <a>Code of conduct</a>
            <a>Sustainability Goals</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
