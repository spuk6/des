import SingleArticleModule from './singleArticle'
import SingleArticleController from './singleArticle.controller.js';
import SingleArticleComponent from './singleArticle.component.js';
import SingleArticleTemplate from './singleArticle.html';

describe('SingleArticle', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SingleArticleModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SingleArticleController();
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
      expect(SingleArticleTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SingleArticleComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SingleArticleTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SingleArticleController);
      });
  });
});
