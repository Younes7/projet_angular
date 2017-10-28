var classementApp = angular.module('classementApp',['ngRoute','ngAnimate']);

  classementApp.config(['$routeProvider',function ($routeProvider){

      $routeProvider
      .when('/home',{
      templateUrl:'views/home.html',
      controller:'mainController'
      })
      .when('/contact',{
      templateUrl:'views/contact.html'
      })
      .when('/liste',{
      templateUrl:'views/liste.html',
      controller:'mainController'
      }).otherwise({
      redirecTo:'/home'
      });

      }]);


      classementApp.directive('randomButeur',[function(){
      return{
        restrict:'E', //element
        scope: {
          buteurs:'=',
          title:'='
        },
        templateUrl:'views/random.html',
        transclude: true,
        replace: true,
        controller: function($scope){
          $scope.random = Math.floor(Math.random()*4);
        }
      };
    }]);

  classementApp.controller('mainController', function($scope, $http){
    $scope.buteurs = [
      {
        nom: 'Messi',
        prenom: 'Lionel',
        buts : 37,
        equipe: 'Barcelone',
        thumb: 'content/css/img/barcelona.png',
        photo: 'content/css/img/messi.png'
      },
      {
        nom: 'Cavani',
        prenom: 'Edinson',
        buts : 35,
        equipe: 'Paris',
        thumb: 'content/css/img/psg.png',
        photo: 'content/css/img/cavani.png'
      },
      {
        nom: 'Aubameyang',
        prenom: 'Pierre-Emmerick',
        buts : 31,
        equipe: 'Dortmund',
        thumb: 'content/css/img/dortmund.png',
        photo: 'content/css/img/aubameyang.png'
      },
      {
        nom:'Lewandowski',
        prenom:'Robert',
        buts : 30,
        equipe: 'Bayern',
        thumb: 'content/css/img/bayern.png',
        photo: 'content/css/img/lewandowski.png'
      },
      {
        nom: 'Kane',
        prenom: 'Harry',
        buts : 29,
        equipe: 'Tottenham',
        thumb: 'content/css/img/tottenham.png',
        photo: 'content/css/img/kane.png'
      },
      {
        nom:'Suarez',
        prenom:'luis',
        buts : 29,
        equipe: 'Barcelone',
        thumb: 'content/css/img/barcelona.png',
        photo: 'content/css/img/suarez.jpg'
      },
      {
        nom:'Dzeko',
        prenom:'Edin',
        buts : 29,
        equipe: 'As roma',
        thumb: 'content/css/img/roma.png',
        photo: 'content/css/img/dzeko.jpg'
      },
      {
        nom:'Lacazette',
        prenom:'Alexandre',
        buts : 28,
        equipe: 'Lyon',
        thumb: 'content/css/img/lyon.png',
        photo: 'content/css/img/lacazette.jpg'
      },
      {
        nom:'Mertens',
        prenom:'Dries',
        buts : 28,
        equipe: 'Naples',
        thumb: 'content/css/img/napoli.png',
        photo: 'content/css/img/mertens.jpg'
      },
      {
        nom:'Belotti',
        prenom:'Andrea',
        buts : 26,
        equipe: 'Torino',
        thumb: 'content/css/img/torino.png',
        photo: 'content/css/img/belotti.jpg'
      },
    ];

      $scope.effacer = function(){
        $scope.buteurs = [];
      };

});
