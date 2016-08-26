import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counterReducer, {ICounterState} from './modules/counter'
import { starsReducer } from './modules/stars'
const { reducer } = require('redux-connect')
export const reducers = {
  counterReducer: counterReducer
}
export interface IState {
  counter: ICounterState
}

const rootReducer: Redux.Reducer = combineReducers({
  routing: routerReducer,
  counter: reducers.counterReducer.reducer,
  stars: starsReducer,
  reduxAsyncConnect: reducer
})

export default rootReducer
