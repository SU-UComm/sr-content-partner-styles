[[_TOC_]]

# Description

Repository to compile and bundle CSS files and Javascript files from Legacy Content and Content Partners

All CSS files are stored in one location split into two groups:
* legacyStyles: with legacy CSS files from previous site for legacy content
* contentPartners: with styles for content partners, using additional sub-folder for each CMS type

```
./src/css/
```

All JS files are stored inside one location with legacy JavaScript files only
* folder can be extended with additional 'contentPartners' scripts if needed

```
./src/js/
```

# Requirements
Recommended to use with:
* Node v20
* NPM v10

It will also work on Node v18, v16 and v14.

# Docs

## Webpack config file
Some of the webpack options can be configured using **/webpack/config.js**
* entry - webpack [entry points](https://webpack.js.org/concepts/entry-points/)
   * can be found inside ./webpack/config.js

For JS files: WebpackConcatPlugin is used to concat files rather than bundle them
* configuration is present in  ./webpack/webpack.prod.js file
   * this stores output configuration for concating the files
   * and arrays of files to merge then in correct order

legacy content JS files definition is present in ./webpack/webpack.prod.js
   * as arrays of files
   * to keep the correct order of the files

## Commands
* audit - npm audit on production dependencies
* build - build output files to buildFolder
* build-min - build output files to buildFolder minified

## VSCode useful plugins
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - to apply proper formating on save
* [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - to highlight SCSS/CSS errors
