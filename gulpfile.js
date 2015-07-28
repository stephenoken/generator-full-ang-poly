var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('test',function () {
  return gulp.src("test/**/*Spec.js")
    .pipe(jasmine());
});

gulp.task('default',["test"],function () {
  gulp.watch('generators/**/*.js',['test']);
  gulp.watch('test/**/*.js',['test']);
});
