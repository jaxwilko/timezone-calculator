let mix = require("laravel-mix");

mix.setPublicPath(__dirname);

mix.js("src/app.js", "dist/js/app.js")
    .postCss('src/app.css', 'dist/css/app.css', [
        require('postcss-import'),
        require('tailwindcss'),
    ])
    .vue()
    .webpackConfig({
        stats: {
            children: true
        }
    });
