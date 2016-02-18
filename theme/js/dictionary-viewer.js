angular.module('DocsDictionaryViewerApp', ['DictionaryViewerApp', 'ngAnimate', 'chieffancypants.loadingBar'])
  .controller('DictionaryViewerCtrl', function($scope, $timeout, $location, $anchorScroll, DictionaryService, DictionaryViewerConstants){
    var _controller = this,
        _firstRun = true;

    _controller.searchQuery = '';
    _controller.baseDictionaryURL = window.$icgcApp.dictionaryViewer.config.baseDictionaryURL || 'https://submissions.dcc.icgc.org';

    _controller.viewTypes = DictionaryService.getViewTypes();

    _controller.setView = function(viewMode) {
      // Get the current view in case it was changed somewhere else - i.e. user clicked
      // a tab in the directive.
      _controller.viewMode = DictionaryService.getCurrentViewType();

      if (viewMode === _controller.viewMode) {
        return;
      }

      _controller.viewMode = viewMode;
      DictionaryService.setView(viewMode);
    };

    _controller.setDictionaryVersionFilterRange = DictionaryService.setDictionaryFilterRange;
    _controller.versionRange = DictionaryService.dictionaryVersionRange();
    _controller.getDictionaryVersionList = DictionaryService.getDictionaryVersionList;

    $scope.$on(DictionaryViewerConstants.EVENTS.RENDER_COMPLETE, function(){
      var changeReport = DictionaryService.generateChangeList();
      _controller.fieldsAddedCount = changeReport.fieldsAdded.length;
      _controller.fieldsChangedCount = changeReport.fieldsChanged.length;
      _controller.latestDictionaryVersion = DictionaryService.getLatestDictionaryVersion();

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
