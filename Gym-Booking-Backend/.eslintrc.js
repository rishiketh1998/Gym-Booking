module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2020': true,
    'node': true
  },
  'extends': [
    'prettier',
    'google',
  ],
  'plugins':[
    'prettier'
  ],
  'parserOptions': {
    'ecmaVersion': 11,
  },
  'rules': {
    'linebreak-style': 0
  },
};
