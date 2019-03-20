import angular from 'angular';
import './vendors';

//controllers
import { loginController } from './controllers/login.js'

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){

    console.log('Config');

    $stateProvider
    .state('login', {
        url: '/login',
        views: {
            'header': {
                template: "<span></span>"
            },
            'mainview': {
                template: require('../templates/login.html'),
                controller: 'loginController'
            }
        }
    })
    .state('home', {
        url: '/home',
        views: {
            'header': {
                templateUrl: './src/views/header.html',
            },
            'mainview': {
                templateUrl: './src/views/home.html',
                controller: 'homeController'
            }
        },
        onEnter: function() {
            console.log("Entered home");
        }
    })
    .state('profile', {
        url: '/profile',
        views: {
            'header': {
                templateUrl: './src/views/header.html',
            },
            'mainview': {
                templateUrl: './src/views/profile.html',
                controller: 'profileController'
            }
        }
    })
    .state('settings', {
        url: '/settings',
        views: {
            'header': {
                templateUrl: './src/views/header.html',
            },
            'mainview': {
                templateUrl: './src/views/settings.html',
                controller: 'settingsController'
            }
        }
    })
    
    $urlRouterProvider.otherwise('/login');
  })

  //controller registrations
  .controller('loginController', loginController);




  let app = () => {
    return {
      template: require('../templates/app.html'),
      controller: 'AppCtrl',
      controllerAs: 'app'
    }
  };
  
  class AppCtrl {
    constructor() {
      this.url = 'https://github.com/preboot/angular-webpack';
    }
  }

export default MODULE_NAME;