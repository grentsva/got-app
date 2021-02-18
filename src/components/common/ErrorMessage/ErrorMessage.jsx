import React from 'react';
import './ErrorMessage.css';
import errorImg from '../../../assets/images/error.jpg';

const ErrorMessage = () => {
    return (
        <>
            <img src={errorImg} alt='Error'></img>
            <span>Something goes wrong</span>
        </>
    );
};

export default ErrorMessage;
