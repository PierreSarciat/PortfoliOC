import React from 'react';
import "./hero.scss";
import Card from '@components/card/card.jsx';
import { useState, useEffect } from 'react';

import ButtonP from "@components/button/button-primary.jsx";
import ButtonS from "@components/button/button-secondary.jsx";
import logoGit from "@logo/logoGitHub.png"
import logoLDN from "@logo/logoLDN.png"



const Hero = () => {



    return (

        <>
            <div className='heroBackground'>
                <div className='heroContent'>
                    <h1 className="title">Pierre-Henri Sarciat</h1>
                    <h2><span className='highlight'>{"<"}</span> Développeur web <span className='highlight'>{"/>"}</span> </h2>
                    <div className='about'>
                        <p></p>
                        <p>Développeur web junior orienté front-end, spécialisé en React et JavaScript, avec une approche agile du développement (Scrum, Trello) et une attention particulière à l’expérience utilisateur.</p>
                        <p></p>
                    </div>
                    <div className='buttonHome'>
                        <ButtonP text="Me contacter" href="#contact" />
                        <ButtonS id="CV" text="Mon CV" href={`${import.meta.env.BASE_URL}cv-pierre.pdf`} target="_blank" rel="noopener noreferrer" />
                    </div>
                    <div className='logo'>

                        <a href="https://github.com/PierreSarciat/" target="_blank" rel="noopener noreferrer" > <img src={logoGit} alt="GitHub" /> </a>
                        <a href="https://www.linkedin.com/in/pierre-henri-sarciat-55728219b" target="_blank" rel="noopener noreferrer" > <img src={logoLDN} alt="logo linkdin" id="logoLDN" /> </a>
                    </div>

                </div>

            </div>





        </ >
    );
};
export default Hero;