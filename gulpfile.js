'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const svgmin = require('gulp-svgmin');

gulp.task('less', function () {
  return gulp.src('./less/style.less')
    .pipe(less())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('svgmin', function () {
  return gulp.src('./svg-icons/*.svg')
    .pipe(svgmin(function (file) {
      return {
        plugins: [{
          cleanupIDs: {
            minify: true
          }
        }]
      }
    }))
    .pipe(gulp.dest('./svg-icons/'));
});

gulp.task('default',
  gulp.series('less')
);
