module.exports = {
    env: { browser: true, es2021: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier'
    ],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: 'detect' } },
    plugins: ['react', 'react-hooks'],
    rules: {
        'react/prop-types': 'off'
    }
}