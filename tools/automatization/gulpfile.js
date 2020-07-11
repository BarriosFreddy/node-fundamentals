const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', (callback) => {
	console.log('Building site');
	setTimeout(callback, 15000);
})

gulp.task('serve', (callback) => {
	gulp.src('www')
		.pipe(server({
			livereload: true,
			open: true
		}));
})

gulp.task('init', gulp.series('build', 'serve'));