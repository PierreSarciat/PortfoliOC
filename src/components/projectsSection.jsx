import React, { useEffect, useRef, useState } from 'react';
import Card from '@components/card.jsx';
import "./projectsSection.scss";

const ProjectsSection = ({ projects }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '-50px 0px -50px 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className='project' id="projets" ref={sectionRef}>
            <div className="project-header">
                <div className={`title-line ${isVisible ? 'visible' : ''}`}>
                    <h2>Mes Projets</h2>
                </div>
                <p className={isVisible ? 'visible' : ''}>
                    Découvrez une sélection de mes réalisations récentes
                </p>
            </div>
            <div className="projectList">
                {projects.map((proj, index) => (
                    <div key={index} className={`project-card-wrapper ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${500 + (index * 150)}ms` }}>
                        <Card
                            img={proj.img}
                            title={proj.title}
                            alt={proj.alt}
                            description={proj.description}
                            tag_text={proj.tag_text}
                            linkGithub={proj.linkGithub}
                            linkDemo={proj.linkDemo}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
