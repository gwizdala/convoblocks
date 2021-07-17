import React from 'react';
import Button from '../components/button';

const ButtonList = ({buttons}) => {
    const renderButtons = buttons.map((button) => 
        <Button {...button} />
    );

    return (
        <div className="button-list">
            {renderButtons}
        </div>
    );
}

export default ButtonList