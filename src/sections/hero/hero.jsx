import React from 'react';
import "./hero.scss";
import Card from '@components/card/card.jsx';
import { useState, useEffect } from 'react';

import ButtonP from "@components/button/button-primary.jsx";
import ButtonS from "@components/button/button-secondary.jsx";
import logoGit from "@logo/logoGitHub.png"
import logoLDN from "@logo/logoLDN.png"

/*import SkillsContent from '@components/SkillsContent/skillsContent.jsx';*/
/*import AboutMe from '@components/aboutMe/aboutMe.jsx';*/
/*import ProjectsSection from '@components/projectSection/projectsSection.jsx';*/
/*import ContactSection from '@components/contactSection.jsx';*/


const Hero = () => {

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
            <div className='heroBackground'>
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





        </ >
    );
};
export default Hero;