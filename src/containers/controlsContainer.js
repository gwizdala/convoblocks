import React from 'react';
import ButtonList from '../components/buttonList';

const ControlsContainer = ({buttons}) => {
    return (
        <div className="container container-controls">
            <h1>ConvoBlocks</h1>
            { buttons && <ButtonList buttons={buttons}/> }
        </div>
    );
}

export default ControlsContainer