export default ({ list }) => {
  return (
    <div className="row" id="Tamara">
      <div className="col-xs-12">
        <div id="images">
          {list.map(({ url, title }, i) => {
            return (
              <div key={i} className={`preview-div s s${i}`}>
                <img className="preview" data-i={i} src={url} alt={title} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
