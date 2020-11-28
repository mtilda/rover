import React from 'react';
import './PreviousImage.css';

export default ({ previousImage }) => {
  return (
    <div className='previous-image' onClick={previousImage}>
      <img src='https://imgur.com/cgoQOAS.png' alt='button: previous image' />
    </div>
  );
};
