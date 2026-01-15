import React, { useState, useEffect } from "react";
import './header.scss';
import '../App.scss';
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const HEADER_OFFSET = 100;


const Header = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [outHero, setOutHero] = useState(false);

  useEffect(() => {
    if (!location.hash) return;

    const element = document.querySelector(location.hash);
    if (!element) return;

    const y =
      element.getBoundingClientRect().top +
      window.scrollY -
      HEADER_OFFSET;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }, [location.hash]);


  const scrollToTop = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const goTo = (e, hash) => {
    e.preventDefault();
    navigate(`/${hash}`);
  };

  useEffect(() => {
    const hero = document.querySelector(".hero");
    const heroHeight = hero?.offsetHeight || 300;
    const DESKTOP_OFFSET = 400;
    const MOBILE_OFFSET = 550;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Fond immédiat dès qu'on scroll
      setScrolled(scrollY > 0);

      // Changement de couleur uniquement après le hero
      const offset = window.innerWidth <= 768 ? MOBILE_OFFSET : DESKTOP_OFFSET;
      setOutHero(scrollY > heroHeight + offset);
    };

    // Ajouter l'écouteur de scroll
    window.addEventListener("scroll", handleScroll);

    // Nettoyage lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // [] = ne s'exécute qu'au montage

  return (
    <header className={`header ${scrolled ? "scrolled" : ""} ${outHero ? "out-hero" : ""}`}>

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
                <NavLink to="/#competence" onClick={(e) => goTo(e, "#competence")}>
                  Compétences
                </NavLink>
              </li>
              <li>
                <NavLink to="/#apropos" onClick={(e) => goTo(e, "#apropos")}>
                  A propos
                </NavLink>
              </li>
              <li>
                <NavLink to="/#projets" onClick={(e) => goTo(e, "#projets")}>
                  Projets
                </NavLink>
              </li>

              <li>
                <NavLink to="/#contact" onClick={(e) => goTo(e, "#contact")}>
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


