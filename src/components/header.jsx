import React, { useState, useEffect } from "react";
import './header.scss';
import '../App.scss';
import { NavLink, useLocation } from "react-router-dom";


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

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <nav>
          <ul>
            <li>
              <NavLink to="/#portfolio">
                Portfolio
              </NavLink>
            </li>
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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header


