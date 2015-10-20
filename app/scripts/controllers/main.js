'use strict';


angular.module('RPSApp').controller('MainCtrl', ['$scope', 'RPSService',  function ($scope,  RPSService) {

    $scope.inGame = false;
    $scope.humanMode = false;
    $scope.choices = RPSService.getChoices();

    $scope.result = function() {
        return RPSService.result();
    };

    $scope.selectedChoice = function() {
        return RPSService.selectedChoice();
    };

    $scope.computerChoice = function() {
        return RPSService.computerChoice();
    };

    $scope.playComputer = function() {
        $scope.inGame = true;
        $scope.humanMode = false;
        RPSService.playComputer();

    };

    $scope.playHuman = function() {
        $scope.inGame = true;
        $scope.humanMode = true;
    };

    $scope.userPick = function(choice) {
        RPSService.playHuman(choice);
    };

    $scope.resetGame = function() {
        $scope.inGame = false;
        $scope.humanMode = false;
        RPSService.resetGame();
    };


}]);
