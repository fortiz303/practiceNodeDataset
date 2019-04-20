//DEFINING MODULES
const fs = require ('fs');
//STORING OUR JSON FILE IN 'DATA'
let data = fs.readFileSync('datasets/film_locations.json','utf8');
//PARSING OUR 'DATA' INTO 'FILMLOCATION'
filmLocation = JSON.parse(data);
//ARRAY TO STORE YEAR DATA WHEN FILMS WERE SHOT
filmYear = [];
//LOOP
for (let i = 0; i < filmLocation.data.length; i++){
//STORING VARIABLE WHEN OUR FILMS WERE SHOT
let filmShotAge = filmLocation.data[i][9];
//PUSHING OUR RESULTS TO 'FILMYEAR' ARRAY
filmYear.push(filmShotAge);
}
//ANSWER TO OUR FIRST QUESTION
console.log(`This is the oldest movie on record: ${Math.min(...filmYear)}` );
//ANSWER TO OUR SECOND QUESTION
console.log(`This is the newest movie on record: ${Math.max(...filmYear)}` );

//PRACTICING FOR IN LOOPS
for (var key in filmYear){
console.log(key + ': ' + filmYear[key])
}

