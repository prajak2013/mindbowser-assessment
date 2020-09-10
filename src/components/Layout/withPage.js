import React from 'react';
import ProgressBar from './ProgressBar';
import pageTitle from '../../referenceData/pageTitle';

const withPage = (Component) => ({ location, history }) => (<>
    <ProgressBar />
    <div className="container">
        <h4>{pageTitle[location.pathname]}</h4>
        <Component location={location} history={history} />
    </div>
</>);

export default withPage;