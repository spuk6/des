import angular from 'angular';
import { ArticleListComponent } from './articleList.component';

export * from './articleList.component';

export default angular.module('articleList', [])
  .component(ArticleListComponent.selector, ArticleListComponent)
.name;
