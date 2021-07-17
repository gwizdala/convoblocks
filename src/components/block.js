import React from 'react';
import {blockTypes} from '../utils/enums';

const Block = ({content, index, onUpdate, type}) => {

    const update = ({key, value}) => {
        const newContent = content;
        newContent[key] = value;

        onUpdate({index, item: {type, content: newContent}});
    };

    const renderOptions = () => {
        const options = blockTypes[type].options;

        return options.map((option, index) => 
            <div key={`list-item-${index}`}>
                <label htmlFor={`forminput-${index}-${option.key}`}>{option.title}</label>
                {
                    {
                        'boolean': <input 
                                id={`forminput-${index}-${option.key}`} 
                                type="checkbox" 
                                aria-label={option.title} 
                                aria-required="false" 
                                onChange={(event) => update({key: option.key, value: event.target.value})}
                                checked={content[options.key] || options.default} />,
                        'text': <input 
                                id={`forminput-${index}-${option.key}`} 
                                type="text" 
                                aria-label={option.title}
                                aria-required="false" 
                                onChange={(event) => update({key: option.key, value: event.target.value})}
                                value={content[option.key] || ""} />
                    }[option.type] 
                }
                {option.description && <p>{option.description}</p>}
            </div>
        );
    }

    return (
        <div className="block">
            {renderOptions()}
        </div>
    );
}

export default Block