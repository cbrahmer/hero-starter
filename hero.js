/* 

  The only function that is required in this file is the "move" function

  You MUST export the move function, in order for your code to run
  So, at the bottom of this code, keep the line that says:

  module.exports = move;

  The "move" function must return "North", "South", "East", "West", or "Stay"
  (Anything else will be interpreted by the game as "Stay")
  
  The "move" function should accept two arguments that the website will be passing in: 
    - a "gameData" object which holds all information about the current state
      of the battle

    - a "helpers" object, which contains useful helper functions
      - check out the helpers.js file to see what is available to you

    (the details of these objects can be found on javascriptbattle.com/rules)

  This file contains four example heroes that you can use as is, adapt, or
  take ideas from and implement your own version. Simply uncomment your desired
  hero and see what happens in tomorrow's battle!

  Such is the power of Javascript!!!

*/

//TL;DR: If you are new, just uncomment the 'move' function that you think sounds like fun!
//       (and comment out all the other move functions)


// // The "Northerner"
// // This hero will walk North.  Always.
// var move = function(gameData, helpers) {
//   var myHero = gameData.activeHero;
//   return 'North';
// };

// // The "Blind Man"
// // This hero will walk in a random direction each turn.
// var move = function(gameData, helpers) {
//   var myHero = gameData.activeHero;
//   var choices = ['North', 'South', 'East', 'West'];
//   return choices[Math.floor(Math.random()*4)];
// };

// // The "Priest"
// // This hero will heal nearby friendly champions.
// var move = function(gameData, helpers) {
//   var myHero = gameData.activeHero;
//   if (myHero.health < 60) {
//     return helpers.findNearestHealthWell(gameData);
//   } else {
//     return helpers.findNearestTeamMember(gameData);
//   }
// };

// // The "Unwise Assassin"
// // This hero will attempt to kill the closest enemy hero. No matter what.
// var move = function(gameData, helpers) {
//   var myHero = gameData.activeHero;
//   if (myHero.health < 30) {
//     return helpers.findNearestHealthWell(gameData);
//   } else {
//     return helpers.findNearestEnemy(gameData);
//   }
// };

// // The "Careful Assassin"
// // This hero will attempt to kill the closest weaker enemy hero.
// var move = function(gameData, helpers) {
//   var myHero = gameData.activeHero;
//   if (myHero.health < 50) {
//     return helpers.findNearestHealthWell(gameData);
//   } else {
//     return helpers.findNearestWeakerEnemy(gameData);
//   }
// };

// // The "Safe Diamond Miner"
//var move = function(gameData, helpers) {
//  var myHero = gameData.activeHero;
//
//  //Get stats on the nearest health well
//  var healthWellStats = helpers.findNearestObjectDirectionAndDistance(gameData.board, myHero, function(boardTile) {
//    if (boardTile.type === 'HealthWell') {
//      return true;
//    }
//  });
//  var distanceToHealthWell = healthWellStats.distance;
//  var directionToHealthWell = healthWellStats.direction;
//
//
//  if (myHero.health < 40) {
//    //Heal no matter what if low health
//    return directionToHealthWell;
//  } else if (myHero.health < 100 && distanceToHealthWell === 1) {
//    //Heal if you aren't full health and are close to a health well already
//    return directionToHealthWell;
//  } else {
//    //If healthy, go capture a diamond mine!
//    return helpers.findNearestNonTeamDiamondMine(gameData);
//  }
//};

// // The "Selfish Diamond Miner"
// // This hero will attempt to capture diamond mines (even those owned by teammates).
// var move = function(gameData, helpers) {
//   var myHero = gameData.activeHero;

//   //Get stats on the nearest health well
//   var healthWellStats = helpers.findNearestObjectDirectionAndDistance(gameData.board, myHero, function(boardTile) {
//     if (boardTile.type === 'HealthWell') {
//       return true;
//     }
//   });

//   var distanceToHealthWell = healthWellStats.distance;
//   var directionToHealthWell = healthWellStats.direction;

//   if (myHero.health < 40) {
//     //Heal no matter what if low health
//     return directionToHealthWell;
//   } else if (myHero.health < 100 && distanceToHealthWell === 1) {
//     //Heal if you aren't full health and are close to a health well already
//     return directionToHealthWell;
//   } else {
//     //If healthy, go capture a diamond mine!
//     return helpers.findNearestUnownedDiamondMine(gameData);
//   }
// };

// // The "Coward"
// // This hero will try really hard not to die.
// var move = function(gameData, helpers) {
//   return helpers.findNearestHealthWell(gameData);
// }

var lastDirection = 0;

// The "Dodgy Fellow" ... always moving towards safety
var move = function(gameData, helpers) {
    var myMove = 'Stay';

    // settings
    var allowMineJacking = false;
    var allowGraveJacking = false;
    var healthThreshold = 50;
    var diamondMineHealthThreshold = 60;
    var minHealthThreshold = 30;

    var directions = [];
    directions.push('North');
    directions.push('East');
    directions.push('South');
    directions.push('West');

    var myHero = gameData.activeHero;

    // aroundMe[X] will return false if you can't move there
    var aroundMe = helpers.aroundMe(gameData, directions);

    ///////////////////////////////////////
    // find the safest move
    ///////////////////////////////////////
    var unoccupiedMove = '';
    var diamondMove = '';
    var healthWellMove = '';
    var weakestEnemyMove = '';
    var isStrongerEnemyAround = false;
    var roamMoves = [];

    // try to find DiamondMine space
    for(var i = 0; i < aroundMe.length; i++) {
        var tile = aroundMe[i];

        if (tile !== false) {
            // try to find Unoccupied space
            if (tile.type === 'Unoccupied') {
                if (allowGraveJacking === true || tile.subType !== 'Bones') {
                    unoccupiedMove = directions[i];
                    roamMoves.push(i);
                }
            }

            // try to find DiamondMine space
            if (tile.type === 'DiamondMine' && myHero.health >= diamondMineHealthThreshold) {
                if (allowMineJacking === true || tile.owner == undefined)
                    diamondMove = directions[i];
            }

            // try to find HealthWell move
            if (tile.type === 'HealthWell' && myHero.health <= healthThreshold) {
                healthWellMove = directions[i];
            }

            var lowestEnemyHealth = 100;
            var lowestEnemyIndex = -1;

            // try to find weakest enemy
            if (tile.type === 'Hero' && tile.subType !== myHero.subType) {
                // make sure they have lower health than me!
                if (tile.health < lowestEnemyHealth && tile.health < myHero.health) {
                    lowestEnemyIndex = i;
                }

                if (tile.health > myHero.health) {
                    isStrongerEnemyAround = true;
                }
            }

            if (lowestEnemyIndex > -1) {
                weakestEnemyMove = directions[lowestEnemyIndex];
            }
        }
    }

    ///////////////////////////////////
    // I like to move it, move it
    ///////////////////////////////////
    if (myHero.health <= minHealthThreshold) {
        console.log('get health now!');

        myMove = helpers.findNearestHealthWell(gameData);
    }
    else if (weakestEnemyMove !== '') {
        console.log('weakestEnemyMove');

        myMove = weakestEnemyMove;
    }
    // get outta there!
    else if (isStrongerEnemyAround === true && unoccupiedMove !== '') {
        console.log('get outta here: ' + unoccupiedMove);

        myMove = unoccupiedMove;
    }
    else if (healthWellMove !== '') {
        console.log('healthyWellMove');

        myMove = healthWellMove;
    }
    else if (diamondMove !== '') {
        console.log('diamondMove');

        myMove = diamondMove;
    }
//    else if (unoccupiedMove !== '') {
//        myMove = unoccupiedMove;
//    }
    else {
        if (lastDirection === 4) {
            lastDirection = 0;
        }

        if (aroundMe[lastDirection] !== false) {
            console.log('roaming: ' + directions[lastDirection]);
            myMove = directions[lastDirection];
        }
        else {
            lastDirection++;
        }
    }
//    // roam the board randomly
//    else {
//        if (roamMoves.length > 0) {
//            myMove = directions[Math.floor(Math.random()*roamMoves.length)];
//        }
//    }

    console.log('health: ' + myHero.health);
    console.log('diamonds: ' + myHero.diamondsEarned);

    return myMove;
};

// Export the move function here
module.exports = move;
