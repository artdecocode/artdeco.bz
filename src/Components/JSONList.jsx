export default ({ list }) => {
  return (
    <div>
      {list.map((item, i) => {
        return (
          <pre key={i} dangerouslySetInnerHTML={{ __html: JSON.stringify(item, null, 2) }} />
        )
      })}
    </div>
  )
}
