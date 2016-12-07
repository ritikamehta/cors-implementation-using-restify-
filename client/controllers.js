'use strict';

var app = angular.module('myCORSApp',[]);

app.controller('HomeController', ['$http','$scope', function($http,$scope) {
    var self = this;
	$scope.btnClicked=function(){
	 var request = $.get('http://localhost:8181/cors');

      request.done(function (data) {
		var res=(JSON.stringify(data));
		$scope.$apply(function(){
		self.msg=res;
});
		
      });

      request.fail(function (error) {
        console.log(error);
      });

};
}]);
