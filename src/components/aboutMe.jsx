import React from 'react';
import './AboutMe.scss';

const AboutMe = () => {
    return (
        <div className='aboutMe__Background'>
            <section className='aboutMe' id="apropos">
                <h2>A propos</h2>
                <div className='textMe'>
                    <p></p>
                    <p className='text'>
                        Mon objectif est de livrer des applications complètes, optimisées et accessibles,
                        offrant une expérience utilisateur fluide sur tous les supports. Issu du domaine
                        paramédical, j'ai toujours travaillé dans des environnements où l'écoute, la rigueur
                        et l'adaptabilité sont essentielles.
                        <br />
                        En pleine réflexion sur mon avenir professionnel, j'ai ressenti le besoin d'entamer
                        une reconversion vers un métier qui allie créativité, logique et construction.
                        <br />
                        C'est au cours de mes recherches que j'ai découvert la formation OpenClassrooms,
                        et j'ai réalisé que le développement web réunissait exactement ce que je recherchais :
                        un secteur dynamique, des projets concrets, la possibilité d'apprendre en continu et
                        surtout la satisfaction de créer des solutions utiles.
                        <br />
                        Cette transition me permet aujourd'hui de mettre à profit ma méthodologie,
                        ma capacité à résoudre des problèmes et ma volonté d'aider, tout en développant
                        de nouvelles compétences techniques.
                    </p>
                    <p></p>
                </div>
            </section>
        </div>
    );
};

export default AboutMe;
