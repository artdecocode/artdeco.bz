import browserify from 'browserify'
import babelify from 'babelify'
import watchify from 'watchify'
import { createWriteStream } from 'fs'
import { relative, resolve } from 'path'

const rel = resolve(__dirname, '..')

export default (path, output, name) => {
  const b = browserify({
    entries: [path],
    cache: {},
    packageCache: {},
    plugin: [watchify],
    debug: true,
    transform: [
      babelify.configure({
        babelrc: false,
        plugins: [
          '@babel/plugin-transform-modules-commonjs',
          '@babel/plugin-proposal-object-rest-spread',
        ],
        presets: [
          '@babel/preset-react',
        ],
      }),
    ],
  })

  b
    .on('update', bundle)
    .on('bundle', () => {
      console.log('%s bundled to %s', name, relative(rel, output))
    })
  bundle()

  function bundle() {
    b.bundle()
      .on('error', console.error)
      .pipe(createWriteStream(output))
  }
}
