import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppCore from '../../core';
import { ArticleListComponent } from './articleList.component';

export * from './articleList.component';

export default angular.module('articleList', [
  AppCore,
  uiRouter
])
  .config(config)
  .component(ArticleListComponent.selector, ArticleListComponent)
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
