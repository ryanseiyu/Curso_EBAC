const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

function comprimeImagens() {
    return gulp.src('./source/images/*.')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function compilaSass() {
    return gulp.src('./source/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/styles'));
}

exports.sass = compilaSass;
exports.javascript = comprimeJavaScript;
exports.images = comprimeImagens;

exports.default = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens));
}