import React from 'react';

const withValidation = (Component) => ({ error, ...otherProps }) => (
    <>
    <Component {...otherProps} hasError={!!error} />
    {error && <p className="text-danger">{error}</p>}
    </>
)

export default withValidation;