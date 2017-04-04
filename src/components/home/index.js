import angular from 'angular';
import { HomeComponent } from './home.component';

export * from './home.component';

export default angular.module('home', [])
  .component(HomeComponent.selector, HomeComponent)
.name;
