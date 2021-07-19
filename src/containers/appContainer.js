import React, {useState} from 'react';
import './scss/appContainer.scss';
import ControlsContainer from './controlsContainer';
import EditorContainer from './editorContainer';
import RendererContainer from './rendererContainer';

const modes = {
    EDIT: "Edit",
    SHOW: "Show"
};

const AppContainer = () => {
    const [mode, setMode] = useState(modes.EDIT);
    const [config, setConfig] = useState({
        participants: [], // The people participating in the conversation
        blocks: [] // The items contained within the conversation
    });
    const [history, setHistory] = useState([]);
    
    const buttons =  [
        {
            icon: "save",
            text: "Save Conversation"
        },
        {
            icon: "upload",
            text: "Load Conversation"
        }
    ];

    const getSource = () => {
        switch(mode) {
            case modes.EDIT:
                buttons.unshift({
                    onClick: () => setMode(modes.SHOW),
                    text: "Show Conversation"
                });
                return {
                    buttons,
                    content: <EditorContainer {...config} onUpdate={(newConfig) => setConfig(newConfig)} />
                };
            case modes.SHOW:
                buttons.unshift({
                    onClick: () => {setMode(modes.EDIT); setHistory([]);},
                    text: "Edit Conversation"
                });
                return {
                    buttons,
                    content: <RendererContainer {...config} history={history} onUpdate={(newHistory) => setHistory(newHistory)}  />
                };
            default:
                return {
                    content: <p>Sorry, an error has occurred. Please refresh the page and try again.</p>
                }
        }
    }

    const source = getSource();

    return (
        <div className="container-app">
            <ControlsContainer 
                buttons={source.buttons}
            />
            {source.content}
        </div>
    );
}

export default AppContainer