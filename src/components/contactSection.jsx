import React, { useState, useEffect, useRef } from 'react';
import ContactForm from '@components/contactForm.jsx';
import './contactSection.scss';

const ContactSection = ({ contactEmail, contactPhone, contactLocalisation }) => {
    const [isMerged, setIsMerged] = useState(false);
    const contactRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsMerged(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }
        };
    }, []);

    return (
        <div className={`Contact ${isMerged ? 'merged' : ''}`} ref={contactRef} >
            <div className="information">
                <h3>Informations de contact</h3>
                <div className='info'>
                    <i className="fa-solid fa-envelope"></i>
                    <p><span className='item'>E-mail</span><br />{contactEmail}</p>
                </div>
                <div className='info'>
                    <i className="fa-solid fa-phone"></i>
                    <p><span className='item'>Téléphone</span><br />{contactPhone}</p>
                </div>
                <div className='info'>
                    <i className="fa-solid fa-location-dot"></i>
                    <p><span className='item'>Localisation</span><br />{contactLocalisation}</p>
                </div>
            </div>
            <div className="contact">
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactSection;
