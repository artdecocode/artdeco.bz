/**
 * Break the result partition into rows by same height.
 * @param {{width: number}[]} p An array with objects which have width property
 * @returns {[][]} An array of arrays of items representing rows.
 */
const getRows = (p, key = 'height', images) => {
  const { arrays } = p.reduce(({ arrays = [], currentArray = null, current = null }, item, i) => {
    const it = images ? images[i] : item
    const val = item[key]
    const itm = { className: `s${i}`, ...it }
    if (currentArray && current === val) {
      currentArray.push(itm)
      const res = {
        arrays,
        currentArray,
        current,
      }
      return res
    } else {
      const ca = [itm]
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
