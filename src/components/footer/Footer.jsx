import React from "react";
import "./Footer.scss";
import N from "../../assets/N.jpg";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container contentWrapper ">
        <h1 className="about">About Me</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="me">
              <h3>
                Name: <span> Nitesh Malviya</span>
              </h3>
              <h3>
                Contact: <span> 📞 +91 7374866730</span>
              </h3>
              <h3>
                Email: <span> 📫 Niteshmalvi74@gmail.com</span>
              </h3>
              <h3>
                Portfolio:{" "}
                <span>
                  <a
                    href="https://niteshm007.github.io/My-Portfolio/"
                    target="_blank"
                  >
                    My Portfolio
                  </a>
                </span>
              </h3>
            </div>
          </div>
          <div className="col-md-6">
            <div className="infoImg">
              <img src={N} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="socialIcons">
            <span className="icon">
              <a
                href="https://instagram.com/nitesh_malvi_007?igshid=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <FaInstagram />
              </a>
            </span>
            <span className="icon">
              <a
                href="https://www.linkedin.com/in/nitesh-malviya-01b572247"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </span>
            <span className="icon">
              <a href="https://github.com/Niteshm007" target="_blank">
                <FaGithub />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// import React from "react";
// import {
//   FaInstagram,
//   FaLinkedin,
//   FaGithub
// } from "react-icons/fa";

// import ContentWrapper from "../contentWrapper/ContentWrapper";
// import N from '../../assets/N.jpg'
// import "./Footer.scss";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <ContentWrapper>
//         <div className="infoText">
//          <h1> Nitesh Malviya </h1>
//          <h3>Web Developer</h3>
//         </div>
//         <div className="infoImg">
//         <img src={N} alt="" />
//         </div>
//         <div className="socialIcons">
//           <span className="icon">
//             <a href="https://instagram.com/nitesh_malvi_007?igshid=MzRlODBiNWFlZA=="
//               target="_blank">
//             <FaInstagram />
//             </a>
//           </span>
//           <span className="icon">
//             <a href="https://www.linkedin.com/in/nitesh-malviya-01b572247"
//               target="_blank">
//             <FaLinkedin />
//             </a>
//           </span>
//           <span className="icon">
//             <a href="https://github.com/Niteshm007"
//              target="_blank">
//             <FaGithub />
//             </a>
//           </span>
//         </div>
//       </ContentWrapper>
//     </footer>
//   );
// };

// export default Footer;
