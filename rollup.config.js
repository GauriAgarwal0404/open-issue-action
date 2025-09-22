// See: https://rollupjs.org/introduction/

import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const pkg = require('./package.json')

const config = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    exports: 'auto',
    banner: '#!/usr/bin/env node'
  },
  plugins: [
    commonjs(),
    nodeResolve({
      exportConditions: ['node'],
      preferBuiltins: true
    })
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    // Node.js built-ins
    'assert',
    'buffer',
    'child_process',
    'crypto',
    'events',
    'fs',
    'http',
    'https',
    'net',
    'os',
    'path',
    'querystring',
    'stream',
    'string_decoder',
    'tls',
    'url',
    'util',
    'zlib'
  ]
}

export default config
