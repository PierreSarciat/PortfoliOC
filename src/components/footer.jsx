import React from "react";
import { NavLink } from "react-router-dom";
import Facebook from '@assets/logo/facebook.png';
import Instagram from '@assets/logo/instagram.jpg';
import MAIL from '@assets/logo/logoMail.JPG';
import LKDN from '@assets/logo/logoLDN.png';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer">
        <nav>
          <ul>
            <div className="nav2">
              <li>
                <NavLink to="/#apropos">
                  A propos
                </NavLink>
              </li>
              <li>
                <NavLink to="/#competence">
                  Compétences
                </NavLink>
              </li>
              <li>
                <NavLink to="/#projets">
                  Projets
                </NavLink>
              </li>
              <li>
                <NavLink to="/#contact">
                  Contact
                </NavLink>
              </li>
            </div>
            <li>
              <NavLink to="/#portfolio">
                Portfolio
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
