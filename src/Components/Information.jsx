export default ({ title, description, completitionYear }) => {
  return (
    <div>
      <h4>{title}</h4>
      {completitionYear &&
        <p>{completitionYear}</p>
      }
      {description &&
        description.split('\n').map(d => <p>{d}</p>)
      }
    </div>
  )
}
