export default ({ list, onSelect }) => {
  return (
    <div className="row" id="Tamara">
      <div className="col-xs-12">
        <div id="images">
          {list.map((item, i) => {
            const { url, title } = item
            return (
              <div key={i} className={`preview-div s s${i}`}>
                <img className="preview" data-i={i} src={url} alt={title} onClick={() => {
                  console.log('img clicked', item)
                  onSelect(item)
                }} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
