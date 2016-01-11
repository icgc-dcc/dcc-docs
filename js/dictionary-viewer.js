angular.module('DocsDictionaryViewerApp', ['DictionaryViewerApp', 'ngAnimate', 'chieffancypants.loadingBar'])
  .controller('DictionaryViewerCtrl', function($scope, DictionaryService, DictionaryViewerConstants){
    var _controller = this;

    _controller.searchQuery = '';
    _controller.baseDictionaryURL = 'http://hsubmission-dcc.oicr.on.ca:5380';
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
    });
  });
