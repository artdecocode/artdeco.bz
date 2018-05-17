export default ({ object }) => {
  if (object == null) return <div>Select an image to display data.</div>
  return (
    <table className="table">
      <tbody>
        {Object.keys(object).map(key => {
          return (
            <tr key={key}>
              <th scope="row">{key}</th>
              <td>{object[key]}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
