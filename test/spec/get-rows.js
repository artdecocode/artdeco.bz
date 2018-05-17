import { deepEqual } from 'zoroaster/assert'
import getRows from '../../src/get-rows'

const T = {
  'returns a list of arrays'() {
    const w = height => ({ height })
    const h1 = w(20)
    const h2 = w(20)
    const h3 = w(20)
    const h4 = w(50)
    const h5 = w(50)
    const res = getRows([h1, h2, h3, h4, h5])
    deepEqual(res, [
      [h1, h2, h3],
      [h4, h5],
    ])
  },
}

export default T
