import React from 'react';

const EditParticipants = ({participants, onUpdate}) => {

    // Filters out any blank newlines (will keep items that have spaces)
    // And removes duplicates through a destructured set
    const clean = (newParticipantList) => {
        onUpdate([...new Set(newLineListToParticipants(newParticipantList).filter(element => !!element))]);
    }

    const update = (newParticipantList) => {
        onUpdate(newLineListToParticipants(newParticipantList));
    }
    

    const newLineListToParticipants = (newLineList) => {
        return newLineList.split('\n');
    }

    const participantsToNewLineList = () => {
        return participants.join('\n');
    }

    return (
        <div className="block">
            <textarea 
                id="participants" 
                type="text" 
                aria-label="Participants"
                aria-required="false" 
                onBlur={(event) => clean(event.target.value)}   // upon leaving, parse out bad data from the textarea
                onChange={(event) => update(event.target.value)}                  // maintain the current, uncleaned state of the textarea
                value={participantsToNewLineList() || ""} />
        </div>
    );
}

export default EditParticipants