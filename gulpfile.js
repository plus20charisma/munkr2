  gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver');

  gulp.task('webserver', function() {
    gulp.src("./")
      .pipe(webserver({
        livereload: true,
        open: true
      }));
  });

  //gulp.task('watch', function() {
  //  gulp.watch('**/*.js', ['js']);
  //  gulp.watch('**/*.css', ['css']);
  //  gulp.watch('**/*.html', ['html']);
  //});

  gulp.task('default', ['webserver']);