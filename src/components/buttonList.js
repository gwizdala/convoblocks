import React from 'react';
import Button from '../components/button';

const ButtonList = ({buttons}) => {
    const renderButtons = buttons.map((button, index) => 
        <Button {...button} key={`buttonlist-${index}`} />
    );

    return (
        <div className="button-list">
            {renderButtons}
        </div>
    );
}

export default ButtonList