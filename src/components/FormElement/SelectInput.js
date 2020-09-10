import React from 'react';
import Select from 'react-select';
import classnames from 'classnames';
import withValidation from './withValidation';

const SelectInput = ({ id, label, value, options, onChange, hasError }) => (
    <div className="mt-2">
        <label htmlFor={id} className={classnames({ 'text-danger': hasError })}>{label}</label>
        <Select
            label={label}
            options={options}
            onChange={onChange}
            value={value}
        />
    </div>
);

export default withValidation(SelectInput);
