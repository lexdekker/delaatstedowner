// Gulp
var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
    bootstrapDir: './bower_components/bootstrap-sass',
    publicDir: './public',
};

gulp.task('css', function() {
    return gulp.src('./static/stylesheets/website/style.scss')
    .pipe(sass({
        includePaths: [config.bootstrapDir + '/assets/stylesheets'],
    }))
    .pipe(gulp.dest(config.publicDir + '/css'));
});

gulp.task('sass', function() {
  return gulp.src('scss/*.scss')
      .pipe(sass({
          outputStyle: 'compressed',
          includePaths: ['node_modules/susy/sass']
      }).on('error', sass.logError))
      .pipe(gulp.dest('dist/css'));
});

gulp.task('styles', function() {
    gulp.src('static/stylesheets/website/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('static/stylesheets/website/'));
});

gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('default', ['css', 'fonts']);

// Watch task
gulp.task('default',function() {
    gulp.watch('static/stylesheets/website/**/*.scss',['styles']);
});
