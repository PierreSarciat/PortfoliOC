import React from "react";
import './card.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



const Card = ({ img, title, link, alt }) => {

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate(link);
        window.scrollTo(0, 0);
    };

    return (
        <a href={link} onClick={handleClick} className="card-link">
            <div className="card">
                <img src={img} alt={alt} />
                <div className="card-overlay">
                    <div className="card-text">
                        <h3>{title}</h3>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Card;
