import React from 'react';

export const Continue = ({ show, onContinue }) =>
show && <div className="button-wrapper"><button onClick={onContinue}>Continue &#10004;</button></div>
