import React from 'react';
import classnames from 'classnames';
import { withRouter } from 'react-router';
import pageTitle from '../../referenceData/pageTitle';

const ProgressBar = ({ location }) => (
    <nav className="progress mb-2" style={{ height: '32px' }}>
        {Object.keys(pageTitle).map((key) => <div key={key} className={classnames('progress-bar border border-light p-2', {
            'bg-success': location.pathname.toLowerCase() === key,
            'bg-info': !(location.pathname.toLowerCase() === key)
        })}
            role="progressbar"
            style={{ width: '33.33%', fontSize: 18 }}
        >
            {pageTitle[key]}
        </div>)}
    </nav>
);


export default withRouter(ProgressBar);
