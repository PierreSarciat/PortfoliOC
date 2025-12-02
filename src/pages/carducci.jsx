import React from 'react';
import Button from "@components/button.jsx";
import "./pages.scss";
import "./carducci.scss";
import logoGitHub from "@images/logoGitHub.png";
import logolighthouse from "@images/logolighthouse.png";


const Booki = () => {
    return (
        <div>
            <section className='titleProject'>
                <h1>Nina Carducci</h1>
                <div className='logo'>
                    <img src={logolighthouse} alt="lighthouse" />
                </div>
                <p>Débugger et optimiser un site de photographe</p>
            </section>

            <section className='mockupContent'>
                <div className='mockup'>
                    <img src="/portfolio/mockup/carducci/carducci1.png" alt="Mockup Carducci" />
                    <img src="/portfolio/mockup/carducci/carducci2.png" alt="Mockup Carducci" />
                    <img src="/portfolio/mockup/carducci/carducci3.png" alt="Mockup Carducci" />
                </div>


            </section>
            <section className='mockupProject'>
                <h2>Projet: </h2>
                <ul>
                    <li>Rapport d' audit SEO</li>
                    <li>Accessibilité</li>
                    <li>Cahier de recette avec tests</li>
                </ul>
            </section>
            <div className='buttonCarducci'>
                <Button img={logoGitHub} alt="GitHub" href="https://github.com/PierreSarciat/ninacarducci.git" target="_blank" rel="noopener noreferrer" />
                <Button text="Rapport d' optimisation" href={`${import.meta.env.BASE_URL}auditSEO.html`} target="_blank" rel="noopener noreferrer" />
            </div>
        </div>
    );
};

export default Booki;