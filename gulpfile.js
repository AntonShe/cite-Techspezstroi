'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const shorthand = require('gulp-shorthand');
const rigger = require('gulp-rigger');
const plumber = require('gulp-plumber');
const watch = require('gulp-watch');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const uglify = require('gulp-uglify');
const rimraf = require('rimraf');
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;

const path = {
  build: { 
      html: 'build/',
      js: 'build/js/',
      css: 'build/css/',
      img: 'build/img/',
      fonts: 'build/fonts/'
  },
  src: { 
      html: 'src/pages/*.html', 
      js: 'src/js/**/*.js',
      styles: 'src/styles/main.less',
      img: 'src/img/**/*.*', 
      fonts: 'src/fonts/**/*.*'
  },
  watch: { 
      html: 'src/**/*.html',
      js: 'src/js/**/*.js',
      styles: 'src/styles/**/*.less',
      img: 'src/img/**/*.*',
      fonts: 'src/fonts/**/*.*'
  },
  clean: './build'
};

const config = {
  server: {
      baseDir: "./build"
  },
  tunnel: true,
  host: 'localhost',
  port: 9000,
  logPrefix: "Frontend_Devil"
};

gulp.task('html', function (){
  return gulp.src(path.src.html)
  .pipe(rigger())
  .pipe(plumber())
  .pipe(gulp.dest(path.build.html))
  .pipe(reload({stream: true}));
});

gulp.task('js', function () {
  return gulp.src(path.src.js)
      .pipe(rigger())
      .pipe(uglify())
      .pipe(gulp.dest(path.build.js))
      .pipe(reload({stream: true}));
});

gulp.task('style', function (){
  return gulp.src(path.src.styles)
    .pipe(less())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(shorthand())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(path.build.css))
    .pipe(reload({stream: true}));
});

gulp.task('image', function () {
  return gulp.src(path.src.img) 
      .pipe(imagemin({ 
          progressive: true,
          svgoPlugins: [{removeViewBox: false}],
          use: [pngquant()],
          interlaced: true
      }))
      .pipe(gulp.dest(path.build.img)) 
      .pipe(reload({stream: true}));
});

gulp.task('fonts', function() {
  return gulp.src(path.src.fonts)
      .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', gulp.parallel(
  'html',
  'js',
  'style',
  'fonts',
  'image'
));

gulp.task('watch', function() {

  browserSync.init({
    server: './build/'
    })

  gulp.watch(path.watch.styles, gulp.parallel('style'));
  gulp.watch(path.watch.html, gulp.parallel('html'));
  gulp.watch(path.watch.js, gulp.parallel('js'));
  gulp.watch(path.watch.fonts, gulp.parallel('fonts'));
  gulp.watch(path.watch.img, gulp.parallel('image'));
});

gulp.task('clean', function (cb) {
  rimraf(path.clean, cb);
});

gulp.task('default', gulp.parallel('build', 'watch'));