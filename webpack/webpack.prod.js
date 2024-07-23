const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMqpackerPlugin = require('css-mqpacker');
const config = require('./config');
const WebpackConcatPlugin = require('webpack-concat-files-plugin');

/* === Object with definition of JS files Concats === */

const jsFilesList = [
    {
        dest: './dist/js/bottomScriptsFiles.js',
        src: [
            './src/js/legacyContent/bottom/modernizr.custom.17475.js',
            './src/js/legacyContent/bottom/js-cookie.js',
            './src/js/legacyContent/bottom/base.js',
            './src/js/legacyContent/bottom/legacyContentCustomFixes.js',
        ],
    },
    {
        dest: './dist/js/topScriptsFiles.js',
        src: ['./src/js/legacyContent/top/jquery.min.js', './src/js/legacyContent/top/jquery-migrate.min.js', './src/js/legacyContent/top/picturefill.min.js'],
    },
    {
        dest: './dist/js/panelsFiles.js',
        src: [
            './src/js/legacyContent/panels/jquery.waypoints.min.js',
            './src/js/legacyContent/panels/imagesloaded.pkgd.min.js',
            './src/js/legacyContent/panels/jquery.lazyloadvid.min.js',
            './src/js/legacyContent/panels/masonry.pkgd.min.js',
            './src/js/legacyContent/panels/juxtapose.min.js',
            './src/js/legacyContent/panels/photoswipe.min.js',
            './src/js/legacyContent/panels/photoswipe-ui-default.min.js',
            './src/js/legacyContent/panels/fs-photo-card.js',
            './src/js/legacyContent/panels/image-compare.js',
            './src/js/legacyContent/panels/masonry-highlight.js',
            './src/js/legacyContent/panels/readmore.min.js',
            './src/js/legacyContent/panels/stories-masonry.js',
            './src/js/legacyContent/panels/video-preview.js',
            './src/js/legacyContent/panels/gallery-init.js',
        ],
    },
];

module.exports = (env) => {
    return merge(common, {
        mode: 'production',
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.(scss|css)$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: '',
                            },
                        },

                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    mode: 'icss',
                                },
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [CssMqpackerPlugin()],
                                },
                            },
                        },
                        'sass-loader',
                        'import-glob-loader',
                    ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[name].css',
            }),
            new CleanWebpackPlugin({
                cleanAfterEveryBuildPatterns: [config.buildFolder],
                verbose: true,
            }),
            new WebpackConcatPlugin({
                bundles: jsFilesList,
            }),
        ],
        optimization: {
            minimize: env.minify === 'true' ? true : false,
            splitChunks: {
                chunks: 'all',
                name: 'vendor',
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true,
                    },
                },
            },
        },
    });
};
