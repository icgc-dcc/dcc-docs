<div data-ng-app="DocsDictionaryViewerApp" data-ng-controller="DictionaryViewerCtrl as DictionaryViewCtrl">
    <h1 id="dictionary-viewer" class="no-auto-render">
        <span class="header-badge custom-badge">
            <i class="fa fa-sitemap"></i>
        </span>
        <a class="header-text-link" href="#dictionary-viewer" title="Click on this header and copy URL to link to this section.">
            Dictionary Viewer&nbsp; <span data-ng-if="DictionaryViewCtrl.latestDictionaryVersion" data-ng-bind-template="(Latest Version: {{DictionaryViewCtrl.latestDictionaryVersion}})"></span><i class="icon-share-1"></i>
        </a>
    </h1>
    <div class="full-width-content dictionary-viewer-main">
        <h3 class="loading-app" data-ng-if="!  DictionaryViewCtrl.latestDictionaryVersion"><i class="animate-spin icon-spinner"></i> Loading...</h3>
        <div data-ng-show="DictionaryViewCtrl.latestDictionaryVersion" ng-cloak>
            <div class="dictionary-viewer-controls" data-ng-style="{'margin-bottom':DictionaryViewCtrl.versionRange.from === DictionaryViewCtrl.versionRange.to ? '0rem' : 'inherit'}">
                <div class="version-select-container col-md-8">
                    <div class="version-label">
                        <span data-ng-if="DictionaryViewCtrl.shouldCompareDictionaries">Compare</span> Version
                    </div>
                     <div class="version-selector-container">
                        <select class="form-control version-selector"
                                id="version-from"
                                data-ng-options="viewType for viewType in DictionaryViewCtrl.getDictionaryVersionList()"
                                data-ng-model="DictionaryViewCtrl.versionRange.from"
                                data-ng-change="DictionaryViewCtrl.setDictionaryVersionFilterRange(DictionaryViewCtrl.versionRange.from, DictionaryViewCtrl.versionRange.to)">
                        </select>
                        <div style="display: inline-block" data-ng-if="! DictionaryViewCtrl.shouldCompareDictionaries">
                            <a href="javascript:void(0)" title="Compare Dictionary Versions" class="btn bttn-hover-expand-caption btn-primary" data-ng-click="DictionaryViewCtrl.shouldCompareDictionaries = true"><i class="fa fa-random"></i><!--
                                --><span>Compare Versions</span>
                            </a>
                        </div>
                        <div style="display: inline-block" data-ng-if="DictionaryViewCtrl.shouldCompareDictionaries">
                         with Version
                        <select class="form-control version-selector"
                                id="version-to"
                                data-ng-options="viewType for viewType in DictionaryViewCtrl.getDictionaryVersionList()"
                                data-ng-model="DictionaryViewCtrl.versionRange.to"
                                data-ng-change="DictionaryViewCtrl.setDictionaryVersionFilterRange(DictionaryViewCtrl.versionRange.from, DictionaryViewCtrl.versionRange.to)">
                        </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <input class="form-control" type="search" role="search" placeholder="Search Dictionary"  data-ng-model-options="{debounce: 350}" data-ng-model="DictionaryViewCtrl.searchQuery">
                </div>
            </div>
            <div style="text-align:right;" data-ng-if="DictionaryViewCtrl.shouldCompareDictionaries">
                <div class="changes-container">
                    <a class="pill pill-tab-bttn addition" href="javascript:void(0)" data-ng-click="DictionaryViewCtrl.switchToReportView('additions')"><i class="fa fa-plus"></i> <span data-ng-bind="DictionaryViewCtrl.fieldsAddedCount"></span> additions</a>
                    <a class="pill pill-tab-bttn change" href="javascript:void(0)" data-ng-click="DictionaryViewCtrl.switchToReportView('modifications')"><i class="fa fa-exchange"></i> <span data-ng-bind="DictionaryViewCtrl.fieldsChangedCount"></span> changes</a>
                    <a class="pill pill-tab-bttn remove" href="javascript:void(0)" data-ng-click="DictionaryViewCtrl.switchToReportView('deletions')"><i class="fa fa-minus"></i> <span data-ng-bind="DictionaryViewCtrl.fieldsRemovedCount"></span> deletions</a>
                </div>
            </div>
                    <dictionary-viewer
                                class="dictionary-viewer-content"
                                data-base-dictionary-url="{{DictionaryViewCtrl.baseDictionaryURL}}"
                                data-template-url="{{DictionaryViewCtrl.baseDictionaryURL}}/dictionary"
                                data-show-header-nav="false"
                                data-hide-graph-legend="false"
                                data-search-query="DictionaryViewCtrl.searchQuery"
                               >
                    </dictionary-viewer>
        </div>
    </div>
</div>
