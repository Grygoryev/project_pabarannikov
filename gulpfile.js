'use strict';

const gulp = require('gulp'),
      babel = require('gulp-babel'),
      less = require('gulp-less'),
      pug = require('gulp-pug'),
      debug = require('gulp-debug'),
      del = require('del'),
      svgmin = require('gulp-svgmin'),
      imgmin = require('gulp-image'),
      autoprefixer = require('gulp-autoprefixer'),
      browserSync = require('browser-sync').create();

gulp.task('pug', function () {
  return gulp.src('src/templates/*.pug')
      .pipe(pug({
        pretty: true
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
      .pipe(debug({title: 'working on'}))
      .pipe(gulp.dest('build/css'))
});

gulp.task('js', function () {
  return gulp.src('src/js/**/*.js')
      .pipe(debug({title: 'working on'}))
      .pipe(babel())
      .pipe(gulp.dest('build/js/'))
});

gulp.task('img', function () {
  return gulp.src('src/img/**/*.*', {since: gulp.lastRun('img')})
      .pipe(debug({title: 'working on'}))
      .pipe(imgmin({
        pngquant: true,
        optipng: false,
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

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: 'build'
    },
    notify: true
  })
});

gulp.task('watch', function () {
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

gulp.task('serve', gulp.parallel('watch', 'browser-sync'));

gulp.task('dev', gulp.series('build', 'serve'));