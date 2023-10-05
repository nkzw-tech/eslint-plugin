const noInstanceof = require('./rules/no-instanceof');

module.exports = {
  configs: {
    strict: {
      rules: {
        '@nkzw/no-instanceof': 2,
      },
    },
  },
  rules: {
    'no-instanceof': noInstanceof,
  },
};
