/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * И все это, создавалось под фильм ТЕРМИНАТОР :D
 * Совпадение !? :D
 */

var START = 0;
var FINISH = 0;
var INPUT = 1333;

/*
 * Входные нейроны - просто принимают сигналы
 * Скрытые - производят расчет
 * Выходные нейроны - 
 */

var networkWeight = [1, 1, 1];

/*
 * Marvel Comics | Wolverine | James Howlett | Regenerative healing factor | 176cm | 166kg | 
 * man | mutant | Cameo: The Incredible Hulk #180 (Oct. 1974) | black | Not good enough
 * 1 - 
 * 
 * НечеткаяЛогика, Волосы, Доброта, Раса, Цвет глаз
 */
/*_______________________ INPUT NEURONS _______________________*/
var inputNeurons = [
    /* FuzzySet */
    {
        name: "FuzzySet",
        questionN: 0,
        questions: [
            {
                question: "Are you a woman?",
                answers: [
                    "Yes", /* 0 */
                    "No",
                    "Other"
                ]
            },
            {
                question: "What is your height? (cm)",
                answers: INPUT
            },
            {
                question: "How old are you? (years)",
                answers: INPUT
            },
            {
                question: "What is your weight? (kg)",
                answers: INPUT
            }
        ],
        answers: [],
        calculate: function () {
            this.questionN++;
            return this.answers;
        }
    },
    /* Hair */
    {
        name: "Hair",
        questionN: 0,
        questions: [
            {
                question: "What hair color you like?",
                answers: [
                    "Black as coal", /* 0 */
                    "Brown",
                    "Blond only",
                    "Red like a fire",
                    "White as snow",
                    "Green, crazy green",
                    "No hair, I don`t like it, I am DIE HARD", /* 6 */
                    "Other"
                ]
            },
            {
                question: "How long is your hair?",
                answers: [
                    "Long",
                    "Medium",
                    "Short",
                    "Other"
                ]
            }
        ],
        answers: [],
        calculate: function () {
            this.questionN++;
            if (this.answers[0] == 6 && this.answers[1] != 3) {
                this.answers[1] = 3;
                this.questionN++;
            }
            return this.answers;
        }
    },
    /* Goodwill */
    {
        name: "Goodwill",
        questionN: 0,
        questions: [
            {
                question: "What would you do, if you saw a cat on a tree?",
                answers: [
                    "Try to remove him", /* 0 */
                    "Give him a wave",
                    "Shake the tree",
                    "Use your super power to remove him"
                ]
            },
            {
                question: "Do you ever like bad guys in an action movie?",
                answers: [
                    "All the time. Good guys are boring",
                    "And the bad guy can be good someday",
                    "Depends... how bad are they?",
                    "Never!"
                ]
            },
            {
                question: "Do you wanna be a Dark Lord?",
                answers: [
                    "Oh, Yes",
                    "No",
                    "I wanna be a Contemplator",
                    "I'm a Dark Lord, the original, the only"
                ]
            },
            {
                question: "Do you wanna build a snowman?",
                answers: [
                    "Yes",
                    "Yes. I know exactly what you are talking about :)",
                    "It is for children",
                    "I'm a Dark Lord, the original, the only"
                ]
            },
            {
                question: "You see a baby with candy. What do you do??",
                answers: [
                    "Nothing",
                    "What kind of candy are we talking about?",
                    "Take away the candy",
                    "Ask the baby where its mother is"
                ]
            }
        ],
        answers: [],
        calculate: function () {
            this.questionN++;
            return this.answers;
        }
    },
    /* Eyes */
    {
        name: "Eyes",
        questionN: 0,
        questions: [
            {
                question: "What eyes color you like?",
                answers: [
                    "Amber", /* 0 */
                    "Blue",
                    "Brown",
                    "Gray",
                    "Green",
                    "Hazel",
                    "Red",
                    "Other"
                ]
            }
        ],
        answers: [],
        calculate: function () {
            this.questionN++;
            return this.answers;
        }
    },
    /* Race *//* type: human god mutant alien */
    {
        name: "Race",
        questionN: 0,
        questions: [
            {
                question: "You are:",
                answers: [
                    "Human", /* 0 */
                    "God",
                    "Mutant",
                    "Alien",
                    "Other"
                ]
            }
        ],
        answers: [],
        calculate: function () {
            this.questionN++;
            return this.answers;
        }
    }
];

/*_______________________ HIDDEN NEURONS _______________________*/
var hiddenNeurons = [
    /* FuzzySet */
    {
        name: "FuzzySet",
        answers: [
            [
                "female", /* 0 */
                "male",
                "-"
            ]
        ],
        calculate: function (inputAnswers) {
            var outputAnswers = [];
            for (var i = 0; i < this.answers.length; i++) {
                if (i == 0) {
                    outputAnswers.push(this.answers[i][inputAnswers[i]]);
                } else {
                    outputAnswers.push(inputAnswers[i]);
                }
            }
            return outputAnswers;
        }
    },
    /* Hair */
    {
        name: "Hair",
        answers: [
            [
                "black",
                "brown",
                "blond",
                "red",
                "white",
                "green",
                "no hair",
                "-"
            ],
            [
                "long",
                "medium",
                "short",
                "-"
            ]
        ],
        calculate: function (inputAnswers) {
            var outputAnswers = [];
            for (var i = 0; i < this.answers.length; i++) {
                outputAnswers.push(this.answers[i][inputAnswers[i]]);
            }
            return outputAnswers;
        }
    },
    /* Goodwill */
    {
        name: "Goodwill",
        answers: [
            [
                80, /* 0 */
                50,
                50,
                100
            ],
            [
                0, /* 0 */
                100,
                50,
                80
            ],
            [
                30, /* 0 */
                80,
                100,
                0
            ],
            [
                80, /* 0 */
                100,
                50,
                0
            ],
            [
                70, /* 0 */
                50,
                0,
                100
            ]
        ],
        calculate: function (inputAnswers) {
            var outputAnswers = [];
            var sum = 0;
            var goodwill = 100;
            for (var i = 0; i < this.answers.length; i++) {
                outputAnswers.push(this.answers[i][inputAnswers[i]]);
            }
            for (var i = 0; i < outputAnswers.length; i++) {
                sum += outputAnswers[i];
            }

            goodwill = sum / outputAnswers.length;
            if (goodwill > 70 && goodwill <= 100)
            {
                return "good";
            } else {
                if (goodwill >= 35) {
                    return "neutral";
                } else {
                    return "bad";
                }
            }

        }
    },
    /* Eyes */
    {
        name: "Eyes",
        answers: [
            [
                "amber", /* 0 */
                "blue",
                "brown",
                "gray",
                "green",
                "hazel",
                "red",
                "-"
            ]
        ],
        calculate: function (inputAnswers) {
            var outputAnswers = [];
            for (var i = 0; i < this.answers.length; i++) {
                outputAnswers.push(this.answers[i][inputAnswers[i]]);
            }
            return outputAnswers;
        }
    },
    /* Race */
    {
        name: "Race",
        answers: [
            [
                "human", /* 0 */
                "god",
                "mutant",
                "alien",
                "-"
            ]
        ],
        calculate: function (inputAnswers) {
            var outputAnswers = [];
            for (var i = 0; i < this.answers.length; i++) {
                outputAnswers.push(this.answers[i][inputAnswers[i]]);
            }
            return outputAnswers;
        }
    }
];

/*_______________________ OUTPUT NEURONS _______________________*/
var outputNeuron = {
    calculate: function () {
        hiddenNeurons
        return 0;
    }
};

/*_______________________ MAIN _______________________*/
var question = "";
var answers;
var questionsSize = 0;
var questionN = 0;
var IAm;

for (var i = 0; i < inputNeurons.length; i++) {
    for (var j = 0; j < inputNeurons[i].questions.length; j++) {
        questionsSize++;
    }
}
/*_______________________ Question Answering System _______________________*/
function QA() {

    if (questionN < questionsSize) {
        for (var i = 0, N = 0; i < inputNeurons.length; i++) {
            for (; inputNeurons[i].questionN < inputNeurons[i].questions.length; ) {
                question = inputNeurons[i].questions[inputNeurons[i].questionN].question;
                answers = inputNeurons[i].questions[inputNeurons[i].questionN].answers;
                /* 
                 addToLog(question);
                 addToLog(answers);
                 */
                if (N == questionN) {
                    inputNeurons[i].calculate();
                    return i;
                }
                N++;
            }

        }
    } else {
        if (hiddenNeurons.length = inputNeurons.length) {
            for (var i = 0, N = 0; i < inputNeurons.length; i++) {
                hiddenNeurons[i].calculate(inputNeurons[i].answers);
            }
            outputNeuron.calculate();
            IAm = characters[0];
        } else {
            addToLog("Error in SYSTEM. hiddenNeurons.length = inputNeurons.length");
        }
    }

    /* GOOD, NEUTRAL AND BAD TEST*/
    /*
     good = [0,1,2,1,3];
     neutral = [1,0,0,2,1];
     bad = [2,0,3,3,2];
     addToLog(hiddenNeurons[2].calculate(good));
     addToLog(hiddenNeurons[2].calculate(neutral));
     addToLog(hiddenNeurons[2].calculate(bad));
     */
}

function NN_getNeuronN() {
    for (var i = 0, N = 0; i < inputNeurons.length; i++) {
        for (var j = 0; j < inputNeurons[i].questions.length; j++) {
            if (N == questionN - 1) {
                return i;
            }
            N++;
        }
    }
}
function NN_Answer(x) {
    var z = NN_getNeuronN();
    inputNeurons[z].answers.push(x);
}

function addToLog(text) {
    document.getElementById('log').innerHTML += '<br>' + text;
}