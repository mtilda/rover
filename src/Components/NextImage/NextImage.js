import React from 'react';
import './NextImage.css';

const NextImage = ({ nextImage }) => {
    return (
        <div className='next-image' onClick={nextImage}>
            <img src='https://imgur.com/cgoQOAS.png' alt='button: next sol' />
        </div>
    );
}

export default NextImage;