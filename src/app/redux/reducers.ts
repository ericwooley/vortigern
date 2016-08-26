import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counterReducer, {ICounterState} from './modules/counter'
import starsReducer, {IStarsState} from './modules/stars'
const { reducer } = require('redux-connect')
export const reducers = {
  counterReducer: counterReducer,
  starsReducer: starsReducer
}
export interface IState {
  counter: ICounterState,
  stars: IStarsState
}

const rootReducer: Redux.Reducer = combineReducers({
  routing: routerReducer,
  counter: counterReducer.reducer,
  stars: starsReducer.reducer,
  reduxAsyncConnect: reducer
})

export default rootReducer
