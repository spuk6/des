import './singleArticle.less';
import template from './singleArticle.html';

export let SingleArticleComponent = {
  templateUrl: template,
  selector: 'singleArticle',
  bindings: {},
  /* @ngInject */
  controller: class singleArticleCtrl {
    /* @ngInject */
    constructor($state) {
      // TODO - constructor arguments that should be available on "this"
      // should be added to the assign object
      Object.assign(this, { $state });
      this.title = 'SuperNova';
      this.note = 'Angular 1.5x, Es6, Karma, Jasmine & Webpack, ui-router';
    }
  }
};

