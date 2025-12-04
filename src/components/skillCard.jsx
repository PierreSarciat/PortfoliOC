import React from "react";
import './skillCard.scss';


const SkillCard = ({ img, title, description, alt }) => {
    return (
        <div className="skill-card">
            <img
                src={img}
                alt={alt}
                className="skill-card__image"
            />
            <h3 className="skill-card__title">{title}</h3>
            <ul className="skill-card__list"> {/* Classe pour la liste */}
                {description.map((skill, index) => (
                    <li key={index} className="skill-card__item"> {/* Classe pour chaque élément de la liste */}
                        <strong className="skill-card__category">{skill.category}: </strong>
                        <span className="skill-card__items">{skill.items.join(', ')}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillCard;
