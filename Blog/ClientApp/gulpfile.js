var gulp = require('gulp');
var gutil = require('gulp-util');
var tap = require('gulp-tap');
var MarkdownIt = require('markdown-it');

var markdown = new MarkdownIt({html:true});
gulp.task('markdown', function() {
  return gulp
    .src('src/**/*.md')
    .pipe(tap(markdownToHtml))
    .pipe(
      gulp.dest(function(f) {
        return f.base;
      })
    );
});

gulp.task('default', function() {
  return gulp.watch('src/**/*.md', gulp.series(['markdown']));
});

function markdownToHtml(file) {
  var result = markdown.render(file.contents.toString());
  file.contents = new Buffer(result);
  file.path = gutil.replaceExtension(file.path, '.html');
  return;
}