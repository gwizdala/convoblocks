import React from 'react';
import './scss/editBlock.scss';
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
            <div className="block-edit--input" key={`list-item-${index}-${mapIndex}`}>
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
                {option.description && <div className="block-edit--description"><span>{option.description}</span></div>}
            </div>
        );
    }

    return (
        <div className="block block-edit">
            <div className="block-edit--header">
                <h2>{blockTypes[type].title}</h2>
                <ButtonList buttons={headerButtons}/>
            </div>
            {renderOptions()}
        </div>
    );
}

export default EditBlock