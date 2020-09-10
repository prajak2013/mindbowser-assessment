import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import withPage from '../Layout/withPage';
import Form, { bindToForm } from '../FormElement/Form';
import { mapBasicInfo } from '../../store/mapStoreToProps';
import { mapSetBasicInfo } from '../../store/mapDispatchToProps';
import SelectInput from '../FormElement/SelectInput';
import cities from '../../referenceData/cities';

const BasicInfo = ({ basicInfo, setBasicInfo, history }) => {

    const [errors, setErrors] = useState({});

    const renderInput = bindToForm(basicInfo, setBasicInfo, errors);

    return (
        <Form name="basicInfo"
            onNext={() => history.push('/professionalinfo')}
            errors={errors} setErrors={setErrors}>
            {renderInput('firstName', 'First Name')}
            {renderInput('lastName', 'Last Name')}
            {renderInput('mobile', 'Mobile', 'tel')}
            {renderInput('email', 'Email', 'email')}
            {renderInput('dob', 'Date of Birth', 'date')}
            <SelectInput 
                id="city"
                error={errors['city']}
                label="City"
                value={basicInfo.city}
                onChange={option => setBasicInfo({ city: option })}
                options={cities.map(city => ({ label: city, value: city }))}/>
        </Form>
    );
};

BasicInfo.propTypes = {
    basicInfo: PropTypes.object.isRequired,
    setBasicInfo: PropTypes.func.isRequired,
}

export default withRouter(withPage(connect(mapBasicInfo, mapSetBasicInfo)(BasicInfo)));