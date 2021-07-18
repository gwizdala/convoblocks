import React from 'react';

const RenderBlock = ({value, title}) => {

    return (
        <div className="block-render">
            <div className="block-render--title">
                {title && <h2>{title}</h2> }
            </div>
            <div className="block-render--content">
                <p>{value}</p>
            </div>
        </div>
    );
}

export default RenderBlock