import './singleArticle.less';
import template from './singleArticle.html';

export let SingleArticleComponent = {
    templateUrl: template,
    selector: 'singleArticle',
    bindings: {
        selectedArticle: '='
    },
    transclude: true,
    controllerAs: "model",
    controller: class singleArticleCtrl
{
    constructor($scope, FakeApi)
    {
        var model = this;
        model.comments = [];
        $scope.$watch('model.selectedArticle', function (newArticle) {
            if (newArticle.createdAt) {
                loadComments(newArticle.id);
            }
        });
        //$scope.$watch('model.comments', function (newArticle) {
        //    console.log(newArticle);
        //});
        var loadComments = function (articleId) {
            FakeApi.loadComments({articleId: articleId}).then(function (result) {
                model.comments = model.comments.concat(result.data);
                console.log(result.data);
                $scope.$applyAsync();
            });
        }
    }
}
}
;

