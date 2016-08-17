import angular from 'angular';

const $ = global.$;

$(() => {
    console.log('ready');
    angular.bootstrap(document, ['icgc.software']);
})

const storageVersions = {
  template: `
    <table>
      <tr ng-repeat="v in $ctrl.storageClientVersions">
        <td>{{ v.version }}</td>
                     <td><a target="_blank" href="api/v1/ui/software/icgc-storage-client/{{ v.version }}">icgc-storage-client-{{ v.version }}-dist.tar.gz</a></td>
                     <td><a target="_blank" href="api/v1/ui/software/icgc-storage-client/{{ v.version }}/md5">icgc-storage-client-{{ v.version }}-dist.tar.gz.md5</a></td>
                     <td><a target="_blank" href="api/v1/ui/software/icgc-storage-client/{{ v.version }}/asc">icgc-storage-client-{{ v.version }}-dist.tar.gz.asc</a></td>
      </tr>
    </table>
  `,
  controller: function($scope) {
    this.user = {name: 'world'};
    this.storageVersions = [];
    $.get('https://dcc.icgc.org/api/v1/ui/software/icgc-storage-client/versions').then(response => {
      $scope.$apply(() => this.storageClientVersions = response);
    });
    
  }
};

const icgcGetVersions = {
  template: `
    <table>
      <tr ng-repeat="v in $ctrl.icgcGetVersions">
        <td>{{ v.uri }}</td>
                     <td><a target="_blank" href="api/v1/ui/software/icgc-get/{{ v.version}}/osx</a>icgc-get-{{ v.version }}-osx-dist.zip</td>
                     <td><a target="_blank" href="api/v1/ui/software/icgc-get/{{ v.version}}/linux</a>icgc-get-{{ v.version }}-linux-dist.zip</td>
                    
      </tr>
    </table>
  `,
  controller: function($scope) {
    this.user = {name: 'world'};
    this.icgcGetVersions = [];
    $.get('https://dcc.icgc.org/api/v1/ui/software/icgc-get/versions').then(response => {
      $scope.$apply(() => this.icgcGetVersions = response);
    });
    
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