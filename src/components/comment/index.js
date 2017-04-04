import angular from 'angular';
import { CommentComponent } from './comment.component';

export * from './comment.component';

export default angular.module('comment', [])
  .component(CommentComponent.selector, CommentComponent)
.name;
