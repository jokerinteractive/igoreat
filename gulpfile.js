var gulp        = require('gulp');
var less        = require('gulp-less');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var autoprefixer = require('gulp-autoprefixer');

gulp.task('html', function() {
  gulp.src("./src/*.html")
  .pipe(gulp.dest("./dest/"))
});

gulp.task('image', function() {
  gulp.src("./src/img/*")
  .pipe(gulp.dest("./dest/img"))
});

gulp.task('less', function() {
  return gulp.src("./src/less/style.less")
    .pipe(less())
	.pipe(autoprefixer())
    .pipe(gulp.dest("./dest/css"))
    .pipe(reload({stream: true}));
});

gulp.task('serve', ['html', 'less'], function() {

  browserSync.init({
    server: './dest/'
  });
  
  gulp.watch("./src/less/**/*.less", ['less']);
  gulp.watch("./src/*.html", ['html']).on('change', reload);
});

gulp.task('default', ['serve']);
