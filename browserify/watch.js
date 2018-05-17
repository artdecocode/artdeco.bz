import browserify from 'browserify'
import babelify from 'babelify'
import watchify from 'watchify'
import { createWriteStream } from 'fs'
import { relative, resolve } from 'path'
import { Transform } from 'stream'

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

  const hasher = new Transform({
    objectMode: true,
    transform(row, enc, next) {
      // console.log(row.id)
      this.push(row)
      next()
    },
  })
  b.pipeline.get('deps').push(hasher)


  b
    .on('update', bundle)
    .on('bundle', () => {
      console.log('%s bundled to %s', name, relative(rel, output))
    })
  bundle()

  function bundle() {
    b.bundle()
      .on('error', ({ message }) => console.log(message))
      .pipe(createWriteStream(output))
  }
}
