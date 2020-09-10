import React, { useState } from 'react';
import { withRouter } from 'react-router';
import withPage from '../Layout/withPage';
import { connect } from 'react-redux';
import { mapProfInfo } from '../../store/mapStoreToProps';
import { mapSetProfInfo } from '../../store/mapDispatchToProps';
import Form, { bindToForm } from '../FormElement/Form';
import Slider from '../FormElement/Slider';

const ProfInfo = ({ profInfo, setProfInfo, history }) => {
    const [errors, setErrors] = useState({});

    const renderInput = bindToForm(profInfo, setProfInfo, errors);

    return (
        <Form name="profInfo"
            showPrev
            onNext={() => history.push('/summary')}
            errors={errors} setErrors={setErrors}>
            {renderInput('companyName', 'Company Name')}
            {renderInput('jobTitle', 'Job Title')}
            {renderInput('socialProfileLink1', 'Social Profile Link 1')}
            {renderInput('socialProfileLink2', 'Social Profile Link 1')}
            <Slider label="How do you rate yourself in React" 
                id="reactRating" error={errors['reactRating']} 
                minText="Beginner" maxText="Expert" value={profInfo.reactRating}
             onChange={value => setProfInfo({ reactRating: value })} />
             {renderInput('summary', 'Summary', 'textarea')}
        </Form>
    );
};

export default withRouter(withPage( connect(mapProfInfo, mapSetProfInfo)(ProfInfo)));