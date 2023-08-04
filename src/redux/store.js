import { createStore, combineReducers } from 'redux'
import coutriesReducer from './reducers/countries'
import searchReducer from './reducers/search'

const reducers = combineReducers({
	countries: coutriesReducer,
	search: searchReducer,
})

const store = createStore(reducers);

export default store;