import React from 'react';
import './scss/editorContainer.scss';
import EditParticipants from '../components/editParticipants';
import EditBlock from '../components/editBlock';
import AddBlock from '../components/addBlock';
import { blockTypes } from '../utils/enums';

const EditorContainer = ({blocks, participants, onUpdate}) => {

    const updateParticipants = (newParticipants) => {
        onUpdate({
            participants: newParticipants,
            blocks: blocks
        });
    }
    
    const addBlock = ({index, item}) => {
        const newBlocks = [...blocks];
        let newContent = {};
        blockTypes[item].options.forEach(option => {
            if ("default" in option) {
                newContent[option.key] = option.default;
            }
        });

        newBlocks.splice(index, 0, {type: item, content: newContent});

        onUpdate({
            participants: participants,
            blocks: newBlocks
        });
    }

    const updateBlock = ({index, item}) => {
        const newBlocks = [...blocks];
        newBlocks[index] = item;

        onUpdate({
            participants: participants,
            blocks: newBlocks
        });
    }

    const moveBlockLeft = (index) => {
        if (index <= 0 || index >= blocks.length) {
            return;
        }

        const newBlocks = [...blocks];
        [newBlocks[index - 1], newBlocks[index]] = [newBlocks[index], newBlocks[index - 1]];

        onUpdate({
            participants: participants,
            blocks: newBlocks
        });
    }

    const moveBlockRight = (index) => {
        if (index < 0 || index >= blocks.length - 1) {
            return;
        }

        const newBlocks = [...blocks];
        [newBlocks[index + 1], newBlocks[index]] = [newBlocks[index], newBlocks[index + 1]];

        onUpdate({
            participants: participants,
            blocks: newBlocks
        });
    }

    const deleteBlock = (index) => {
        const newBlocks = [...blocks];
        newBlocks.splice(index, 1);

        onUpdate({
            participants: participants,
            blocks: newBlocks
        });
    }

    const renderEditBlocks = () => {
        if (!blocks || blocks.length === 0) {
            return <AddBlock onAdd={(type) => addBlock({index: 0, item: type})} />;
        }

        let blocksMap = blocks.map((block, index) =>
            <React.Fragment>
                <AddBlock key={`Add-${index}`} onAdd={(type) => addBlock({index: index, item: type})} /> 
                <EditBlock 
                    {...block}
                    headerButtons={[
                        {
                            disabled: index === 0,
                            icon: "left",
                            iconOnly: true,
                            onClick: () => moveBlockLeft(index),
                            text: "Move Left"
                        },
                        {
                            disabled: index === blocks.length - 1,
                            icon: "right",
                            iconOnly: true,
                            onClick: () => moveBlockRight(index),
                            text: "Move Right"
                        },
                        {
                            icon: "delete",
                            iconOnly: true,
                            onClick: () => deleteBlock(index),
                            text: "Remove Block"
                        }
                    ]}
                    index={index}
                    key={`Modify-${index}`}
                    onUpdate={({index, item}) => updateBlock({index, item})} 
                />
            </React.Fragment>
        );

        blocksMap.push(<AddBlock key={`Add-${blocks.length}`} onAdd={(type) => addBlock({index: blocks.length, item: type})} />);

        return blocksMap;
    } 

    return (
        <div className="container container-editor">
            <div className="container-editor--participants">
                <h2>Add Participants</h2>
                <p>Write a newline-separated list of people you want in your conversation. If you don't want participants, leave this section blank.</p>
                <EditParticipants participants={participants} onUpdate={(newParticipants) => updateParticipants(newParticipants)} />
            </div>
            <h2>Build Your Conversation</h2>
            <p>Add building blocks for your conversation. Each block serves as a different section of content in the conversation.</p>
            <div className="container-editor--builder">
                {renderEditBlocks()}
            </div>
        </div>
    );
}

export default EditorContainer

