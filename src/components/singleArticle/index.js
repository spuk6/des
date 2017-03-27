import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppCore from '../../core';
import { SingleArticleComponent } from './singleArticle.component';

export * from './singleArticle.component';

export default angular.module('singleArticle', [
  AppCore,
  uiRouter
])
  .config(config)
  .component(SingleArticleComponent.selector, SingleArticleComponent)
.name;
  // .config(config);

/* @ngInject */
function config ($stateProvider) {
  // $stateProvider
  //     .state('home', {
  //         url: '/home',
  //         template: '<other></other>'
  //     });
}
