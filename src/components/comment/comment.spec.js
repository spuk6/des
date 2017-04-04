'use strict';
import CommentModule, { CommentComponent } from './index.js';

describe('Comment Component', () => {
  let ctrl;

    beforeEach(window.module(CommentModule));

    beforeEach(window.inject(($componentController) => {
          ctrl = $componentController(CommentComponent.selector, {
          $state: {}
        });
    }));

});
