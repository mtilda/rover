import React from 'react';
import './NextSol.css';

const NextSol = ({ nextSol }) => {
    return (
        <div className='next-sol' onClick={nextSol}>
            <img src='https://imgur.com/cgoQOAS.png' alt='button: next sol' />
        </div>
    );
}

export default NextSol;