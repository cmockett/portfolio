angular.module("portfolio", [])

var portfolioFunction = function($scope){
	
	$scope.bioHide = true
	$scope.skillsHide = true
	$scope.projectsHide = true

	
	$scope.bioButton = function(){
		$scope.bioHide = false
		$scope.skillsHide = true
		$scope.projectsHide = true
	}

	$scope.skillsButton = function(){
		$scope.skillsHide = false
		$scope.bioHide = true
		$scope.projectsHide = true
	}

	$scope.projectsButton = function(){
		$scope.projectsHide = false
		$scope.skillsHide = true
		$scope.bioHide = true
	}







}







angular.module("portfolio").controller("portfolioController", ['$scope', portfolioFunction])