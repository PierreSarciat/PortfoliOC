import { useEffect, useRef, useState } from "react";
import SkillCard from "@components/skillCard/skillCard.jsx";
import logoHTML5 from "@logo/logoHTML5.png";
import logoBackend from "@logo/logoBackend.png";
import logoOutils from "@logo/logoOutils.png";

import "./skillsContent.scss";

const skillsData = [
    {
        img: logoHTML5,
        title: "Front End",
        description: [
            { items: ["JavaScript", "HTML5/SCSS"] },
            { items: ["React/Vite"] }
        ],
        alt: "Logo Front End"
    },
    {
        img: logoBackend,
        title: "Back End",
        description: [
            { items: ["Node.js", "Express.js"] },
            { items: ["MongoDB"] },
            { items: ["API REST"] }
        ],
        alt: "Logo Back End"
    },
    {
        img: logoOutils,
        title: "Outils et Tests",
        description: [
            { items: ["Git/GitHub"] },
            { items: ["Visual Studio"] },
            { items: ["SEO"] }
        ],
        alt: "Logo Outils"
    }
];

const SkillsContent = () => {
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
            { threshold: 0.6 }
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
                    {skillsData.map((skill, index) => (
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
