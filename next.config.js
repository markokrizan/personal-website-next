const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withFonts = require("next-fonts");
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
    [optimizedImages, {
        handleImages: ['jpeg', 'png'],
    }], 
    withFonts,
    withSass
]);
