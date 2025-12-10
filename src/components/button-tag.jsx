import React from "react";
import "./button-tag.scss";

const ButtonT = ({ tag_text }) => {
    return (
        <div className="buttonT" >
            {tag_text}
        </div>
    );
};

export default ButtonT;
