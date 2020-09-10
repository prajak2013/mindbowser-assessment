import React from 'react';

const Label = ({ name, value = '' }) => (
    <div className="row text-left">
        <div className="col-sm-6"><strong>{name}</strong></div><div className="col-sm-6">:&nbsp;{value} </div>
    </div>
);

export default Label;