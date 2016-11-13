var gulp = require('gulp')
	, sass = require('gulp-sass');

gulp.task('default', ['sass']);

gulp.task('sass', function() {
	return gulp.src('public/css/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('public/css'))
});