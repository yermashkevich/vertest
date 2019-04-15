const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const svgstore = require('gulp-svgstore');
const rename = require('gulp-rename');


function watch(){
	browserSync.init({
        server: {
            baseDir: "./"
        }
    });
	gulp.watch('sass/**/*.sass', styles);
	gulp.watch('./*.html').on('change', browserSync.reload);
}

function styles(){
	return gulp.src('sass/**/*.sass')
			.pipe(plumber())
			.pipe(sass())
			.pipe(autoprefixer({
	            browsers: ['last 2 versions'],
	            cascade: false
        	}))
			.pipe(gulp.dest('css/'))
			.pipe(browserSync.stream());
}

function svg(){
	return gulp.src('img/svg/**/*.svg')
					.pipe(svgstore())
					.pipe(rename('icons.svg'))
					.pipe(gulp.dest('img/sprites'));
}

gulp.task('watch', watch);
gulp.task('svgstore', svg);
