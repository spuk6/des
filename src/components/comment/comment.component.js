import './comment.less';
import template from './comment.html';

export let CommentComponent = {
    templateUrl: template,
    selector: 'comment',
    bindings: {
        comment: '=',
        commentsCount: '='
    },
    controllerAs: "model",
    controller: class commentCtrl
    {
        constructor($scope, FakeApi)
        {
            var model = this;
            model.showReplies = false;
            model.showReplyForm = false;
            model.replies = [];

            // Convert time to angular-moment user friendly
            $scope.$watch('model.comment', function(newComment) {
                newComment.unixDate = Math.ceil(newComment.createdAt / 1000) - 1;
            }, true);

            model.toggleReplies = function(forceFlag) {
                // Check if there are any replies for this comment
                if(model.comment.repliesCount > 0){

                    model.showReplies = forceFlag ? forceFlag : !model.showReplies;

                    // clear reply text model
                    model.replyContent = '';

                    // Check if replies are already loaded
                    if (!model.comment.repliesLoaded || model.replies.length != model.comment.repliesCount){
                        loadCommentReplies();
                    }
                }
            };

            var loadCommentReplies = function() {
                model.loading = true;
                model.replies = [];

                // Loading replies to a comment:
                FakeApi.loadComments({ parentCommentId: model.comment.id }).then(function(result) {
                    model.replies = model.replies.concat(result.data);
                    model.loading = false;
                    model.comment.repliesLoaded = true;
                    $scope.$applyAsync();
                });
            };

            model.toggleReplyForm = function() {
                model.showReplyForm = !model.showReplyForm;
            };

            model.submitReply = function() {
                // trim the comment and check if it has length
                model.replyContent = model.replyContent.trim();
                if(model.replyContent.length > 0){
                    // start loading
                    model.loading = true;

                    //toggle reply Form
                    model.showReplyForm = !model.showReplyForm;


                    var addCommentParams = {
                        parentCommentId: model.comment.id,
                        text: model.replyContent
                    };
                    FakeApi.addComment(addCommentParams).then(function(result) {
                        //Set comment date
                        var newComment = result.data;
                        var dt = new Date();
                        newComment.createdAt = dt.getTime();

                        // Add number to new comment replies
                        newComment.repliesCount = 0;

                        // push the new comment to the current array
                        model.replies = model.replies.concat(newComment);

                        // clear comment form model
                        model.replyContent = '';

                        // increment current comment replies
                        model.comment.repliesCount++;

                        // increment current article comments
                        model.commentsCount++;

                        // stop loading
                        model.loading = false;

                        // force open current comment replies
                        model.toggleReplies(true);

                        $scope.$applyAsync();
                    });
                }

            };
        }
    }
}
;

