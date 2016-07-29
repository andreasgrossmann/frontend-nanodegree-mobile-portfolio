var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');

var paths = {
    dist: 'dist/',
    images: ['img/*.{png,jpeg,jpg}', 'images/*.{png,jpeg,jpg}'],
    scripts: ['js/*.js', '!node_modules/**'],
    styles: ['css/*.css', '!node_modules/**'],
    other: ['*.html', '*.md', '!node_modules/**']
};

gulp.task('images', function() {
    return gulp.src(paths.images, {cwd: './**'})
    .pipe(imagemin())
    .pipe(gulp.dest(paths.dist))
});

gulp.task('scripts', function() {
    return gulp.src(paths.scripts, {cwd: './**'})
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist))
});

gulp.task('styles', function() {
    return gulp.src(paths.styles, {cwd: './**'})
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.dist))
});

gulp.task('copy', function() {
    return gulp.src(paths.other, {cwd: './**'})
    .pipe(gulp.dest(paths.dist))
});

gulp.task('default', ['images', 'scripts', 'styles', 'copy']);