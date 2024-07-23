const glob = require('glob');
const path = require('path');

module.exports = {
    buildFolder: 'dist',
    publicPath: '/',

    alias: {
        nodeModules: path.resolve(__dirname, '../node_modules/'),
        src: path.resolve(__dirname, '../src/'),
        modules: path.resolve(__dirname, '../src/modules'),
        helpers: path.resolve(__dirname, '../src/helpers'),
        images: path.resolve(__dirname, '../src/images'),
    },
    entry: {
        // Content Partner CSS Entries
        aem: ['src/css/contentPartners/aem.scss'],
        drupal: ['src/css/contentPartners/drupal.scss'],
        wordpress: ['src/css/contentPartners/wordpress.scss'],

        // Legacy Styles Definition
        stanfordGallery: ['src/css/legacyStyles/stanfordGallery.scss'],
        stanfordNews: ['src/css/legacyStyles/stanfordNews.scss'],
        stanfordNewsAdditionalStyles: ['src/css/legacyStyles/stanfordNewsAdditionalStyles.scss'],
    },
    chunks: {
        allPages: [],
        pages: [],
    },
};
