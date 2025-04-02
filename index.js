import noInstanceof from './rules/no-instanceof.js';
import requireUseEffectArguments from './rules/require-use-effect-arguments.js';
import ensureRelayTypes from './rules/ensure-relay-types.js';

export default {
  configs: {
    strict: {
      rules: {
        '@nkzw/ensure-relay-types': 2,
        '@nkzw/no-instanceof': 2,
        '@nkzw/require-use-effect-arguments': 2,
      },
    },
  },
  rules: {
    'ensure-relay-types': ensureRelayTypes,
    'no-instanceof': noInstanceof,
    'require-use-effect-arguments': requireUseEffectArguments,
  },
};
