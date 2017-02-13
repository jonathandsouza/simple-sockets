(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('simpleSockets.config', [])
      .value('simpleSockets.config', {
          debug: true
      });

  // Modules
  angular.module('simpleSockets.services', []);
  angular.module('simpleSockets',
      [
          'simpleSockets.config',
          'simpleSockets.services',
          'ngResource',
          'ngSanitize'
      ]);

})(angular);
