import React from 'react';
import { examples } from '../utils/enums';
import ButtonList from '../components/buttonList';

const HelpContainer = ({onExampleLoad}) => {

    const buttonsList = examples.map((example) => {
        return {
            onClick: () => onExampleLoad(example.config),
            text: example.title
        }
    })

    return (
        <div className="container container-help">
            <h1>ConvoBlocks is a conversation editor.</h1>
            <p>ConvoBlocks helps you create building blocks of a conversation in which you can pick people and items at random while guaranteeing equal opportunity for each selection.</p>
            <h2>Some examples of what you can use this tool for include:</h2>
            <ul>
                <li>Building dialogues that auto-magically randomize values and participants, making sure that each person gets an equal amount of time with each part of the topic.</li>
                <li>Creating a tool to pick people out of a hat, without the need of paper or a hat.</li>
                <li>Making flashcards that quiz you on random vocab terms.</li>
            </ul>
            <p>If you're stuck, want to learn more about how the tool works, or want to take a look at the codebase, <a href="https://github.com/gwizdala/convoblocks#readme">check out the documentation.</a></p>
            <p>If you have questions or feedback, <a href="https://github.com/gwizdala/convoblocks/discussions">leave comments in the discussions.</a></p>
            <h1>Load Examples</h1>
            <ButtonList buttons={buttonsList} vertical />
            <p>Made with ♥ by <a href="https://github.com/gwizdala">David Gwizdala</a></p>
        </div>
    );
}

export default HelpContainer

