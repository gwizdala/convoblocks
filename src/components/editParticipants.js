import React from 'react';
import './scss/editParticipants.scss';
import UniqueListTextArea from './uniqueListTextArea';

const EditParticipants = ({participants, onUpdate}) => {

    return (
        <div className="block block-participants">
            <div className="block-participants--input">
                <UniqueListTextArea 
                    content={participants} 
                    id="forminput-participants"
                    onUpdate={(newParticipants) => onUpdate(newParticipants)}
                    title="Participants" />
            </div>
        </div>
    );
}

export default EditParticipants