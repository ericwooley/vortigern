import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counterReducer, {ICounterState} from './modules/counter'
import starsReducer, {IStarsState} from './modules/stars'
const { reducer } = require('redux-connect')
export const reducers = {
  counterReducer,
  starsReducer
}

// Add question marks so that we don't have to replicate the whole state in the mocks
export interface IState {
  counter?: ICounterState,
  stars?: IStarsState
}
const rootReducer: Redux.Reducer = combineReducers({
  routing: routerReducer,
  counter: counterReducer.reducer,
  stars: starsReducer.reducer,
  reduxAsyncConnect: reducer
})

export default rootReducer
