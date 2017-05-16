'use strict';

//Return a number representing the number of points scored (left number) by a team in Los Angeles.

//Return total lost
//Use the opposite: loop or higher order function
//Try another higher order function
//Return an array of the results
//Return an object of the results
//When you are done, teach a teammate!

const basketballResults = [
  ['Dallas Mavericks', '492:513'],
  ['Los Angeles Lakers', '641:637'],
  ['Houston Rockets', '494:458'],
  ['Los Angeles Clippers', '382:422'],
  ['New Orleans Pelicans', '433:454'],
  ['Oklahoma City Thunder', '315:318'],
  ['Golden State Warriors', '559:503'],
  ['Memphis Grizzlies', '550:511'],
  ['Portland Trail Blazers', '527:520'],
  ['Minnesota Timberwolves', '495:494'],
  ['Utah Jazz', '399:402'],
  ['Sacramento Kings', '420:431'],
  ['San Antonio Spurs', '469:460'],
  ['Phoenix Suns', '523:522'],
  ['Denver Nuggets', '646:658']
];

function getLosAngelesPoints(array) {
  let totalWins = 0;
  let totalLoses = 0;
  let losAngelesWinsArray = [];
  let losAngelesWinsObject = {};
  array.filter(function(basketballGame){
    // console.log(basketballGame[0].startsWith('Los Angeles')); //returns true
    if(basketballGame[0].startsWith('Los Angeles')){
      // console.log(basketballGame);
      console.log(basketballGame[1].split(":")[0]);
       totalWins += parseInt(basketballGame[1].split(":")[0]);
       totalLoses += parseInt(basketballGame[1].split(":")[1]);
      // console.log(totalWins);
      // console.log(basketballGame[1]);
      // console.log(basketballGame); //prints list of 2 arrays
      // losAngelesWinsArray.push(basketballGame);
      // console.log(losAngelesWinsObject);
      // console.log(losAngelesWinsObject[basketballGame[0]] = basketballGame[1]);
      // console.log(losAngelesWinsObject);
      // return basketballGame;
      // console.log(losAngelesWinsArray); //makes an array of arrays of wins
      // return losAngelesWinsArray;

    }
    else if (losAngelesWinsArray.length <= 0) {
      // console.log('No wins for Los Angeles!!'); //edge case for no wins
      // return "No wins for Los Angeles!";
    }
      console.log(totalWins);
      console.log(totalLoses);
  });
}

getLosAngelesPoints(basketballResults);
