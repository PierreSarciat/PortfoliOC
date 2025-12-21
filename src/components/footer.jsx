import React from "react";
import { NavLink } from "react-router-dom";
import Facebook from '@assets/logo/facebook.png';
import Instagram from '@assets/logo/instagram.jpg';
import MAIL from '@assets/logo/logoMail.JPG';
import LKDN from '@assets/logo/logoLDN.png';
import './footer.scss';

const scrollToTop = (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const scrollToSection = (e, id) => {
  e.preventDefault();
  const element = document.querySelector(id);
  if (element) {
    const headerOffset = 100; // Hauteur du header + marge souhaitée
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer">
        <nav>
          <ul>
            <div className="nav2">

              <li>
                <NavLink to="/#competence">
                  Compétences
                </NavLink>
              </li>
              <li>
                <NavLink to="/#apropos">
                  A propos
                </NavLink>
              </li>
              <li>
                <NavLink to="/#projets" onClick={(e) => scrollToSection(e, "#projets")}>
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
              <NavLink to="#" onClick={scrollToTop}>
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
