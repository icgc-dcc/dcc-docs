angular.module('DocsDictionaryViewerApp', ['DictionaryViewerApp', 'ngAnimate', 'chieffancypants.loadingBar'])
  .controller('DictionaryViewerCtrl', function($scope, $timeout, $location, $anchorScroll, DictionaryService, DictionaryViewerConstants){
    var _controller = this,
        _firstRun = true;

    _controller.searchQuery = '';
    _controller.baseDictionaryURL = window.$icgcApp.dictionaryViewer.config.baseDictionaryURL || 'https://submissions.dcc.icgc.org';
    _controller.viewMode = DictionaryService.getCurrentViewType();
    _controller.viewTypes = DictionaryService.getViewTypes();
    _controller.setView = DictionaryService.setView;
    _controller.setDictionaryVersionFilterRange = DictionaryService.setDictionaryFilterRange;
    _controller.versionRange = DictionaryService.dictionaryVersionRange();
    _controller.getDictionaryVersionList = DictionaryService.getDictionaryVersionList;

    $scope.$on(DictionaryViewerConstants.EVENTS.RENDER_COMPLETE, function(){
      var changeReport = DictionaryService.generateChangeList();
      _controller.fieldsAddedCount = changeReport.fieldsAdded.length;
      _controller.fieldsChangedCount = changeReport.fieldsChanged.length;

      if (_firstRun) {

        _firstRun = false;

        $timeout(function() {
          if ($location.hash()) {
            $anchorScroll.yOffset = 30;
            $anchorScroll();
          }
        }, 0);
      }
    });
  });
