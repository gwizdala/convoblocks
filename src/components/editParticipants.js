import React from 'react';
import UniqueListTextArea from './uniqueListTextArea';

const EditParticipants = ({participants, onUpdate}) => {

    return (
        <div className="block">
            <UniqueListTextArea 
                content={participants} 
                id="forminput-participants"
                onUpdate={(newParticipants) => onUpdate(newParticipants)}
                title="Participants" />
        </div>
    );
}

export default EditParticipants