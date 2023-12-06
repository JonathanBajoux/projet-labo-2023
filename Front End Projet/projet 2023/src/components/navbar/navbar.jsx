import React from 'react';
import './navbar.scss';

const NavBar = () => {

    return (
        <nav className='bouton-container'>
            <div className='background'>
                <input type="search" name="rechercher" id="search" />
                <button className='types-bouton1'> console </button>
                <button className='types-bouton2'> jeux vidéo </button>
                <button className='types-bouton3'> goodies </button>
            </div>
        </nav>
    );

};

export default NavBar;