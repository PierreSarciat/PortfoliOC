import React, { useState, useEffect } from "react";
import './header.scss';
import '../App.scss';
import { NavLink, useLocation } from "react-router-dom";
import backgroundImage from '@images/imageFond.webp'


const Header = () => {

  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);



  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <nav>
          <ul>
            <li>
              <div className="nav1">
                <NavLink to="#" onClick={scrollToTop}>
                  Portfolio
                </NavLink>
              </div>
            </li>
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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header


