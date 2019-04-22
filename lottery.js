//REQUIRE THE MODULES
const fs = require ('fs');
//READ THE FILE AND CONVERT IT TO UTF8
let data = fs.readFileSync('lottery.json','utf8');
//PARSE THE DATA AND STORE IT IN THE 'LOTTERYDATA' VARIABLE
lotteryData = JSON.parse(data);
//LOTTERY WINNING NUMBERS ARE ALL INSIDE THIS
let lotteryWinners = lotteryData.data
//WHERE ARE THE LOTTERY WINNERS LOCATED
//lotteryWinners[i][9]
let myArray = []; 

for(let i = 0; i < lotteryWinners.length; i++){
  let winners = lotteryWinners[i][9];
  myArray.push(winners.split(' '));
//  console.log(typeof winners)
// if(winners = '10000'){
// console.log('number 10000 appeared and this is not functioning correctly')
// }
}
console.log(myArray)










//CREATE AN EMPTY OBJECT OF WINNERS
//let winnersObj = {};
//CREATE LOOP TO STORE ARRAY OF WINNING NUMBERS
//for(let i = 0; i < lotteryWinners.length; i++){
//let winners = lotteryWinners[i][9];
//if(winnersObj.hasOwnProperty == winners){
// winnersObj = winners + 1;
// } else {
//  winnersObj[winners] = winners + 1
// }
//}
//console.log(winnersObj)
