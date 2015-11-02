angular.module('formExample', [])
  .controller('FormController', ['$scope', function($scope) {
    this.master = [];

    this.update = function(user) {
      this.master.push(angular.copy(user));
    };

    this.reset = function() {
      $scope.user = {};
    };

    this.test = function(user)  {
      
      var p = document.getElementsByClassName("container")[0]; 
    
      p.innerHTML += "<span> " + user.name + "</span><br />" ; 
      p.innerHTML += "<span> " + user.comment + "</span><br />" ; 
      p.innerHTML += "<span> " + user.avaliation + " estrelas</span><br /><br />" ; 
    }

    this.reset();
  }]);
