// Gulpfile
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify'),
	concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer');
var imagemin = require('gulp-image-optimization');

gulp.task('imagemin', function() {
	gulp.src('images/src/*')
	.pipe(imagemin())
	.pipe(gulp.dest('images/dist'))
});

gulp.task('sass', function(){
	gulp.src('styles/*.scss')
	.pipe(sass({outputStyle: 'compressed'}))
		.on('error', gutil.log)
	.pipe(gulp.dest('assets'))
	.pipe(prefix({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('assets/build'))
	.pipe(concat('style.css'))
	.pipe(gulp.dest('assets/build'))
});

gulp.task('js', function() {
	gulp.src('scripts/*.js')
	.pipe(uglify())
	.pipe(concat('script.js'))
	.pipe(gulp.dest('assets'))
});

gulp.task('prefix', function() {
	gulp.src('assets/*.css')
	.pipe(prefix({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('assets/build'))
})

gulp.task('watch', function() {
  gulp.watch('scripts/*.js', ['js']);
  gulp.watch('styles/main.scss', ['sass']);
});

gulp.task('default', ['sass' , 'js' , 'watch']);