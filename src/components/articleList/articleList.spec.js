'use strict';
import ArticleListModule, { ArticleListComponent } from './index.js';

describe('ArticleList Component', () => {
  let ctrl;

  beforeEach(window.module(ArticleListModule));

  beforeEach(window.inject(($componentController) => {
    ctrl = $componentController(ArticleListComponent.selector, {
      $state: {}
    });
  }));

  it('should have openArticle defined', function() {
    expect(ctrl.openArticle).toBeDefined();
  });

  it('should have loadMore defined', function() {
    expect(ctrl.loadMore).toBeDefined();
  });

});
