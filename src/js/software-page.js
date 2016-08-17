import angular from 'angular';

const $ = global.$;

$(() => {
    console.log('ready');
    angular.bootstrap(document, ['icgc.software']);
})

const storageVersions = {
  template: `
    <table>
    <thead>
      <tr>
        <th>Version</th>
        <th>Dist</th>
        <th>MD5</th>
        <th>Signature</th>
      </tr>
    </thead>
      <tr ng-repeat="v in $ctrl.storageClientVersions | limitTo: $ctrl.displayLimit">
        <td>{{ v.version }}</td>
        <td><a target="_blank" href="https://dcc.icgc.org/api/v1/ui/software/icgc-storage-client/{{ v.version }}">icgc-storage-client-{{ v.version }}-dist.tar.gz</a></td>
        <td><a target="_blank" href="https://dcc.icgc.org/api/v1/ui/software/icgc-storage-client/{{ v.version }}/md5">icgc-storage-client-{{ v.version }}-dist.tar.gz.md5</a></td>
        <td><a target="_blank" href="https://dcc.icgc.org/api/v1/ui/software/icgc-storage-client/{{ v.version }}/asc">icgc-storage-client-{{ v.version }}-dist.tar.gz.asc</a></td>
      </tr>
     
    </table>
    <p><a data-ng-click="$ctrl.toggle()">
      {{$ctrl.storageClientVersions.length - $ctrl.displayLimit}} more</td></p>
  `,
  controller: function($scope) {
    this.user = {name: 'world'};
    this.storageClientVersions = [];
    this.displayLimit = 5;
    $.get('https://dcc.icgc.org/api/v1/ui/software/icgc-storage-client/versions').then(response => {
      $scope.$apply(() => this.storageClientVersions = response);
    });
    this.toggle = function() {
      if (this.displayLimit == 5) {
        this.displayLimit = this.storageClientVersions.length;
      }
      else{
        this.displayLimit = 5;
      }
    }
  }
};

const icgcGetVersions = {
  template: `
    <table>
        <thead>
          <tr>
            <th>Version</th>
            <th>Mac</th>
            <th>Linux</th>
          </tr>
        </thead>
      <tr ng-repeat="v in $ctrl.icgcGetVersions | limitTo: $ctrl.displayLimit">
        <td>{{ v.version }}</td>
        <td><a target="_blank" href="https://dcc.icgc.org/api/v1/ui/software/icgc-get/{{ v.version}}/osx"</a>icgc-get-{{ v.version }}-osx-dist.zip</td>
        <td><a target="_blank" href="https://dcc.icgc.org/api/v1/ui/software/icgc-get/{{ v.version}}/linux"</a>icgc-get-{{ v.version }}-linux-dist.zip</td>
      </tr>
    </table>
    <p><a data-ng-click="$ctrl.toggle()">{{ $ctrl.icgcGetVersions.length - $ctrl.displayLimit }} more</a></p>
  `,
  controller: function($scope) {
    this.user = {name: 'world'};
    this.icgcGetVersions = [];
    this.displayLimit = 5;
    $.get('https://dcc.icgc.org/api/v1/ui/software/icgc-get/versions').then(response => {
      $scope.$apply(() => this.icgcGetVersions = response);
    });
    this.toggle = function() {
      if (this.displayLimit == 5) {
        this.displayLimit = this.icgcGetVersions.length;
      }
      else{
        this.displayLimit = 5;
      }
    }
    
  }
};


angular
  .module('icgc.software', [])
  .component('storageVersions', storageVersions)
  .component('icgcGetVersions', icgcGetVersions)
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