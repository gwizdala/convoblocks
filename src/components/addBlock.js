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
                        <Button onClick={() => onAdd(blockTypes.TEXT.type)} text={blockTypes.TEXT.title} />
                        <Button onClick={() => onAdd(blockTypes.PARTICIPANT.type)} text={blockTypes.PARTICIPANT.title} />
                        <Button onClick={() => onAdd(blockTypes.RANDOM_TEXT.type)} text={blockTypes.RANDOM_TEXT.title} />
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