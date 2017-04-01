import './articleList.less';
import template from './articleList.html';

export let ArticleListComponent = {
    templateUrl: template,
    selector: 'articleList',
    bindings: {
        articles: '=',
        showLoading: '<',
        showLoadButton: '<',
        addArticles: '&',
        selectedArticle: '='
    },
    transclude: true,
    controllerAs: "model",
    controller: class articleListCtrl
{
    constructor($scope, $state)
    {
        var model = this;
        model.componentTitle = "Article list";
        model.openArticle = function (article) {
            model.selectedArticle = article;
            $state.go("home.article", {
                articleId: article.id
            });
        };

        model.loadMore = function() {
            model.addArticles();
        }

    }
}
}
;

