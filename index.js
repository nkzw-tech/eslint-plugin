import noInstanceof from './rules/no-instanceof.js';
import requireUseEffectArguments from './rules/require-use-effect-arguments.js';

export default {
  configs: {
    strict: {
      rules: {
        '@nkzw/no-instanceof': 2,
        '@nkzw/require-use-effect-arguments': 2,
      },
    },
  },
  rules: {
    'no-instanceof': noInstanceof,
    'require-use-effect-arguments': requireUseEffectArguments,
  },
};
