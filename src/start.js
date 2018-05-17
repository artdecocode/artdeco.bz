import { startApp, initRoutes } from 'idio'
import { resolve } from 'path'
import serve from 'koa-static'
import middleware from './middleware'
import browserify from '../browserify/browserify'

const routesDir = resolve(__dirname, 'routes')

// const DATABASE_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/idio'
const PORT = process.env.PORT || 5000

const { env: { NODE_ENV } } = process
const production = NODE_ENV == 'production'

export default async (config = {}, initRoutesConfig = {}) => {
  await browserify()
  const res = await startApp({
    // databaseURL: DATABASE_URL,
    autoConnect: false,
    port: PORT,
    middleware,
    ...config,
  })

  const { url, app, router } = res

  app.use(serve(resolve(__dirname, 'static'), {
    maxage: production ? 1000 * 60 * 60 * 24 * 10 : 0,
  }))

  await initRoutes(routesDir, router, {
    defaultImports: true,
    aliases: {
      get: {
        '/index': ['/'],
      },
    },
    middleware: {},
    watch: !production,
    ...initRoutesConfig,
  })

  const routes = router.routes()
  app.use(routes)

  return { app, url }
}
