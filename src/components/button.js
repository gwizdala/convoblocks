import React from 'react';
import './scss/button.scss';
import {ReactComponent as AddIcon} from '../assets/icons/add.svg';
import {ReactComponent as DeleteIcon} from '../assets/icons/delete.svg';
import {ReactComponent as HelpIcon} from '../assets/icons/help.svg';
import {ReactComponent as MenuIcon} from '../assets/icons/menu.svg';
import {ReactComponent as LeftIcon} from '../assets/icons/left.svg';
import {ReactComponent as ResetIcon} from '../assets/icons/reset.svg';
import {ReactComponent as RightIcon} from '../assets/icons/right.svg';
import {ReactComponent as SaveIcon} from '../assets/icons/save.svg';
import {ReactComponent as ShuffleIcon} from '../assets/icons/shuffle.svg';
import {ReactComponent as UploadIcon} from '../assets/icons/upload.svg';

const icons = {
    add: <AddIcon className="button-icon" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 167 167" />,
    delete: <DeleteIcon className="button-icon" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 167 167" />,
    help: <HelpIcon className="button-icon" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 167 167" />,
    left: <LeftIcon className="button-icon" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 167 167" />,
    menu: <MenuIcon className="button-icon" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 167 167" />,
    reset: <ResetIcon className="button-icon" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 167 167" />,
    right: <RightIcon className="button-icon" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 167 167" />,
    save: <SaveIcon className="button-icon" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 167 167" />,
    shuffle: <ShuffleIcon className="button-icon" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 167 167" />,
    upload: <UploadIcon className="button-icon" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 167 167" /> 
};

const Button = ({dark=false, disabled=false, icon, iconOnly, onClick, text}) => {

    return (
        <button 
            className={`button ${iconOnly && "button--icon-only"} ${dark && "button--dark"}`}
            aria-label={text} 
            onClick={() => onClick()}
            disabled={disabled}>
            <span className="button-container">
                {icon && icons[icon]}
                <p className="button-text">{text}</p>
            </span>
        </button>
    );
}

export default Button