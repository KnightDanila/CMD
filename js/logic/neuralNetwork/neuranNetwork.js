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
var AI = {
    NN: {
    }
};
var networkWeight = [1, 1, 1, 1, 1];
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
                    "Black as coal", /* 0 */                            /* YES in DB*/
                    "Brown", /* YES in DB*/
                    "Blond only", /* YES in DB*/
                    "Red like a fire",
                    "White as snow", /* YES in DB*/
                    "Green, crazy green",
                    "No hair, I don`t like it, I am DIE HARD", /* 6 */
                    "Other"
                ]
            },
            {
                question: "How long is your hair?",
                answers: [
                    "Long", /* YES in DB*/
                    "Medium", /* YES in DB*/
                    "Short", /* YES in DB*/
                    "Other"     /* YES in DB*/
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
                    "Blue", /* YES in DB*/
                    "Brown",
                    "Gray",
                    "Green",
                    "Hazel", /* YES in DB*/
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
        weight: 0.8,
        answers: [
            [
                "female", /* 0 */
                "male",
                "-"
            ]
        ],
        calculate: function (inputAnswers) {
            var outputAnswers = {};
            for (var i = 0; i < inputAnswers.length; i++) {
                if (i == 0) {
                    outputAnswers[answersEnum[i]] = this.answers[i][inputAnswers[i]];
                } else {
                    outputAnswers[answersEnum[i]] = inputAnswers[i];
                }
            }
            fuzzAnswers = fuzzification(outputAnswers);
            fuzzCharacterLooks = rules.calculate(fuzzAnswers);
            defuzzCharacter = defuzzification(fuzzCharacterLooks);
            log.add(defuzzCharacter);
            outputAnswers = [outputAnswers.gender, defuzzCharacter];
            return outputAnswers;
        }
    },
    /* Hair */
    {
        name: "Hair",
        weight: 1,
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
        weight: 1,
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
        weight: 1,
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
        weight: 1,
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
    compare: function (character, neuron, answers) {
        //neuron = hiddenNeurons[0];
        if (neuron.name == "FuzzySet") {
            if (neuron.weight > 0.5) {
                if (character.gender == answers[0] || answers[0] == "-") {
                    if (charactersOnFuzzySet[character.id - 1] >= neuron.weight * answers[1]
                            && charactersOnFuzzySet[character.id - 1] <= (2 - neuron.weight) * answers[1]
                            ) {
                        return true;
                    }
                }
            } else {
                if (charactersOnFuzzySet[character.id - 1] >= neuron.weight * answers[1]
                        && charactersOnFuzzySet[character.id - 1] <= (2 - neuron.weight) * answers[1]
                        ) {
                    return true;
                }
            }
        }
        var hairColor = function () {
            if (neuron.weight < 0.4) {
                return ["-"];
            }
            if (neuron.weight <= 0.8 && neuron.weight >= 0.4) {
                if (answers[0] == "black" || answers[0] == "brown") {
                    return ["black", "brown"];
                }
                if (answers[0] == "blond" || answers[0] == "white") {
                    return ["blond", "white"];
                }
            }

            if (neuron.weight >= 0.8) {
                return [answers[0]];
            }
            return 0;
        };
        var hairLength = function () {
            if (neuron.weight < 0.4) {
                return ["-"];
            }
            if (neuron.weight <= 0.8 && neuron.weight >= 0.4) {
                if (answers[1] == "long") {
                    return ["long", "medium"];
                }
                if (answers[1] == "medium") {
                    return ["long", "medium", "short"];
                }
                if (answers[1] == "short") {
                    return ["medium", "short", "-"];
                }
            }
            if (neuron.weight >= 0.8) {
                return [answers[1]];
            }
            return 0;
        };
        if (neuron.name == "Hair") {
            for (var i = 0; i < hairColor().length; i++) {
                if (character.hair.color == hairColor()[i] || hairColor()[i] == "-") {
                    for (var j = 0; j < hairLength().length; j++) {
                        if (character.hair.length == hairLength()[j] || hairLength()[j] == "-") {
                            return true;
                        }
                    }
                }
            }
        }
        if (neuron.name == "Goodwill") {
            if (character.alignment == answers) {
                return true;
            }
        }

        var eyesColor = function () {
            if (neuron.weight < 0.4) {
                return ["-"];
            }
            if (neuron.weight <= 0.8 && neuron.weight >= 0.4) {
                if (answers == "amber" || answers == "hazel" || answers == "brown") {
                    return ["amber", "hazel", "brown"];
                }
                if (answers == "blue" || answers == "gray") {
                    return ["blue", "gray"];
                }
                return [answers];
            }
            if (neuron.weight >= 0.8) {
                return [answers];
            }
            return 0;
        };
        if (neuron.name == "Eyes") {
            for (var j = 0; j < eyesColor().length; j++) {
                if (character.eyes == eyesColor()[j] || eyesColor()[j] == "-") {
                    return true;
                }
            }
        }
        if (neuron.name == "Race") {
            if (character.race == answers) {
                return true;
            }
        }

        return false;
    },
    calculate: function (inputNeuronsAnswers) {
        var suitableCharacters = characters;
        charactersOnFuzzySet = AllCharactersOnFuzzySet();
        fuzzySetData = hiddenNeurons[0].calculate(inputNeuronsAnswers[0]);
        for (var i = 0; i < hiddenNeurons.length; i++) {
            for (var j = 0; j < suitableCharacters.length; j++)
                if (i == 0) {
                    if (!this.compare(suitableCharacters[j], hiddenNeurons[i], fuzzySetData)) {
                        suitableCharacters.splice(j, 1);
                        j = j - 1;
                    }
                } else {
                    if (!this.compare(suitableCharacters[j], hiddenNeurons[i], hiddenNeurons[i].calculate(inputNeuronsAnswers[i]))) {
                        suitableCharacters.splice(j, 1);
                        j = j - 1;
                    }
                }
        }

        var min = 200;
        var n = 0;
        for (var i = 0; i < suitableCharacters.length; i++) {
            if (min > Math.abs((fuzzySetData[1] - charactersOnFuzzySet[suitableCharacters[i].id - 1]))) {
                min = Math.abs(fuzzySetData[1] - charactersOnFuzzySet[suitableCharacters[i].id - 1]);
                n = i;
            }
        }
        var output = [suitableCharacters[n], suitableCharacters];
        return output;
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

/* Return number of neuron where questionN < .questions.length
 * It mean that this neuron needs answering
 * 
 * @returns {Number}
 */
function NN_getNeuronN() {
    for (var i = 0; i < inputNeurons.length; i++) {
        if (inputNeurons[i].questionN < inputNeurons[i].questions.length) {
            return i;
        }
    }
    return inputNeurons.length - 1;
}
/* Returns the neuron name by number, or without number (in this case it will be current neuron)
 * 
 * @param {type} number
 * @returns {String}
 */
function NN_getNeuronName(number) {
    number = typeof number !== 'undefined' ? number : NN_getNeuronN();
    return inputNeurons[number].name;
}

/*_______________________ Question Answering System _______________________*/
function QA() {

    if (questionN < questionsSize) {
        var i = NN_getNeuronN();
        question = inputNeurons[i].questions[inputNeurons[i].questionN].question;
        answers = inputNeurons[i].questions[inputNeurons[i].questionN].answers;
        /* 
         log.add(question);
         log.add(answers);
         */
        return 0;
    } else {
        if (hiddenNeurons.length = inputNeurons.length) {
            for (var i = 0; i < inputNeurons.length; i++) {
                hiddenNeurons[i].calculate(inputNeurons[i].answers);
            }

            IAm = outputNeuron.calculate(
                    [
                        inputNeurons[0].answers,
                        inputNeurons[1].answers,
                        inputNeurons[2].answers,
                        inputNeurons[3].answers,
                        inputNeurons[4].answers
                    ]
                    )[0];
            IAm = typeof IAm !== 'undefined' ? IAm : {
                "id": 0,
                "img": "ZZZEmpty.png",
                "name": "not have analog in heroes. Be first :)",
                "alterEgo": "-",
                "height": 0,
                "weight": 0,
                "years": 0,
                "gender": "-",
                "hair": {
                    "color": "-",
                    "length": "-"
                },
                "eyes": "-",
                "alignment": "-",
                "race": "-"
            }
            ;
        } else {
            log.add("Error in SYSTEM. hiddenNeurons.length != inputNeurons.length");
        }
    }

    /* GOOD, NEUTRAL AND BAD TEST*/
    /*
     good = [0,1,2,1,3];
     neutral = [1,0,0,2,1];
     bad = [2,0,3,3,2];
     log.add(hiddenNeurons[2].calculate(good));
     log.add(hiddenNeurons[2].calculate(neutral));
     log.add(hiddenNeurons[2].calculate(bad));
     */
}


function NN_Answer(x) {
    var i = NN_getNeuronN();
    inputNeurons[i].answers.push(x);
    inputNeurons[i].calculate();
}

/*_______________________ Learning System _______________________*/
function NN_learning() {

}

