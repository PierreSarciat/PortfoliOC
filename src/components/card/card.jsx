import React from "react";
import "./card.scss";
import ButtonT from "@components/button/button-tag.jsx";
import logoGit from "@logo/logoGitHub.png";
import Demo from "@logo/demo.png";

const Card = ({ img, title, alt, description, tag_text, linkGithub, linkDemo }) => {
    return (
        <div className="card">
            <h3 className="card__title">{title}</h3>

            <div className="card__image-container">
                <p className="card__description">{description}</p>
                <img src={img} alt={alt} className="card__image" />
                <div className="card__overlay"></div>
            </div>

            <div className="buttonTag">
                {Array.isArray(tag_text)
                    ? tag_text.map((tag, index) => (
                        <ButtonT key={index} tag_text={tag} />
                    ))
                    : <ButtonT tag_text={tag_text} />}
            </div>

            <div className="logoCard">
                <a href={linkGithub} target="_blank" rel="noopener noreferrer">
                    <img src={logoGit} alt="GitHub" /> Code
                </a>
                <a href={linkDemo} target="_blank" rel="noopener noreferrer">
                    <img src={Demo} alt="Démo" /> Démo
                </a>
            </div>
        </div>
    );
};

export default Card;
