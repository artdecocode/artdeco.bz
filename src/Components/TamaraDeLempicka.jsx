import Tamara from './Tamara'
import Information from './Information'

const Info = ({ selected }) => {
  if (!selected) return 'Please select a picture for description.'
  return (<Information {...selected} />)
}

export default ({ list, onSelect, onDeselect, selected }) => {
  return (
    <div>
      <Tamara list={list} onSelect={onSelect} onDeselect={onDeselect} selected={selected} />

      <div className="row" style={{ paddingTop: 20 }}>
        <div className="col">
          <Info selected={selected} />
        </div>
        <div className="col">
          <h1>Art Deco: Tamara de Lempicka</h1>
          <blockquote>
            <p className="mb-0">
              The intriguing events from the life of Tamara de Lempicka often overshadow the significant contribution she made to the development of modern art. Loosely defined as an ‘Art Deco’ artist, de Lempicka revolutionized the portrait style; more specifically, the role of subject as a liberated and independent woman. Her work is difficult to classify and features elements of traditional Art Deco (such as the nude female body) but also Cubism and other stylistic movements of the early 20th century. Embracing the ‘synthetic cubist’ method with small geometric planes of strong color, the trained artist created compelling works which are immediately recognizable. Yet more importantly, De Lempicka challenged the limitations imposed on the art and life of a woman.
            </p>
            <footer className="blockquote-footer">
              Helen Brady for <cite title="Culture Trip"><a href="https://theculturetrip.com/europe/poland/articles/art-deco-icon-the-alluring-mystique-of-tamara-de-lempicka/">Culture Trip</a></cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
