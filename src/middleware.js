import { renderToNodeStream } from 'react-dom/server'

const { env: { NODE_ENV } } = process
const production = NODE_ENV == 'production'

const writeDoctype = ctx => ctx.res.write('<!doctype html>\n')

const writeHtml = ctx => {
  ctx.type = 'html'
  ctx.status = 200
  writeDoctype(ctx)
}

const render = (ctx, WebSite) => {
  console.log('render')
  writeHtml(ctx)
  const stream = renderToNodeStream(WebSite)
  ctx.body = stream
}

export default {
  logger: { use: !production },
  compress: { use: true },
  koa2Jsx: { wireframe: true, use: true, bootstrap: true,
    config: {
      render,
      // pretty: true,
    },
  },
  react: {
    async function() {
      return async (ctx, next) => {
        ctx.addScript(production ? [
          [
            'https://cdnjs.cloudflare.com/ajax/libs/react/16.3.2/cjs/react.production.min.js', // 'https://cdnjs.cloudflare.com/ajax/libs/react/16.3.2/umd/react.development.js',
            'sha256-oTABb6ke88mAAjkyf2gQcEnhdaQiE28BBX//lMeFpUY=', // 'sha256-s4xjpfNLyFo6uEJP3/OXxMoi8LZBCaB2weyDvhAbs1c=',
            'anonymous',
          ],
        ] : 'https://cdnjs.cloudflare.com/ajax/libs/react/16.2.0/umd/react.development.js')
        ctx.addScript(production ? [
          [
            'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.3.2/umd/react-dom.production.min.js', // 'https://cdnjs.cloudflare.com/ajax/libs/react/16.3.2/umd/react.development.js',
            'sha256-lrhKJaWYTDnqslOwj/B8fz6bqehISA64woQRLqBKDbA=', // 'sha256-s4xjpfNLyFo6uEJP3/OXxMoi8LZBCaB2weyDvhAbs1c=',
            'anonymous',
          ],
        ] : 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.2.0/umd/react-dom.development.js')
        await next()
      }
    },
    use: true,
  },
}
