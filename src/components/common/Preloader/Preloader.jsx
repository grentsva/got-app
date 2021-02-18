import React from 'react';
import './Preloader.css';
import preloader from '../../../assets/images/preloader.svg';

const Preloader = () => {
    return (
        <div className='preloader'>
            <img src={preloader} alt='' />
        </div>
    );
};

export default Preloader;
