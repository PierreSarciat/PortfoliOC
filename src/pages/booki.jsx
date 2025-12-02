import React from 'react';
import Button from "@components/button.jsx";
import "./pages.scss";
import "./booki.scss";
import logoGitHub from "@images/logoGitHub.png";
import logohtml from "@images/logohtml.png";
import logocss from "@images/logocss.png";


const Booki = () => {
    return (
        <div>
            <section className='titleProject'>
                <h1>Booki</h1>
                <div className='logo'>
                    <img src={logohtml} alt="html" />
                    <img src={logocss} alt="css" />
                </div>
                <p>Création de  la page d'accueil d'une agence de voyage</p>
            </section>

            <section className='mockupContent'>
                <div className='mockup' id="booki">
                    <img src="" alt="" />
                    <img src="/portfolio/mockup/booki/booki1.png" alt="Mockup Booki" />
                    <img src="" alt="" />
                </div>


            </section>
            <div className='mockupProject'>
                <h2>Projet: </h2>
                <ul>
                    <li>Intégration HTML/CSS</li>
                    <li>Intégration à partir de Figma</li>
                    <li>Site responsive</li>
                    <li>Repo Git</li>
                </ul>
            </div>
            <div className='buttonBooki'>
                <Button img={logoGitHub} alt="GitHub" href="https://github.com/PierreSarciat/Booki/tree/projet-definitif" target="_blank" rel="noopener noreferrer" />
                <Button text="Visiter le site" href="https://pierresarciat.github.io/Booki/" target="_blank" rel="noopener noreferrer" />
            </div>
        </div>
    );
};

export default Booki;