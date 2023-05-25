/* global angular */
export default class HelpController {
  constructor($http, $uibModalInstance, modalInfo) {
    this.$http = $http;
    this.$uibModalInstance = $uibModalInstance;

    this.originalmodalInfo = {};
    angular.copy(modalInfo, this.originalmodalInfo);
    this.modalInfo = {};

    this.reset();
  }

  reset() {
    angular.copy(this.originalmodalInfo, this.modalInfo);
  }

  ok() {
    this.$uibModalInstance.close(this.modalInfo);
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel');
  }
}

HelpController.$inject = ['$http', '$uibModalInstance', 'modalInfo'];

