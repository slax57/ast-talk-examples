module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Enforce that imports from a specific source are using a default import (as opposed to a named import). This is useful for performance reasons.",
    },
    fixable: "code",
    // Valid configuration:
    // "enforce-default-import": ["error", "@mui/icons-material"]
    // "enforce-default-import": ["error", "@mui/icons-material", "lodash"]
    schema: {
      type: "array",
      minItems: 1,
      items: [
        {
          type: "string",
        },
      ],
    },
  },
  create(context) {
    return {
      // Performs action in the function on every variable declarator
      ImportDeclaration(node) {
        // Itearate over the sources passed in the configuration
        context.options.forEach((source) => {
          // Check if we are importing from this source
          if (
            node.source &&
            node.source.type === "Literal" &&
            node.source.value === source
          ) {
            // Report error to ESLint.
            context.report({
              node,
              message:
                "Named import from {{source}} should be avoided for performance reasons. Use a default import instead.",
              data: {
                source,
              },
              fix(fixer) {
                return fixer.replaceText(
                  node,
                  node.specifiers
                    .map(
                      (specifier) =>
                        `import ${specifier.local.name} from '${source}/${specifier.local.name}';`
                    )
                    .join("\n")
                );
              },
            });
          }
        });
      },
    };
  },
};
