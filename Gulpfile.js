var gulp = require('gulp');
var stylus = require('gulp-stylus');
var rename = require("gulp-rename");

gulp.task('css', function () {
	return gulp.src(['./src/**/style.styl', './src/**/debug.styl'])
		.pipe(stylus())
		.pipe(gulp.dest('./dist/css/'));
});

gulp.task('cssmin', function () {
	return gulp.src(['./src/**/style.styl', './src/**/debug.styl'])
		.pipe(stylus({
			compress: true
		}))
		.pipe(rename(function (path) {
			path.extname = ".min.css"
		}))
		.pipe(gulp.dest('./dist/css/'));
});

gulp.task('default', function () {
	gulp.start('css', 'cssmin');
});