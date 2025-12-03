import React from "react";
import "./button-primary.scss";

const ButtonP = ({ text, href, img, alt, ...props }) => {
    return (
        <a className="buttonP" href={href} {...props}>
            {img ? <img src={img} alt={alt} className="button-img" /> : text}
        </a>
    );
};

export default ButtonP;
