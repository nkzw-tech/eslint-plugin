import { RuleTester } from "eslint";
import noInstanceof from "./rules/no-instanceof.js";
import requireUseEffectArguments from "./rules/require-use-effect-arguments.js";

const ruleTester = new RuleTester();

ruleTester.run("@nkzw/no-instanceof", noInstanceof, {
  valid: [
    "if (value instanceof Error) {}",
    "if (value instanceof CustomError) {}",
    "if (value instanceof Exception) {}",
    "if (value instanceof CustomException) {}",
  ],
  invalid: [
    {
      code: "if (value instanceof CustomClass) {}",
      errors: [
        {
          message: 'The "instanceof" operator is not allowed.',
          type: "BinaryExpression",
        },
      ],
    },
  ],
});

ruleTester.run("@nkzw/require-use-effect-arguments", requireUseEffectArguments, {
  valid: [
    `import {useEffect} from 'react'; useEffect(() => {}, []);`,
    `import {useEffect} from 'react'; useEffect(() => {}, [a]);`,
    `import {useEffect} from 'react'; useEffect(() => {}, undefined);`,
    `import {useEffect as uE} from 'react'; uE(() => {}, undefined);`,
    `import R from 'react'; R.useEffect(() => {}, undefined);`,
    `useEffect(() => {});`, // We don't know where `useEffect` comes from, so it is ignored.
  ],
  invalid: [
    {
      code: `import {useEffect} from 'react'; useEffect(() => {});`,
      errors: [
        {
          message: "useEffect must be called with a second argument (dependency array).",
          type: "CallExpression",
        },
      ],
    },
    {
      code: `import {useEffect as uE} from 'react'; uE(() => {});`,
      errors: [
        {
          message: "uE must be called with a second argument (dependency array).",
          type: "CallExpression",
        },
      ],
    },
    {
      code: `import R from 'react'; R.useEffect(() => {});`,
      errors: [
        {
          message: "R.useEffect must be called with a second argument (dependency array).",
          type: "CallExpression",
        },
      ],
    },
  ],
});
