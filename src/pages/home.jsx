import React from 'react';
import "./home.scss";
import Card from '@components/card.jsx';
import bookiImg from '@images/booki.webp';
import bluelImg from '@images/bluel.webp';
import carducciImg from '@images/carducci.webp';
import grimoireImg from '@images/grimoire.webp';
import kasaImg from '@images/kasa.webp';
import menu_makerImg from '@images/menu_maker.webp';
import Button from "@components/button.jsx";
import imageFond from "@images/imageFond.webp"

const projects = [
    { img: bookiImg, title: "BOOKI", alt: "Projet Booki", link: "/booki" },
    { img: bluelImg, title: "SOPHIE BLUEL", alt: "Projet Sophie Bluel", link: "/bluel" },
    { img: carducciImg, title: "NINA CARDUCCI", alt: "Projet Nina Carducci", link: "/carducci" },
    { img: grimoireImg, title: "MON VIEUX GRIMOIRE", alt: "Projet Mon Vieux Grimoire", link: "/grimoire" },
    { img: kasaImg, title: "KASA", alt: "Projet Kasa", link: "/kasa" },
    { img: menu_makerImg, title: "MENU MAKER", alt: "Projet Menu Maker", link: "/maker" },
];


const Home = () => {
    return (

        <div className='homeContent'>
            <section className="presentation" id="presentation" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${imageFond})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>

                <h1 className="title"><div className='p'>Pierre-Henri Sarciat </div><div className='q'><span className='highlight'>{"<"}</span> Développeur web <span className='highlight'>{"/>"}</span> </div></h1>
                <div className='buttonHome'>
                    <Button text="Me contacter" href="#contact" />
                    < Button id="CV" text="Mon CV" href={`${import.meta.env.BASE_URL}cv-pierre.html`} target="_blank" rel="noopener noreferrer" />
                </div>
            </section>
            <section className='about'>
                <p></p>
                <p>Développeur Full-Stack, je crée des interfaces performantes avec React et Sass, et développe des API fiables avec Node.js, Express et MongoDB.<br /><br /> Mon objectif est de livrer des applications complètes, optimisées et accessibles, offrant une expérience utilisateur fluide sur tous les supports.</p>
                <p></p>
            </section>
            <section className='skillsContent' id="competences">
                <h2>Mes compétences</h2>
                <section className='skills'>
                    <div className='skillsList'>
                        <h3>Front End</h3>
                        <ul>
                            <li><strong>Langage: </strong>JavaScript, HTML5, CSS</li>
                            <li><strong>Frameworks et bibliothèques: </strong>React, React Router, Vite</li>
                        </ul>
                    </div>
                    <div className='skillsList'>
                        <h3>Back End</h3>
                        <ul>
                            <li><strong>Langages et Frameworks: </strong>Node.js, Express.js</li>
                            <li><strong>Base de Données </strong>MongoDB</li>
                            <li><strong>API </strong>API REST</li>
                        </ul>
                    </div>
                    <div className='skillsList'>
                        <h3>Outils et Tests</h3>
                        <ul>
                            <li><strong>Gestion de Version: </strong>Git, GitHub</li>
                            <li><strong>Environnement: </strong>Visual Studio, Postman</li>
                            <li><strong>SEO: </strong>Google Search Console, PageSpeed Insights, Lighthouse</li>
                        </ul>
                    </div>
                </section>
            </section>
            <section className='project' id="portfolio">
                <h2>Mes Projets</h2>
                <div className='projectList'>

                    {projects.map((proj, index) => (
                        <Card
                            key={index}
                            img={proj.img}
                            title={proj.title}
                            alt={proj.alt}
                            link={proj.link}
                        />
                    ))}
                </div>
            </section>
            <section className='aboutMe' id="aboutMe">
                <h2>A propos</h2>
                <div className='textMe'>
                    <p></p>
                    <p className='text'>Issu du domaine paramédical, j’ai toujours travaillé dans des environnements où l’écoute, la rigueur et l’adaptabilité sont essentielles.<br /> En pleine réflexion sur mon avenir professionnel, j’ai ressenti le besoin d’entamer une reconversion vers un métier qui allie créativité, logique et construction.<br />
                        C’est au cours de mes recherches que j’ai découvert la formation OpenClassrooms, et j’ai réalisé que le développement web réunissait exactement ce que je recherchais : un secteur dynamique, des projets concrets, la possibilité d’apprendre en continu et surtout la satisfaction de créer des solutions utiles.<br />
                        Cette transition me permet aujourd’hui de mettre à profit ma méthodologie, ma capacité à résoudre des problèmes et ma volonté d’aider, tout en développant de nouvelles compétences techniques.<br /></p>
                    <p></p>
                </div>

            </section>
        </div>
    );
};
export default Home;