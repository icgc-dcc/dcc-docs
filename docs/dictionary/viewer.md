<div data-ng-app="DocsDictionaryViewerApp" data-ng-controller="DictionaryViewerCtrl as DictionaryViewCtrl" class="full-width-content dictionary-viewer-main" style="overflow:hidden">
    <div data-ng-show="DictionaryViewCtrl.versionRange.from" ng-cloak>
        <div class="dictionary-viewer-controls row">
            <div class="form-group col-md-2">
              <input class="form-control" type="search" role="search" placeholder="Search Dictionary" data-ng-model="DictionaryViewCtrl.searchQuery">
            </div>
            <div class="form-group col-md-4 version-select-container">
                        <select class="form-control version-selector"
                                data-ng-options="viewType for viewType in DictionaryViewCtrl.getDictionaryVersionList()"
                                data-ng-model="DictionaryViewCtrl.versionRange.from"
                                data-ng-change="DictionaryViewCtrl.setDictionaryVersionFilterRange(DictionaryViewCtrl.versionRange.from, DictionaryViewCtrl.versionRange.to)">
                        </select>
                        TO
                        <select class="form-control version-selector"
                                data-ng-options="viewType for viewType in DictionaryViewCtrl.getDictionaryVersionList()"
                                data-ng-model="DictionaryViewCtrl.versionRange.to"
                                data-ng-change="DictionaryViewCtrl.setDictionaryVersionFilterRange(DictionaryViewCtrl.versionRange.from, DictionaryViewCtrl.versionRange.to)">
                        </select>
                    </div>
                    <div class="form-group col-md-3 view-select-container">
                    View as:
                                <select class="form-control view-selector"
                                        data-ng-options="viewType for viewType in DictionaryViewCtrl.viewTypes"
                                        data-ng-model="DictionaryViewCtrl.viewMode"
                                        data-ng-change="DictionaryViewCtrl.setView(DictionaryViewCtrl.viewMode)">
                                </select>
                    </div>
                    <div class="col-md-3 changes-container">
                        <div class="pill addition"><i class="fa fa-plus"></i> <span data-ng-bind="DictionaryViewCtrl.fieldsAddedCount"></span> additions</div>
                        <div class="pill change"><i class="fa fa-exchange"></i> <span data-ng-bind="DictionaryViewCtrl.fieldsChangedCount"></span> changes</div>
                    </div>
        </div>
        <div>
        <dictionary-viewer
                        class="dictionary-viewer-content"
                        data-base-dictionary-url="{{DictionaryViewCtrl.baseDictionaryURL}}"
                        data-template-url="{{DictionaryViewCtrl.baseDictionaryURL}}/dictionary"
                        data-show-header-nav="false"
                        data-hide-graph-legend="false"
                        data-search-query="DictionaryViewCtrl.searchQuery"
                        ></dictionary-viewer>
        </div>
    </div>
</div>
