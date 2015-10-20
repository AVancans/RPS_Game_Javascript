'use strict';

angular.module('RPSApp').factory('RPSService', ['$timeout', function ($timeout) {

    var ROCK = 'ROCK';
    var PAPER = 'PAPER';
    var SCISSORS = 'SCISSORS';

    var DRAW = 'DRAW';
    var VICTORY = 'VICTORY';
    var DEFEAT = 'DEFEAT';

    var result = false;
    var selectedChoice = null;
    var computerChoice = null;

    var choices = [ROCK, PAPER, SCISSORS];

    var lookupTable = {};

    choices.forEach(function(choice, i) {
        lookupTable[choice] = {};
        lookupTable[choice][choice] = DRAW;
        lookupTable[choice][choices[(i+1)%3]] = VICTORY;
        lookupTable[choice][choices[(i+2)%3]] = DEFEAT;
    });

    function playComputer() {
        $timeout(function() {
            selectedChoice = choices[Math.floor(Math.random() * 3)];
            $timeout(function() {
                computerChoice = choices[Math.floor(Math.random() * 3)];
                $timeout(function() {
                    result  = lookupTable[computerChoice][selectedChoice];
                }, 1500);
            }, 2000);
        }, 2000);
    }

    function playHuman(choice) {
        selectedChoice = choice;
        $timeout(function() {
            computerChoice = choices[Math.floor(Math.random() * 3)];
            $timeout(function() {
                result  = lookupTable[computerChoice][selectedChoice];
            }, 1500);
        }, 2000);
    }

    function resetGame() {
        result = false;
        selectedChoice = null;
        computerChoice = null;
    }

    return  {
        playComputer: playComputer,
        playHuman: playHuman,
        resetGame: resetGame,
        result: function() {
            return result;
        },
        selectedChoice: function() {
            return selectedChoice;
        },
        computerChoice: function() {
            return computerChoice;
        },
        getChoices: function() {
            return choices;
        },
    };

}]);

