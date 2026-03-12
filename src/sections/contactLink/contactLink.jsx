import React from 'react';
import Button from "@components/button/button.jsx";
import { Link } from 'react-router-dom';
import { useInView } from '@hooks/useInView';
import './ContactLink.scss';

const ContactLink = () => {
    const [ref, isVisible] = useInView({ threshold: 0.3 });
    return (

        <div className='ContactLink__background' id="contact">
            <div
                ref={ref}
                className={`ContactLink__content ${isVisible ? 'is-visible' : ''}`}
            >
                <h1>Votre projet mérite plus qu’un site: une solution pensée pour vous.</h1>
                <p>Discutons ensemble de votre projet et de vos objectifs lors d'un premier entretien.</p>
                <Link to="/contact">
                    <Button text="Contactez-moi" />
                </Link>
            </div>
        </div>


    );
};

export default ContactLink;