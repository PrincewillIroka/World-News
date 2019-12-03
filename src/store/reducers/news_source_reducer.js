import * as Actions from '../actions'

const initialState = {
  newsSource: 'abc-news',
  isLoading: true,
  activeNewsSource: [],
  tabData: [],
  tabDataClone: [],
  url: 'sources'
}

const newsSourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGENEWSSOURCE: {
      return {
        ...state,
        newsSource: action.payload
      }
    }
    case Actions.CHANGEISLOADING: {
      return {
        ...state,
        isLoading: action.payload
      }
    }
    case Actions.CHANGEACTIVENEWSSOURCE: {
      return {
        ...state,
        activeNewsSource: action.payload
      }
    }
    case Actions.POPULATETABDATA: {
      return {
        ...state,
        tabData: action.payload,
        tabDataClone: action.payload
      }
    }
    case Actions.SEARCHTABDATA: {
      const newTabData = state.tabDataClone.filter(tdc => tdc.title.toLowerCase().startsWith(action.payload))
      return {
        ...state,
        tabData: newTabData
      }
    }
    case Actions.RESETTABDATA: {
      return {
        ...state,
        tabData: state.tabDataClone
      }
    }
    case Actions.CHANGEURL: {
      return {
        ...state,
        url: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export default newsSourceReducer
