const fs = require ('fs');
let data = fs.readFileSync('datasets/film_locations.json');
filmLocations = JSON.parse(data);
locations = filmLocations.data;

let filmYears = {};

for(let i = 0; i < locations.length; i++){
 let everyYear = locations[i][9];
 if(filmYears.hasOwnProperty(everyYear)==false){
 //BRACKET NOTATION TO CREATE NEW ARRAY VALUES
 filmYears[everyYear] = 1;
 } else {
 filmYears[everyYear] = filmYears[everyYear] + 1;
 }
}
console.log(filmYears);


/*
let myArray = [];
for(let item in filmYears){
myArray.push(item);
};
console.log(myArray)
*/
/*WHATS WRONG??

for(let item in filmYears){
pushThis = filmYears[item];
myArrayOfYears.push(pushThis);
console.log(myArrayOfYears);
}
*/
