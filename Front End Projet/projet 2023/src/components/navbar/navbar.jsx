import React from 'react';
import './navbar.scss';
import logoImage from '../../assets/logo/Player_One__1_-removebg-preview.png';

const NavBar = () => {

    return (
        <div className='background1'>
            <img className='Logo' src={logoImage} />
            <nav className='bouton-container'>
                <input type="search" name="recherche" id="search" />
                <button className='types-bouton1'> console </button>
                <button className='types-bouton2'> jeux vidéo </button>
                <button className='types-bouton3'> goodies </button>
            </nav >
        </div >

    );

};

export default NavBar;