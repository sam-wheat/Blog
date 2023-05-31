var gulp = require('gulp');
var markdown = require('gulp-markdown-it');

gulp.task('markdown', function() {
  return gulp
    .src('src/**/*.md')
    .pipe(markdown('x', {html: true}))
    .pipe(
      gulp.dest(function(f) {
        return f.base;
      })
    );
});

gulp.task('default', function() {
  return gulp.watch('src/**/*.md', gulp.series(['markdown']));
});