'use strict';
import SingleArticleModule, { SingleArticleComponent } from './index.js';

describe('ArticleList Component', () => {
  let ctrl;

  beforeEach(window.module(SingleArticleModule));

  beforeEach(window.inject(($componentController) => {
    ctrl = $componentController(SingleArticleComponent.selector, {
      $state: {}
    });
  }));

});
