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

const projects = [
    { img: bookiImg, title: "BOOKI", alt: "Projet Booki", link: "/booki" },
    { img: bluelImg, title: "SOPHIE BLUEL", alt: "Projet Sophie Bluel", link: "/bluel" },
    { img: carducciImg, title: "NINA CARDUCCI", alt: "Projet Nina Carducci", link: "/carducci" },
    { img: grimoireImg, title: "MON VIEUX GRIMOIRE", alt: "Projet Mon Vieux Grimoire", link: "/grimoire" },
    { img: kasaImg, title: "KASA", alt: "Projet Kasa", link: "/kasa" },
    { img: menu_makerImg, title: "MENU MAKER", alt: "Projet Menu Maker", link: "/maker" },
];

const skills = [
    {
        img: "",
        title: "Front End",
        description: [
            { category: "Langage", items: ["JavaScript", "HTML5", "SCSS"] },
            { category: "Frameworks et bibliothèques", items: ["React", "React Router", "Vite"] }
        ],
        alt: "Logo Front End"
    },
    {
        img: "",
        title: "Back End",
        description: [
            { category: "Langages et Frameworks", items: ["Node.js", "Express.js"] },
            { category: "Base de Données", items: ["MongoDB"] },
            { category: "API", items: ["API REST"] }
        ],
        alt: "Logo Back End"
    },
    {
        img: "",
        title: "Outils et Tests",
        description: [
            { category: "Gestion de Version", items: ["Git", "GitHub"] },
            { category: "Environnement", items: ["Visual Studio", "Postman"] },
            { category: "SEO", items: ["Google Search Console", "PageSpeed Insights", "Lighthouse"] }
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