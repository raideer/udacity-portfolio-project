var gulp = require('gulp');
var responsive  = require('gulp-responsive');
var imagemin = require('gulp-imagemin');
var elixir = require('laravel-elixir');

elixir.config.publicPath = "assets";
elixir.config.assetsPath = "src";

elixir(function(mix){
    mix.sass([
        'app.scss'
    ], 'src/css/app.css');

    mix.styles([
        'pure/base.css',
        'app.css',
        'pure/grids.css',
        'pure/grids-responsive.css'
    ]);

    mix.scripts([
        'jquery.js',
        'typed.js',
        'main.js'
    ]);
});

var cardSizes = {
    small: 300,
    medium: 500,
    large: 700
};

gulp.task('images', function(){
    gulp.src('./src/images/**/*.{png,jpg}')
        .pipe(responsive({
            'me.png': [{
                width: 300,
                rename: 'me-small.png'
            },{
                width: 600,
                rename: 'me-medium.png'
            },{
                width: 900,
                rename: 'me-large.png'
            }],
            'macbook.jpg': [{
                width: 500,
                rename: 'macbook-small.jpg'
            },{
                width: 700,
                rename: 'macbook-medium.jpg'
            },{
                width: 1200,
                rename: 'macbook-large.jpg'
            }],
            'a.jpg': [{
                width: cardSizes.small,
                rename: 'a-small.jpg'
            },{
                width: cardSizes.medium,
                rename: 'a-medium.jpg'
            },{
                width: cardSizes.large,
                rename: 'a-large.jpg'
            }],
            'b.jpg': [{
                width: cardSizes.small,
                rename: 'b-small.jpg'
            },{
                width: cardSizes.medium,
                rename: 'b-medium.jpg'
            },{
                width: cardSizes.large,
                rename: 'b-large.jpg'
            }],
            'c.jpg': [{
                width: cardSizes.small,
                rename: 'c-small.jpg'
            },{
                width: cardSizes.medium,
                rename: 'c-medium.jpg'
            },{
                width: cardSizes.large,
                rename: 'c-large.jpg'
            }]
        }))
        .pipe(imagemin())
        .pipe(gulp.dest('./assets/images'));
});
