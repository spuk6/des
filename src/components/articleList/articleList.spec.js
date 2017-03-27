import ArticleListModule from './articleList'
import ArticleListController from './articleList.controller.js';
import ArticleListComponent from './articleList.component.js';
import ArticleListTemplate from './articleList.html';

describe('ArticleList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ArticleListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ArticleListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ArticleListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ArticleListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ArticleListTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ArticleListController);
      });
  });
});
