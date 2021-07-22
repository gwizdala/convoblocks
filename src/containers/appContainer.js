import React, {useState, useRef} from 'react';
import './scss/appContainer.scss';
import ControlsContainer from './controlsContainer';
import EditorContainer from './editorContainer';
import RendererContainer from './rendererContainer';
import HelpContainer from './helpContainer';
import Button from '../components/button';

const modes = {
    EDIT: "Edit",
    HELP: "Help",
    SHOW: "Show"
};

const AppContainer = () => {
    const [mode, setMode] = useState(modes.EDIT);
    const [previousMode, setPreviousMode] = useState(null);
    const [config, setConfig] = useState({
        participants: [], // The people participating in the conversation
        blocks: [] // The items contained within the conversation
    });
    const [history, setHistory] = useState([]);

    const uploadRef = useRef();

    const download = () => {
        const date = new Date();
        const fileName = `ConvoBlocks-${date.toString().replace(' ', '-')}`;
        const json = JSON.stringify(config);
        const blob = new Blob([json],{type:'application/json'});
        const href = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = fileName + ".json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const upload = (event) => {
        if (!event.target.files[0]) {
            return;
        }

        const fileReader = new FileReader();

        fileReader.readAsText(event.target.files[0], "UTF-8");
        fileReader.onload = uploadedData => {
            const result = uploadedData.target.result;
            try {
                const parsedResult = result ? JSON.parse(result) : {};

                // set parsed results.
                // since the editors are looking for explicit json fields here,
                // this should be adequate parsing.
                setConfig({
                    participants: parsedResult.participants,
                    blocks: parsedResult.blocks
                });
                setHistory([]);
            } catch (e) {
                alert("The provided file is invalid. Please try again.");
            }
        }
    }
    
    const buttons =  [
        {
            icon: "save",
            onClick: () => download(),
            disabled: config.participants.length === 0 && config.blocks.length === 0,
            text: "Save Conversation"
        },
        {
            icon: "upload",
            onClick: () => uploadRef.current.click(),
            text: "Load Conversation"
        },
        {
            icon: mode === modes.HELP ? "delete" : "help",
            onClick: () => {
                if (mode === modes.HELP) {
                    setMode(previousMode);

                } else {
                    setPreviousMode(mode);
                    setMode(modes.HELP);
                } 
            },
            text: mode === modes.HELP ? "Close Help" : "Help",
        }
    ];

    const getSource = () => {
        switch(mode) {
            case modes.EDIT:
                return {
                    buttons,
                    content: <EditorContainer {...config} onUpdate={(newConfig) => setConfig(newConfig)} />,
                    navigationButton: {
                        onClick: () => setMode(modes.SHOW),
                        text: "Show Conversation"
                    }
                };
            case modes.HELP:
                return {
                    buttons,
                    content: <HelpContainer onExampleLoad={(exampleConfig) => {
                        setConfig(exampleConfig); 
                        setHistory([]);
                        setMode(modes.SHOW);
                    }} />
                };
            case modes.SHOW:
                return {
                    buttons,
                    content: <RendererContainer {...config} history={history} onUpdate={(newHistory) => setHistory(newHistory)}  />,
                    navigationButton: {
                        onClick: () => {setMode(modes.EDIT); setHistory([]);},
                        text:"Edit Conversation"
                    }
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
                navigationButton={source.navigationButton}
            />
            {source.content}
            <input 
                id="uploadControl"
                type="file"
                accept=".json"
                multiple={false}
                ref={uploadRef}
                style={{display: 'none'}}
                onChange={(event) => upload(event)}
            />
        </div>
    );
}

export default AppContainer