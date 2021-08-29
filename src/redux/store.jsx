import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import newsReducer from './news-reducer';
import searchReducer from './search-reducer'
import popupReducer from './popup-reducer'

let reducers = combineReducers({
  newsPage: newsReducer,
  searchPage: searchReducer,
  popupPage: popupReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store