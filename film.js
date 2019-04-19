const fs = require ('fs');
//STORE FILM LOCATIONS JSOE FILE INTO A JSON FILE
let data = fs.readFileSync('datasets/film_locations.json', 'utf8');
//PARSING THE VARIABLE DATA
let filmLocations = JSON.parse(data);
//STORE FILM LOCATION DATA IN LOCATIONS VARIABLE
let locations = filmLocations.data;
//CREATE AN EMPTY OBJECT
let filmYears = {};
//

/*
//CREATE A LOOP
for(let i = 0; i < locations.length; i++){
 let currentYearBeingLooped = filmYears[i]; 
 if(filmYears.hasOwnProperty(currentYearBeingLooped)== false){
 filmYears[currentYearBeingLooped] = 1;
 } else {
 filmYears[currentYearBeingLooped] = filmYears[currentYearBeingLooped] + 1;
 }
}
*/

//console.log(filmYears)

for(let i = 0; i < locations.length; i++){
 let everyYear = locations[i][9];
 if(filmYears.hasOwnProperty(everyYear)==false){
 //BRACKET NOTATION TO CREATE NEW ARRAY VALUES
 filmYears[everyYear] = 1;
 } else {
 filmYears[everyYear] = filmYears[everyYear] + 1;
 }
}

console.log(filmYears)

console.log(filmYears['2015']);

let myArray = [];

for(let item in filmYears){
console.log(filmYears[item]);
myArray.push(filmYears[item]);
}

console.log('the most movies being made in a single year was: ' + Math.max(...myArray));
/*

let myYears = [];
for (let i = 0; i < locations.length; i++ ){
 if(filmYears.length){
 
 }
}
*/
