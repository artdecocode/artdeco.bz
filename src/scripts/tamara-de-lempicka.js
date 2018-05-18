/* global ReactDOM, Redux, ReactRedux */
const { hydrate } = ReactDOM
const { createStore } = Redux
const { connect, Provider } = ReactRedux
import TamaraDeLempicka from '../Components/TamaraDeLempicka'
import r from '../reducer'

const store = createStore(r)

const ConnectedTamaraDeLempicka = connect(
  ({ items, selected }) => {
    return {
      list: items,
      selected,
    }
  },
  dispatch => ({
    onSelect: object => {
      dispatch({ type: 'SELECTED', selected: object })
    },
    onDeselect: () => {
      dispatch({ type: 'SELECTED', selected: null })
    },
  }),
)(TamaraDeLempicka)

const C = (
  <Provider store={store}>
    <ConnectedTamaraDeLempicka />
  </Provider>
)

hydrate(C, document.getElementById('Tamara'))
