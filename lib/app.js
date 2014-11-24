var myApp = angular.module('myApp' , ['ionic','serviceDemo']);
myApp.controller('myCtrl',function($scope,myService){
	  	$scope.flag=false;
	  	$scope.user={name:'',date:''};
	  	$scope.showMsg=function(){
	  		$scope.flag=true;
	  		$scope.user.name=myService.test();
	  		$scope.user.date=new Date().toLocaleString();
	  	}
});
