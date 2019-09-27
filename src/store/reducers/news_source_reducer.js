import * as Actions from '../actions'

const initialState = {
  newsSource: 'abc-news'
}

const newsSourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGENEWSSOURCE: {
      return {
        ...state,
        newsSource: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export default newsSourceReducer
