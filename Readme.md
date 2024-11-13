# AST Talk Examples

This repository contains the example code used for the demo deuring the talk "AST: The secret weapon of master developers" given at the [Apéro Web Nancy](https://www.meetup.com/fr-FR/aperos-web-nancy/) on 2024-11-27.

## Content

- [`main`](https://github.com/slax57/ast-talk-examples/tree/main) branch: the initial code
- [`eslint-solution-simple`](https://github.com/slax57/ast-talk-examples/tree/eslint-solution-simple) branch: the simple solution, presented during the talk, where the ESLint rule only detects the issue with `"@mui/icons-material"` imports and suggests the fix
- [`eslint-solution`](https://github.com/slax57/ast-talk-examples/tree/eslint-solution) branch: the more complete solution, where the ESLint rule is configurable and can detect issues with imports from other libraries, and also includes unit tests

## Setup

Run `npm install` to install the dependencies.

On the `eslint-solution` branch, you can run the tests with `npm run eslint:test`.