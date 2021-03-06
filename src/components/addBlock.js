import React, {useState} from 'react';
import Button from '../components/button';
import ButtonList from './buttonList';
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
                return <ButtonList vertical buttons={[
                    {
                        icon:"delete",
                        onClick: () => setMode(modes.CLOSED),
                        text: "Close"
                    }, 
                    {
                        onClick: () => onAdd(blockTypes.TEXT.type),
                        text: blockTypes.TEXT.title
                    },
                    {
                        onClick: () => onAdd(blockTypes.PARTICIPANT.type),
                        text: blockTypes.PARTICIPANT.title
                    },
                    {
                        onClick: () => onAdd(blockTypes.RANDOM_TEXT.type),
                        text: blockTypes.RANDOM_TEXT.title
                    }
                ]} />;
            default:
                return;
        }
    }

    return (
        <div className="block block-add">
            {renderContent()}
        </div>
    );
}

export default AddBlock