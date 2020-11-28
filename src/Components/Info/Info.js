import React, { Fragment } from 'react';
import './Info.css';

export default ({ qRover, query, rover = qRover, camera = 'not available', sol = -1, earthDate = 'not available', index, imageCount }) =>
  <div className='info'>
    {query
      ? (
        <>
          <div className='info-item top'>
            <div>{rover.name}</div>
            <div>{`${camera.full_name} (${camera.name})`}</div>
          </div>
          <div className='info-item bottom'>
            <div>{`Sol: ${sol} | Image: ${index} (${imageCount})`}</div>
            <div>{`Earth Date: ${earthDate}`}</div>
          </div>
        </>
        )
      : (
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
        )}
  </div>;
