import React, {useState, useEffect} from 'react';
import NextSol from '../NextSol/NextSol';
import PreviousSol from '../PreviousSol/PreviousSol';
import NextImage from '../NextImage/NextImage'
import PreviousImage from '../PreviousImage/PreviousImage'
import './RoverSight.css';

import {api_key} from '../../.credentials';

const RoverSight = ({rover, getManifest}) => {
    const [manifest, updateManifest] = useState({});
    const [currentImages, setcurrentImages] = useState([]);
    const [currentQuery, setCurrentQuery] = useState({sol: 10, camera: 'NAVCAM', page: 0});
    const [currentIndex, setCurrentIndex] = useState(0);

    // on mount
    useEffect(() => {
        getManifest(rover).then((response) => updateManifest(response));

        const getImages = async () => {
            const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${currentQuery.sol}&camera=${currentQuery.camera}&page=${currentQuery.page}&api_key=${api_key}`);
            const json = await res.json();
            setcurrentImages(json.photos);
        }
        getImages()
    },[])


    // get the image that matches the current query and set it to the current image
    const getImages = async query => {
        const fetchImages = async () => {
            const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${query.sol}&camera=${query.camera}&page=${query.page}&api_key=${api_key}`);
            const json = await res.json();
            return json.photos;
        }

        let callCount = 0;
        let newImages = await fetchImages();
        while(!newImages.length && callCount<5) {
            newImages = await fetchImages();
            callCount++;
        }
        return newImages;

    }

    // check the manifest for any available cameras
    const scanCameras = query => {
        let newQuery = query;
        const cameras = manifest.photos[query.sol].cameras;
        
        if (cameras.includes('NAVCAM')) {
            newQuery.camera = 'NAVCAM';
        }
        else if (cameras.includes('FHAZ')) {
            newQuery.camera = 'FHAZ';
        }
        else if (cameras.includes('RHAZ')) {
            newQuery.camera = 'RHAZ';
        }
        else if (cameras.includes('MAST')) {
            newQuery.camera = 'MAST';
        }
        else if (cameras.includes('PANCAM')) {
            newQuery.camera = 'PANCAM';
        }
        else if (cameras.includes('CHEMCAM')) {
            newQuery.camera = 'CHEMCAM';
        }
        else if (cameras.includes('MAHLI')) {
            newQuery.camera = 'MAHLI';
        }
        else if (cameras.includes('MINITES')) {
            newQuery.camera = 'MINITES';
        }
        else if (cameras.includes('MARDI')) {
            newQuery.camera = 'MARDI';
        }
        return newQuery;
    }

    // check if camera is available on this sol
    const checkCamera = query => {
        return manifest.photos[query.sol].cameras.includes(query.camera);
    }

    // increment sol and get new images
    const nextSol = async () => {
        let newQuery = currentQuery;
        newQuery.sol++;
        if(!checkCamera(newQuery)) newQuery = scanCameras(newQuery);
        setCurrentQuery(newQuery);
        const newImages = await getImages(newQuery);
        setcurrentImages(newImages);
    }

    // decrement sol and get new images
    const previousSol = async () => {
        let newQuery = currentQuery;
        newQuery.sol--;
        if(!checkCamera(newQuery)) newQuery = scanCameras(newQuery);
        setCurrentQuery(newQuery);
        const newImages = await getImages(newQuery);
        setcurrentImages(newImages);
    }

    // increment image index
    const nextImage = () => {
        if (currentIndex < currentImages.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
        else {
            setCurrentIndex(0);
        }
    }

    // decrement image index
    const previousImage = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
        else {
            setCurrentIndex(currentImages.length - 1);
        }
    }

    return (
        <div
            className='rover-sight'
            style={{backgroundImage: `url(${
                currentImages.length?
                    currentImages[currentIndex].img_src:
                    'https://mars.nasa.gov/system/resources/detail_files/25058_PIA23900-web.jpg'})`}} // NASA/JPL-Caltech
        >
            <NextSol nextSol={nextSol} />
            <PreviousSol previousSol={previousSol} />
            <NextImage nextImage={nextImage} />
            <PreviousImage previousImage={previousImage} />
        </div>
    )
}

export default RoverSight;