import './comment.less';
import template from './comment.html';

export let CommentComponent = {
    templateUrl: template,
    selector: 'comment',
    bindings: {
        comment: '='
    },
    transclude: true,
    controllerAs: "model",
    controller: class commentCtrl
{
    constructor($scope, FakeApi)
    {
        var model = this;
        model.replies = [];
        model.showReplies = false;
        model.showReplyForm = false;
        model.toggleReplies = function(commentId) {
            model.showReplies = !model.showReplies;
            // Loading replies to a comment:
            FakeApi.loadComments({ parentCommentId: commentId }).then(function(result) {
                model.replies = model.replies.concat(result.data);
                console.log(model.replies);
                $scope.$applyAsync();

            });
        };

        model.replyForm = function() {
            model.showReplies = !model.showReplies;
            model.showReplyForm = !model.showReplyForm;
        };

        model.submitText = function() {
            model.showReplyForm = !model.showReplyForm;
            console.log(model.replyContent);
            var addCommentParams = { 
                parentCommentId: model.comment.id, 
                text: model.replyContent 
            };
            FakeApi.addComment(addCommentParams).then(function(result) {
                console.log(result.data);
                model.replies = model.replies.concat(result.data);
                model.replyContent = '';
                $scope.$applyAsync();
            });
        };
    }
}
}
;

