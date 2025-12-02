import React from 'react';
import Button from "@components/button.jsx";
import "./pages.scss";
import "./kasa.scss"
import logoGitHub from "@images/logoGitHub.png";
import logohtml from "@images/logohtml.png";
import logocss from "@images/logocss.png";
import logoreact from "@images/logoreact.png";
import logoJS from "@images/logoJS.png";


const Kasa = () => {
    return (
        <div>
            <section className='titleProject'>
                <h1>Kasa</h1>
                <div className='logo'>
                    <img src={logohtml} alt="html" />
                    <img src={logocss} alt="css" />
                    <img src={logoreact} alt="react" />
                    <img src={logoJS} alt="JS" />
                </div>
                <p>Créer une application de location immobilière avec React</p>
            </section>

            <section className='mockupContent'>
                <div className='mockup'>
                    <img src="/portfolio/mockup/kasa/kasa1.png" alt="Mockup Kasa" />
                    <img src="/portfolio/mockup/kasa/kasa2.png" alt="Mockup Kasa" />
                    <img src="/portfolio/mockup/kasa/kasa3.png" alt="Mockup Kasa" />
                    <img src="/portfolio/mockup/kasa/kasa4.png" alt="Mockup Kasa" />
                    <img src="/portfolio/mockup/kasa/kasa5.png" alt="Mockup Kasa" />
                </div>

            </section>
            <section>
                <div className='mockupProject'>
                    <h2>Projet: </h2>
                    <ul>
                        <li><Button text="Contexte" /></li>
                        <span className='pGrid'>
                            <p></p>
                            <p>Refonte complète du front-end pour basculer vers une stack JavaScript moderne, et reconstruction de  l’interface en React</p>
                            <p></p>
                        </span>

                        <li><Button text="Objectif" /></li>
                        <span className='pGrid'>
                            <p></p>
                            <p>Création d' une application React complète, responsive et modulaire, d' une navigation fluide avec React Router, d’un système de gestion dynamique des données, et de composants interactifs </p>
                            <p></p>
                        </span>

                        <li><Button text="Stack technique" /></li>
                        <span className='pGrid'>
                            <p></p>
                            <p>React components, React Router, Sass , JavaScript, React+Vite. Données locales au format JSON en l’absence temporaire d’un back-end finalisé.</p>
                            <p></p>
                        </span>

                        <li><Button text="Compétences développées" /></li>
                        <span className='pGrid'>
                            <p></p>
                            <p>Découpage d' une interface en composants réutilisables, gestion de l’état et des événements,  manipulation des listes via map, animations CSS avec Sass, respect strict d’un design système issu de maquettes Figma.</p>
                            <p></p>
                        </span>

                        <li><Button text="Résultat et impact" /></li>
                        <span className='pGrid'>
                            <p></p>
                            <p>Projet qui aboutit à une application intégrant un routage complet, un affichage dynamique des logements, un Slideshow interactif et des Collapse animés. </p>
                            <p></p>
                        </span>

                        <li><Button text="Perspectives de développement" /></li>
                        <span className='pGrid'>
                            <p></p>
                            <p>Une future intégration avec un back-end Node.js permettra d’ajouter une API temps réel.</p>
                            <p></p>
                        </span>
                    </ul>
                </div>
            </section>
            <div className='buttonKasa'>
                <Button img={logoGitHub} alt="GitHub" href="https://github.com/PierreSarciat/Kasa-immobilier.git" target="_blank" rel="noopener noreferrer" />
            </div>
        </div>
    );
};

export default Kasa;