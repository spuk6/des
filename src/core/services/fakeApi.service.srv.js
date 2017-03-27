/* @ngInject */
export default function FakeApi () {
  const api = require('./fakeApi');
  const exports = {
    loadArticles
  };

  return exports;

  ///////////////

  function loadArticles(params) {
    return api.loadArticles(params);
  }
}
