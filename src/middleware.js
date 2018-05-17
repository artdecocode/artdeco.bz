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
  writeHtml(ctx)
  const stream = renderToNodeStream(WebSite)
  ctx.body = stream
}
export default {
  logger: { use: !production },
  compress: { use: true },
  koa2Jsx: { wireframe: true, use: true, bootstrap: false,
    config: {
      render,
      // pretty: true,
    },
  },
  bootstrap: {
    async function() {
      return async (ctx, next) => {
        ctx.setViewport('width=device-width, initial-scale=1, shrink-to-fit=no')
        ctx.addCss(production ? [
          'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.min.css',
          'sha256-Md8eaeo67OiouuXAi8t/Xpd8t2+IaJezATVTWbZqSOw=',
          'anonymous',
        ] : 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.css')

        ctx.addScript(production ? [
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js',
          'sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E=',
          'anonymous',
        ] : 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.js')

        ctx.addScript(production ? [
          'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/js/bootstrap.min.js',
          'sha256-xaF9RpdtRxzwYMWg4ldJoyPWqyDPCRD0Cv7YEEe6Ie8=',
          'anonymous',
        ] : 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/js/bootstrap.min.js')


        await next()
      }
    },
    use: true,
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
        ] : 'https://cdnjs.cloudflare.com/ajax/libs/react/16.3.2/umd/react.development.js')
        ctx.addScript(production ? [
          [
            'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.3.2/umd/react-dom.production.min.js', // 'https://cdnjs.cloudflare.com/ajax/libs/react/16.3.2/umd/react.development.js',
            'sha256-lrhKJaWYTDnqslOwj/B8fz6bqehISA64woQRLqBKDbA=', // 'sha256-s4xjpfNLyFo6uEJP3/OXxMoi8LZBCaB2weyDvhAbs1c=',
            'anonymous',
          ],
        ] : 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.3.2/umd/react-dom.development.js')

        ctx.addScript(production ? [
          [
            'https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.0/redux.min.js',
            'sha256-hfNRBJsmJ7BaeBvsxVPdVeDbdEVV/MFNBm4BRLc72OY=',
            'anonymous',
          ],
        ] : 'https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.0/redux.js')

        ctx.addScript(production ? [
          [
            'https://cdnjs.cloudflare.com/ajax/libs/react-redux/5.0.7/react-redux.min.js',
            'sha256-um7DcEns3J42qU41brDoZeZ1fAn2eHRtLOKLgMZ3UVE=',
            'anonymous',
          ],
        ] : 'https://cdnjs.cloudflare.com/ajax/libs/react-redux/5.0.7/react-redux.js')
        await next()
      }
    },
    use: true,
  },
}
