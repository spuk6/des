import './home.less';
import template from './home.html';

export let HomeComponent = {
    templateUrl: template,
    selector: 'home',
    bindings: {},
    controllerAs: "model",
    controller: class HomeCtrl
    {
        constructor($scope, $state, FakeApi)
        {
            var model = this;
            model.articles = [];
            model.selectedArticle = {};
            var loadParams = {
                offset: 0,
                limit: 4
            };
            model.addArticles = function () {
                console.log('add Art');
                model.showLoading = true;
                FakeApi.loadArticles(loadParams).then(function (result) {
                    model.articles = model.articles.concat(result.data);
                    loadParams.offset += 4;
                    $scope.$applyAsync();
                    model.showLoading = false;
                    model.showLoadButton = loadParams.offset >= result.totalCount ? false : true;
                    if($state.params.articleId && !model.selectedArticle.id) {
                        var getArticle = model.articles.filter(function(article){
                            return article.id == $state.params.articleId
                        });
                        model.selectedArticle = getArticle[0];
                    }
                });
            };
            model.addArticles();

        }
    }
};
