const RuleTester = require('eslint').RuleTester;
const rule = require('./rules/no-instanceof');

const ruleTester = new RuleTester();

ruleTester.run('@nkzw/no-instanceof', rule, {
  valid: [
    'if (value instanceof Error) {}',
    'if (value instanceof CustomError) {}',
    'if (value instanceof Exception) {}',
    'if (value instanceof CustomException) {}',
  ],
  invalid: [
    {
      code: 'if (value instanceof CustomClass) {}',
      errors: [
        {
          message: 'The "instanceof" operator is not allowed.',
          type: 'BinaryExpression',
        },
      ],
    },
  ],
});
