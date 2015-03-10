/* globals path:true */
/* exported path */

var gulp = require('gulp');
// var jsdoc = require('gulp-jsdoc');
// var karma = require('gulp-karma');
// var minifyCSS = require('gulp-minify-css');
// var sass = require('gulp-sass');
// var watch = require('gulp-watch');
// var plumber = require('gulp-plumber');
// require('jshint-stylish');
// var mode = WATCH_MODE;
var image = require('gulp-image');
// var debug = false;

var testFiles = [
  'public/bower_components/angular/angular.min.js',
  'public/bower_components/angular-mocks/angular-mocks.js',
  'public/bower_components/angular-ui-router/release/angular-ui-router.js',
  'public/js/**/*.js',
  'cli_test/*.js'
];

var docFiles = [
  'public/js/**/*.js'
];

gulp.task('js', function() {
  var jsTask = gulp.src('public/js/**/*.js');
  if (!debug) {
    jsTask.pipe(uglify());
  }
  jsTask.pipe(gulp.dest('public/js'))
    .pipe(connect.reload());
});

gulp.task('views', function() {
  var templateTask = gulp.src('src/views/**/*.html');
  if (!debug) {
    templateTask.pipe(htmlmin({ collapseWhitespace: true }));
  }
  templateTask.pipe(gulp.dest('public/views'))
    .pipe(connect.reload());
});

gulp.task('css', function() {
  var options = {
    errLogToConsole: true
  };
  if (!debug) {
    options.outputStyle = 'expanded';
    options.sourceComments = 'map';
  }
  var cssTask = gulp.src('public/sass/app.scss')
    .pipe(sass(options));
  if (!debug) {
    cssTask.pipe(minifyCSS());
  }
  cssTask.pipe(gulp.dest('public/css'));
    // .pipe(connect.reload());
});

gulp.task('image', function () {
  gulp.src('./pictures/*')
    .pipe(image())
    .pipe(gulp.dest('./public/images'));
});

gulp.task('karma', function() {
  // undefined.js: unfortunately necessary for now
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function() {});
});

// gulp.task('docs', function() {
//   gulp.src('README.md', docFiles)
//     .pipe(jsdoc('./public/jsdocs/', {
//       path: 'ink-docstrap',
//       systemName      : 'Here',
//       footer          : 'Made with love by @RichardLitt',
//       copyright       : '',
//       navType         : 'horizontal',
//       theme           : 'spruce',
//       linenums        : true,
//       collapseSymbols : false,
//       inverseNav      : false
//     })
//   );
// });

gulp.task('default', [], function() {
  watch('public/sass/*.scss', function(files) {
    return files.pipe(plumber())
      .pipe(sass())
      .pipe(gulp.dest('./public/css/'));
  });
  // gulp.src('scss/**/*.scss')
  //     .pipe(watch(function(files) {
  //         return files.pipe(sass())
  //             .pipe(gulp.dest('./dist/'));
  //     }));
  // gulp.src(testFiles)
  //   .pipe(karma({
  //     configFile: 'karma.conf.js',
  //     action: 'watch'
  //   }));
});
