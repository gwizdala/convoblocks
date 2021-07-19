![ConvoBlocks logo](./src/assets/images/convoblocks_logo.png)

# About

https://gwizdala.github.io/convoblocks

ConvoBlocks is a conversation editor for education.

Use this page to build dialogues that auto-magically randomize values and participants, making sure that each person gets an equal amount of time with each part of the topic.

# Navigation

Use the navigation bar in the top header to move between the Editor and the Conversation, as well as save conversation files and upload previously saved conversation files.

## Show/Edit Conversation

Use this button to jump between Editing and Showing your conversation. Think of the Editor as your builder and the Show page as your final result.

## Save Conversation

Download a local copy of your conversation to load back onto the page later. This is useful if you're making multiple conversations that you want to quickly jump between, or if you are working on a conversation and want to come back to it later.

The file will be named _`ConvoBlocks-` the current date and time `.json`_. You can rename your conversation file to whatever you'd like, as long as you keep the `.json` file format.

## Load Conversation

You'll be prompted with a dialogue to upload your previously-downloaded conversation files, which will be saved in JSON format. Once uploaded, your page will reload with the new data.

# The Editor

The Editor is the first page you see in the application. It allows you to build your conversation.

## Participants

List out the people in class that are in the dialogue. If you're making dialogue that isn't pulling from a list of people, feel free to leave this blank.

To guarantee that the conversation renders properly, **unique participant names are required**.

## Block Types

### Text

The text block is static, unchanging content in your dialoge. Think of things like conjunctions, unchaninging vocab terms, or part of a sentence that is helpful but not being randomized.

### Participant

The participant block pulls from your list of participants to then randomize on the Show page. You can decide whether or not the result is unique, as in it does not match any participants in the conversation, and tracked, guaranteeing that each participant has an equal number of turns.

### Random Text

The random text block lets you add a list of **unique** items to show at random. Just like the participant block, you can decide whether or not to run through every item without repeating.

## The Show Page

The Show page displays your full conversation. You can `Shuffle` the participant and Random text blocks, or `Reset` the page to remove any tracking of what participants and items have aleady been shown.

Any time you navigate between the Show and the Edit page, or if a file is uploaded, the Show page is reset.

# Running Locally

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.