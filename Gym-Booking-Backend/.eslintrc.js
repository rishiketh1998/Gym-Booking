module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2020': true,
    'node': true,
  },
  'extends': [
    'prettier',
    'google',
  ],
  'plugins': [
    'prettier',
  ],
  'parserOptions': {
    'ecmaVersion': 11,
  },
  'rules': {
    'linebreak-style': 0,
    'new-cap': 0,
    'camelcase': 0,
    'max-len': 0,
    'valid-jsdoc': 0,
  },
};
