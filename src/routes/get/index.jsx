const production = process.env.NODE_ENV == 'production'

/**
 * @type {Koa.Middleware}
 */
export default async (ctx, next) => {
  ctx.setTitle('Art Deco Code: Node.JS development company')

  ctx.addCss('/index.css')

  ctx.Content = <div className="container">
    <div id="menu" />
    <div id="info">
      {/* <h1 className="font-effect-anaglyph">Art Deco Code</h1> */}
      <h2 className="font-effect-anaglyph" id="about">Art Deco</h2>
      <p>Act Deco is a modernistic style.</p>
      <h2 className="font-effect-anaglyph" id="node">Node.JS &amp; Cloud</h2>
      <p>Node.JS is a runtime for fast application deployed in cloud.</p>
      <h2 className="font-effect-anaglyph" id="packages">Open Source Packages</h2>
      <p>We have contributed a number of packages to the community.</p>
      <h2 className="font-effect-anaglyph" id="contact">Contact</h2>
      <p>
        Please get in touch for your next Node.JS in Cloud project.
        {/* &nbsp;<a href="mailto:contact@adc.sh">contact@adc.sh</a> */}
      </p>
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
