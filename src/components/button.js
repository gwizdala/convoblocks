import React from 'react';
import {ReactComponent as AddIcon} from '../assets/icons/add.svg';
import {ReactComponent as DeleteIcon} from '../assets/icons/delete.svg';
import {ReactComponent as LeftIcon} from '../assets/icons/left.svg';
import {ReactComponent as RightIcon} from '../assets/icons/right.svg';
import {ReactComponent as SaveIcon} from '../assets/icons/save.svg';
import {ReactComponent as UploadIcon} from '../assets/icons/upload.svg';

const icons = {
    add: <AddIcon className="button-icon" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 167 167" />,
    delete: <DeleteIcon className="button-icon" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 167 167" />,
    left: <LeftIcon className="button-icon" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 167 167" />,
    right: <RightIcon className="button-icon" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 167 167" />,
    save: <SaveIcon className="button-icon" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 167 167" />,
    upload: <UploadIcon className="button-icon" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 167 167" /> 
};

const Button = ({disabled=false, icon, onClick, text}) => {

    return (
        <button className="button" aria-label={text} onClick={() => onClick()} disabled={disabled}>
            {icon && icons[icon]}
            <p className="button-text">{text}</p>
        </button>
    );
}

export default Button