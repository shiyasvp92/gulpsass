// Gulpfile
var gulp = require('gulp');

gulp.task('copy', function() {
  gulp.src('index.html')
  .pipe(gulp.dest('assets'))
});