import React from 'react';
import './style.css';
import desktop from '../../images/desktop.svg';

export const Desktop = () => {
    return(
        <div className="Home">
            <header className="Home-Page">
                <h2>Stratafly</h2>
                <h5>Find The Best Flight Deals with us</h5>
                <img src={desktop} alt="Stratafly"></img>
            </header>
        </div>
    )
}
