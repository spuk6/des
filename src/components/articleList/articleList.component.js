import './articleList.less';
import template from './articleList.html';

export let ArticleListComponent = {
    templateUrl: template,
    selector: 'articleList',
    bindings: {
        articles: '=',
        showLoading: '<',
        showLoadButton: '<',
        loadArticles: '&',
        selectedArticle: '='
    },
    controllerAs: "model",
    controller: class articleListCtrl {
        constructor($scope, $state, $location, $anchorScroll) {
            var model = this;
            model.openArticle = function (article) {
                model.selectedArticle = article;

                // include article id in the url
                $state.go("home.article", {
                    articleId: article.id
                });

                // go to top, so you will see selected article
                $location.hash('article-content');
                $anchorScroll();
            };

            // trigger parent function loadArticles()
            model.loadMore = function() {
                model.loadArticles();
            }

        }
    }
}
;

