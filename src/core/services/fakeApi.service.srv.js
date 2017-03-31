/* @ngInject */
export default function FakeApi () {
  const api = require('./fakeApi');
  const exports = {
    loadArticles,
    loadComments,
    addComment
  };

  return exports;

  ///////////////

  function loadArticles(params) {
    return api.loadArticles(params);
  }

  function loadComments(params) {
    return api.loadComments(params);
  }

  function addComment(params) {
    return api.addComment(params);
  }
}
