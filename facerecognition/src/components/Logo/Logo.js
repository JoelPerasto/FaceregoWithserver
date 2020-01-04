import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Iris from './Iris.png';

const Logo = () => {
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                <img className="w-100" src={Iris} alt='logo'></img>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;