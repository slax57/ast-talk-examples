/* eslint-disable @typescript-eslint/no-require-imports */
const { RuleTester } = require("eslint");
const rule = require("./enforce-default-import");

const ruleTester = new RuleTester({
  // Must use at least ecmaVersion 2015 because
  // that's when `const` variables were introduced.
  languageOptions: { ecmaVersion: 2015 },
});

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
  "enforce-default-import", // rule name
  rule, // rule code
  {
    // checks
    // 'valid' checks cases that should pass
    valid: [
      {
        code: "import { Typography } from '@mui/material';",
        options: ["@mui/icons-material", "lodash"],
      },
      {
        code: "import Dashboard from '@mui/icons-material/Dashboard';",
        options: ["@mui/icons-material"],
      },
      {
        code: "import { Dashboard } from '@mui/icons-material';",
        options: ["lodash"],
      },
    ],
    // 'invalid' checks cases that should not pass
    invalid: [
      {
        code: "import { Dashboard } from '@mui/icons-material';",
        output: "import Dashboard from '@mui/icons-material/Dashboard';",
        errors: 1,
        options: ["@mui/icons-material"],
      },
      {
        code: "import { Dashboard } from '@mui/icons-material';",
        output: "import Dashboard from '@mui/icons-material/Dashboard';",
        errors: 1,
        options: ["@mui/icons-material", "lodash"],
      },
      {
        code: "import { Dashboard, ExpandMore } from '@mui/icons-material';",
        output:
          "import Dashboard from '@mui/icons-material/Dashboard';\nimport ExpandMore from '@mui/icons-material/ExpandMore';",
        errors: 1,
        options: ["@mui/icons-material"],
      },
      {
        code: "import { merge } from 'lodash';",
        output: "import merge from 'lodash/merge';",
        errors: 1,
        options: ["lodash"],
      },
    ],
  }
);

console.log("PASS 'enforce-default-import' tests");
