import cx from 'classnames'

export default ({ list, onSelect, selected, onDeselect }) => {
  const id = selected && selected.contentId
  return (
    <div className="row" id="Tamara">
      <div className="col-xs-12">
        <div id="images">
          {list.map((item, i) => {
            const { url, title, contentId } = item
            const Selected = id == contentId
            const className = cx({
              'preview-div': true,
              s: true,
              [`s${i}`]: true,
              Selected,
            })
            return (
              <div key={i} className={className}>
                <img className="preview" src={url} alt={title} onClick={() => {
                  if (Selected) {
                    onDeselect()
                  } else {
                    onSelect(item)
                  }
                }} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
