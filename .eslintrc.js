module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'indent': [
            'error',
            4, {
                'ignoredNodes': ['TemplateLiteral']
            }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single',
            {'allowTemplateLiterals': true}
        ],
        'semi': [
            'error',
            'never'
        ],
        'jsx-quotes': [
            'error', 'prefer-single'
        ],
        'react/react-in-jsx-scope': 'off',
       
       
    }
}
