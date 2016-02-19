angular.module('DocsDictionaryViewerApp', ['DictionaryViewerApp', 'ngAnimate', 'chieffancypants.loadingBar'])
  .controller('DictionaryViewerCtrl', function($scope, $timeout, $location, $anchorScroll, DictionaryService, DictionaryViewerConstants){
    var _controller = this,
        _firstRun = true;

    _controller.searchQuery = '';
    _controller.baseDictionaryURL = window.$icgcApp.dictionaryViewer.config.baseDictionaryURL || 'https://submissions.dcc.icgc.org';

    _controller.viewTypes = DictionaryService.getViewTypes();

    _controller.switchToReportView = function(reportAnchor) {
      var search = $location.search();

      _controller.viewMode = 'report';
      search.viewMode = _controller.viewMode;

      $location.search(search).hash(reportAnchor);
    };

    _controller.setDictionaryVersionFilterRange = DictionaryService.setDictionaryFilterRange;
    _controller.versionRange = DictionaryService.dictionaryVersionRange();
    _controller.getDictionaryVersionList = DictionaryService.getDictionaryVersionList;
    _controller.shouldCompareDictionaries = false;

    $scope.$on(DictionaryViewerConstants.EVENTS.RENDER_COMPLETE, function(){
      var changeReport = DictionaryService.generateChangeList();
      _controller.fieldsAddedCount = changeReport.fieldsAdded.length;
      _controller.fieldsChangedCount = changeReport.fieldsChanged.length;
      _controller.fieldsRemovedCount = changeReport.fieldsRemoved.length;
      _controller.latestDictionaryVersion = DictionaryService.getLatestDictionaryVersion();

      if (! _controller.shouldCompareDictionaries) {
        _controller.shouldCompareDictionaries = _controller.versionRange.from !== _controller.versionRange.to;
      }

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
