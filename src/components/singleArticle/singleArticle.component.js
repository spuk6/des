import './singleArticle.less';
import template from './singleArticle.html';

export let SingleArticleComponent = {
    templateUrl: template,
    selector: 'singleArticle',
    bindings: {
        selectedArticle: '='
    },
    controllerAs: "model",
    controller: class singleArticleCtrl
{
    constructor($scope, FakeApi)
    {
        var model = this;
        model.comments = [];
        
        $scope.$watch('model.selectedArticle', function (newArticle) {
            if (newArticle && newArticle.createdAt && newArticle.commentsCount > 0) {
                loadComments(newArticle.id);
            }
        });

        var loadComments = function (articleId) {
            model.loadingComments = true;
            FakeApi.loadComments({articleId: articleId}).then(function (result) {
                model.comments = model.comments.concat(result.data);
                model.loadingComments = false;
                $scope.$applyAsync();
            });
        };

        model.submitComment = function() {
            // trim the comment and check if it has length
            model.newCommentContent = model.newCommentContent.trim();
            if(model.newCommentContent.length > 0){

                model.loadingComments = true;
                var addCommentParams = {
                    articleId: model.selectedArticle.id,
                    text: angular.copy(model.newCommentContent)
                };

                model.newCommentContent = '';
                FakeApi.addComment(addCommentParams).then(function(result) {
                    //Set comment date
                    var newComment = result.data;
                    var dt = new Date();
                    newComment.createdAt = dt.getTime();

                    // Add number to new comment replies
                    newComment.repliesCount = 0;

                    // push the new comment to the current array
                    model.comments = model.comments.concat(newComment);

                    // clear comment form model
                    model.newCommentContent = '';

                    // increment current article comments
                    model.selectedArticle.commentsCount++;

                    // stop loading
                    model.loadingComments = false;

                    $scope.$applyAsync();
                });
            }
        };
    }
}
}
;

