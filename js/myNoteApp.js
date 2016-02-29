var app = angular.module("myNoteApp", ['gettext']);

// Set default language
app.run(function (gettextCatalog) {
    gettextCatalog.currentLanguage = 'en_EN';
});
