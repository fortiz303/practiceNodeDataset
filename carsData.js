//USE THE FS PACKAGE TO READ FILES
const fs = require ('fs');
//READ CARS.JSON AND  STORE INTO DATA VARIABLE.
let data = fs.readFileSync('datasets/cars.json', 'utf8');
//CONVERT DATA STRING INTO ACTUAL JAVASCRIPT OBJECTS
let carsObjects = JSON.parse(data);
//CONSOLE LOG THE CARSOBJECT

//console.log(carsObjects);

let carsArray = carsObjects.Makes;

//FIND THE MOST COMMON MANUFACTURER (t's method)
/*
let countUK = 0;
let countUS = 0;

for (let i = 0; i < carsArray.length; i++){
 if(carsArray[i].make_country == 'UK'){
   countUK++;
 } else if (carsArray[i].make_country == 'USA'){
    countUS++;
    }
}

console.log("uk count:" + countUK)

*/
//console.log(carsArray);

//console.log(carsArray[1].make_country);

//COUNT ALL COUNTRIES

//create an object that will hold all of our counts.
let countryCounter = {};

//go thru each of the car manufacturer...
for (let i = 0; i < carsArray.length; i++){
  //take the country of the current manufacturer
  let currentCountry = carsArray[i].make_country;// pretend value is uk
  //check if this country already exists in out object on line 36
  if (countryCounter.hasOwnProperty(currentCountry) == false) {
    //if it doesnt exist add the property with the same name of the country
    countryCounter[currentCountry] = 1;
  } else {
    // if it doesnt exists, just add a one to that property
     countryCounter[currentCountry] = countryCounter[currentCountry] + 1;
   }
}

console.log(countryCounter)



// this is part of the first code let countryNames = [];
// this is part of the first code let countryCounter = [];

/* this is part of the 1st code
for (let i = 0; i < carsArray.length; i++){
 if(countryNames.indexOf(carsArray[i].make_country) < 0) {
  countryNames.push(carsArray[i].make_country);
  countryCounter.push(1)
 } else {
        countryCounter[countryNames.indexOf(carsArray[i].make_country)]++;
  }
}

console.log(countryNames);
console.log(countryCounter);
*/
