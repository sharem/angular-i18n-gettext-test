// grab gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    gettext = require('gulp-angular-gettext');

// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});

gulp.task('pot', function () {
    gutil.log('Creating .pot file...');
    return gulp.src(['*.html', 'js/*.js'])
        .pipe(gettext.extract('template.pot', {
            // options to pass to angular-gettext-tools...
        }))
        .pipe(gulp.dest('po/'));
});

gulp.task('translations', function () {
    gutil.log('Compiling translations...');
    return gulp.src('po/**/*.po')
        .pipe(gettext.compile({
            // options to pass to angular-gettext-tools...
            format: 'json'
        }))
        .pipe(gulp.dest('languages/'));
});
