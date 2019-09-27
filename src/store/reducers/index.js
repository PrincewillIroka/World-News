import { combineReducers } from 'redux'
import newsSourceReducer from './news_source_reducer'
import hamburgerIconReducer from './hamburger_icon_reducer'

const reducer = combineReducers({
  newsSourceReducer: newsSourceReducer,
  hamburgerIconReducer: hamburgerIconReducer
})

export default reducer
