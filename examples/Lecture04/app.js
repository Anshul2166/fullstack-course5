(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
	$scope.name="Anshul";
	$scope.sayHello=function(){
		return "Hello Coursera!";
	}
	

});

})();
