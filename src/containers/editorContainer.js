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

        let blocksMap = blocks.map((block, index) =>
            <React.Fragment>
                <AddBlock key={`Add-${index}`} onAdd={(type) => addBlock({index: index, item: type})} /> 
                <Block {...block} key={`Modify-${index}`} index onUpdate={(index, item) => updateBlock({index, item})} />
            </React.Fragment>
        );

        blocksMap.push(<AddBlock key={`Add-${blocks.length}`} onAdd={(type) => addBlock({index: blocks.length, item: type})} />);

        return blocksMap;
    } 

    return (
        <div className="container container-editor">
            {renderEditBlocks()}
        </div>
    );
}

export default EditorContainer

