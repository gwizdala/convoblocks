import React from 'react';
import './scss/buttonList.scss';
import Button from '../components/button';

const ButtonList = ({buttons, className, vertical}) => {
    const renderButtons = buttons.map((button, index) => 
        <Button {...button} key={`buttonlist-${index}`} />
    );

    return (
        <div className={`button-list ${className && className} ${vertical && "button-list--vertical"}`}>
            {renderButtons}
        </div>
    );
}

export default ButtonList