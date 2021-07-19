import React from 'react';
import './scss/renderBlock.scss';

const RenderBlock = ({value, title}) => {

    return (
        <div className="block block-render">
            <div className="block-render--title">
                {title && <h1 className="block-render--title-text">{title}</h1> }
            </div>
            <div className="block-render--content">
                <h2>{value}</h2>
            </div>
        </div>
    );
}

export default RenderBlock