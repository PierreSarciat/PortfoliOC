import "./skillCard.scss";

const SkillCard = ({ img, title, description, alt, index, visible }) => {
    return (
        <div
            className={`skill-card ${visible ? "visible" : ""}`}
            style={{ transitionDelay: `${index * 200}ms` }}// Délai de 200ms entre chaque carte
        >
            <img src={img} alt={alt} className="skill-card__image" />
            <h3 className="skill-card__title">{title}</h3>

            <div className="skill-card__content">
                {description.map((skill, i) => (
                    <ul key={i} className="skill-card__items-list">
                        {skill.items.map((item, j) => (
                            <li key={j} className="skill-card__item">{item}</li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;
