import React from 'react';
import classnames from 'classnames';
import withValidation from './withValidation';

const Slider = ({ id, minText, maxText, value, onChange, hasError, label }) => (
    <div className="mt-2">
        <label htmlFor={id} className={classnames({ 'text-danger': hasError })}>{label}</label>
        <div className={classnames('slidecontainer', { 'border-danger': hasError })}>
            <span className="float-left">{minText}</span>
            <span className="float-right">{maxText}</span>
            <input id={id} type="range" min="1" max="100" value={value} onChange={e => onChange(e.target.value)} className="slider" />
        </div>
    </div>
);

export default withValidation(Slider);