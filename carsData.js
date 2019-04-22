//USE THE FS PACKAGE TO READ FILES
const fs = require ('fs');
//READ CARS.JSON AND STORE INTO DATA VARIABLE.
let data = fs.readFileSync('datasets/cars.json', 'utf8');
//CONVERT DATA STRING INTO ACTUAL JAVASCRIPT OBJECTS
let carsObjects = JSON.parse(data);
console.log(carsObjects)
//MAKE 'carsArrays' VARIABLE)
carsArrays = carsObjects.Makes;

//CREATE AN OBJECT THAT WILL HOLD ALL OF OUR COUNTRIES
let countryCounter = {};

//GO THRU ALL THE CARS...
for (let i = 0; i < carsArrays.length; i++){
//take the country of the current manufacturer
let currentCountry = carsArrays[i].make_country;
//check if this country already exists in our object on line 36
if (countryCounter.hasOwnProperty(currentCountry) == false) {
//if it doesnt exist add the property with the same name of the country
countryCounter[currentCountry] = 1;
} else {
//if it already exists, just add a one to that property
  countryCounter[currentCountry] = countryCounter[currentCountry] + 1;
  }
}
console.log(countryCounter)


/*
let countryNames = [];
let countryCounter = [];

for (let i = 0; i < carsObjects.Makes.length; i++){
 if(countryNames.indexOf(carsObjects.Makes[i].make_country) < 0) {
  countryNames.push(carsObjects.Makes[i].make_country);
  countryCounter.push(1);
 } else {
   countryCounter[countryNames.indexOf(carsObjects.Makes[i].make_country)]++;
  }
}

console.log(countryNames);
console.log(countryCounter);
*/
