import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import withPage from '../Layout/withPage';
import Label from '../FormElement/Label';
import Button from '../FormElement/Button';
import Modal from '../FormElement/Modal';

const SummaryPage = ({ state: { basicInfo, profInfo, history } }) => {
    const [showModal, setShowModal] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    if (submitted) {
        return <p>Thank you! Your information has been submitted</p>;
    }

    return (
        <>
        <strong> Please confirm below details </strong>
        <h5 className="mt-5">Basic Info</h5>
        <Label name="First Name" value={basicInfo.firstName} />
        <Label name="Last Name" value={basicInfo.lastName} />
        <Label name="Mobile" value={basicInfo.mobile} />
        <Label name="Email" value={basicInfo.email} />
        <Label name="Date of Brith" value={basicInfo.dob} />
        <Label name="City" value={basicInfo.city ? basicInfo.city.label : ''} />

        <h5 className="mt-5">Professional Info</h5>
        <Label name="Company Name" value={profInfo.companyName} />
        <Label name="Job Title" value={profInfo.jobTitle} />
        <Label name="Social Profile Link 1" value={profInfo.socialProfileLink1} />
        <Label name="Social Profile Link 2" value={profInfo.socialProfileLink2} />
        <Label name="Summary" value={profInfo.summary} />
        <Label name="React Rating ?/100" value={profInfo.reactRating} />

        <Modal
            okAction={() => setSubmitted(true)}
            closeAction={() => setShowModal(false)}
            show={showModal}
            header="Are you sure you want to submit?"
            content="Please review changes before submitting" />

        <div className="mt-5">
            <Button label="Submit" onClick={(e) => {
                e.stopPropagation();
                setShowModal(true);
            }} className="float-right" />
            <Button className="float-left" label="Back" onClick={() => history.goBack()} />
        </div>
        </>
    );
};

export default withRouter(withPage(connect(state => ({ state }))(SummaryPage)));