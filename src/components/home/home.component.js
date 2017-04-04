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

            // Set initial params for Article call
            var loadParams = {
                offset: 0,
                limit: 4
            };

            model.loadArticles = function () {
                model.showLoading = true;
                FakeApi.loadArticles(loadParams).then(function (result) {

                    // add newly loaded articles
                    model.articles = model.articles.concat(result.data);

                    // increment the offset
                    loadParams.offset += 4;

                    // hide loading
                    model.showLoading = false;

                    // hide Load more button if there are no more articles
                    model.showLoadButton = loadParams.offset >= result.totalCount ? false : true;

                    $scope.$applyAsync();

                    // check if there is article id in the url and it is still not loaded in the article content
                    if($state.params.articleId && !model.selectedArticle.id && model.showLoadButton) {
                        // load more articles
                        selectArticle();
                    } else if(!model.showLoadButton && !model.selectedArticle.id) {
                        // the id in the url is invalid so redirect to home
                        $state.go('home');
                    }
                });
            };
            model.loadArticles();

            var selectArticle = function() {

                // check if there is an article loaded with current id
                var getArticle = model.articles.filter(function(article){
                    return article.id == $state.params.articleId
                });
                if(getArticle[0]){
                    // article found!
                    model.selectedArticle = getArticle[0];
                } else {
                    // load more articles as there none loaded with the selected Id
                    model.loadArticles();
                }
            }

        }
    }
};
