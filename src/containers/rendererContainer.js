import React from 'react';
import './scss/rendererContainer.scss';
import { blockTypes } from '../utils/enums';
import RenderBlock from '../components/renderBlock';
import ButtonList from '../components/buttonList';

const RendererContainer = ({blocks, participants, history, onUpdate}) => {

    const countUniqueParticipantBlocks = () => {
        let numUniqueParticipantBlocks = 0;
        blocks.forEach(block => {
            if (block.type === blockTypes.PARTICIPANT.type && block.content.isUnique) {
                numUniqueParticipantBlocks += 1;
            }
        });

        return numUniqueParticipantBlocks;
    }

    const getMostRecentHistory = (index=null) => {
        if (history.length > 0) {
            const mostRecentHistory = history[history.length - 1];
            
            return index != null ? mostRecentHistory[index] : mostRecentHistory;
        }
    }

    const getValue = ({index}) => {
        const block = blocks[index];

        if (block.type === blockTypes.TEXT.type) {
            return block.content.content;
        }

        const mostRecentHistoryAtIndex = getMostRecentHistory(index);

        if (mostRecentHistoryAtIndex) {
            return mostRecentHistoryAtIndex.currentValue;
        } else {
            return "???"; // need to randomize to get started
        }
    }

    const getInitialContentOfBlock = (block) => {
        if (block.type === blockTypes.PARTICIPANT.type) {
            return [...participants];
        } else if (block.type === blockTypes.RANDOM_TEXT.type) {
            return [...block.content.content];
        } else {
            return [block.content.content];
        }
    }

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    const randomize = () => {
        const mostRecentHistory = getMostRecentHistory();
        let result = {};
        const usedItems = {};

        blocks.forEach((block, blockIndex) => {
            let availableItems = getInitialContentOfBlock(block);

            // Retrieve the available values left to randomize
            // If there are no remaining available values, pull in all values again
            if (block.content.trackTurns 
                && mostRecentHistory 
                && blockIndex in mostRecentHistory 
                && mostRecentHistory[blockIndex].availableValues.length > 0) {
                availableItems = mostRecentHistory[blockIndex].availableValues;
            }

            const availableValues = [...availableItems];

            // Filter out any items that have been used already in this randomization
            // If there are no remaining available values, pull in all values again
            // This will not change the history stored on available participants left
            if (block.content.isUnique && usedItems[block.type]) {
                const filteredItems = availableItems.filter(item => 
                    !usedItems[block.type].has(item)
                );

                availableItems = filteredItems.length > 0 ? filteredItems : getInitialContentOfBlock(block);
            }

            const randomIndex = getRandomInt(availableItems.length);
            const currentValue = availableItems[randomIndex];

            // Only alter the remaining people if a newly unique person was selected.
            // In the case of pulling an already-gone participant for the sake of a fully unique list,
            // The available values in the history will not be altered
            const availableValueIndex = availableValues.indexOf(currentValue);
            if (availableValueIndex !== -1) {
                availableValues.splice(availableValueIndex, 1);
            }

            if (!usedItems[block.type]) {
                usedItems[block.type] = new Set();
            }

            usedItems[block.type].add(currentValue);
            result[blockIndex] = { currentValue: currentValue, availableValues: availableValues };
        });

        const newHistory = [...history];
        newHistory.push(result);
        onUpdate(newHistory);
    }

    const reset = () => {
        onUpdate([]);
    }
    
    const renderShowBlocks = () => {
        const numUniqueParticipantBlocks = countUniqueParticipantBlocks();

        if (!blocks || blocks.length === 0) {
            return <p>Hit "Edit Conversation" and add content to get started!</p>
        } else if (numUniqueParticipantBlocks > participants.length) {
            return <React.Fragment>
                    <p>Warning: There are more unique participant blocks than there are participants. Either add more participants or remove unique participant blocks to continue.</p>
                    <p>Number of participants: {participants.length} | Number of Unique Participant Blocks: {numUniqueParticipantBlocks}</p>
                </React.Fragment>
        }

        return blocks.map((block, mapIndex) => 
            <RenderBlock 
                key={`render-item-${mapIndex}`}
                value={getValue({index: mapIndex})}
                title={block.content.title}
            />
        );
    }

    const buttonsList = [
        {
            onClick: () => randomize(),
            text: "Shuffle"
        },
        {
            onClick: () => reset(),
            text: "Reset"
        }
    ];

    return (
        <div className="container container-renderer">
            <div className="container-renderer--buttons-desktop">
                <ButtonList buttons={buttonsList} />
            </div>
            <div className="container-renderer--buttons-mobile">
                <ButtonList buttons={buttonsList} vertical />
            </div>
            <div className="container-renderer--blocks">
                {renderShowBlocks()}
            </div>
        </div>
    );
}

export default RendererContainer

