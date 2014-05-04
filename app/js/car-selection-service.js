angular.module('my-car').factory('CarSelectionService', ['$http',
  function($http) {
    return {
      getCarMakers: function() {
        return $http.get('/makers');
      },
      getCarModels: function(carMaker) {
        if (carMaker === 'A') {
          return ['A3', 'A4', 'A6'];
        } else {
          return ['God', 'Godness'];
        }
      }
    };
  }
]);