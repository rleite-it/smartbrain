import React from 'react';
import Tilty from 'react-tilty';
import './Logo.css';
import brain from './brain.png';


const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilty max={55} style={{ width: '150px', height: '150px' }} className='Tilt br2 shadow-2'>
                <img className='logo pa2' alt="Logo" src={brain} />
            </Tilty>
        </div>
    );
}

export default Logo;