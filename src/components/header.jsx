import React, { useState, useEffect } from "react";
import './header.scss';
import '../App.scss';
import { NavLink, useLocation, useNavigate } from "react-router-dom";


const Header = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        const headerOffset = 100; // Hauteur du header + marge souhaitée
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
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
    navigate('/'); // Réinitialise l'URL
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    navigate(id); // Met à jour l'URL
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

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`} >
      <div className="header-container">
        <nav>
          <ul>
            <li>
              <div className="nav1">
                <NavLink to="/" onClick={scrollToTop}>
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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header


