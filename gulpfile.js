'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});



gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: './'
        },
        browser: 'firefox',
        notify: false
    });
    gulp.watch('./sass/**/*.scss', gulp.parallel('sass'));
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
});
