import React from 'react';
import './PreviousSol.css';

const PreviousSol = ({ previousSol }) => {
    return (
        <div className='previous-sol' onClick={previousSol}>
            <img src='https://imgur.com/cgoQOAS.png' alt='button: previous sol' />
        </div>
    )
}

export default PreviousSol;