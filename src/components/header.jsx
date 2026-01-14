import React, { useState, useEffect } from "react";
import './header.scss';
import '../App.scss';
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const HEADER_OFFSET = 100;


const Header = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

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



  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    const handleScroll = () => {
      const header = document.querySelector("header");
      const heroHeight = document.querySelector(".hero")?.offsetHeight || 300;

      const offset = 350;

      if (window.scrollY > heroHeight + offset) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


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


