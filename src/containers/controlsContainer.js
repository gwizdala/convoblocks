import React from 'react';
import './scss/controlsContainer.scss';
import ButtonList from '../components/buttonList';
import logo from '../assets/images/convoblocks_logo.png';

const ControlsContainer = ({buttons}) => {
    return (
        <div className="container container-controls">
            <img src={logo} alt="Convoblocks logo" className="container-controls--logo"/>
            { buttons && <ButtonList buttons={buttons} className="container-controls--buttons" /> }
        </div>
    );
}

export default ControlsContainer