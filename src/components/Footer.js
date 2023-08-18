import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import '../style/footer.css'
const socials = [
    {
      name: "GitHub",
      url: "https://github.com/sam-dejesus",
      icon: faGithub,
      color: "#5DE512",
    },

    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/samuel-dejesus/",
      icon: faLinkedin,
      color: "#2EACE8",
    },

  ];

export default function Footer() {
  return (
    <div className="footer bg-dark text-white">
  
      <div className="">
        <div className=" d-flex flex-md-row justify-content-center ">
          {socials.map(({ name, url, icon, color }) => (
            <div
              key={name}
              className="d-flex flex-column align-items-center mx-md-2 transparent-bg mt-5"
            >
              <a
                href={url}
                className={`icon ${name}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={icon}
                  bounce
                  className="footer-icon-size" 
                  style={{ color: color }}
                />
              </a>
              <a href={url} target="_blank" rel="noreferrer">
                <span className="d-inline-block mx-1 name">{name}</span>
              </a>
            </div>
          ))}
        </div>
        <div className="footer-text">
        <h5 className="designer-text">Designed with ❤️  by Samuel Dejesus</h5>
          <p>
          <h6 className="copyright-text">&copy; {new Date().getFullYear()} All rights reserved.</h6>
          </p>
        </div>
      </div>
  </div>
  );
}