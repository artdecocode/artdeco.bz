import Tamara from './Tamara'

export default ({ list }) => {
  return (
    <div className="container">
      <div id="tmr">
        <Tamara list={list} />
      </div>

      <div className="row" style={{ paddingTop: 20 }}>
        <div className="col">
          <h1>Art Deco: Tamara de Lempicka</h1>
          <a href="https://artdeco.bz">by Art Deco Code</a>
        </div>

        <div className="col">
          <h2>Image Information</h2>
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">What</th>
                <td>Value</td>
              </tr>
              <tr>
                <th scope="row">What2</th>
                <td>Value2</td>
              </tr>
            </tbody>
          </table>
          {/* <pre dangerouslySetInnerHTML={{ __html: s }} /> */}

        </div>
        <div className="col">
          Choose an image to embed metadata to it.
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p>
            This page is generated with <a href="https://npmjs.org/package/photo-partition">photo-partition package</a>.
            <img src="/img/images.jpeg" alt="painting" />
          </p>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: 'var process = { env: { NODE_ENV: "development" } }' }}>
      </script>
      <script dangerouslySetInnerHTML={{ __html: `
        // var process = { env: { NODE_ENV: "development" } }
        var items = JSON.parse('${JSON.stringify(list).replace('\'', '\\\'')}')
        console.log(items)
      ` }}>
      </script>
    </div>
  )
}
