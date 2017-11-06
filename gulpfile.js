'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var ssi = require('browsersync-ssi');

gulp.task('connectSSI', function() {
  browserSync.init({
    ghostMode: false,
    server: {
      baseDir: "./",
      middleware: [
        ssi({
          baseDir: __dirname + "/",
          ext: ".html"
        })
      ]
    }
  });
});