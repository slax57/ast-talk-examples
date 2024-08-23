module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Enforce that imports from @mui/icons-material are using a default import (as opposed to a named import). This is useful for performance reasons.",
    },
    fixable: "code",
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        if (
          node.source.type === "Literal" &&
          node.source.value === "@mui/icons-material"
        ) {
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
                      `import ${specifier.local.name} from "@mui/icons-material/${specifier.local.name}";`
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
