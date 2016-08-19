import angular from 'angular';

const $ = global.$;

$(() => {
    console.log('ready');
    angular.bootstrap(document, ['icgc.software']);
})

var clientTypeMap = {
  0: {
    url: 'https://dcc.icgc.org/api/v1/ui/software/icgc-storage-client/versions',
    headers: ['Version', 'Dist', 'MD5', 'Signature'],
    getColumns (version) {
      return [
        {
          url: '',
          name: version
        },
        {
          url: 'https://dcc.icgc.org/api/v1/ui/software/icgc-storage-client/' + version,
          name: 'icgc-storage-client-' + version + '-dist.tar.gz'
        },
        {
          url: 'https://dcc.icgc.org/api/v1/ui/software/icgc-storage-client/' + version + '/md5', 
          name: 'icgc-storage-client-' + version + '-dist.tar.gz.md5'
        },
        {
          url: 'https://dcc.icgc.org/api/v1/ui/software/icgc-storage-client/' + version + '/asc',
          name: 'icgc-storage-client-' + version + '-dist.tar.gz.asc'
        }
      ];
    }
  },
  1: {
    url: 'https://dcc.icgc.org/api/v1/ui/software/icgc-get/versions',
    headers: ['Version', 'Mac', 'Linux'],
    getColumns (version) {
      return [
        {
          url: '',
          name: version
        },
        {
          url: 'https://dcc.icgc.org/api/v1/ui/software/icgc-get/' + version + '/osx',
          name: 'icgc-get-' + version + '-dist.zip'
        },
        {
          url: 'https://dcc.icgc.org/api/v1/ui/software/icgc-get/' + version + '/linux',
          name: 'icgc-get-' + version + '-dist.zip'
        }
      ];
    }
  }
};

const versionsTable = {
  template: `
    <table class="download-table">
    <thead>
      <tr>
        <th ng-repeat="header in $ctrl.headers">{{header}}</th>
      </tr>
    </thead>
    <tr ng-repeat="row in $ctrl.rows | limitTo: ($ctrl.shouldLimit? $ctrl.displayLimit : $ctrl.versions.length)">
      <td ng-repeat="column in row">
        <a ng-if="column.url" href="{{column.url}}" target="_blank">
        &nbsp;<i class="fa-noop icon-external-link"></i>&nbsp;
          {{column.name}}
        </a>
        <span ng-if="!column.url">{{column.name}}</span>
      </td>
    </tr>
    </table>
    <p class="toggle-paragraph">
      <a class="table-toggle" data-ng-click="$ctrl.shouldLimit = !$ctrl.shouldLimit;">
        <i class="fa" ng-class="{
          'fa-caret-down': $ctrl.shouldLimit,
          'fa-caret-up': !$ctrl.shouldLimit,
        }"></i>
        {{
          ($ctrl.shouldLimit)
          ? '' + ($ctrl.versions.length - $ctrl.displayLimit) + ' more'
          : 'less'
        }}
      </a>
    </p>
  `,
  bindings: {
    clientType: '='
  },
  controller: function($scope) {
    this.icgcGetVersions = [];
    this.displayLimit = 5;
    this.shouldLimit = true;
    this.headers = clientTypeMap[this.clientType].headers;
    console.log(clientTypeMap[this.clientType]);
    $.get(clientTypeMap[this.clientType].url).then(response => {
      $scope.$apply(() => {
        console.log(response);
        this.versions = response;
        this.rows = response.map(x => clientTypeMap[this.clientType].getColumns(x.version))
        console.log(this.rows);
      });
    });
  }
};

angular
  .module('icgc.software', [])
  .component('versionsTable', versionsTable)
    // .controller('SoftwareController', function($scope) {
    //   $scope.icgcGet = {
    //     artifactId:'icgc-get'
    //   };
    //   $scope.icgcStorageClient = {
    //     artifactId:'icgc-storage-client'
    //   };

    //   Restangular
    //     .all('ui/software/' + $scope.icgcStorageClient.artifactId + '/versions')
    //     .getList()
    //     .then(function(response){
    //       $scope.versions = response.plain();
    //     });

    //   Restangular
    //     .all('ui/software/' + $scope.icgcGet.artifactId + '/versions')
    //     .getList()
    //     .then(function(response){
    //       $scope.icgcGetVersions = response.plain();
    //       });
    // });