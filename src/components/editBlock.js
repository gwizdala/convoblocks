import React from 'react';
import {blockTypes} from '../utils/enums';
import ButtonList from './buttonList';
import UniqueListTextArea from './uniqueListTextArea';

const EditBlock = ({
    content,
    headerButtons,
    index,
    onUpdate,
    type
}) => {

    const update = ({key, value}) => {
        const newContent = {...content};
        newContent[key] = value;
        onUpdate({index: index, item: {type, content: {...newContent}}});
    };

    const renderOptions = () => {
        const options = blockTypes[type].options;

        return options.map((option, mapIndex) => 
            <div key={`list-item-${index}-${mapIndex}`}>
                <label htmlFor={`forminput-${index}-${option.key}`}>{option.title}</label>
                {
                    {
                        'boolean': <input 
                                id={`forminput-${index}-${option.key}`} 
                                type="checkbox" 
                                aria-label={option.title} 
                                aria-required="false" 
                                onChange={(event) => update({key: option.key, value: event.target.checked})}
                                checked={option.key in content ? content[option.key] : option.default} />,
                        'set': <UniqueListTextArea
                                id={`forminput-${index}-${option.key}`}
                                onUpdate={(newContent) =>  update({key: option.key, value: newContent})}
                                content={option.key in content ? content[option.key] : []}
                                title={option.title} />,
                        'text': <input 
                                id={`forminput-${index}-${option.key}`} 
                                type="text" 
                                aria-label={option.title}
                                aria-required="false" 
                                onChange={(event) => update({key: option.key, value: event.target.value})}
                                value={option.key in content ? content[option.key] : ""} />
                    }[option.type] 
                }
                {option.description && <p>{option.description}</p>}
            </div>
        );
    }

    return (
        <div className="block-edit">
            <ButtonList buttons={headerButtons} />
            {renderOptions()}
        </div>
    );
}

export default EditBlock