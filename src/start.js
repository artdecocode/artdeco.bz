const { startApp, initRoutes } = require('idio')
const { resolve } = require('path')

const routesDir = resolve(__dirname, 'routes')

const DATABASE_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/idio'
const PORT = process.env.PORT || 5000

const { env: { NODE_ENV } } = process
const production = NODE_ENV == 'production'

export default async (config = {}, initRoutesConfig = {}) => {
  const res = await startApp({
    databaseURL: DATABASE_URL,
    autoConnect: false,
    port: PORT,
    middleware: {
      logger: { use: !production },
      compress: { use: true },
      koa2Jsx: { wireframe: true, use: true },
    },
    ...config,
  })

  const { url, app, router } = res

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
