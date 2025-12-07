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
            <div className="skill-card__content">
                {description.map((skill, index) => (
                    <ul className="skill-card__items-list">
                        {skill.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="skill-card__item">
                                {item}
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;
