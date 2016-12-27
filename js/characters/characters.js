/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 * DOMAINS
 /*
 comics Marvel DC
 ability
 type: human god mutant alien
 
 side:
 1 - good
 2 - not good enough
 3 - neutral
 4 - strange
 5 - Bad
 hair color
 1 - black, 
 2 - brown, 
 3 - blond, 
 4 - red, 
 5 - white.
 6 - no hair
 age
 
 eyes color
 */
/*
 comics, heroName, heroName1, heroName2, alterEgo, ability, gender, type, firstAction = symbol.
 height, side, weight, hairColor = integer.
 weight1, weight2 = integer.
 height1, height2 = integer.
 DATABASE
 hero(heroName, height, weight, gender, type, firstAction, side, hairColor).
 heroAddon(comics, heroName, alterEgo, ability).
 manOrWoman(symbol,symbol).
 weight(symbol, integer, integer).
 height(symbol, integer, integer).
 catTree(integer, integer).
 darkLord(integer, integer).
 snowman(integer, integer).
 testRes(integer, integer).
 intToHairColor(integer, symbol).
 intToSide(integer, symbol).
 strToHairColor(symbol, integer).
 strToSide(symbol, integer).
 
 PREDICATES
 nondeterm start.
 nondeterm repeat.
 nondeterm doaction(integer).
 nondeterm showHero(comics, heroName, alterEgo, ability, height1, height2, weight1, weight2, gender, type, firstAction, side, hairColor).
 /*THOR AGE 788*/
/*add Species	Human Mutant*/
/*
 You want DC -> Yes -> 
 No
 You want Marvel ->
 No -> Go away (Oh all)	
 */
/*
 Marvel Comics | Wolverine | James Howlett | Regenerative healing factor | 176cm | 166kg | man | mutant | Cameo: The Incredible Hulk #180 (Oct. 1974) | black | Not good enough
 DC Comics | Green Lantern | Kyle Rayner | Green Lantern Corps Power Ring | 180cm | 82kg | man | human | Green Lantern (vol. 3) #48 (January 1994) | brown | Not good enough
 DC Comics | Deathstroke | Slade Joseph Wilson | Regenerative healing factor | 193cm | 102kg | man | human | Slade Wilson as Deathstroke. Cover to Deathstroke (vol. 2) #8 | white | Bad
 Marvel Comics | Silver Surfer | Norrin Radd | Endowed with the Power Cosmic | 195cm | 92kg | man | alien | The Silver Surfer #1 (Aug. 1968) | no hair | Strange
 Marvel Comics | The Punisher | Franken-Castle | Punisher | 180cm | 90kg | man | human | Cover to The Punisher #1(1986) | black | Strange
 DC Comics | Doctor Fate | Kent Nelson | Mastery of magic | 187cm | 90kg | man | human | More Fun Comics #55 (May 1940) | blond | Neutral
 Marvel Comics | Thing | Benjamin 'Ben' Grimm | Superhuman strength | 190cm | 200kg | man | mutant | The Fantastic Four #1 (November 1961) | no hair | Good
 DC Comics | Catwoman | Selina Kyle | Superhuman strength | 175cm | 61kg | woman | human | Gotham City | black | Not good enough
 Marvel Comics | Rogue | Anna Marie | Mastery of magic | 168cm | 54kg | woman | mutant | Avengers Annual #10 (1981) | brown | Not good enough
 DC Comics | Atom Girl | Salu Digby | Superhuman strength | 175cm | 61kg | woman | human | Teen Titans/Legion Special #1 (2004) | black | Not good enough
 Marvel Comics | Black Widow | Natalia Alianovna Romanova | Mastery of magic | 170cm | 59kg | woman | mutant | Tales of Suspense #52 (April, 1964) | red | Not good enough
 Marvel Comics | Deadpool | Wade Wilson | Superhuman strength | 188cm | 95kg | man | mutant | New Mutants #98 (February, 1991) | brown | Neutral
 Marvel Comics | Phoenix | Jean Grey-Summers | Mastery of magic | 168cm | 52kg | woman | mutant | X-Men #1 (September, 1963) | red | Not good enough
 Marvel Comics | Banshee | Sean Cassidy | Mastery of magic | 183cm | 77kg | woman | mutant | X-Men #28 (January, 1967) | blond | Not good enough
 Marvel Comics | Gamora | Gamora Zen Whoberi Ben Titan | Mastery of magic | 183cm | 77kg | woman | god | Strange Tales #180 (June, 1975) | black | Not good enough
 Marvel Comics | Goblin Queen | Madelyne Jennifer Pryor | Mastery of magic | 183cm | 77kg | woman | mutant | Uncanny X-Men #168 | red | Bad
 Marvel Comics | Hawkgirl | Kendra Saunders | Mastery of magic | 175cm | 61kg | woman | mutant | Uncanny X-Men #128 | red | Good
 Marvel Comics | Quicksilver | Pietro Django Maximoff | Superhuman strength | 183cm | 79kg | man | mutant | X-MEN Vol. 1 #4 | white | Not good enough
 DC Comics | John Constantine | John Constantine | Superhuman strength | 183cm | 89kg | man | human | Swamp Thing Vol 2 #37 (June, 1985) | blond | Not good enough
 Marvel Comics | Shadow King | Amahl Farouk | Superhuman strength | 185cm | 249kg | man | alien | X-Men #117 (1979) | no hair | Not good enough
 Marvel Comics | Siryn | Theresa Rourke Cassidy | Superhuman strength | 168cm | 52kg | woman | mutant | Spider-Woman (first series) #37 | red | Bad
 DC Comics | Red Hood | Jason Todd | Superhuman strength | 183cm | 81kg | man | human | (as Jason Todd) Batman #357 | red | Bad
 DC Comics | Sportsmaster | Lawrence Crock | Superhuman strength | 180cm | 90kg | man | human | (as Jason Todd) Batman #177 | black | Strange
 DC Comics | General Zod | Dru-Zod | Superhuman strength | 190cm | 100kg | man | alien | Action Comics #845 | black | Bad
 -----------------------------------------------
 gender
 */

/*
 hero(heroName, height, weight, gender, type, firstAction, side, hairColor).
 heroAddon(comics, heroName, alterEgo, ability).
 */


/*
 * Тору 300 лет, но на внешний вид 35 :)
 * Если внести правдивые данные о возрасте, 
 * а именно вычислять их относительно даты рождения персонажей
 * то самому молодому будет 70, 
 * так что, лучше пускай будет так :)
 * ГЕРОИ НЕ СТАРЕЮТ !!!
 */
var charactersOnFuzzySet = [];

var characters = [
    /*DC Comics | Batman | Bruce Wayne | Master detective | 188cm | 95kg | man | human | Detective Comics #27 (May 1939) | black | Good*/
    {
        "id": 1,
        "img": "Batman.jpg",
        "name": "Batman",
        "alterEgo": "Bruce Wayne",
        "height": 188,
        "weight": 95,
        "years": 35,
        "gender": "male",
        "hair": {
            "color": "black",
            "length": "short"
        },
        "eyes": "blue",
        "alignment": "good",
        "race": "human"
    },
    /*Marvel Comics | Thor | Thor Odinson | Superhuman strength | 198cm | 105kg | man | god | Journey into Mystery #83 (August 1962) | blond | Good*/
    {
        "id": 2,
        "img": "Thor.jpg",
        "name": "Thor",
        "alterEgo": "Thor Odinson",
        "height": 198,
        "weight": 105,
        "years": 35,
        "gender": "male",
        "hair": {
            "color": "blond",
            "length": "long"
        },
        "eyes": "blue",
        "alignment": "good",
        "race": "god"
    },
    /*DC Comics | Superman | Clark Kent | Superhuman strength | 190cm | 100kg | man | alien | Action Comics #1(April 18, 1938) | black | Good*/
    {
        "id": 3,
        "img": "Superman.jpg",
        "name": "Superman",
        "alterEgo": "Clark Kent",
        "height": 191,
        "weight": 101,
        "years": 38,
        "gender": "male",
        "hair": {
            "color": "black",
            "length": "short"
        },
        "eyes": "blue",
        "alignment": "good",
        "race": "alien"
    },
    /*Marvel Comics | Spider-Man | Peter Benjamin Parker-Benjamin 'Ben' Reilly | Superhuman strength | 178cm | 64kg | man | mutant | as Peter Parker's Clone The Amazing Spider-Man #149 (October 1975) | brown | Good*/
    {
        "id": 4,
        "img": "Spider-Man.jpg",
        "name": "Spider-Man",
        "alterEgo": "Peter Benjamin Parker",
        "height": 178,
        "weight": 64,
        "years": 25,
        "gender": "male",
        "hair": {
            "color": "brown",
            "length": "medium"
        },
        "eyes": "hazel",
        "alignment": "good",
        "race": "human"
    },
    /*DC Comics | Wonder Woman | Princess Diana of Themyscira | Superhuman strength | 183cm | 60kg | woman | human | All Star Comics #8 (Dec. 1941) | black | Good*/
    {
        "id": 5,
        "img": "Wonder-Woman.jpg",
        "name": "Wonder Woman",
        "alterEgo": "Princess Diana of Themyscira",
        "height": 183,
        "weight": 74,
        "years": 30,
        "gender": "female",
        "hair": {
            "color": "black",
            "length": "long"
        },
        "eyes": "blue",
        "alignment": "good",
        "race": "alien"
    },
    /*Marvel Comics | Storm | Ororo Munroe | Weather manipulation | 180cm | 58kg | woman | mutant | Giant-Size X-Men #1(May 1975) | white | Good*/
    {
        "id": 6,
        "img": "Storm.jpg",
        "name": "Storm",
        "alterEgo": "Ororo Munroe",
        "height": 180,
        "weight": 58,
        "years": 35,
        "gender": "female",
        "hair": {
            "color": "white",
            "length": "long"
        },
        "eyes": "blue",
        "alignment": "good",
        "race": "mutant"
    },
    /*DC Comics | Supergirl | Kara Denvers | Superhuman strength | 171cm | 54kg | woman | alien | Action Comics #252 (May 1959) | blond | Good*/
    {
        "id": 7,
        "img": "Supergirl.jpg",
        "name": "Supergirl",
        "alterEgo": "Kara Denvers",
        "height": 171,
        "weight": 54,
        "years": 25,
        "gender": "female",
        "hair": {
            "color": "blond",
            "length": "long"
        },
        "eyes": "blue",
        "alignment": "good",
        "race": "alien"
    },
    // Marvel Comics | Wolverine | James Howlett | Regenerative healing factor | 176cm | 166kg | man | mutant | Cameo: The Incredible Hulk #180 (Oct. 1974) | black | Not good enough
    {
        "id": 8,
        "img": "Wolverine.jpg",
        "name": "Wolverine",
        "alterEgo": "James Howlett",
        "height": 176,
        "weight": 166,
        "years": 40,
        "gender": "male",
        "hair": {
            "color": "black",
            "length": "short"
        },
        "eyes": "blue",
        "alignment": "good",
        "race": "mutant"
    }
];
//!!! Обновить возраст у всех персонажей ниже 
//!!! И пол тоже так, как я его исправил на male, female в этом году :)
/*
 // DC Comics | Deathstroke | Slade Joseph Wilson | Regenerative healing factor | 193cm | 102kg | man | human | Slade Wilson as Deathstroke. Cover to Deathstroke (vol. 2) #8 | white | Bad
 {
 "id": 10,
 "img": "Deathstroke.jpg",
 "name": "Deathstroke",
 "alterEgo": "Slade Joseph Wilson",
 "height": 193,
 "weight": 102,
 "years": 45,
 "gender": "man"
 },
 // Marvel Comics | Silver Surfer | Norrin Radd | Endowed with the Power Cosmic | 195cm | 92kg | man | alien | The Silver Surfer #1 (Aug. 1968) | no hair | Strange
 {
 "id": 11,
 "img": "Silver-Surfer.jpg",
 "name": "Silver Surfer",
 "alterEgo": "Norrin Radd",
 "height": 195,
 "weight": 92,
 "years": 33,
 "gender": "man"
 },
 // Marvel Comics | The Punisher | Franken-Castle | Punisher | 180cm | 90kg | man | human | Cover to The Punisher #1(1986) | black | Strange
 {
 "id": 12,
 "img": "Punisher.jpg",
 "name": "The Punisher",
 "alterEgo": "Franken-Castle",
 "height": 180,
 "weight": 90,
 "years": 33,
 "gender": "man"
 },
 },
 // Marvel Comics | Banshee | Sean Cassidy | Mastery of magic | 183cm | 77kg | woman | mutant | X-Men #28 (January, 1967) | blond | Not good enough
 {
 "id": 21,
 "img": "Banshee.jpg",
 "name": "Banshee",
 "alterEgo": "Sean Cassidy",
 "height": 183,
 "weight": 77,
 "years": 25,
 "gender": "woman"
 },
 // Marvel Comics | Gamora | Gamora Zen Whoberi Ben Titan | Mastery of magic | 183cm | 77kg | woman | god | Strange Tales #180 (June, 1975) | black | Not good enough
 {
 "id": 22,
 "img": "Gamora.jpg",
 "name": "Gamora",
 "alterEgo": "Gamora Zen Whoberi Ben Titan",
 "height": 183,
 "weight": 77,
 "years": 25,
 "gender": "woman"
 },


 
 //characters[0].
 */

/*
 * Коротко о данных
 * Пример
 * {
 *   "id": 1, - порядковый номер :) Задается вручную
 *   "img": "Batman.jpg", - картинка, ну, это на будущее... пока они нам не нужны :) Называется так же как персонаж только в конце .jpg, а если в имени есть пробелы, к примеру Wonder Woman, пишем как Wonder-Woman.jpg
 *   "name": "Batman", - имя, ну, тут всё ясно
 *   "alterEgo": "Bruce Wayne", - ясно
 *   "height": 188, - см
 *   "weight": 95, - кг
 *   "years": 35, - вот, тут важно, в файле есть такое:
 *   * Тору 300 лет, но на внешний вид 35 :)
 *   * Если внести правдивые данные о возрасте, 
 *   * а именно вычислять их относительно даты рождения персонажей
 *   * то самому молодому будет 70, 
 *   * так что, лучше пускай будет так :)
 *   * ГЕРОИ НЕ СТАРЕЮТ !!!
 *   Так что, пишем возраст на вид
 *   "gender": "male", - может принимать значения "male", "female", "-". Да, именно "-" - просто мало ли :)
 *   "hair": {
 *   *    "color": "black", - цвет с маленькой буквы, любой (но, если персонаж лысый, то пиши "no hair", а "length": "-")
 *   *    "length": "short" - может принимать значения "-", "short", "medium", "long". 
 *   },
 *   "eyes": "blue", -  цвет с маленькой буквы, любой
 *   "alignment": "good", может принимать значения "good", "bad", "neutral"
 *   "race": "human" - пока такие: "human", "god", "mutant", "alien", "-"
 }
 */

function addCharacter(img, name, alterEgo, height, weight, years, gender, hair, eyes, alignment, race) {
    var newCharacter = {
        "id": characters.length + 1,
        "img": img,
        "name": name,
        "alterEgo": alterEgo,
        "height": height,
        "weight": weight,
        "years": years,
        "gender": gender,
        "hair": {
            "color": hair[0],
            "length": hair[1]
        },
        "eyes": eyes,
        "alignment": alignment,
        "race": race
    };
    var realNew = true;
    for (var i = 0; i < characters.length; i++) {
        if (characters[i].name == newCharacter.name) {
            realNew = false;
        }
    }
    if (realNew) {
        characters.push(newCharacter);
    } else {
        alert("Error in SYSTEM. New Character *" + newCharacter.name + "* already exist in DataBase");
    }
}
function printCharactersNToElemID(elemID) {
    document.getElementById(elemID).innerHTML = characters.length + " characters in <a href='js/characters/characters.js'>DataBase</a>";
}

// DC Comics | Catwoman | Selina Kyle | Superhuman strength | 175cm | 61kg | woman | human | Gotham City | black | Not good enough
addCharacter("Catwoman.jpg", "Catwoman", "Selina Kyle", 175, 61, 25, "female", ["black", "long"], "green", "good", "human");
// Marvel Comics | Rogue | Anna Marie | Mastery of magic | 173cm | 54kg | woman | mutant | Avengers Annual #10 (1981) | brown | Not good enough
addCharacter("Rogue.jpg", "Rogue", "Anna Marie", 173, 54, 20, "female", ["brown", "long"], "green", "good", "mutant");
addCharacter("Poison-Ivy.jpg", "Poison Ivy", "Pamela Lillian Isley", 168, 50, 26, "female", ["red", "long"], "green", "bad", "human");
addCharacter("Harley-Quinn.jpg", "Harley Quinn", "Harleen Francis Quinzel", 170, 63, 25, "female", ["blond", "long"], "blue", "bad", "human");
addCharacter("Joker.jpg", "Joker", "Jack Napier", 196, 86, 35, "male", ["green", "medium"], "green", "bad", "human");
addCharacter("Iron-Man.jpg", "Iron Man", "Tony Stark", 198, 90, 43, "male", ["black", "short"], "blue", "good", "human");
addCharacter("General-Zod.jpg", "General Zod", "Dru-Zod", 190, 105, 30, "male", ["black", "short"], "black", "bad", "alien");
addCharacter("Sportsmaster.jpg", "Sportsmaster", "Lawrence Crock", 180, 89, 28, "male", ["brown", "medium"], "brown", "bad", "alien");
addCharacter("Red-Hood.jpg", "Red Hood", "Jason Peter Todd", 183, 81, 28, "male", ["black", "-"], "blue", "neutral", "human"); // hair length

// My work (Vlad)
addCharacter("A-Bomb.jpg", "A-Bomb", "Rick Jones", 203, 441, 30, "male", ["no hair", "-"], "yellow", "bad", "human");
addCharacter("Abomination.jpg", "Abomination", "Emil Blonsky", 203, 441, 40, "male", ["no hair", "-"], "green", "bad", "human");
addCharacter("Agent Bob.jpg", "Agent Bob", "Bob", 178, 81, 25, "male", ["brown", "short"], "brown", "good", "human");
addCharacter("Ajax.jpg", "Ajax", "Francis", 193, 90, 27, "male", ["black", "short"], "brown", "bad", "cyborg");
addCharacter("Angel-Dust.jpg", "Angel Dust", "Christina", 165, 57, 20, "female", ["black", "long"], "yellow", "good", "mutant");
addCharacter("Animal-Man.jpg", "Animal Man", "Bernhard Baker", 183, 83, 24, "male", ["blond", "short"], "blue", "good", "human");
addCharacter("Ant-Man-II.jpg", "Ant-Man II", "Scott Lang", 183, 86, 28, "male", ["blond", "short"], "blue", "good", "human");
addCharacter("Aqualad.jpg", "Aqualad", "Garth", 178, 106, 18, "male", ["black", "short"], "blue", "good", "mutant");
addCharacter("Archangel.jpg", "Archangel", "Warren Kenneth Worthington III", 183, 63, 24, "male", ["blond", "short"], "blue", "good", "mutant");
addCharacter("Atom-Girl.jpg", "Atom Girl", "Salu Digby", 168, 54, 21, "female", ["black", "long"], "black", "good", "human");
addCharacter("Azazel.jpg", "Azazel", "Azazel", 183, 67, 100, "male", ["black", "short"], "yellow", "bad", "alien");
addCharacter("Batgirl.jpg", "Batgirl", "Barbara Gordon", 170, 57, 22, "female", ["red", "long"], "green", "good", "human");
addCharacter("Beast-Boy.jpg", "Beast Boy", "Garfield Mark Logan", 173, 68, 22, "male", ["green", "short"], "green", "good", "human");
addCharacter("Black-Canary.jpg", "Black Canary", "Dinah Drake Lance", 165, 58, 25, "female", ["blond", "long"], "blue", "good", "human");
addCharacter("Black-Mamba.jpg", "Black Mamba", "Tanya Sealy", 170, 52, 24, "female", ["black", "long"], "green", "bad", "mutant");
addCharacter("Black-Widow.jpg", "Black Widow", "Natasha Alianovna Romanoff", 170, 59, 22, "female", ["red", "long"], "green", "good", "human");
addCharacter("Blackwing.jpg", "Blackwing", "Joseph Manfredi", 185, 86, 30, "male", ["black", "long"], "blue", "bad", "-");                  // strange race
addCharacter("Blob.jpg", "Blob", "Frederick J. Dukes", 178, 230, 32, "male", ["brown", "short"], "brown", "bad", "mutant");
addCharacter("Brainiac.jpg", "Brainiac", "Querl Dox", 170, 61, 24, "male", ["blond", "short"], "green", "good", "mutant");
addCharacter("Buffy.jpg", "Buffy ", "Buffy", 157, 52, 20, "female", ["blond", "medium"], "green", "good", "human");
addCharacter("Cable.jpg", "Cable", "Nathan Christopher", 203, 158, 35, "male", ["white", "short"], "blue", "good", "mutant");
addCharacter("Cannonball.jpg", "Cannonball", "Samuel Zachery Guthrie", 183, 81, 20, "male", ["blond", "short"], "blue", "good", "mutant");
addCharacter("Captain-Britain.jpg", "Captain Britain", "Brian Braddock", 198, 116, 35, "male", ["blond", "short"], "blue", "good", "human");
addCharacter("Captain-Marvel.jpg", "Captain Marvel", "Billy Batson", 193, 101, 16, "male", ["black", "short"], "blue", "good", "human");
addCharacter("Cat.jpg", "Cat", "Shirlee Bryant", 173, 61, 25, "female", ["blond", "long"], "blue", "good", "human");
addCharacter("Cecilia-Reyes.jpg", "Cecilia Reyes", "Dr. Cecilia Reyes", 170, 62, 22, "female", ["brown", "long"], "brown", "good", "mutant");
addCharacter("Chamber.jpg", "Chamber", "Jonothon Evan Starsmore", 175, 63, 25, "male", ["brown", "short"], "brown", "good", "mutant");
addCharacter("Clock-King.jpg", "Clock King", "William Tockman", 178, 78, 32, "male", ["black", "short"], "blue", "bad", "human");
addCharacter("Corsair.jpg", "Corsair", "Christopher Summers", 191, 79, 30, "male", ["brown", "short"], "brown", "good", "mutant");
addCharacter("Cyclops.jpg", "Cyclops", "Scott Summers ", 191, 88, 20, "male", ["brown", "short"], "brown", "good", "mutant");
addCharacter("Dagger.jpg", "Dagger", "Tandy Bowen", 165, 52, 21, "female", ["blond", "long"], "blue", "good", "human");
addCharacter("Daredevil.jpg", "Daredevil", "Matt Murdock", 183, 90, 30, "male", ["red", "short"], "blue", "good", "human");
addCharacter("Darkseid.jpg", "Darkseid", "Uxas", 267, 817, 100, "male", ["no hair", "-"], "red", "bad", "mutant");
addCharacter("Dazzler.jpg", "Dazzler", "Alison Blaire", 173, 52, 25, "female", ["blond", "long"], "blue", "good", "mutant");
addCharacter("Deadshot.jpg", "Deadshot", "Floyd Lawton", 185, 91, 29, "male", ["brown", "short"], "brown", "bad", "human");
addCharacter("Doctor-Strange.jpg", "Doctor Strange", "Stephen Strange", 188, 81, 27, "male", ["black", "short"], "grey", "good", "human");
addCharacter("Elektra.jpg", "Elektra", "Elektra Natchios", 175, 59, 21, "female", ["black", "long"], "blue", "good", "human");
addCharacter("Firestar.jpg", "Firestar", "Angelica Jones", 173, 56, 20, "female", ["red", "long"], "green", "good", "mutant");
addCharacter("Genesis.jpg", "Genesis", "Tyler Dayspring", 185, 86, 34, "male", ["blond", "long"], "blue", "good", "human");
addCharacter("Gladiator.jpg", "Gladiator", "Kallark", 198, 268, 29, "male", ["blue", "short"], "blue", "good", "mutant");
addCharacter("Green-Lantern.jpg", "Green Lantern", "Hal Jordan", 188, 90, 24, "male", ["brown", "short"], "brown", "good", "human");

addCharacter("Hawkeye.jpg", "Hawkeye", "Clinton Francis Barton", 191, 104, 30, "male", ["blond", "short"], "blue", "good", "human");
addCharacter("Hawkman.jpg", "Hawkman", "Carter Hall", 185, 88, 28, "male", ["brown", "short"], "blue", "good", "human");
addCharacter("Hellcat.jpg", "Hellcat", "Patricia Walker", 173, 61, 23, "female", ["red", "long"], "blue", "good", "human");
addCharacter("Hulk.jpg", "Hulk", "Bruce Banner", 244, 630, 35, "male", ["green", "short"], "green", "good", "mutant");
addCharacter("Husk.jpg", "Husk", "Paige Elisabeth Guthrie", 170, 58, 18, "female", ["blond", "long"], "blue", "good", "mutant");
addCharacter("Iceman.jpg", "Iceman", "Robert Louis Drake", 173, 65, 19, "male", ["brown", "short"], "brown", "good", "mutant");
addCharacter("Iron Fist.jpg", "Iron Fist", "Daniel Rand", 180, 79, 21, "male", ["blond", "short"], "blue", "good", "human");
addCharacter("John Constantine.jpg", "John Constantine", "John Constantine", 183, 75, 31, "male", ["blond", "short"], "blue", "good", "human");
addCharacter("Justice.jpg", "Justice", "Vance Astrovik", 178, 81, 24, "male", ["brown", "short"], "grey", "good", "human");
addCharacter("Kid-Flash.jpg", "Kid Flash", "Wallace Rudolph West", 172, 62, 16, "male", ["red", "short"], "blue", "good", "human");
addCharacter("Killer-Frost.jpg", "Killer Frost", "Caitlin Snow", 172, 56, 25, "female", ["blond", "long"], "blue", "bad", "human");
addCharacter("Lex-Luthor.jpg", "Lex Luthor", "Lex Luthor", 188, 95, 34, "male", ["no hair", "-"], "green", "bad", "human");
addCharacter("Lightning-Lord.jpg", "Lightning Lord", "Mekt Ranzz", 191, 95, 26, "male", ["red", "short"], "blue", "bad", "human");
addCharacter("Lizard.jpg", "Lizard", "Curtis Connors", 203, 230, 31, "male", ["no hair", "-"], "red", "bad", "mutant");
addCharacter("Martian-Manhunter.jpg", "Martian Manhunter", "J'onn J'onzz", 201, 135, 34, "male", ["no hair", "-"], "red", "good", "human");
addCharacter("Maverick.jpg", "Maverick", "Christopher Bradley", 193, 110, 27, "male", ["black", "short"], "blue", "good", "human");
addCharacter("Medusa.jpg", "Medusa", "Amaquelin Boltagon", 180, 59, 25, "female", ["red", "long"], "green", "good", "mutant");
addCharacter("Mister-Fantastic.jpg", "Mister Fantastic", "Reed Richards", 185, 81, 29, "male", ["brown", "short"], "brown", "good", "mutant");
addCharacter("Mysterio.jpg", "Mysterio", "Quentin Beck", 180, 79, 18, "male", ["no hair", "-"], "brown", "bad", "human");
addCharacter("Nightwing.jpg", "Nightwing", "Dick Grayson", 178, 79, 24, "male", ["black", "short"], "blue", "good", "human");
addCharacter("Nova.jpg", "Nova", "Frankie Raye", 163, 59, 21, "female", ["red", "long"], "white", "good", "mutant");
addCharacter("Professor-X.jpg", "Professor X", "Charles Francis Xavier", 183, 86, 40, "male", ["no hair", "-"], "blue", "good", "mutant");
addCharacter("Quill.jpg", "Quill", "Maxwell Jordan", 163, 56, 18, "male", ["brown", "long"], "brown", "good", "mutant");
addCharacter("Ra_s-Al-Ghul.jpg", "Ra's Al Ghul", "Ra's Al Ghul", 193, 97, 40, "male", ["grey", "short"], "green", "bad", "human");
addCharacter("Red-Arrow.jpg", "Red Arrow", "Roy Harper", 180, 83, 19, "male", ["red", "short"], "green", "good", "human");
addCharacter("Rick-Flag.jpg", "Rick Flag", "Richard Rogers Flag", 185, 85, 26, "male", ["brown", "short"], "blue", "bad", "human");
addCharacter("Rorschach.jpg", "Rorschach", "Walter Joseph Kovacs", 168, 63, 30, "male", ["red", "short"], "blue", "good", "human");
addCharacter("Sabretooth.jpg", "Sabretooth", "Victor Creed", 198, 171, 32, "male", ["blond", "short"], "blue", "bad", "mutant");
addCharacter("Silverclaw.jpg", "Silverclaw", "Maria ", 157, 50, 35, "female", ["black", "short"], "brown", "good", "human");

addCharacter("Spider-Woman.jpg", "Spider-Woman", "Jessica Drew", 178, 59, 20, "female", ["black", "long"], "green", "good", "mutant");

addCharacter("Trickster.jpg", "Trickster", "Giovanni Giuseppe", 183, 81, 34, "male", ["blond", "short"], "blue", "bad", "human");
addCharacter("Vibe.jpg", "Vibe", "Cisco Ramon", 178, 71, 24, "male", ["black", "short"], "brown", "good", "human");
addCharacter("Vulture.jpg", "Adrian Toomes", "Adrian Toomes", 180, 79, 40, "male", ["no hair", "-"], "brown", "bad", "human");
addCharacter("Zatanna.jpg", "Zatanna", "Zatanna Zatara", 170, 57, 20, "female", ["black", "long"], "blue", "good", "human");

// Danila continues
addCharacter("Siryn.jpg", "Siryn", "Theresa Rourke Cassidy", 168, 59, 25, "female", ["red", "long"], "green", "bad", "mutant");
addCharacter("Shadow-King.jpg", "Shadow King", "Amahl Farouk", 185, 150, 30, "male", ["no hair", "-"], "red", "good", "alien");
addCharacter("Quicksilver.jpg", "Quicksilver", "Pietro Django Maximoff", 183, 79, 30, "male", ["white", "medium"], "blue", "good", "mutant");
addCharacter("Goblin-Queen.jpg", "Goblin Queen", "Madelyne Jennifer Pryor", 183, 77, 28, "female", ["red", "long"], "green", "bad", "mutant"); // Height?
addCharacter("Phoenix.jpg", "Phoenix", "Jean Grey-Summers", 168, 52, 25, "female", ["red", "long"], "green", "good", "mutant");
addCharacter("Doctor-Fate.jpg", "Doctor Fate", "Kent Nelson", 187, 90, 35, "male", ["blond", "medium"], "blue", "good", "human");
addCharacter("Deadpool.jpg", "Deadpool", "Wade Wilson", 188, 95, 35, "male", ["no hair", "-"], "brown", "neutral", "mutant");
addCharacter("Thing.jpg", "Thing", "Benjamin 'Ben' Grimm", 190, 200, 35, "male", ["no hair", "-"], "blue", "good", "mutant");
addCharacter("Hawkgirl.jpg", "Hawkgirl", "Kendra Saunders", 175, 61, 25, "female", ["red", "long"], "green", "good", "mutant");