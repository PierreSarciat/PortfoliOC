import React from 'react';
import "./home.scss";
import Card from '@components/card.jsx';
import bookiImg from '@images/booki.webp';
import bluelImg from '@images/bluel.webp';
import carducciImg from '@images/carducci.webp';
import grimoireImg from '@images/grimoire.webp';
import kasaImg from '@images/kasa.webp';
import menu_makerImg from '@images/menu_maker.webp';
import ButtonP from "@components/button-primary.jsx";
import ButtonS from "@components/button-secondary.jsx";
import logoGit from "@logo/logoGitHub.png"
import logoLDN from "@logo/logoLDN.png"
import SkillCard from '@components/SkillCard';
import logoHTML5 from "@logo/logoHTML5.png";
import logoBackend from "@logo/logoBackend.png";
import logoOutils from "@logo/logoOutils.png"


const projects = [
    { img: bookiImg, title: "BOOKI", alt: "Projet Booki", link: "/booki", description: "Création de  la page d'accueil d'une agence de voyage" },
    { img: bluelImg, title: "SOPHIE BLUEL", alt: "Projet Sophie Bluel", description: "Développement d’une galerie dynamique avec une interface d’administration sécurisée.", link: "/bluel" },
    { img: carducciImg, title: "NINA CARDUCCI", alt: "Projet Nina Carducci", description: "Optimiser le référencement d’un site, améliorer sa performance et son accessibilité.", link: "/carducci" },
    { img: grimoireImg, title: "MON VIEUX GRIMOIRE", alt: "Projet Mon Vieux Grimoire", description: "Création du back-end d' un site de notation de livres", link: "/grimoire" },
    { img: kasaImg, title: "KASA", alt: "Projet Kasa", description: "Implémenter le front-end d’une application de location immobilière en utilisant React et React Router ", link: "/kasa" },
    { img: menu_makerImg, title: "MENU MAKER", alt: "Projet Menu Maker", description: "Plannifier le développement du site d' un client", link: "/maker" },
];

const skills = [
    {
        img: logoHTML5,
        title: "Front End",
        description: [
            { items: ["JavaScript", "HTML5/SCSS"] },
            { items: ["React/Vite"] }
        ],
        alt: "Logo Front End"
    },
    {
        img: logoBackend,
        title: "Back End",
        description: [
            { items: ["Node.js", "Express.js"] },
            { items: ["MongoDB"] },
            { items: ["API REST"] }
        ],
        alt: "Logo Back End"
    },
    {
        img: logoOutils,
        title: "Outils et Tests",
        description: [
            { items: ["Git/GitHub"] },
            { items: ["Visual Studio"] },
            { items: ["SEO"] }
        ],
        alt: "Logo Outils"
    }
];


const Home = () => {
    return (

        <div className='homeContent'>


            <h1 className="title">Pierre-Henri Sarciat</h1>
            <p><span className='highlight'>{"<"}</span> Développeur web <span className='highlight'>{"/>"}</span> </p >
            <section className='about'>
                <p></p>
                <p>Développeur Full-Stack, je crée des interfaces performantes avec React et Sass, et développe des API fiables avec Node.js, Express et MongoDB.</p>
                <p></p>
            </section>
            <div className='buttonHome'>
                <ButtonP text="Me contacter" href="#contact" />
                <ButtonS text="Voir mes projets" href="" target="_blank" rel="noopener noreferrer" />
            </div>
            <div className='logo'>

                <a href="https://github.com/PierreSarciat/" target="_blank" rel="noopener noreferrer" > <img src={logoGit} alt="GitHub" /> </a>
                <a href="https://www.linkedin.com/in/pierre-henri-sarciat-55728219b" target="_blank" rel="noopener noreferrer" > <img src={logoLDN} alt="logo linkdin" /> </a>


            </div>

            <section className="skillsContent" id="competences">
                <h2 className="skills-content_title">Mes compétences</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            img={skill.img}
                            title={skill.title}
                            description={skill.description}
                            alt={skill.alt}
                        />
                    ))}
                </div>
            </section>
            <section className='project' id="portfolio">
                <h2>Mes Projets</h2>
                <p>Découvrez une sélection de mes réalisations récentes</p>
                <div className='projectList'>

                    {projects.map((proj, index) => (
                        <Card
                            key={index}
                            img={proj.img}
                            title={proj.title}
                            alt={proj.alt}
                            link={proj.link}
                            description={proj.description}
                        />
                    ))}
                </div>
            </section>
            <section className='aboutMe' id="aboutMe">
                <h2>A propos</h2>
                <div className='textMe'>
                    <p></p>
                    <p className='text'> Mon objectif est de livrer des applications complètes, optimisées et accessibles, offrant une expérience utilisateur fluide sur tous les supports. Issu du domaine paramédical, j’ai toujours travaillé dans des environnements où l’écoute, la rigueur et l’adaptabilité sont essentielles.<br /> En pleine réflexion sur mon avenir professionnel, j’ai ressenti le besoin d’entamer une reconversion vers un métier qui allie créativité, logique et construction.<br />
                        C’est au cours de mes recherches que j’ai découvert la formation OpenClassrooms, et j’ai réalisé que le développement web réunissait exactement ce que je recherchais : un secteur dynamique, des projets concrets, la possibilité d’apprendre en continu et surtout la satisfaction de créer des solutions utiles.<br />
                        Cette transition me permet aujourd’hui de mettre à profit ma méthodologie, ma capacité à résoudre des problèmes et ma volonté d’aider, tout en développant de nouvelles compétences techniques.</p>
                    <p></p>
                </div>

            </section>
        </div >
    );
};
export default Home;