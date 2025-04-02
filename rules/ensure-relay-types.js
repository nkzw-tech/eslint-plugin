export default {
  create(context) {
    const trackedHooks = new Set();
    return {
      CallExpression(node) {
        if (node.callee.type !== 'Identifier') {
          return;
        }

        const name = node.callee.name;
        if (trackedHooks.has(name) && !node.typeArguments) {
          context.report({
            message: '`' + name + '` calls must have type parameters.',
            node,
          });
        }
      },

      ImportDeclaration(node) {
        if (node.source.value === 'react-relay/hooks.js') {
          for (const specifier of node.specifiers) {
            if (
              specifier.type === 'ImportSpecifier' &&
              (specifier.imported.name === 'useMutation' ||
                specifier.imported.name === 'usePaginationFragment')
            ) {
              trackedHooks.add(specifier.local.name);
            }
          }
        }
      },
    };
  },
  meta: {
    fixable: false,
    hasSuggestions: false,
    type: 'problem',
  },
};
