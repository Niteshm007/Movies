import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import N from '../../assets/N.jpg'
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="infoText">
          Nitesh Malviya
        </div>
        <div className="infoImg">
        <img src={N} alt="" />
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a href="https://instagram.com/nitesh_malvi_007?igshid=MzRlODBiNWFlZA=="
              target="_blank">
            <FaInstagram />
            </a>
          </span>
          <span className="icon">
            <a href="https://www.linkedin.com/in/nitesh-malviya-01b572247"
              target="_blank">
            <FaLinkedin />
            </a>
          </span>
          <span className="icon">
            <a href="https://github.com/Niteshm007"
             target="_blank">
            <FaGithub />
            </a>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
