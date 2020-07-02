import React from 'react';
import {Link} from 'react-router-dom';
import './RoverSelect.css';

const RoverSelect = () => {
    return (
        <>
            <Link to='curiosity'><div>Curiosity</div></Link>
            <Link to='opportunity'><div>Opportunity</div></Link>
            <Link to='spirit'><div>Spirit</div></Link>
        </>
    );
}

export default RoverSelect;