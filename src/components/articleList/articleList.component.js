import './articleList.less';
import template from './articleList.html';

export let ArticleListComponent = {
    templateUrl: template,
    selector: 'articleList',
    bindings: {},
    controllerAs: "model",
    controller: class articleListCtrl {
        constructor($scope, $state, FakeApi) {
            var model = this;
            model.componentTitle = "Article list";
            model.articles = [];
            var loadParams = {
                offset: 0,
                limit: 4
            };
            
            model.addArticles = function () {
                model.showLoading = true;
                FakeApi.loadArticles(loadParams).then(function (result) {
                    model.articles = model.articles.concat(result.data);
                    loadParams.offset += 4;
                    $scope.$applyAsync();
                    model.showLoading = false;

                    model.showLoadButton = loadParams.offset >= result.totalCount ? false : true;
                });
            };

            model.addArticles();
        }
    }
};

