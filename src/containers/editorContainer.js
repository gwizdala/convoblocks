import React from 'react';
// import ButtonList from '../components/buttonList';
import Block from '../components/block';
import AddBlock from '../components/addBlock';

const EditorContainer = ({blocks, participants, onUpdate}) => {

    const addBlock = ({index, item}) => {
        const newBlocks = blocks;
        newBlocks.splice(index, 0, {type: item, content: {}});

        onUpdate({
            participants,
            blocks: newBlocks
        });
    }

    const updateBlock = ({index, item}) => {
        const newBlocks = blocks;
        newBlocks[index] = item;

        onUpdate({
            participants,
            blocks: newBlocks
        });
    }

    const renderEditBlocks = () => {
        if (!blocks || blocks.length === 0) {
            return <AddBlock onAdd={(type) => addBlock({index: 0, item: type})} />;
        }

        return blocks.map((block, index) => 
            <Block {...block} key={index} index onUpdate={(index, item) => updateBlock({index, item})} />
        );
    } 

    return (
        <div className="container container-editor">
            {renderEditBlocks()}
        </div>
    );
}

export default EditorContainer

