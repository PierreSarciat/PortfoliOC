import { useEffect, useRef, useState } from "react";
import SkillCard from "./skillCard";
import "./skillsContent.scss";

const SkillsContent = ({ skills }) => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect(); // une seule fois
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={sectionRef}
            className={`skillsContent__background ${visible ? "is-visible" : ""}`}
            id="competence"
        >
            <section className="skillsContent">
                {/* TITRE */}
                <div className="skills-content_title-wrapper">
                    <h2 className="skills-content_title">Mes compétences</h2>
                </div>

                {/* CARTES */}
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            index={index}
                            visible={visible}
                            img={skill.img}
                            title={skill.title}
                            description={skill.description}
                            alt={skill.alt}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SkillsContent;
