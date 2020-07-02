import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    const [menu, setMenu] = useState(false);

    const handleClick = () => {
        setMenu(false);
    }

    return (
        <>
            <div className='menu-button' onClick={() => setMenu(!menu)}>
                <div className={`${menu?'ex ':''}bar1`}></div>
                <div className={`${menu?'ex ':''}bar2`}></div>
                <div className={`${menu?'ex ':''}bar3`}></div>
            </div>
            {menu?
            <div className={`menu-container`}>
                <div className='rover-button-wrapper'>
                    <Link onClick={handleClick} style={{ textDecoration: 'none' }} to='curiosity/bounce'><div className='rover-button'>Curiosity</div></Link>
                    <Link onClick={handleClick} style={{ textDecoration: 'none' }} to='opportunity/bounce'><div className='rover-button'>Opportunity</div></Link>
                    <Link onClick={handleClick} style={{ textDecoration: 'none' }} to='spirit/bounce'><div className='rover-button'>Spirit</div></Link>
                </div>
            </div>:<></>}
        </>
    );
}

export default Menu;