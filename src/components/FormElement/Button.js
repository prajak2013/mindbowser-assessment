import React from 'react';

const Button = ({ onClick, label, className = '' }) => (
    <button className={`btn btn-primary mt-2 mb-2 ${className}`} onClick={(e) => onClick(e)} >
        {label}
    </button>
);

export default Button;