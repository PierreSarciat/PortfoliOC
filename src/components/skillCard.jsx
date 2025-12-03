import React from "react";
import './skillCard.scss';



const SkillCard = ({ img, title, description, alt }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
            {/* Image du logo */}
            <img
                src={img}
                alt={alt}
                className="w-20 h-20 object-contain mb-4"
            />

            {/* Titre */}
            <h3 className="text-xl font-bold mb-4">{title}</h3>

            {/* Liste des compétences */}
            <ul className="space-y-2 w-full text-left">
                {description.map((skill, index) => (
                    <li key={index}>
                        <strong>{skill.category}: </strong>
                        {skill.items.join(', ')}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillCard;
