import React from 'react';
import Button from "@components/button.jsx";
import logoGitHub from "@images/logoGitHub.png";
import "./pages.scss";
import "./bluel.scss";
import logohtml from "@images/logohtml.png";
import logocss from "@images/logocss.png";
import logoJS from "@images/logoJS.png";
import logomongodb from "@images/logomongodb.png";


const Bluel = () => {
    return (
        <div>
            <section className='titleProject'>
                <h1>Sophie Bluel</h1>
                <div className='logo'>
                    <img src={logohtml} alt="html" />
                    <img src={logocss} alt="css" />
                    <img src={logomongodb} alt="react" />
                    <img src={logoJS} alt="JS" />
                </div>
                <p>Création d' une page web dynamique avec JavaScript</p>
            </section>

            <section className='mockupContent'>
                <div className='mockup'>
                    <img src="/portfolio/mockup/bluel/bluel6.png" alt="Mockup Bluel" />
                    <img src="/portfolio/mockup/bluel/bluel2.png" alt="Mockup Bluel" />
                    <img src="/portfolio/mockup/bluel/bluel3.png" alt="Mockup Bluel" />
                    <img src="/portfolio/mockup/bluel/bluel1.png" alt="Mockup Bluel" />
                    <img src="/portfolio/mockup/bluel/bluel4.png" alt="Mockup Bluel" />
                    <img src="/portfolio/mockup/bluel/bluel5.png" alt="Mockup Bluel" />
                </div>


            </section>
            <section>
                <div className='mockupProject'>
                    <h2>Projet: </h2>
                    <ul>
                        <li><Button text="Contexte" /></li>
                        <span className='pGrid'>
                            <p></p>
                            <p>Développement d’une galerie dynamique pour les travaux de l’architecte Sophie Bluel avec une interface d’administration sécurisée.</p>
                            <p></p>
                        </span>

                        <li><Button text="Objectif" /></li>
                        <span className='pGrid'>
                            <p></p>
                            <p>Afficher les projets depuis le back-end, filtrer par catégorie, et permettre à l’administrateur d’ajouter ou supprimer des médias en temps réel.</p>
                            <p></p>
                        </span>

                        <li><Button text="Stack technique" /></li>
                        <span className='pGrid'>
                            <p></p>
                            <p>HTML, CSS, JavaScript, fetch API, Node.js, gestion de tokens et manipulation du DOM</p>
                            <p></p>
                        </span>

                        <li><Button text="Compétences développées" /></li>
                        <span className='pGrid'>
                            <p></p>
                            <p>Gestion des événements utilisateurs, appels API, manipulation de FormData, authentification via token, mise à jour dynamique du DOM.</p>
                            <p></p>
                        </span>

                        <li><Button text="Résultat et impact" /></li>
                        <span className='pGrid'>
                            <p></p>
                            <p>Galerie fonctionnelle et dynamique, filtres opérationnels, modale d’ajout de projets et suppression en mode édition pour l’administrateur.</p>
                            <p></p>
                        </span>

                        <li><Button text="Perspectives de développement" /></li>
                        <span className='pGrid'>
                            <p></p>
                            <p>Ajouter des animations lors de l’ajout ou suppression d’un média pour améliorer l’expérience utilisateur. Implémenter une pagination ou un lazy loading pour améliorer les performances en cas de nombreuses images.
                                Améliorer l’accessibilité (contraste, navigation clavier, ARIA labels).</p>
                            <p></p>
                        </span>
                    </ul>
                </div>
            </section>
            <div className='buttonBluel'>
                <Button img={logoGitHub} alt="GitHub" href="https://github.com/PierreSarciat/projet3.git" target="_blank" rel="noopener noreferrer" />
            </div>
        </div>
    );
};

export default Bluel;