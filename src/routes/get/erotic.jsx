const production = process.env.NODE_ENV == 'production'

// {/* &nbsp;<a href="mailto:contact@adc.sh">contact@adc.sh</a> */}
// {/* <h1 className="font-effect-anaglyph">Art Deco Code</h1> */}

/**
 * @type {Koa.Middleware}
 */
export default async (ctx, next) => {
  ctx.setTitle('Art Deco Code: erotic package')

  ctx.addCss('/index.css')

  ctx.Content = (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <h1>Erotic package</h1>
        </div>
        <div className="col-sm">
          <p>
            Anchor asynchronous error stacks to where you want them to be.
            &nbsp;
            <a href="https://npmjs.org/package/erotic">npm</a>
            &nbsp;
            <a href="https://github.com/artdecocode/erotic">github</a>
          </p>
        </div>
        <div className="col-sm">
          <a href="https://artdeco.bz">by Art Deco Code</a>
        </div>
      </div>
    </div>
  )

  // ctx.addScript('/index.js')

  await next()
}
