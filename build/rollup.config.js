// import babel from '@rollup/plugin-babel'
// import { nodeResolve } from '@rollup/plugin-node-resolve'
// import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
// import cjs from '@rollup/plugin-commonjs'
// import replace from '@rollup/plugin-replace'
import css from 'rollup-plugin-css-only'
// import CleanCSS from 'clean-css'
import json from '@rollup/plugin-json'
import fs, { readFileSync } from 'fs'
import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle'


const config = JSON.parse(readFileSync(new URL('../package.json', import.meta.url)));

const { name } = config
const file = type => `dist/${name}.${type}.js`

export { name, file }

let overrides = {
  compilerOptions: {declaration: true},
  exclude: [
    "node_modules",
    "src/App.vue",
    "src/main.ts"
  ]
}

export default {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'esm'
  },
  plugins: [
    json(),
    nodeResolve(),
    excludeDependenciesFromBundle({
      peerDependencies: true,
      dependencies: false
    }),
    typescript({tsconfigOverride: overrides}),
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