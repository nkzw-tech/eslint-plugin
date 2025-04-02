export default {
  create(context) {
    return {
      BinaryExpression(node) {
        if (
          node.type === 'BinaryExpression' &&
          node.operator === 'instanceof'
        ) {
          if (
            node.right.type === 'Identifier' &&
            (node.right.name.endsWith('Error') ||
              node.right.name.endsWith('Exception'))
          ) {
            return;
          }
          context.report({
            message: 'The "instanceof" operator is not allowed.',
            node,
          });
        }
      },
    };
  },
};
