$('.preview').mouseover(({ target }) => {
  const $this = $(target)
  const i = $this.data('i')
  const item = items[i]
  console.log(item)
})
$('.preview').mouseup(({ target }) => {
  const $this = $(target)
})
