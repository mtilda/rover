import React from 'react';
import './NextImage.css';

export default ({ nextImage }) => {
  return (
    <div className='next-image' onClick={nextImage}>
      <img src='https://imgur.com/cgoQOAS.png' alt='button: next image' />
    </div>
  );
};
