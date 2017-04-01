import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppCore from '../../core';
import { CommentComponent } from './comment.component';

export * from './comment.component';

export default angular.module('comment', [
  AppCore,
  uiRouter
])
  .config(config)
  .component(CommentComponent.selector, CommentComponent)
.name;
function config ($stateProvider) {
}
