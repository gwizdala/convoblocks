import React, {useState} from 'react';
import Button from '../components/button';
import {blockTypes} from '../utils/enums';

const modes = {
    CLOSED: "Closed",
    OPEN: "Open"
};


const AddBlock = ({onAdd}) => {
    const [mode, setMode] = useState(modes.CLOSED);

    const renderContent = () => {
        switch(mode) {
            case modes.CLOSED:
                return <Button icon="add" onClick={() => setMode(modes.OPEN)} text="Add Content" />;
            case modes.OPEN:
                return <React.Fragment>
                        <Button icon="delete" onClick={() => setMode(modes.CLOSED)} text="Close" />
                        <Button onClick={() => onAdd("TEXT")} text={blockTypes.TEXT.type} />
                        <Button onClick={() => onAdd("PARTICIPANT")} text={blockTypes.PARTICIPANT.type} />
                        <Button onClick={() => onAdd("RANDOM_TEXT")} text={blockTypes.RANDOM_TEXT.type} />
                    </React.Fragment>;
            default:
                return;
        }
    }

    return (
        <div className="block-add">
            {renderContent()}
        </div>
    );
}

export default AddBlock