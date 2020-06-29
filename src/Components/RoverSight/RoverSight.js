import React, {useState, useEffect} from 'react';
import NextSol from '../NextSol/NextSol';
import PreviousSol from '../PreviousSol/PreviousSol';
import './RoverSight.css';

import {api_key} from '../../.credentials';

const RoverSight = () => {
    const [currentImage, setCurrentImage] = useState('https://mars.nasa.gov/system/resources/detail_files/25058_PIA23900-web.jpg');
    const [currentQuery, setCurrentQuery] = useState({rover: 'curiosity', sol: 1000, camera: 'NAVCAM', page: 1});
    const [currentIndex, setCurrentIndex] = useState(0);

    const fetchImages = async () => {
        const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${currentQuery.rover}/photos?sol=${currentQuery.sol}&camera=${currentQuery.camera}&page=${currentQuery.page}&api_key=${api_key}`);
        const json = await res.json();
        setCurrentImage(json.photos[currentIndex].img_src);
    }

    useEffect(() => fetchImages(),[]);

    return (
        <div className='rover-sight' style={{backgroundImage: `url(${currentImage})`}}>
            <NextSol />
            <PreviousSol />
        </div>
    )
}

export default RoverSight;