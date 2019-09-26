export const CHANGENEWSSOURCE = 'CHANGENEWSSOURCE'

export const handleNewsSource = newsSource => ({
  type: CHANGENEWSSOURCE,
  payload: newsSource
})
