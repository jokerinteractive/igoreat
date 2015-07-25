var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    uglify = require('gulp-uglify');

gulp.task('html', function() {
  gulp.src("./src/*.html")
    .pipe(gulp.dest("./dest/"))
});

gulp.task('image', function() {
  gulp.src("./src/img/*")
    .pipe(gulp.dest("./dest/img"))
});

gulp.task('js', function() {
  gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dest/js'))
    .pipe(reload({stream: true}));
});

gulp.task('less', function() {
  gulp.src("./src/less/style.less")
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gulp.dest("./dest/css"))
    .pipe(reload({stream: true}));
});

gulp.task('serve', ['html', 'less', 'js'], function() {

  browserSync.init({
    server: './dest/'
  });
  
  gulp.watch("./src/less/**/*.less", ['less']);
  gulp.watch("./src/js/**/*.js", ['js']);
  gulp.watch("./src/*.html", ['html']).on('change', reload);
});

gulp.task('default', ['serve']);