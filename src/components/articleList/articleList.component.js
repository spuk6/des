import './articleList.less';
import template from './articleList.html';

export let ArticleListComponent = {
  templateUrl: template,
  selector: 'articleList',
  bindings: {
      articles: '='
  },
  /* @ngInject */
  controller: class articleListCtrl {
    /* @ngInject */
    constructor($scope, $state, FakeApi) {
        var $ctrl = this;
        $ctrl.articles = [];
        var neededBindings = 1;
        $ctrl.bindingsAreStabilized = false;

        var arrayBindingDeReg = $scope.$watch('$ctrl.articles', function(newValue) {
            console.log(newValue);
            if (angular.isArray(newValue)) {
                arrayBindingDeReg();
                neededBindings -= 1;

                onBindingsStabilize();
            }
        });

        function onBindingsStabilize() {
            if (neededBindings === 0) {
                console.log('everything is ready!');

                $ctrl.bindingsAreStabilized = true;
            } else {
                console.log(neededBindings + ' more bindings need to stabilize until onBindingsStabilize gets called');
            }
        }

        this.loadMore = function() {
            console.log('here');
            FakeApi.loadArticles().then(function(result){
                $ctrl.articles = result.data;
                console.log($ctrl.articles);
            });
        };

    }
  }
};

