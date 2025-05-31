import { healthStatus } from '../Clear functions/src/js/basic.js';


export default healthStatus([
	{
		files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
		rules: {
			"prefer-const": "off",
			"no-constant-binary-expression": "off",
		},
	},
]);