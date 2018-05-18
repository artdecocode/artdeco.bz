import idio from 'idio'
import { resolve } from 'path'
import serve from 'koa-static'
import { watchBundles } from 'idio-dev'
import middleware from './middleware'

const STATIC = resolve(__dirname, 'static')

const from = resolve(__dirname, 'scripts')
const to = resolve(STATIC, 'scripts')
const routes = resolve(__dirname, 'routes')

const { env: { NODE_ENV } } = process
const production = NODE_ENV == 'production'
const test = NODE_ENV == 'test'

export default async () => {
  if (!test) await watchBundles({
    from, to,
    babelify: {
      babelrc: false,
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        '@babel/plugin-proposal-object-rest-spread',
      ],
      presets: [
        '@babel/preset-react',
      ],
    },
  })

  const { url, app } = await idio({
    autoConnect: false,
    middleware: {
      ...middleware,
      static: {
        function(_, c) {
          return serve(STATIC, c)
        },
        config: {
          maxage: production ? 1000 * 60 * 60 * 24 * 10 : 0,
        },
        use: true,
      },
    },
  }, {
    dir: routes,
    aliases: {
      get: {
        '/index': ['/'],
      },
    },
  })

  return { app, url }
}
