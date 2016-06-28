(function() {
  'use strict';

  angular
    .module('kueJobs')
    .directive('viewJobDetails', viewJobDetails);

  viewJobDetails.$inject = [];

  function viewJobDetails() {
    return {
      templateUrl: 'components/kue/views/view-job-details.view.html',
      restrict: 'E',
      scope: {
        jobId: '=', // the ID of the job to view details of
        autoRefreshInterval: '=', // auto-refresh the job details autoRefreshInterval ms - default value is 60 000 ms (1 minute)
        showRequeueButton: '=' // if TRUE then show the Requeue button otherwise don't show default value is TRUE
      },
      controller: 'ViewJobDetailsController',
      controllerAs: 'viewJobDetailsCtrl'
    };
  }
})();
