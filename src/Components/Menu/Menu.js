import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return (
        <>
            <Link to='curiosity'><div>Curiosity</div></Link>
            <Link to='opportunity'><div>Opportunity</div></Link>
            <Link to='spirit'><div>Spirit</div></Link>
        </>
    );
}

export default Menu;