// See: https://rollupjs.org/introduction/

import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    exports: 'auto'
  },
  plugins: [
    json(),
    nodeResolve({
      exportConditions: ['node'],
      preferBuiltins: true
    }),
    commonjs()
  ],
  external: [
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
