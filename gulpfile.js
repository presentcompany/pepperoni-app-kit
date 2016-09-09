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

var dist = './dist/';

/** Clean */
gulp.task('clean', function () {
	rimraf.sync(dist);
});

/** Stylesheets */
gulp.task('styles', function () {
	var out = gulp.src('./css/main.scss')
		.pipe($.cssGlobbing({
			extensions: ['.scss'],
		}))
		.pipe($.sourcemaps.init())
		.pipe($.sass({
			style: 'expanded',
		}))
		.on('error', $.sass.logError)
		.on('error', function (e) {
			$.notify().write(e);
		});

	out.pipe(gulp.dest(dist + 'css'));

	return out.pipe($.rev())
		.pipe(gulp.dest(dist + 'css'))
		.pipe($.rev.manifest(dist + 'css/manifest.json', {
			merge: true,
			base: '',
		}))
		.pipe(gulp.dest(dist));
});

/** Copy */
gulp.task('copy', function () {
	return gulp.src([
		'src/**/**',
	], {
		base: 'src',
	})
	.pipe(gulp.dest(dist));
});

/** Livereload */
gulp.task('watch', ['clean', 'copy', 'styles'], shell.task([
  'react-native run-ios',
  'react-native-css -i ./dist/css/main.css -o ./dist/styles.js --watch'
]));

/** Build */
gulp.task('build', [
	'clean',
	'copy',
	'styles',
]);

gulp.task('default', ['build']);

