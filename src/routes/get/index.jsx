const production = process.env.NODE_ENV == 'production'

/**
 * @type {Koa.Middleware}
 */
export default async (ctx, next) => {
  ctx.setTitle('Art Deco Code: Node.JS development company')

  ctx.addCss('/index.css')

  ctx.Content = <div className="container">
    <div id="menu" />
    <div className="row" id="info">
      <div className="col">
        <h2 className="font-effect-anaglyph" id="about">Art Deco</h2>
        <p>Act Deco is a <i>moderne</i> style.</p>
      </div>
      {/* <h1 className="font-effect-anaglyph">Art Deco Code</h1> */}
      <div className="col">
        <h2 className="font-effect-anaglyph" id="node">Node.JS &amp; Cloud</h2>
        <p>Node.JS is a runtime for fast application deployed in cloud.</p>
      </div>
      <div className="col">
        <h2 className="font-effect-anaglyph" id="packages">Open Source Packages</h2>
        <p>We have contributed a number of packages to the community.</p>
      </div>
      <div className="col">
        <h2 className="font-effect-anaglyph" id="contact">Contact</h2>
        <p>
          Please get in touch for your next Node.JS in Cloud project.
          {/* &nbsp;<a href="mailto:contact@adc.sh">contact@adc.sh</a> */}
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h2>Work</h2>
        Below are examples of work.
        <div className="row">
          <div className="col">
            <a href="/tamara-de-lempicka">
              <h3 className="font-effect-anaglyph" id="contact">Tamara De Lempicka Gallery</h3>
            </a>
            <p>
              <a href="/tamara-de-lempicka">
                <img src="/img/images.jpeg" alt="Tamara De Lempicka" />
              </a>
              <br />
              This is an example of the <a href="/idio">idio</a> package for server-side React rendering and client-side hydration with a Redux store.
              {/* &nbsp;<a href="mailto:contact@adc.sh">contact@adc.sh</a> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  ctx.addScript(production ? [[
    'https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.5.1/snap.svg-min.js',
    'sha256-oI+elz+sIm+jpn8F/qEspKoKveTc5uKeFHNNVexe6d8=',
    'anonymous',
  ]] : 'SnapSVGAnimator/js/vendor/snap.svg/snap.svg-min.js')
  ctx.addScript('SnapSVGAnimator/js/SnapSVGAnimator.min.js')

  ctx.addScript('/index.js')

  await next()
}
