import React from 'react';
import "./home.scss";
import Card from '@components/card.jsx';
import { useState, useEffect } from 'react';
import bookiImg from '@images/booki.webp';
import bluelImg from '@images/bluel.webp';
import grimoireImg from '@images/grimoire.webp';
import kasaImg from '@images/kasa.webp';
import ButtonP from "@components/button-primary.jsx";
import ButtonS from "@components/button-secondary.jsx";
import logoGit from "@logo/logoGitHub.png"
import logoLDN from "@logo/logoLDN.png"
import logoHTML5 from "@logo/logoHTML5.png";
import logoBackend from "@logo/logoBackend.png";
import logoOutils from "@logo/logoOutils.png";
import SkillsContent from '@components/skillsContent.jsx';
import AboutMe from '@components/aboutMe';
import ProjectsSection from '@components/projectsSection.jsx';
import ContactSection from '@components/contactSection.jsx';

const projects = [
    { img: bookiImg, title: "BOOKI", alt: "Projet Booki", description: "Création de la page d'accueil d'une agence de voyage", linkGithub: "https://github.com/PierreSarciat/Booki/tree/projet-definitif", linkDemo: "https://pierresarciat.github.io/Booki/", tag_text: ["HTML", "CSS"] },
    { img: bluelImg, title: "SOPHIE BLUEL", alt: "Projet Sophie Bluel", description: "Développement d’une galerie dynamique avec une interface d’administration sécurisée.", linkGithub: "https://github.com/PierreSarciat/projet3", linkDemo: "https://www.figma.com/proto/kfKHknHySoTibZfdolGAX6/Sophie-Bluel---Desktop?node-id=2-2&p=f&t=xeLfFTlLuNibgHKP-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2", tag_text: "JavaScript" },
    { img: grimoireImg, title: "MON VIEUX GRIMOIRE", alt: "Projet Mon Vieux Grimoire", description: "Création du back-end d'un site de notation de livres", linkGithub: "https://github.com/PierreSarciat/mon-vieux-grimoire", linkDemo: "https://www.figma.com/proto/Snidyc45xi6qchoOPabMA9/Maquette-Mon-Vieux-Grimoir?node-id=3-2&p=f&t=3FZnuOZI0nynyze9-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A2", tag_text: ["Node.js", "MongoDB"] },
    { img: kasaImg, title: "KASA", alt: "Projet Kasa", description: "Implémenter le front-end d’une application de location immobilière en utilisant React et React Router", linkGithub: "https://github.com/PierreSarciat/Kasa-immobilier", linkDemo: "https://kasa-immobilierreact.vercel.app/", tag_text: "React/Vite" },
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

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;
const contactPhone = import.meta.env.VITE_CONTACT_PHONE;
const contactLocalisation = import.meta.env.VITE_CONTACT_LOCALISATION;




const Home = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Déclencher l'animation après un court délai
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (

        <>
            <div className='homeBackground'>
                <h1 className="title">Pierre-Henri Sarciat</h1>
                <h2><span className='highlight'>{"<"}</span> Développeur web <span className='highlight'>{"/>"}</span> </h2>
                <section className='about'>
                    <p></p>
                    <p>Développeur web junior orienté front-end, spécialisé en React et JavaScript, avec une approche agile du développement (Scrum, Trello) et une attention particulière à l’expérience utilisateur.</p>
                    <p></p>
                </section>
                <div className='buttonHome'>
                    <ButtonP text="Me contacter" href="#contact" />
                    <ButtonS id="CV" text="Mon CV" href={`${import.meta.env.BASE_URL}cv-pierre.pdf`} target="_blank" rel="noopener noreferrer" />
                </div>
                <div className='logo'>

                    <a href="https://github.com/PierreSarciat/" target="_blank" rel="noopener noreferrer" > <img src={logoGit} alt="GitHub" /> </a>
                    <a href="https://www.linkedin.com/in/pierre-henri-sarciat-55728219b" target="_blank" rel="noopener noreferrer" > <img src={logoLDN} alt="logo linkdin" id="logoLDN" /> </a>
                </div>

            </div>


            <SkillsContent skills={skills} />

            <AboutMe />

            <ProjectsSection projects={projects} />

            <section className='contact__container' id="contact">
                <h2>Contactez-moi</h2>
                <p><span className='item'>Vous avez un projet en tête ? N'hésitez pas à me contacter</span></p>

                <ContactSection
                    contactEmail={contactEmail}
                    contactPhone={contactPhone}
                    contactLocalisation={contactLocalisation}
                />
            </section>
        </ >
    );
};
export default Home;