import CommentModule from './comment'
import CommentController from './comment.controller.js';
import CommentComponent from './comment.component.js';
import CommentTemplate from './comment.html';

describe('Comment', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CommentModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CommentController();
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
      expect(CommentTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CommentComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CommentTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CommentController);
      });
  });
});
