module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
    plugins: ['stylelint-scss'],
    rules: {
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['apply', 'variants', 'responsive', 'screen', 'extend', 'use', 'function', 'return', 'include', 'mixin', 'if', 'else'],
            },
        ],
        'declaration-empty-line-before': null,
        'function-name-case': null,
        'no-descending-specificity': null,
        'no-empty-source': null,
        'rule-empty-line-before': null,
        'no-invalid-position-at-import-rule': null,
        'scss/at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['apply', 'variants', 'responsive', 'screen', 'extend', 'use', 'function', 'return', 'include', 'mixin', 'if', 'else'],
            },
        ],
        'scss/at-import-partial-extension': null,
        'scss/dollar-variable-colon-space-after': null,
        'scss/dollar-variable-empty-line-before': null,
        'scss/dollar-variable-pattern': null,
        'scss/at-function-pattern': null,
        'function-no-unknown': [
            true,
            {
                ignoreFunctions: ['pxToRem', 'pxToEm', 'stripUnit', 'photoshopLetterspacingToEms', 'photoshopLetterspacingToPixels'],
            },
        ],
    },
    ignoreFiles: ['./build/**/*.css'],
};
