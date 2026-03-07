import React from "react";
import "./button-secondary.scss";

const ButtonS = ({ text, href, img, alt, ...props }) => {
    return (
        <a className="buttonS" href={href} {...props}>
            {img ? <img src={img} alt={alt} className="button-img" /> : text}
        </a>
    );
};

export default ButtonS;
