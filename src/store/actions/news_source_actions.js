export const CHANGENEWSSOURCE = 'CHANGENEWSSOURCE'
export const CHANGEISLOADING = 'CHANGEISLOADING'
export const CHANGEACTIVENEWSSOURCE = 'CHANGEACTIVENEWSSOURCE'
export const POPULATETABDATA = 'POPULATETABDATA'
export const SEARCHTABDATA = 'SEARCHTABDATA'

export const handleNewsSource = newsSource => ({
  type: CHANGENEWSSOURCE,
  payload: newsSource
})

export const handleIsLoading = isLoading => ({
  type: CHANGEISLOADING,
  payload: isLoading
})

export const handleActiveNewsSource = activeNewsSource => ({
  type: CHANGEACTIVENEWSSOURCE,
  payload: activeNewsSource
})

export const populateTabData = data => ({
  type: POPULATETABDATA,
  payload: data
})

export const searchTabData = value => ({
  type: SEARCHTABDATA,
  payload: value
})
