import React, { useEffect, useRef, useState } from 'react';
import Card from '@components/card/card.jsx';
import bookiImg from '@images/booki.webp';
import bluelImg from '@images/bluel.webp';
import grimoireImg from '@images/grimoire.webp';
import kasaImg from '@images/kasa.webp';
import "./projectsSection.scss";


const projects = [
    { img: bookiImg, title: "BOOKI", alt: "Projet Booki", description: "Création de la page d'accueil d'une agence de voyage", linkGithub: "https://github.com/PierreSarciat/Booki/tree/projet-definitif", linkDemo: "https://pierresarciat.github.io/Booki/", tag_text: ["HTML", "CSS"] },
    { img: bluelImg, title: "SOPHIE BLUEL", alt: "Projet Sophie Bluel", description: "Développement d’une galerie dynamique avec une interface d’administration sécurisée.", linkGithub: "https://github.com/PierreSarciat/projet3", linkDemo: "https://www.figma.com/proto/kfKHknHySoTibZfdolGAX6/Sophie-Bluel---Desktop?node-id=2-2&p=f&t=xeLfFTlLuNibgHKP-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2", tag_text: "JavaScript" },
    { img: grimoireImg, title: "MON VIEUX GRIMOIRE", alt: "Projet Mon Vieux Grimoire", description: "Création du back-end d'un site de notation de livres", linkGithub: "https://github.com/PierreSarciat/mon-vieux-grimoire", linkDemo: "https://www.figma.com/proto/Snidyc45xi6qchoOPabMA9/Maquette-Mon-Vieux-Grimoir?node-id=3-2&p=f&t=3FZnuOZI0nynyze9-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A2", tag_text: ["Node.js", "MongoDB"] },
    { img: kasaImg, title: "KASA", alt: "Projet Kasa", description: "Implémenter le front-end d’une application de location immobilière en utilisant React et React Router", linkGithub: "https://github.com/PierreSarciat/Kasa-immobilier", linkDemo: "https://kasa-immobilierreact.vercel.app/", tag_text: "React/Vite" },
];

const ProjectsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '-50px 0px -50px 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className='project' id="projets" ref={sectionRef}>
            <div className="project-header">
                <div className={`title-line ${isVisible ? 'visible' : ''}`}>
                    <h2>Mes Projets</h2>
                </div>
                <p className={isVisible ? 'visible' : ''}>
                    Découvrez une sélection de mes réalisations récentes
                </p>
            </div>
            <div className="projectList">
                {projects.map((proj, index) => (
                    <div key={index} className={`project-card-wrapper ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${500 + (index * 150)}ms` }}>
                        <Card
                            img={proj.img}
                            title={proj.title}
                            alt={proj.alt}
                            description={proj.description}
                            tag_text={proj.tag_text}
                            linkGithub={proj.linkGithub}
                            linkDemo={proj.linkDemo}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
