const production = process.env.NODE_ENV == 'production'

// {/* &nbsp;<a href="mailto:contact@adc.sh">contact@adc.sh</a> */}
// {/* <h1 className="font-effect-anaglyph">Art Deco Code</h1> */}

/**
 * @type {Koa.Middleware}
 */
export default async (ctx, next) => {
  ctx.setTitle('Art Deco Code: erte package')

  ctx.addCss('/index.css')

  ctx.Content = (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <h1>Erte package</h1>
        </div>
        <div className="col-sm">
          <p>
            Read and highlight differences between 2 strings.
            &nbsp;
            <a href="https://npmjs.org/package/erte">npm</a>
            &nbsp;
            <a href="https://github.com/artdecocode/erte">github</a>
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
