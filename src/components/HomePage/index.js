import React from 'react';

const HomePage = ({ history }) => (
    <div className="mt-5">
        <button className="btn btn-primary" onClick={() => history.push({ pathname: 'basicinfo', state: { loadPage: true } })}>Begin Application</button>
    </div>

);

export default HomePage;