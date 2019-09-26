import { createStore } from 'redux'
import newsSourceReducer from './reducers/news_source_reducer'

const store = createStore(newsSourceReducer)

export default store
