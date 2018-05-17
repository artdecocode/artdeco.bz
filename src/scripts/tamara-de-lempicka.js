/* eslint-env browser */
/* global ReactDOM, Redux, ReactRedux */
// import Tamara from '../Components/Tamara.jsx'
// import JSONList from '../Components/JSONList.jsx'
// import StateInfo from '../Components/StateInfo.jsx'
const { hydrate } = ReactDOM
const { createStore } = Redux
const { connect, Provider } = ReactRedux
import TamaraDeLempicka from '../Components/TamaraDeLempicka.jsx'
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
