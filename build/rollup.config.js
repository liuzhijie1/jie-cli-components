// import babel from '@rollup/plugin-babel'
// import { nodeResolve } from '@rollup/plugin-node-resolve'
// import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
// import cjs from '@rollup/plugin-commonjs'
// import replace from '@rollup/plugin-replace'
import css from 'rollup-plugin-css-only'
// import CleanCSS from 'clean-css'
import json from '@rollup/plugin-json'
import fs, { readFileSync } from 'fs'


const config = JSON.parse(readFileSync(new URL('../package.json', import.meta.url)));

const { name } = config
const file = type => `dist/${name}.${type}.js`

export { name, file }

export default {
  input: 'src/index.js',
  output: {
    name,
    file: file('esm'),
    format: 'esm'
  },
  plugins: [
    json(),
    nodeResolve(),
    css({
      output(style) {
        !fs.existsSync('dist') && fs.mkdirSync('dist')
        fs.writeFileSync(`dist/${name}.css`, style)
      }
    }),
    // replace({
    //   VERSION: JSON.stringify(version)
    // })
  ]
}