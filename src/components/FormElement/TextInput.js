import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import withValidation from './withValidation';

const TextInput = ({ id, value, onChange, label, type, hasError }) => (
    <div className="mt-2">
        <label htmlFor={id} className={classnames({ 'text-danger': hasError })}>{label}</label>
        {type === 'textarea' ?
            <textarea id={id} draggable={false} className={classnames('form-control', { 'border-danger': hasError })}
                type={type} value={value} onChange={(e) => onChange(e.target.value)} />
            :
            <input id={id} className={classnames('form-control', { 'border-danger': hasError })}
                type={type} value={value} onChange={(e) => onChange(e.target.value)} />}
    </div>
);

TextInput.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
    type: PropTypes.string,
    hasError: PropTypes.bool,
}

TextInput.defaultProps = {
    id: undefined,
    value: '',
    onChange: undefined,
    label: '',
    type: 'text',
    hasError: false,
}

export default withValidation(TextInput);



