import React, {useState} from 'react';
import './RoverSight.css';

const RoverSight = () => {
    const [currentImage, setCurrentImage] = useState('https://mars.nasa.gov/system/resources/detail_files/25058_PIA23900-web.jpg');

    return (
        <div className='rover-sight' style={{backgroundImage: `url(${currentImage})`}}>
            
        </div>
    )
}

export default RoverSight;