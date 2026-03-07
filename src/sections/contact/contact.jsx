import React from 'react';
import ContactForm from '@components/contact/contactForm.jsx';
import { useInView } from '@hooks/useInView';
import './contact.scss';



const Contact = ({ contactEmail, contactPhone, contactLocalisation }) => {


    const [contactRef, isVisible] = useInView({ threshold: 0.3 });
    const [contentRef, contentVisible] = useInView({ threshold: 0.3 });

    return (
        <div className='contact__background'>
            <section className='section'>
                <div className='contact__container'>


                    <div
                        ref={contentRef}
                        className={`contact__content ${isVisible ? 'is-visible' : ''}`}
                    >
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

                        <div className="contact__form">
                            <ContactForm />
                        </div>
                    </div>




                    <div
                        ref={contactRef}
                        className={`contact ${isVisible ? 'is-visible' : ''}`}
                    >
                        <h2>Contactez-moi</h2>
                        <p>
                            Vous avez une question ou souhaitez en savoir plus sur mes programmes ?
                            N'hésitez pas à me contacter.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Contact;