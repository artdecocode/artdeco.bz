import Tamara from './Tamara'
import StateInfo from './StateInfo'

export default ({ list, onSelect, onDeselect, selected }) => {
  return (
    <div>
      <Tamara list={list} onSelect={onSelect} onDeselect={onDeselect} selected={selected} />
      <div className="row" style={{ paddingTop: 20 }}>
        <div className="col">
          <h1>Art Deco: Tamara de Lempicka</h1>
          <a href="https://artdeco.bz">by Art Deco Code</a>
        </div>

        <div className="col">
          <h2>Picture Information</h2>
          <div id="info">
            <StateInfo object={selected} />
          </div>
        </div>
        {/* <div className="col">
          <div id="json">
            <JSONList list={list} />
          </div> */}
          {/* Choose an image to embed metadata to it. */}
        {/* </div> */}
      </div>

      <div className="row">
        <div className="col">
          <p>
            This page is generated with <a href="https://npmjs.org/package/photo-partition">photo-partition package</a>.
            <img src="/img/images.jpeg" alt="painting" />
          </p>
        </div>
      </div>
    </div>
  )
}
