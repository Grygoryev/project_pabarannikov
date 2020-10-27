'use strict';

const gulp = require('gulp'),
      // babel = require('gulp-babel'),
      less = require('gulp-less'),
      webpack = require('webpack'),
      cssmin = require('gulp-cssmin'),
      pug = require('gulp-pug'),
      minify = require('gulp-minify'),
      debug = require('gulp-debug'),
      del = require('del'),
      webp = require('gulp-webp'),
      svgmin = require('gulp-svgmin'),
      imgmin = require('gulp-image'),
      autoprefixer = require('gulp-autoprefixer'),
      browserSync = require('browser-sync').create();

gulp.task('pug', function () {
  return gulp.src('src/templates/*.pug')
      .pipe(pug({
        pretty: false
      }))
      .pipe(debug({title: 'working on'}))
      .pipe(gulp.dest('build'))
});

gulp.task('less', function () {
  return gulp.src('src/less/*.less')
      .pipe(less())
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe(cssmin())
      .pipe(debug({title: 'working on'}))
      .pipe(gulp.dest('build/css'))
});

gulp.task('js', function(callback) {
  webpack(require('./webpack.config.js'), function(err, stats) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});

gulp.task('img', function () {
  return gulp.src('src/img/**/*.*', {since: gulp.lastRun('img')})
      .pipe(debug({title: 'working on'}))
      .pipe(imgmin({
        pngquant: true,
        optipng: true,
        zopflipng: true,
        jpegRecompress: false,
        mozjpeg: true,
        gifsicle: true,
        svgo: true,
        concurrent: 10,
        quiet: true 
      }))
      .pipe(gulp.dest('build/img'))
});

gulp.task('webp', function() {
  return gulp.src('src/img/**/*.{png,jpg}')
    .pipe(debug({title: 'qweqweqwe'}))
    .pipe(webp())
    .pipe(gulp.dest('build/img'))
});

gulp.task('svgimg', function () {
  return gulp.src('src/img/**/*.svg', {since: gulp.lastRun('svgimg')})
      .pipe(debug({title: 'working on'}))
      .pipe(svgmin())
      .pipe(gulp.dest('build/img'))
});

// gulp.task('assets', function () {
//   return gulp.src('src/assets/**/**.*')
//       .pipe(gulp.dest('build/assets'))
// });

gulp.task('fonts', function () {
  return gulp.src('src/fonts/**/**.*')
      .pipe(gulp.dest('build/fonts'))
});


gulp.task('watch', function () {
  browserSync.init({
    server: {
      baseDir: 'build'
    },
    notify: true
  })

  gulp.watch('src/less/**/*.*', gulp.series('less'));
  gulp.watch('src/templates/**/*.*', gulp.series('pug'));
  gulp.watch('src/js/**/*.*', gulp.series('js'));

  gulp.watch('build/**/*.*').on('change', browserSync.reload);
});

gulp.task('clean', function () {
  return del('build');
});

gulp.task('build', gulp.series('clean', gulp.parallel('pug', 'less', 'js', 'img', 'fonts')));
// 'assets', 'fonts'

gulp.task('dev', gulp.series('build', 'watch'));