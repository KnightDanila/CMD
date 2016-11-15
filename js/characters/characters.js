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
        "years": 34,
        "gender": "male"
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
        "gender": "male"

    },
    /*DC Comics | Superman | Clark Kent | Superhuman strength | 190cm | 100kg | man | alien | Action Comics #1(April 18, 1938) | black | Good*/
    {
        "id": 3,
        "img": "Superman.jpg",
        "name": "Superman",
        "alterEgo": "Clark Kent",
        "height": 190,
        "weight": 100,
        "years": 38,
        "gender": "male"

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
        "gender": "male"
    }, 
    /*DC Comics | Wonder Woman | Princess Diana of Themyscira | Superhuman strength | 183cm | 60kg | woman | human | All Star Comics #8 (Dec. 1941) | black | Good*/
    {
        "id": 5,
        "img": "Wonder-Woman.jpg",
        "name": "Wonder Woman",
        "alterEgo": "Princess Diana of Themyscira",
        "height": 183,
        "weight": 60,
        "years": 30,
        "gender": "female"

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
        "gender": "female"

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
        "gender": "female"

    },
    //!!! Обновить возраст у всех персонажей ниже
    // Marvel Comics | Wolverine | James Howlett | Regenerative healing factor | 176cm | 166kg | man | mutant | Cameo: The Incredible Hulk #180 (Oct. 1974) | black | Not good enough
    {
        "id": 8,
        "img": "Wolverine.jpg",
        "name": "Wolverine",
        "alterEgo": "James Howlett",
        "height": 176,
        "weight": 166,
        "years": 40,
        "gender": "man"
    },
    // DC Comics | Green Lantern | Kyle Rayner | Green Lantern Corps Power Ring | 180cm | 82kg | man | human | Green Lantern (vol. 3) #48 (January 1994) | brown | Not good enough
    {
        "id": 9,
        "img": "Green-Lantern.jpg",
        "name": "Green Lantern",
        "alterEgo": "Kyle Rayner",
        "height": 180,
        "weight": 82,
        "years": 35,
        "gender": "man"
    },
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
    // DC Comics | Doctor Fate | Kent Nelson | Mastery of magic | 187cm | 90kg | man | human | More Fun Comics #55 (May 1940) | blond | Neutral
    {
        "id": 13,
        "img": "Doctor-Fate.jpg",
        "name": "Doctor Fate",
        "alterEgo": "Kent Nelson",
        "height": 187,
        "weight": 90,
        "years": 35,
        "gender": "man"
    },
    // Marvel Comics | Thing | Benjamin 'Ben' Grimm | Superhuman strength | 190cm | 200kg | man | mutant | The Fantastic Four #1 (November 1961) | no hair | Good
    {
        "id": 14,
        "img": "Thing.jpg",
        "name": "Thing",
        "alterEgo": "Benjamin 'Ben' Grimm",
        "height": 190,
        "weight": 200,
        "years": 35,
        "gender": "man"
    },
    // DC Comics | Catwoman | Selina Kyle | Superhuman strength | 175cm | 61kg | woman | human | Gotham City | black | Not good enough
    {
        "id": 15,
        "img": "Catwoman.jpg",
        "name": "Catwoman",
        "alterEgo": "Selina Kyle",
        "height": 175,
        "weight": 61,
        "years": 25,
        "gender": "woman"
    },
    // Marvel Comics | Rogue | Anna Marie | Mastery of magic | 168cm | 54kg | woman | mutant | Avengers Annual #10 (1981) | brown | Not good enough
    {
        "id": 16,
        "img": "Rogue.jpg",
        "name": "Rogue",
        "alterEgo": "Anna Marie",
        "height": 168,
        "weight": 54,
        "years": 25,
        "gender": "woman"
    },
    // DC Comics | Atom Girl | Salu Digby | Superhuman strength | 175cm | 61kg | woman | human | Teen Titans/Legion Special #1 (2004) | black | Not good enough
    {
        "id": 17,
        "img": "Atom-Girl.jpg",
        "name": "Atom Girl",
        "alterEgo": "Salu Digby",
        "height": 175,
        "weight": 61,
        "years": 25,
        "gender": "woman"
    },
    // Marvel Comics | Black Widow | Natalia Alianovna Romanova | Mastery of magic | 170cm | 59kg | woman | mutant | Tales of Suspense #52 (April, 1964) | red | Not good enough
    {
        "id": 18,
        "img": "Black-Widow.jpg",
        "name": "Black Widow",
        "alterEgo": "Natalia Alianovna Romanova",
        "height": 170,
        "weight": 59,
        "years": 25,
        "gender": "woman"
    },
    // Marvel Comics | Deadpool | Wade Wilson | Superhuman strength | 188cm | 95kg | man | mutant | New Mutants #98 (February, 1991) | brown | Neutral
    {
        "id": 19,
        "img": "Deadpool.jpg",
        "name": "Deadpool",
        "alterEgo": "Wade Wilson",
        "height": 188,
        "weight": 95,
        "years": 25,
        "gender": "man"
    },
    // Marvel Comics | Phoenix | Jean Grey-Summers | Mastery of magic | 168cm | 52kg | woman | mutant | X-Men #1 (September, 1963) | red | Not good enough
    {
        "id": 20,
        "img": "Phoenix.jpg",
        "name": "Phoenix",
        "alterEgo": "Jean Grey-Summers",
        "height": 168,
        "weight": 52,
        "years": 25,
        "gender": "woman"
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
    // Marvel Comics | Goblin Queen | Madelyne Jennifer Pryor | Mastery of magic | 183cm | 77kg | woman | mutant | Uncanny X-Men #168 | red | Bad
    {
        "id": 23,
        "img": "Goblin-Queen.jpg",
        "name": "Goblin Queen",
        "alterEgo": "Madelyne Jennifer Pryor",
        "height": 183,
        "weight": 77,
        "years": 25,
        "gender": "woman"
    },
    // Marvel Comics | Hawkgirl | Kendra Saunders | Mastery of magic | 175cm | 61kg | woman | mutant | Uncanny X-Men #128 | red | Good
    {
        "id": 24,
        "img": "Hawkgirl.jpg",
        "name": "Hawkgirl",
        "alterEgo": "Kendra Saunders",
        "height": 175,
        "weight": 61,
        "years": 25,
        "gender": "woman"
    },
    // Marvel Comics | Quicksilver | Pietro Django Maximoff | Superhuman strength | 183cm | 79kg | man | mutant | X-MEN Vol. 1 #4 | white | Not good enough
    {
        "id": 25,
        "img": "Quicksilver.jpg",
        "name": "Quicksilver",
        "alterEgo": "Pietro Django Maximoff",
        "height": 183,
        "weight": 79,
        "years": 25,
        "gender": "man"
    },
    // DC Comics | John Constantine | John Constantine | Superhuman strength | 183cm | 89kg | man | human | Swamp Thing Vol 2 #37 (June, 1985) | blond | Not good enough
    {
        "id": 26,
        "img": "John-Constantine.jpg",
        "name": "John Constantine",
        "alterEgo": "John Constantine",
        "height": 183,
        "weight": 89,
        "years": 25,
        "gender": "man"
    },
    // Marvel Comics | Shadow King | Amahl Farouk | Superhuman strength | 185cm | 249kg | man | alien | X-Men #117 (1979) | no hair | Not good enough
    {
        "id": 27,
        "img": "Shadow-King.jpg",
        "name": "Shadow King",
        "alterEgo": "Amahl Farouk",
        "height": 185,
        "weight": 249,
        "years": 25,
        "gender": "man"
    },
    // Marvel Comics | Siryn | Theresa Rourke Cassidy | Superhuman strength | 168cm | 52kg | woman | mutant | Spider-Woman (first series) #37 | red | Bad
    {
        "id": 28,
        "img": "Siryn.jpg",
        "name": "Siryn",
        "alterEgo": "Theresa Rourke Cassidy",
        "height": 168,
        "weight": 52,
        "years": 25,
        "gender": "woman"
    },
    // DC Comics | Red Hood | Jason Todd | Superhuman strength | 183cm | 81kg | man | human | (as Jason Todd) Batman #357 | red | Bad
    {
        "id": 29,
        "img": "Red-Hood.jpg",
        "name": "Red Hood",
        "alterEgo": "Jason Todd",
        "height": 183,
        "weight": 81,
        "years": 25,
        "gender": "man"
    },
    // DC Comics | Sportsmaster | Lawrence Crock | Superhuman strength | 180cm | 90kg | man | human | (as Jason Todd) Batman #177 | black | Strange
    {
        "id": 30,
        "img": "Sportsmaster.jpg",
        "name": "Sportsmaster",
        "alterEgo": "Lawrence Crock",
        "height": 180,
        "weight": 90,
        "years": 25,
        "gender": "man"
    },
    // DC Comics | General Zod | Dru-Zod | Superhuman strength | 190cm | 100kg | man | alien | Action Comics #845 | black | Bad
    {
        "id": 31,
        "img": "General-Zod.jpg",
        "name": "General Zod",
        "alterEgo": "Dru-Zod",
        "height": 190,
        "weight": 100,
        "years": 25,
        "gender": "man"
    }
];
//characters[0].