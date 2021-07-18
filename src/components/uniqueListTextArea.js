import React from 'react';

const UniqueListTextArea = ({content, id, onUpdate, title}) => {

    // Filters out any blank newlines (will keep items that have spaces)
    // And removes duplicates through a destructured set
    const clean = (newParticipantList) => {
        onUpdate([...new Set(newLineListToContent(newParticipantList).filter(element => !!element))]);
    }

    const update = (newParticipantList) => {
        onUpdate(newLineListToContent(newParticipantList));
    }
    

    const newLineListToContent = (newLineList) => {
        return newLineList.split('\n');
    }

    const contentToNewLineList = () => {
        return content.join('\n');
    }

    return (
        <textarea 
            id={id} 
            type="text" 
            aria-label={title}
            aria-required="false" 
            onBlur={(event) => clean(event.target.value)}       // upon leaving, parse out bad data from the textarea
            onChange={(event) => update(event.target.value)}    // maintain the current, uncleaned state of the textarea
            value={contentToNewLineList() || ""} />
    );
}

export default UniqueListTextArea