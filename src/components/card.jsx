import React from "react";
import './card.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import ButtonT from "./button-tag.jsx";

const Card = ({ img, title, link, alt, description, tag_text }) => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        navigate(link);
        window.scrollTo(0, 0);
    };
    return (
        <a href={link} onClick={handleClick} className="card-link">
            <div className="card">
                {/* Conteneur pour l'image et l'overlay */}
                <div className="card__image-container">
                    <img src={img} alt={alt} className="card__image" />
                    {/* Titre superposé à l'image (toujours visible) */}
                    <h3 className="card__title">{title}</h3>
                    {/* Overlay vide (apparaît au survol) */}
                    <div className="card__overlay"></div>
                </div>
                {/* Description en dehors de l'overlay */}
                <p className="card__description">{description}</p>
                {/* Affichage des tags */}
                <div className="buttonTag">
                    {Array.isArray(tag_text) ? (
                        tag_text.map((tag, index) => (
                            <ButtonT key={index} tag_text={tag} />
                        ))
                    ) : (

                        <ButtonT tag_text={tag_text} />

                    )}
                </div>
            </div>
        </a>
    );
};
export default Card;
