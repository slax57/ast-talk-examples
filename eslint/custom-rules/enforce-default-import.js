module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Enforce that imports from @mui/icons-material are using a default import (as opposed to a named import). This is useful for performance reasons.",
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    return {
      // Performs action in the function on every variable declarator
      ImportDeclaration(node) {
        // Check if we are importing from `@mui/icons-material`
        if (
          node.source.type === "Literal" &&
          node.source.value === "@mui/icons-material"
        ) {
          // Report error to ESLint.
          context.report({
            node,
            message:
              "Named import from @mui/icons-material should be avoided for performance reasons. Use a default import instead.",
            fix(fixer) {
              return fixer.replaceText(
                node,
                node.specifiers
                  .map(
                    (specifier) =>
                      `import ${specifier.local.name} from '@mui/icons-material/${specifier.local.name}';`
                  )
                  .join("\n")
              );
            },
          });
        }
      },
    };
  },
};
