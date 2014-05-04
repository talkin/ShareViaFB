var myCar = angular.module('my-car', ['AngularSocialShare']);

myCar.controller('CarselectionCtrl', ['CarSelectionService', '$scope',
    function(CarSelectionService, $scope) {
        $scope.pizzaName = "test pizza name"
        $scope.pizzaDescription = "welcome to taste it"
        $scope.currentUrl = location.href;

        CarSelectionService.getCarMakers().then(function(res) {
            $scope.carMakers = res.data;
        })

        $scope.isCarModelDisable = function() {
            return $scope.carMaker === "" || $scope.carMaker === undefined;
        }

        $scope.makerChange = function() {
            $scope.carModel = '';
            $scope.carModels = CarSelectionService.getCarModels($scope.carMaker);
        }
    }
]);

myCar.config(function($locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
});

myCar.run(function($FB) {
    $FB.init('720831924614571');
});
