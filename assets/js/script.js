// Déclaration d'une module
var voiture = angular.module('voiture', []); // Les crochets c
voiture.controller('voitures', function($scope, $http) {
  $http.get("assets/js/voiture.json")
   .then(function(response){ //.then nous permet de recupérer des donnés sur un fichier externe. 
     $scope.voitures = response.data;
      });
     });
