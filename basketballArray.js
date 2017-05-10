'use strict';

//Return a number representing the number of points scored (left number) by a team in Los Angeles.

const basketballResults = [
  ['Dallas Mavericks', '492:513'],
  // ['Los Angeles Lakers', '641:637'],
  ['Houston Rockets', '494:458'],
  // ['Los Angeles Clippers', '382:422'],
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
  // your awesome code here
  let losAngelesWins = [];
  array.map(function(basketballGame){
    // console.log(basketballGame[0].startsWith('Los Angeles')); //returns true
    if(basketballGame[0].startsWith('Los Angeles')){
      // console.log(basketballGame[0]);
      // console.log(basketballGame[1]);
      console.log(basketballGame); //prints list of 2 arrays
      losAngelesWins.push(basketballGame);
      // return basketballGame;
      console.log(losAngelesWins); //makes an array of arrays of wins
      return losAngelesWins;
    }
    else if (losAngelesWins.length === 0) {
      console.log('No wins for Los Angeles!!');
      // return "No wins for Los Angeles!";
    }
  });
}

getLosAngelesPoints(basketballResults);
