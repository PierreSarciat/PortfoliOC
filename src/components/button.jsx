import React from "react";
import "./button.scss";

const Button = ({ text, href, img, alt, ...props }) => {
    return (
        <a className="button" href={href} {...props}>
            {img ? <img src={img} alt={alt} className="button-img" /> : text}
        </a>
    );
};

export default Button;
