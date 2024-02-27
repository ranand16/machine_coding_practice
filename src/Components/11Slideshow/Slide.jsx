import React, { FC } from "react";

const Slide = ({ title, image, active }) => {
    return (
        <div style={active?{ display:'block' }: { display: 'none' }}>
            <img src={image} alt={title} />
            <span>{title}</span>
        </div>
    );
};

export default Slide;
