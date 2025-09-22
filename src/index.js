/**
 * The entrypoint for the action. This file simply imports and runs the action's
 * main logic.
 */

const { run } = require('./main')

/* istanbul ignore next */
if (require.main === module) {
  run()
}

module.exports = { run }
