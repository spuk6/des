import './css/style.less';
require('font-awesome-webpack');

import angular from 'angular';
// import Angular2To1 from 'angular2to1';
import AngularUiRouter from 'angular-ui-router';
import AngularAnimate from 'angular-animate';
import AngularSanitize from 'angular-sanitize';
import AngularBootstrap from 'angular-ui-bootstrap';
/*eslint-disable */
import LocalStorageModule from 'angular-local-storage';
/*eslint-enable */
import AppCore from './core';
import { AppComponent } from './app.component';

import Home from './components/home';
import ArticleList from './components/articleList';
import SingleArticle from './components/singleArticle';
import Comment from './components/comment';

const appName = 'myApp';

angular.module(appName, [
  // framework wide components
  AngularUiRouter,
  AngularAnimate,
  AngularSanitize,
  AngularBootstrap,

  // services
  'LocalStorageModule',
  AppCore,

  // ui-components
  Home,
  ArticleList,
  SingleArticle,
  Comment
])
.config(config)
.component(AppComponent.selector, AppComponent);

/* @ngInject */
function config ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

  localStorageServiceProvider.setPrefix(appName);

  $stateProvider
      .state('home', {
        url: '/',
        component: 'home'
      }).state('home.article', {
        url: 'article/:articleId',
        component: 'singleArticle'
      });

  $urlRouterProvider.otherwise('/');
}

angular.element(document).ready(() => {
  angular.bootstrap(document, [appName]);
});
