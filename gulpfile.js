/* jshint node: true */
/* jshint -W098 */
/* jshint -W079 */

require('dotenv').config();
var gulp = require('gulp');
var shell = require('gulp-shell');
var $ = require('gulp-load-plugins')();
var gutil = require('gulp-util');
var exec = require('child_process').exec;
var rimraf = require('rimraf');
var nativeCss = require('react-native-css');

// import { selectBook } from '../actions/index';

var dist = './src/styles';

/** Stylesheets */
gulp.task('styles', function () {
	var out = gulp.src('./src/styles/main.scss')
		.pipe($.cssGlobbing({
			extensions: ['.scss'],
		}))
		.pipe($.sass({
			style: 'expanded',
		}))
		.on('error', $.sass.logError)
		.on('error', function (e) {
			$.notify().write(e);
		});

	return out.pipe(gulp.dest(dist));
});

gulp.task('refresh', shell.task([
	'react-native-css -i ./src/styles/main.css -o ./src/styles.js'
]));

gulp.task('shell', shell.task([
	'react-native run-ios',
	'react-native-css -i ./src/styles/main.css -o ./src/styles.js'
]));


/** Livereload */
gulp.task('watch', ['styles', 'shell'], function () {

	/** Watch for SASS changes */
	gulp.watch('src/styles/**/*.scss', ['styles', 'refresh']);

	gulp.watch(
		dist + '/**/*.{jpg,png,svg,webp,css,scss,js}'
	).on('change', function (file) {
		$.livereload.changed(file.path);
	})
});

/** Build */
gulp.task('build', [
	'styles'
]);

gulp.task('default', ['build']);

