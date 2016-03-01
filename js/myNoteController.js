app.controller("myNoteCtrl", function($scope, gettextCatalog) {
    $scope.message = "";
    $scope.savedNotes = 0;
    $scope.left  = function() {return 100 - $scope.message.length;};
    $scope.clear = function() {$scope.message = "";};
    $scope.save  = function() {
        alert(gettext("Note Saved"));
    };

    // Language switcher
    $scope.languages = {
        current: gettextCatalog.currentLanguage,
        available: {
        'eu_EU': 'Euskera',
        'en_EN': 'English',
        'es_ES': 'Castellano'
        }
    };

    $scope.$watch('languages.current', function (lang) {
        if (!lang) {
            return;
        }
        gettextCatalog.setCurrentLanguage(lang);
        if (lang !== 'en_EN') {
            gettextCatalog.loadRemote("../languages/" + lang + ".json");
        }
    });
});
