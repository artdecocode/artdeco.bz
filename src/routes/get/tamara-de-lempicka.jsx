import rqt from 'rqt'
import { URLSearchParams } from 'url'
import { partitions, getCSS } from 'photo-partition'
import { exists, readJSON, writeJSON } from 'wrote'
import { resolve } from 'path'
import getRows from '../../get-rows'
import TamaraDeLempicka from '../../Components/TamaraDeLempicka'

const params = new URLSearchParams({
  artistUrl: 'tamara-de-lempicka',
  json: 2,
})
// {/* &nbsp;<a href="mailto:contact@adc.sh">contact@adc.sh</a> */}
// {/* <h1 className="font-effect-anaglyph">Art Deco Code</h1> */}

const DATA = resolve(__dirname, '../../data.json')

const getNData = (data, n) => {
  return data
    .filter(({ title }) => {
      return (title != 'Perspective') &&
        (title != 'Nude on a Terrace') &&
        (title != 'The Pink Shirt') &&
        (title != 'Maternity')
    })
    .slice(0, n)
}
/**
 * @type {object[]}
 */
let data
const getData = async (n = 20) => {
  if (data) {
    console.log('reading memory')
    return getNData(data, n)
  }
  const dataExists = await exists(DATA)
  if (dataExists) {
    console.log('reading %s', DATA)
    data = await readJSON(DATA)
    return getNData(data, n)
  }

  const url = `https://www.wikiart.org/en/App/Painting/PaintingsByArtist?${params}`
  console.log(url)
  const res = await rqt(url)
  const parsed = JSON.parse(res)

  await writeJSON(DATA, parsed, { space: 2 })
  data = parsed

  return getNData(data, n)
}

const Wrapper = ({ children, data }) => {
  const s = JSON.stringify(data).replace(/'/g, '\\\'')
  const a = <script dangerouslySetInnerHTML={{ __html: 'var process = { env: { NODE_ENV: "development" } }' }} />
  const b = <script dangerouslySetInnerHTML={{
    __html: `
  var items = JSON.parse('${s}')
`.trim(),
  }} />
  return (
    <div className="container">
      {children}
      {a}
      {b}
    </div>
  )
}

const getNullCss = (rows) => {
  let i = -1
  const m = rows.reduce((acc, row) => {
    // const { length } = row
    const totalWidth = row.reduce((a, { width }) => {
      return a + width
    }, 0)
    let totalW = 0
    const items = row.map(({ width }, j, { length: count }) => {
      i++
      let w = width / totalWidth * 100 - 0.03
      totalW += w
      if (j == count - 1) {
        const d = 100 - totalW
        // console.log('abc', d, w)
        w = w + d
      }
      // console.log(length, width, height)
      const s = `
.s${i} {
  width: ${w}%;
}`.trim()
      return s
    })
    return [...items, ...acc]
  }, [])
  return m.join('\n')
}


/**
 * @type {Koa.Middleware}
 */
export default async (ctx, next) => {
  const images = await getData(10)

  const p = partitions({
    1200: 1140,
    992: 960,
    768: 720,
    576: 540,
  }, images, 300)
  const css = getCSS(p)
  const rows = getRows(p[576], 'height')

  const nullCss = getNullCss(rows)

  ctx.addStyle(`
  img.preview {
    width: 100%;
    height: 100%;
  }

  .s {
    float: left;
  }
  `)
  ctx.addStyle(`
  .s.Selected {
    border: 10px solid white;
  }
  // .s.Selected::before {
  //   position: absolute;
  //   border: 1rem solid #00000087;
  //   left: 0;
  //   right: 0;
  //   top: 0;
  //   bottom: 0;
  //   content: "";
  // }
  `)
  ctx.addStyle(nullCss)
  ctx.addStyle(css)

  const list = images
    .map((image) => ({
      url: image.image,
      ...image,
    }))

  ctx.setTitle('Art Deco: Tamara de Lempicka')

  ctx.addCss('/index.css')

  ctx.Content = (
    <Wrapper data={list}>
      <div id="Tamara">
        <TamaraDeLempicka list={list} />
      </div>
    </Wrapper>
  )

  ctx.addScript('/scripts/tamara-de-lempicka.js')

  await next()
}
