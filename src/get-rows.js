/**
 * Break the result partition into rows by same height.
 * @param {{width: number}[]} p An array with objects which have width property
 * @returns {[][]} An array of arrays of items representing rows.
 */
const getRows = (p, key = 'height', images) => {
  const { arrays } = p.reduce(({ arrays = [], currentArray = null, current = null }, item, i) => {
    const it = images ? images[i] : item
    const val = item[key]
    if (currentArray && current === val) {
      currentArray.push(it)
      const res = {
        arrays,
        currentArray,
        current,
      }
      return res
    } else {
      const ca = [it]
      arrays.push(ca)
      const res = {
        arrays,
        currentArray: ca,
        current: val,
      }
      return res
    }
  }, {})
  return arrays
}

export default getRows
