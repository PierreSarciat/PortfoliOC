import React from "react";
import { NavLink } from "react-router-dom";
import Facebook from '@assets/logo/facebook.png';
import Instagram from '@assets/logo/instagram.jpg';
import MAIL from '@assets/logo/logoMail.JPG';
import LKDN from '@assets/logo/logoLDN.png';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <nav>
        <ul>
          <li>
            <NavLink to="mailto:phsarciat@mailo.com" id="contact" target="_blank" rel="noopener noreferrer"> <img src={MAIL} alt="logo email" className="footer-logo" />phsarciat@mailo.com</NavLink>
          </li>
          <li>
            <NavLink to="https://www.linkedin.com/in/pierre-henri-sarciat-55728219b" target="_blank" rel="noopener noreferrer"> <img src={LKDN} alt="logo linkdin" className="footer-logo" /></NavLink>
          </li>


        </ul>
      </nav>
    </div>
  );
};

export default Footer;
