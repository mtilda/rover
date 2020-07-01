import React from 'react';
import './Info.css';

const Info = ({qRover, query, photoData, index, imageCount}) => {
    const {rover, camera, sol, earth_date} = photoData?photoData:{rover: qRover, camera:  'not available', sol: -1, earth_date: 'not available'};
    return (
        <div className='info'>
            {
                photoData?
                <>
                    <div className='info-item top'>
                        <div>{rover.name}</div>
                        <div>{`${camera.full_name} (${camera.name})`}</div>
                    </div>
                    <div className='info-item bottom'>
                        <div>{`Sol: ${sol} | Image: ${index} (${imageCount})`}</div>
                        <div>{`Earth Date: ${earth_date}`}</div>
                    </div>
                </>
                :
                <>
                    <div className='info-item bottom'>
                        <div>{qRover}</div>
                        <div>{query.camera}</div>
                        <div>{`Sol: ${query.sol}`}</div>
                    </div>
                    <div className='info-center-wrapper'>
                        <div className='info-center-item'>
                            <div className='info-item'>PHOTO NOT FOUND</div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default Info;