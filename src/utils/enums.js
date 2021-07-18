const inputTypes = {
    BOOLEAN: "boolean",
    SET: "set",
    TEXT: "text"
}

export const blockTypes = {
    TEXT: {
        type: "TEXT",
        title: "Text",
        options: [
            {
                title: "Title",
                key: "title",
                type: inputTypes.TEXT
            },
            {
                title: "Content",
                key: "content",
                type: inputTypes.TEXT
            }
        ]
    },
    PARTICIPANT: {
        type: "PARTICIPANT",
        title: "Participant",
        options: [
            {
                title: "Title",
                key: "title",
                type: inputTypes.TEXT
            },
            {
                title: "Unique?",
                key: "isUnique",
                type: inputTypes.BOOLEAN,
                description: "Whether or not this result should be unique to all other participants drawn",
                default: true
            },
            {
                title: "Track Turns?",
                key: "trackTurns",
                type: inputTypes.BOOLEAN,
                description: "Whether or not each participant should have an equal number of turns",
                default: true
            }
        ]
    },
    RANDOM_TEXT: {
        type: "RANDOM_TEXT",
        title: "Random Text",
        options: [
            {
                title: "Title",
                key: "title",
                type: inputTypes.TEXT
            },
            {
                title: "Content",
                key: "content",
                type: inputTypes.SET,
                description: "A list of unique items to show at random"
            },
            {
                title: "Track Turns?",
                key: "trackTurns",
                type: inputTypes.BOOLEAN,
                description: "Whether or not to run through every item without repeating",
                default: false
            }
        ]
    }
};