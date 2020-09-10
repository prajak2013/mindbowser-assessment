import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Button from './Button';
import { validateForm } from '../../util/validations';
import TextInput from './TextInput';

const Form = ({ children, name = "", showPrev = false, errors, setErrors, onNext, state, history }) => {
    return (
        <div className="col-md-12 card m-2 text-left">
            <div className="card-body">
                <form name={name}>
                    {children}
                </form>
                <div className="mt-2">
                    <Button label="Next" onClick={(e) => {
                        e.stopPropagation();
                        validateForm(name, state[name], errors, setErrors, onNext);
                    }} className="float-right" />
                    {showPrev && <Button className="float-left" label="Back" onClick={() => history.goBack()} />}
                </div>
            </div>
        </div>
    );
};

export default withRouter(connect(state => ({ state }))(Form));

export const bindToForm = (form, onChange, errors) => (id, label, type) => (
    <TextInput error={errors[id]} label={label} value={form[id]} type={type} onChange={value => onChange({ [id]: value })} />
);