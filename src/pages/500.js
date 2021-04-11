import React from 'react';
import ErrorImg from '../images/500.png'

const FatalError = () => (
    <div>
        <h1>Error: 500 Unexpected Error</h1>
        <img src={ErrorImg} alt="500 Unexpected Error"/>
    </div>
)

export default FatalError;