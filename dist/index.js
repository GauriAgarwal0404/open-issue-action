import './sourcemap-register.cjs';import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "module";
/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/**
 * The entrypoint for the action. This file simply imports and runs the action's
 * main logic.
 */

const { run } = require('./main')

/* istanbul ignore next */
if (__WEBPACK_EXTERNAL_createRequire(import.meta.url).main === __WEBPACK_EXTERNAL_createRequire(import.meta.url).cache[eval('__filename')]) {
  run()
}

module.exports = { run }


//# sourceMappingURL=index.js.map