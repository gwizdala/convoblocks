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

export const examples = [
    {
        title: "Assign Tasks",
        config: {
            "participants":[
               "Billy",
               "Jimmy",
               "Milly",
               "Timmy"
            ],
            "blocks":[
               {
                  "type":"PARTICIPANT",
                  "content":{
                     "isUnique":true,
                     "trackTurns":true,
                     "title":"Put Away the Toys"
                  }
               },
               {
                  "type":"PARTICIPANT",
                  "content":{
                     "isUnique":true,
                     "trackTurns":true,
                     "title":"Hall Monitor"
                  }
               },
               {
                  "type":"PARTICIPANT",
                  "content":{
                     "isUnique":true,
                     "trackTurns":true,
                     "title":"Hand Out Assignments"
                  }
               },
               {
                  "type":"PARTICIPANT",
                  "content":{
                     "isUnique":true,
                     "trackTurns":true,
                     "title":"Take Attendance"
                  }
               }
            ]
         }    
    },
    {
        title: "Practice a Conversation",
        config: {
            "participants":[
               "David",
               "Jan",
               "Kat",
               "Kelly",
               "Neil",
               "Melissa",
               "Michael",
               "Peej",
               "Quinn",
               "Tracy",
               "Zoe"
            ],
            "blocks":[
               {
                  "type":"PARTICIPANT",
                  "content":{
                     "isUnique":true,
                     "trackTurns":true,
                     "title":"Asker"
                  }
               },
               {
                  "type":"PARTICIPANT",
                  "content":{
                     "isUnique":true,
                     "trackTurns":true,
                     "title":"Recipient"
                  }
               },
               {
                  "type":"TEXT",
                  "content":{
                     "title":"Question",
                     "content":"How much does the item cost?"
                  }
               },
               {
                  "type":"RANDOM_TEXT",
                  "content":{
                     "trackTurns":false,
                     "title":"Price",
                     "content":[
                        "$1.25",
                        "$2.50",
                        "$3.75",
                        "$4.10",
                        "$6.42"
                     ]
                  }
               },
               {
                  "type":"RANDOM_TEXT",
                  "content":{
                     "trackTurns":false,
                     "title":"Item",
                     "content":[
                        "Apple",
                        "Banana",
                        "Orange",
                        "Peach",
                        "Pear",
                        "Watermelon"
                     ]
                  }
               }
            ]
         }
    },
    {
        title: "Quiz Vocab Terms",
        config: {
            "participants":[
               
            ],
            "blocks":[
               {
                  "type":"TEXT",
                  "content":{
                     "content":"¿Qué hora es?"
                  }
               },
               {
                  "type":"RANDOM_TEXT",
                  "content":{
                     "trackTurns":false,
                     "content":[
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11",
                        "12"
                     ],
                     "title":"Hora"
                  }
               },
               {
                  "type":"TEXT",
                  "content":{
                     "content":":"
                  }
               },
               {
                  "type":"RANDOM_TEXT",
                  "content":{
                     "trackTurns":false,
                     "content":[
                        "05",
                        "10",
                        "15",
                        "20",
                        "25",
                        "30",
                        "35",
                        "40",
                        "45",
                        "50",
                        "55"
                     ],
                     "title":"Minuto"
                  }
               }
            ]
         }
    }
];